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



// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// this is the schema with which recieved data are send to database
var statusSchema = new mongoose.Schema({
  type: String,
  properties: Object,
  geometry: Object
});

module.exports = restful.model('tblstatus', statusSchema);
