var config = {};

config.mongo = {
  database: 'phonebookdemodb',
  hostName: 'localhost',
  port: 27017
}

//config.mongo.url = 'mongodb://' + config.mongo.hostName + ':' + config.mongo.port + '/' + config.mongo.database;
config.mongo.url = 'mongodb://phonebookusername:password@ds159767.mlab.com:59767/phonebookdemodb';
module.exports = config;