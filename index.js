/*
 * Copyright 2017 Hannes Buchwald (hannes.buchwald@gmail.com)
 *
 * Licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.gnu.org/licenses/agpl-3.0.de.html
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// variables & dependencys
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// this is the connection to the database password@user link to database
// If connecting to own database on mLab change here password user and link
mongoose.connect('mongodb://geoclient:sambia2017@ds123361.mlab.com:23361/timetracker');

// activate bodyparser urlencoded
// activate bodyparser json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// open port 5000
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// if call this link /a5c8e07368efde43/status from other bowser than need to owerwrite
 app.all('/a5c8e07368efde43/status', function(request, response, next) {
   response.header("Access-Control-Allow-Origin", "*");
   response.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
  });

//new routes
app.use('/a5c8e07368efde43', require('./routes/a5c8e07368efde43'));




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


// listen to port and start node js server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
