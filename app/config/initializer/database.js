const mongoose = require('mongoose');

const url = `mongodb+srv://zakariyacluster.qxbbl.mongodb.net/testdb?retryWrites=true&w=majority`;


const db_configuration = {
  dbName: 'testdb',
  user: 'zakariyaghanai',
  pass: '1155996633..',
  useUnifiedTopology: true, 
  useNewUrlParser: true
}
mongoose.connect(url, db_configuration);

const db = mongoose.connection;

module.exports = db;