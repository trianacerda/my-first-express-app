# my-first-express-app

- Create a new repo in Github with README and clone it down `git clone <URL>`
- Open code in VSCode
- Run `npm init -y` --creates a `package.json` file -- go ahead and ACP
- Install Express App dependencies with `npm i express supertest jest cors`
- Add a .gitignore and add `node_modules`

# Deploying on Heroku

1. `heroku login`
1. `git remote -v` -- confirm you don't already have Heroku as a remote
1. `heroku create [appname]`
1. `git remote -v` -- note that heroku is now a remote
1. add a script to your package.json so that heroku knows how to start your app
   ```json
    "scripts": {
            "start": "node index.js",
            "test": "echo \"Error: no test specified\" && exit 1"
       }
   ```
1. ACP the change to package.json
1. Deploy the code using
   `git push heroku main` (if you are on the main branch)
   `git push heroku dev:main` (id you are on the dev branch)
