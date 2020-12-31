# Intro to Powershell

## Things to know

### Execution Policy

By default Powershell is secure a philosophy that means that doublecliking a Powershell script in Windows Explorer won't execute the script.

Powershell has four execution policies - these govern how a script is executed.

+ Restricted
+ AllSigned
+ RemoteSigned
+ Unrestricted

```powershell
Get-ExecutionPolicy
```

```powershell
Set-ExecutionPolicy Restricted
```

```powershell
Set-ExecutionPolicy Unrestricted
```

```powershell
Set-ExecutionPolicy RemoteSigned
```
