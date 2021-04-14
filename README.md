# FitnessTracker
A React-Native Fitness Tracker

Use `yarn` with this project

### Install
Install with [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)\
`yarn install`

### Run
`yarn start`

### Using Git Flow For Team, Use This
Use This [Video](https://www.youtube.com/watch?v=jhtbhSpV5YA) For Reference<br><br>
Use The Following Command to create a branch, this will also switch over to the newly created branch\
Branch Names Should Also Indicate Number Associated In Issues\
`git checkout -b <BranchName>`\
Modify, Add, Delete Files\
Once Ready To Merge:\
`git status`\
Look To make Sure All Proper Files Are Not Staged\
`git add .`\
`git status`\
Make Sure All Files Are Staged\
`git commit -m "Message"`\
`git push origin <BranchName>`\
Look On Github And Create New Pull Request Using The New Branch\
Then Go Back To Main Branch, And Update Local Repo\
`git checkout main`\
`git pull origin main`\
Rinse And Repeat For Every `Feature | Bug | Fix`


### To Delete Branch
```diff
- Do Not Use Until Branch Is Merged
```
Delete Branch Locally Using `git branch -d <BranchName>`<br><br>
Delete Branch On Github<br><br>
To Check if Branch Is Deleted Locally Use:<br>
`git branch -a`

### Example: 
`git checkout -b NewButton-#8`\
Modyfing Files\
`git status`\
`git add .`\
`git status`\
`git commit -m "New Button"`\
`git push origin NewButton-#8`\
`git checkout main`\
`git pull origin main`
