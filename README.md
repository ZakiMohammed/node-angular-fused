# NodeJS and Angular Fused Application

We can place Angular project within our Node.js root folder. Follow the below sequence to achieve current folder structure:

1. Create root Node.js folder
2. Create index.js file
3. Create .env file and add NODE_ENV, PORT, NG_PATH variables
4. Install necessary dependencies; express, dotenv, cors, nodemon, etc.
5. Run `ng new your-app-name` command for Angular project
6. Copy Angular project's .gitignore file content and paste it to Node.js .gitignore file
7. Implement Node.js code logic for development and non-development environment

## Node.js Code Logic
For development we need to run our Angular app on different port to have to ng serve feature and for production we needed the build version of Angular project to be accessed via the Node.js port.

In case of development we need to implement CORS so that our Angular app can reach out to our Node.js endpoints and for production we need to tell Node.js express from where to pick up the static built files of Angular app.

Checkout the below code:
```
// register angular app if environment is not development
if (process.env.NODE_ENV !== 'development') {
    const ngPath = `${process.cwd()}${process.env.NG_PATH}`;

    // path to angular files
    app.use(express.static(ngPath));

    // default route
    app.get('/', (req, res) => res.sendFile(`${ngPath}index.html`));

} else {
    // enable cors
    app.use(cors());

    // default route
    app.get('/', (req, res) => res.send(`NodeJS and Angular Fused API`));
}
```