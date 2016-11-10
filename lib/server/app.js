var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

//routing modules
var index = require('./routes/index');
var hello = require('./routes/welcome');
var parts = require('./routes/parts');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//routes
app.use('/hello', hello);
app.use('/parts', parts);

//static
app.get('/', index);

app.use(express.static('lib/public'));

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'),function(){
console.log("Listening on port: ", port);
})
