## Installing git
1. Install git (https://git-scm.com/download/win) and github from CLI (with MSI Installer https://github.com/cli/cli/releases/tag/v2.54.0)
2. Install gitlens (VS Code extension)
3. Login through CLI with github. https://cli.github.com/manual/
    gh auth login

---

## Creating a local repository and add commits
LOCAL
4. Initialize a git repository in a random folder with some archives:
```bash
git init 
```
5. Check the status of the project:
```bash
git status
```
5. (bis) Optional: Change the name of the branch from "master" to "main:
```bash
git branch -M main
```
6. Make changes on the archives and see the results.
7. Add changes and commit them
```bash
git add .
git commit -m <description_of_the_commit>
```
1. Recheck the status of the project
```bash    
git status
```
1. Check the commits
```bash
git log
```
---

## Linking remote
10. Enter github platform and create a new project (it will be empty)
11. Link this remote repository with our local repository. In the root of the local repository:
```bash
git remote add origin <link_remote_repository>
```
12. Upload changes to the remote repository:
```bash    
git push origin main
```

*NOTE: Steps 10 and 11 should ONLY be executed ONCE.*

## CLONE REPOSITORY

If we want to bring a remote repository that is already created:
```bash
git clone <link_remote_repository>
```
We don't have to clone every time, we can bring the recent changes by running:
```bash    
git fetch -a
```
So we bring all the changes:
```bash
git pull origin
```
Also we can specify the branch
```bash
git pull origin main
```