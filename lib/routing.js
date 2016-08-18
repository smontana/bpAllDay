module.exports = function(app, connection, models) {
  var app_routes = require('../app/routes/app');
  app.use('/', app_routes);
}