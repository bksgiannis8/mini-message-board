var express = require('express');
var router = express.Router();
const messages = require('../public/javascripts/messages.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});


/* GET /new page */
router.get('/new', function(req, res, next) {
  res.render('form', {title: "New"})
})

/* POST /new page */
router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
  res.redirect('/')
})

module.exports = router;
