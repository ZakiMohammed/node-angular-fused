const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const data = require('./data')

const app = express();

dotenv.config();

app.use(cors());

// api
app.get('/api/users', (req, res) => {
    res.json(data.users);
})

// register angular app if environment is not development
if (process.env.NODE_ENV !== 'development') {
    const ngPath = `${process.cwd()}${process.env.NG_PATH}`;
    app.use(express.static(ngPath));
    app.get('/', (req, res) => res.sendFile(`${ngPath}index.html`));

} else {
    app.get('/', (req, res) => res.send(`NodeJS and Angular Fused API`));
}

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`);
})