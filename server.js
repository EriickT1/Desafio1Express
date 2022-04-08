const express = require ("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const port = 3000;

app.listen (port, ()=>{
    console.log(`Server on port : ${port}`);
});

app.set("view engine","handlebars");
app.set('views', path.join(__dirname,'views','layouts'));

app.use("/css", express.static(__dirname+"/node_modules/bootstrap/dist/css"));

app.engine(
    'handlebars',
    exphbs.engine({
        defaultLayout: 'main',
        layoutsDir:app.get('views'),
        partialsDir:path.join(__dirname, 'views','components')
    })
);

app.use(require('./routes'));


