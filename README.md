# TimeTracker Geo MainServer

This is a Node.js app using Express 4. It is part of the TimeTracker Ecosystem.
For more information about this project have a look at http://timetracker.cc.

## Functionality
This app is able to read and write data from and to a database.
It is using a Restful API with commands put, push and get.

## Database
The database is a NoSQL Database service, provided from mLabs.
If using own database please change settings for mongoose package in the index.js

## Hosting
It is recommended to host to app on a own Heroku account.
To test, deploy or run the app please getting instruction from Heroku, look at
https://devcenter.heroku.com/

## Demonstration
Under the following link a demo server is initiated. It data volume is limited
by the Heroku Sandbox limitations.
https://server-timetracker.herokuapp.com/

## Team
Development
- Hannes Buchwald ([hannes@timetracker.cc](mailto:hannes@timetracker.cc))

Project Coordination
- Thomas Daum [thomas@timetracker.cc](mailto:thomas@timetracker.cc))

## License
The content is under the GNU AGPLv3 license.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
