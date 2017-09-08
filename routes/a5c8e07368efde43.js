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


// variables & dependencies
var express = require('express');
var router = express.Router();

// get models
var Status = require('../models/status.js');

// API with three comands
// post and put for writing data
// get for recieving data
Status.methods(['get', 'post', 'put']);
Status.register(router, '/status');


//return router
module.exports = router;
