# Scent Bazaar - IndexNow Automation Multi-Engine Submission
# This script automatically reads your sitemap and notifies Bing, Yandex, and other search engines.

$key = "9a44eeb73ad8451daf4d3d10bcbf3a55"
$hostName = "scentbazaar.co"
$keyLocation = "https://$hostName/$key.txt"
$sitemapPath = Join-Path $PSScriptRoot "sitemap.xml"

Write-Host "`n🚀 Starting IndexNow Submission for $hostName..." -ForegroundColor Cyan

if (-not (Test-Path $sitemapPath)) {
    Write-Host "❌ Error: sitemap.xml not found at $sitemapPath" -ForegroundColor Red
    exit
}

# Extract URLs and Update Lastmod from sitemap.xml
Write-Host "📂 Reading and Updating sitemap..." -ForegroundColor Gray
[xml]$sitemap = Get-Content $sitemapPath
$today = Get-Date -Format "yyyy-MM-dd"

# Update all lastmod dates to today
$sitemap.urlset.url | ForEach-Object { 
    if ($_.lastmod -ne $null) { 
        $_.'lastmod' = "$today" 
    }
}
$sitemap.Save($sitemapPath)

$urlList = $sitemap.urlset.url.loc
Write-Host "✅ Sitemap updated with today's date ($today)." -ForegroundColor Green
Write-Host "🔗 Found $($urlList.Count) URLs to submit." -ForegroundColor Green

# Prepare JSON Payload
$payload = @{
    host = $hostName
    key = $key
    keyLocation = $keyLocation
    urlList = $urlList
} | ConvertTo-Json

# Submission Endpoints (IndexNow common hubs)
$endpoints = @(
    "https://api.indexnow.org/IndexNow",
    "https://www.bing.com/IndexNow"
)

foreach ($url in $endpoints) {
    Write-Host "`n📡 Submitting to $url..." -ForegroundColor Cyan
    try {
        $response = Invoke-RestMethod -Uri $url -Method Post -Body $payload -ContentType "application/json; charset=utf-8"
        Write-Host "✅ Success! Search engines notified." -ForegroundColor Green
    } catch {
        Write-Host "⚠️ Submission to $url failed: $($_.Exception.Message)" -ForegroundColor Yellow
    }
}

Write-Host "`n✨ All done! Your website is now synced with search engines." -ForegroundColor Green
Write-Host "Check Bing Webmaster Tools in 24 hours to see the results.`n" -ForegroundColor Gray


