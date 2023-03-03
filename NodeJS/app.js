const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const appRoutes = require('./routes/app.routes');
app.use('/', appRoutes);

app.listen(3001);
