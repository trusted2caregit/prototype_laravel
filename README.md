# How to setup your environment for Laravel

## Windows 10
To run this project you must have the following packages installed on your machine. If you already have `git`, `node`, `npm` and anything else in this list installed on your system using installers (not choco), I highly recommend uninstalling that stuff and cleaning it all off. You really should use a package manager for this kind of stuff.

Here is a list of packages I have installed:
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

**Reopen the Windows Powershell as an Administrator** and test `choco` by querying its version
```
choco -v
```
Example:
![image](https://github.com/user-attachments/assets/94d6b1c2-63d0-4fce-adf8-2ce7678896f3)

### Installing all required packages
You need to install `git`, `git-lfs`, `mariadb`, `php`, `composer`. To do that with `choco`, do the following:
```
choco install unzip
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

Note: `npm` might not work. Instead of the expected output, you'll probably get an error stating that the `Execution-Policy` does not allow unsigned scripts from running. About 99% of the stuff out there is unsigned, including `npm`. So set the execution policy to `Unrestricted` for now and then try running `npm -v` again. It will now work!:
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
;extension=fileinfo
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
;extension=pdo_mysql
;extension=pdo_oci
;extension=pdo_odbc
;extension=pdo_pgsql
;extension=pdo_sqlite
;extension=pgsql
;extension=shmop
```
Notice how `curl`, `mbstring`, and `openssl` are all uncommented. You will need to uncomment `fileinfo` and `pdo_mysql` yourself, otherwise the other extensions will already be uncommented. 
After changing this file, save it, and go back to the Windows Powershell and try to install the `laravel/installer` again and this time it will work.

At this point, you are ready to create a basic Laravel project, or pull this repository and run it.

## Setup GIT (WIP)
Go to the `.ssh` folder.
```
$> cd ~/.ssh
```

Generate key files. Do not set password and do not override file name. Set everything to default. The algorithm used will be ED25519:
```
$> ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
Now the `.ssh` folder will contain the following files:
```
$> ls
-a----          5/2/2024  10:25 AM            411 id_ed25519
-a----          5/2/2024  10:25 AM            103 id_ed25519.pub
```
The SSH agent on your machine must be configured and started before we can use it to manage your private key.
```
$> Get-Service -Name ssh-agent | Set-Service -StartupType Manual
$> Start-Service ssh-agent
```
Now you can add the private key:
```
$> ssh-add c:/Users/YOU/.ssh/id_ed25519
```

Now you need to add the public key to your GitHub account.
Log into GitHub, go to your Settings and click on SSH and GPG keys.
Under the Authenticate Keys section, Click "New SSH key" and copy the contents of your public file into the Key field. After giving your key an appropriate title, click on Add SSH Key.

How do you copy the contents of the public key file? The following command copies the key file to the clipboard.
```
$> clip < ~/.ssh/id_ed25519.pub
```

Now you can clone a repository.

It is recommended to create a general git workspace directory. You can do it the following way.
```
$> cd ~/Documents
$> mkdir git
$> cd ~/Documents/git
```
Now you can clone a repository.
```
$> git clone git@github.com:trusted2caregit/prototype_laravel.git
```
The repository will be cloned so long as you have access to it.

## Test Laravel
You can either clone this repository, or you can create your own project. This section will tell you how to set up a project yourself using the Laravel Installer.

### Clone this repo
To get started, just clone this repo. This requires all packages to be installed, and for `github` access to be setup. Now you need to create a workspace and clone the repository.

Note: I simply created a `git` folder in my `Documents` folder and all of my GIT projects go there.
```
cd ~/Documents/git
git clone git@github.com:trusted2caregit/prototype_laravel.git
```
Now navigate into the directory and run a Composer update. Composer update takes a few minutes to complete.
```
cd prototype_laravel
composer update
```
Example:
![image](https://github.com/user-attachments/assets/d7517d45-1159-44d5-a642-aa1e87c7043e)

Once, the update completes, you can start the server and then open your browser and navigate to `http://127.0.0.1:8000`:
```
php artisan serve
```
![image](https://github.com/user-attachments/assets/e633b34a-3122-45c7-b581-d810bb8a8fa6)

Result:
![image](https://github.com/user-attachments/assets/38609100-72d9-498f-9084-4b204bc5b9f2)

### Create a new Laravel Project
Open up a regular Windows Poweershell and navigate to your workspace and create a new project. For example:
```
cd ~/Documents/dev-workspace
laravel new my-test-project
```
This will start the New Project Wizard. You can call your project whatever you want, but in this case we called it `my-test-project`.

Example:
![image](https://github.com/user-attachments/assets/fa6c511a-9808-40f4-8928-08c7bec64f9e)

Select `none` for starter kit.
Select `PHPUnit` for test kit.

It will install all necessary packages for Laravel into a new project directory called `my-test-project`. Part way through the install, it will ask you what database do you want to use, select `mariadb`. It will then ask if you want to migrate default database configurations. Select `yes`.
Example:
![image](https://github.com/user-attachments/assets/f3c61059-0c8c-442b-a079-76e147ad09ee)

Once the database is migrated, you can run the server. Navigate to the directory and start the server.
```
cd my-test-project
php artisan serve
```
Example:
![image](https://github.com/user-attachments/assets/0562c0aa-0472-4749-99bb-da781aea0ca8)

Open a browser, and navigate to `http://127.0.0.1:8000`. A basic Laravel webpage will appear. You now have the most basic Laravel project setup. From here you can add react capabilities using Inertia and/or other plugins.

Result:
![image](https://github.com/user-attachments/assets/38609100-72d9-498f-9084-4b204bc5b9f2)



