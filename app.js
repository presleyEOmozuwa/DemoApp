require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const userRouter = require('./controllers/appuser/user_controller');

// GLOBAL ROUTES AND MIDDLEWARE
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);

// PORT 
const PORT = process.env.PORT || 5000

// Starting the Server
app.listen(PORT, () => {
    console.log(`Express Server is listening on port ${PORT}`);
})
