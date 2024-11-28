# Setup GIT (WIP)
## 1. Introduction
These instructions will work in any OS with SSH and SSH-AGENT installed. The aim is to provide you with credentials to access and update repositories in the `trusted2care` organization in GitHub.

## Generate an SSH Key
Go to the `.ssh` folder.
```
$> cd ~/.ssh
```
Generate key files. Do not set password and do not override file name. Set everything to default. The algorithm used will be ED25519:
```
$> ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
Now the `.ssh` folder will contain the following files. On older systems you will see `id_rsa` instead of `id_ed25519`. That's fine:
```
-a----          5/2/2024  10:25 AM            411 id_ed25519
-a----          5/2/2024  10:25 AM            103 id_ed25519.pub
```
The SSH agent on your machine must be configured and started before we can use it to manage your private key. In Windows, you must explicitly activate it:
```
$> Get-Service -Name ssh-agent | Set-Service -StartupType Manual
$> Start-Service ssh-agent
```
I'm not sure if you have to do this in Linux. Either way, easy enough to Google it.

Now you can add the private key to the SSH Agent:
```
$> ssh-add c:/Users/YOU/.ssh/id_ed25519
```

Now you need to add the public key to your GitHub account.
1. Log into GitHub.
2. Go to your Settings
3. Click on SSH and GPG keys.
4. Click `New SSH Key`.
5. Provide a suitable title in the title field.
6. Copy the contents of your pub file into the key field.
7. Click `Add SSH Key`.
   
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
