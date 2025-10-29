# Save as list-untracked.ps1

$untracked = git ls-files --others --exclude-standard
$results = @()

foreach ($path in $untracked) {
    if (Test-Path $path) {
        $item = Get-Item $path
        if ($item.PSIsContainer) {
            $size = (Get-ChildItem $path -Recurse -File | Measure-Object -Property Length -Sum).Sum
        } else {
            $size = $item.Length
        }
        $results += [PSCustomObject]@{
            File = $path
            SizeMB = [math]::Round($size / 1MB, 2)
        }
    }
}

$results | Sort-Object SizeMB -Descending | Select-Object -First 20
