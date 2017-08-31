// dependencies:
var restful = require('node-restful');
var mongoose = restful.mongoose;

// schema:
var statusSchema = new mongoose.Schema({
  type: String,
  properties: Object,
  geometry: Object
});

module.exports = restful.model('tblstatus', statusSchema);
