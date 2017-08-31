var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// new
// mongoose.connect('mongodb://timetracker:sambia2017@ds163940.mlab.com:63940/getmygeo');
mongoose.connect('mongodb://geoclient:sambia2017@ds123361.mlab.com:23361/timetracker');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());





app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// app.all('/', function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
//  });

 app.all('/api/status', function(request, response, next) {
   response.header("Access-Control-Allow-Origin", "*");
   response.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
  });

//new routes
app.use('/api', require('./routes/api'));




app.get('/', function(request, response) {
  response.render('pages/index');
});



app.get('/times', function(request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
      result += i + 'a';
  response.send(result);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
