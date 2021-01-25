<#

Organise Nikon Raw Files
------------------------

Execute Steps

+ Confirm Operation
+ Create Raw picture Folder
+ Rename if Exists
+ Delete Empty folders

@ToDo - 

#>

# Confirm that you would liketo go ahead

if ($Confirm) {

    Clear-Host
    Write-Host "This script will organize your Nikon(.NEF Raw files) files at <$Path> and all subfolders."
    Write-Host "Files will be moved to a folder called Raw and folder named after the year and month the file was last written."
    Write-Host "This operation cannot be easily undone."
    Write-Host ""
    <#
    if ($RenameIfExists -eq $true ) { $action = "renamed" } else { $action = "skipped" }
    Write-Host "Existing files at destination will be $action."
    if ($RemoveEmptyFolders -eq $true) { Write-Host "Empty folders after the operation will be removed automatically." }
    Write-Host ""
    Write-Host -ForegroundColor Yellow -NoNewline "Are you sure you want to proceed (Y/N)? "

    $Answer = Read-Host
    if ($Answer.ToUpper() -ne "Y") {
        ShowError("User did not confirm the operation")
    }
    #>
}
