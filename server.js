const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000;
// const session = require('express-session');

// app.use(session({
//   secret: 'somethingcool',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join( __dirname + '/public/dist/public' )));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}!`);
});