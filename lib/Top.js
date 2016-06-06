var mongoose = require('mongoose');
var Schema = mongoose.Schema;

TopSchema = new Schema({
  username: String,
  address: String,
  created_at: {
    type: Date,
    "default": Date.now
  }
});

var TopModel = mongoose.model('TopModel', TopSchema);

var MongooseDao = require('mongoosedao');


var MeetingDao = new MongooseDao(TopModel);

 
module.exports = MeetingDao;