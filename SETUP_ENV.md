# Setup Environment

## 1. Required Packages
To run this project, you must have the following packages installed.

1. git 
2. unzip
3. composer 6.3.0
4. mariadb 10.4+
5. nodejs 22.11.0+
6. php 8.1+

## 2. Setup Linux
Anyone that uses Linux should know how to install these packages and set up their environment using the native package manager. 

## 3. Setup Windows 10 (Chocolatey)
Windows is not quite so straight forward. It is important to install a suitable package manager and install required packages expressly throught this tool. You need the ability to update package versions and tailor your environment to the needs of the project. Chocolatey is the recommended option.

### 3.1. Install Chocolatey
See: https://chocolatey.org/install

1. Open Windows Powershell as an Administrator.
![image](https://github.com/user-attachments/assets/e875534b-d44f-41a4-a266-62efa9308708)
2. Run the following command
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
3. Wait for the command to finish.
4. To verify, you must reopen the Windows Powershell in Administrator mode and run:
```
choco -v
```

### 3.2. Installed required packages
You need to install `unzip`, `git`, `mariadb`, `php`, `composer` and `nodejs-lts`. To do that with `choco`, do the following:
```
choco install unzip
choco install git 
choco install mariadb
choco install php
choco install composer
choco install nodejs-lts
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
v22.11.0

$> npm -v
10.9.0

$> composer --version
Composer version 2.8.3 2024-11-17 13:13:04
PHP version 8.1.12 (C:\tools\php83\php.exe)
Run the "diagnose" command to get more detailed diagnostics output.
```

### 3.3. Resolving `npm` issues
Note: `npm` might not work. Instead of the expected output, you'll probably get an error stating that the `Execution-Policy` does not allow unsigned scripts from running. About 99% of the stuff out there is unsigned, including `npm`. So set the execution policy to `Unrestricted` for now and then try running `npm -v` again. It will now work!:
```
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

## 4. Setting up PHP for Laravel
There are a few PHP extensions that need to be activated and the Laravel Installer needs to be installed. The following can be done in any environment that has a valid `php` and `composer` package installed.

First find where `php.ini` is located on your system for your current PHP version by running the following command:
```
php --ini
```
The output might look like the following where the PHP INI file location is specified:
```
Configuration File (php.ini) Path:
Loaded Configuration File:         C:\tools\php83\php.ini
Scan for additional .ini files in: (none)
Additional .ini files parsed:      (none)
```
Open `php.ini` in a text editor and search for `;extension` until you come to a list of commented out extensions. For example:
![image](https://github.com/user-attachments/assets/0bea58f3-2bbc-4846-9346-36900be0a017)

Notice how `curl`, `mbstring`, and `openssl` are all uncommented. To enable a basic Laravel application with a MariaDb backend, you will need to uncomment `fileinfo` and `pdo_mysql`. After changing this file, save it, and go back to the Windows Powershell.

Now you can install the Laravel installer using `composer`:
```
composer global require laravel/installer
```

## 5. Testing Laravel
You can very quickly create a basic Laravel project to ensure your Laravel installation works. Go to a desired workspace directory on your machine and run the `laravel new` command.
```
laravel new my-test-project
```
This will start up the Laravel Project wizard:
![image](https://github.com/user-attachments/assets/fa6c511a-9808-40f4-8928-08c7bec64f9e)

Select `none` for starter kit.
Select `PHPUnit` for test kit.

It will install all necessary packages for Laravel into a new project directory called `my-test-project`. Part way through the install, it will ask you what database do you want to use, select `mariadb`. It will then ask if you want to migrate default database configurations. Select `yes`.
Example:
![image](https://github.com/user-attachments/assets/f3c61059-0c8c-442b-a079-76e147ad09ee)

Once the database is migrated, the new project wizard will complete and you can run the server. Navigate to the directory and start the server.
```
php artisan serve
```
Example:
![image](https://github.com/user-attachments/assets/0562c0aa-0472-4749-99bb-da781aea0ca8)

Open a browser, and navigate to `http://127.0.0.1:8000`. A basic Laravel webpage will appear.
Result:
![image](https://github.com/user-attachments/assets/38609100-72d9-498f-9084-4b204bc5b9f2)

If the website comes up successfully, then you have successfully installed all of the required packages include Laravel, and can now proceeed to checking out this repository and running this project.
