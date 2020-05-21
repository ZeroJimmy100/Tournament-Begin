const SocialController = require('../controllers/user.controller');

module.exports = function(app){
    app.get('/api/', SocialController.index);
}