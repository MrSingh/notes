$MyFiles=get-childitem -path d:\backUps\* -include *.png,*.jpeg,*.gif,*.jpg,*.psd,*.bmp, *.avi, *.nef

ForEach($File in $MyFiles)
{
$fYear=$File.LastWriteTime.Year
$fMonth="{0:00}" -f $file.LastWriteTime.Month

$PathExists=Test-Path $fYear
if($PathExists -eq $false) { mkdir $fYear | out-null }

$PathExists=Test-path $fYear\$fMonth
if($PathExists -eq $false) { mkdir $fYear\$fMonth | out-null }

write-host "Moving $File to $fYear\$fMonth" -ForegroundColor Green
move-item $file $fYear\$fMonth
}