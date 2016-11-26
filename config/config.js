var config = {};

config.mongo = {
  database: 'phonebookdemodb',
  hostName: 'localhost',
  port: 27017
}

config.mongo.url = 'mongodb://' + config.mongo.hostName + ':' + config.mongo.port + '/' + config.mongo.database;

module.exports = config;