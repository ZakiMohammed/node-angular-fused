const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const data = require('./data')

const app = express();

dotenv.config();

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

// api
app.get('/api/users', (req, res) => {
    res.json(data.users);
})

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT} for ${process.env.NODE_ENV}`);
})
