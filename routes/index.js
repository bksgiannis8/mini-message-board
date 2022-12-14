var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    },
    {
      text: "General Kenobi",
      user: "Obi-Wan",
      added: new Date()
    },
    {
      text: "It's Johnny",
      user: "Johhny",
      added: new Date()
    }
 ];
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
