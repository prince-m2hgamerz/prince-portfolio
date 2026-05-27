$urls = @(
  'http://localhost:5182/blog/qr-ordering-system/',
  'http://localhost:5182/blog/telecloud-telegram-storage/',
  'http://localhost:5182/blog/edge-apis-cloudflare-workers-hono/',
  'http://localhost:5182/blog/how-much-does-a-website-cost/',
  'http://localhost:5182/blog/how-to-hire-a-web-developer/'
)
$results = @()
foreach ($u in $urls) {
  try {
    $c = (Invoke-WebRequest $u -UseBasicParsing -TimeoutSec 5).Content
    $hasH2 = ($c -match '<h2>')
    $hasJsonLd = ($c -match '"@type":\s*"BlogPosting"')
    $name = ($u -split '/')[-2]
    $results += [PSCustomObject]@{
      Post = $name
      H2 = if ($hasH2) { 'YES' } else { 'NO' }
      Schema = if ($hasJsonLd) { 'YES' } else { 'NO' }
      Bytes = $c.Length
    }
  } catch {
    $results += [PSCustomObject]@{
      Post = ($u -split '/')[-2]
      H2 = 'ERR'
      Schema = 'ERR'
      Bytes = 0
    }
  }
}
$results | Format-Table -AutoSize | Out-String -Width 120 | Set-Content -Path .tmp_out.txt -Encoding utf8
