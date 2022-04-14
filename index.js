require('dotenv').config();

const express = require('express');

const router = require('./router');
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
//app.use(express.static(path.join(__dirname, './assets')));



app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});
