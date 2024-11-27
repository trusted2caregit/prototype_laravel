# prototype_laravel

## Windows 10
To run this project you must have the following packages installed on your machine.
```
$> choco list
Chocolatey v2.2.2
chocolatey 2.2.2
chocolatey-compatibility.extension 1.0.0
chocolatey-core.extension 1.4.0
chocolatey-windowsupdate.extension 1.0.5
composer 6.3.0
git 2.44.0
git.install 2.44.0
git-lfs 3.5.1
git-lfs.install 3.5.1
mariadb 11.5.1
mariadb.install 11.5.1
nodejs 23.3.0
nodejs.install 23.3.0
php 8.3.14
unzip 6.0.0
vcredist140 14.42.34433
```
### Chocolatey Package Manager
To install packages on Windows safely, you must first install `choco`. You do this by opening a **Windows PowerShell** as an **Administrator**.
![image](https://github.com/user-attachments/assets/e875534b-d44f-41a4-a266-62efa9308708)

In this window, copy and paste the following:
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Reopen the Windows Powershell as an Administrator and test `choco` by querying its version
```
choco -v
```
Example:
![image](https://github.com/user-attachments/assets/94d6b1c2-63d0-4fce-adf8-2ce7678896f3)

### Installing all required packages
You need to install `git`, `git-lfs`, `mariadb`, `php`, `composer`. To do that with `choco`, do the following:
```
choco install git 
choco install git-lfs
choco install mariadb
choco install php --version=8.1.12
choco install composer
```

Reopen the Windows Powershell as an Administrator and test each package by querying their versions. On my machine, this is what I have:
```
$> php -v
PHP 8.1.12 (cli) (built: Nov 19 2024 15:53:36) (NTS Visual C++ 2019 x64)
Copyright (c) The PHP Group
Zend Engine v4.3.14, Copyright (c) Zend Technologies

$> mariadb --version
C:\Program Files\MariaDB 11.5\bin\mariadb.exe from 11.5.1-MariaDB, client 15.2 for Win64 (AMD64), source revision 65079ece42f383bdeb9b3f913a833a6f0123919d

$> node -v
v23.3.0

$> npm -v
10.9.0
```

Note: `npm` might not work. Instead of the expected output, you'll probably get an error stating that the `Execution-Policy` does not allow unsigned scripts from running. About 99% of the stuff out there is unsigned, including `npm`. So set the execution policy to `Unrestricted` for now:
```
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

Now with all packages installed, you can install the Laravel installer using `composer`.
```
composer global require laravel/installer
```

At this point, it is likely this will fail with some wierd stack trace errors, likely around the absence of certain required PHP extensions. If that is the case, you must edit your `php.ini` file and uncomment the `fileinfo` and `pod_mysql` extensions. 
```
cd \tools\php81
notepad php.ini
```
Search for `;extension` and you will come to a list of commented out extensions! Example:
![image](https://github.com/user-attachments/assets/0bea58f3-2bbc-4846-9346-36900be0a017)

Another example is:
```
;extension=ldap
extension=curl
;extension=ffi
;extension=ftp
extension=fileinfo
;extension=gd
;extension=gettext
;extension=gmp
;extension=intl
;extension=imap
extension=mbstring
;extension=exif      ; Must be after mbstring as it depends on it
;extension=mysqli
;extension=oci8_12c  ; Use with Oracle Database 12c Instant Client
;extension=oci8_19  ; Use with Oracle Database 19 Instant Client
;extension=odbc
extension=openssl
;extension=pdo_firebird
extension=pdo_mysql
;extension=pdo_oci
;extension=pdo_odbc
;extension=pdo_pgsql
;extension=pdo_sqlite
;extension=pgsql
;extension=shmop
```
Notice how `curl`, `fileinfo`, `mbstring`, `openssl`, and `pdo_mysql`. You will need to uncomment `fileinfo` and `pdo_mysql` yourself, otherwise the other extensions will already be uncommented. 
After changing this file, save it, and go back to the Windows Powershell and try to install the `laravel/installer` again and this time it will work.

At this point, you are ready to create a basic Laravel project, or pull this repository and run it.



