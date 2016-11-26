var express = require('express');
var router = express.Router();
var Contact = require('../models/Contact');

/* GET all contacts. */
router.get('/', function(req, res, next) {
  return Contact.find(function (err, contacts) {
    if (err) {
      return res.send(err.message);
    }
    
    return res.send(contacts);
  });
});

/* POST contact. */
router.post('/', function(req, res, next) {
  var contactname = req.body.contactname;
  var contactnum = req.body.contactnum;
  var favourite = req.body.favourite || false;

  var contact = new Contact({ contactname: contactname, contactnum: contactnum, favourite: favourite });

  contact.save(function(err) {
    if (err) {
      return res.send(err.message);
    }

    return res.send(contact);
  });
});

/* Change status (favourite/unfavourite) of a contact. */
router.post('/:id/favourite', function(req, res, next) {
  var id = req.params.id;

  Contact.findById(id, function(err, contact) {
    if (err) {
      return res.send(err.message);
    }

    if (contact) {
      contact.favourite = !contact.favourite;
      contact.save();

      return res.send(contact);
    }

    return res.send('Contact not found');
  });
});

/* DELETE a contact. */
router.delete('/:id', function(req, res, next) {
  var id = req.params.id;

  Contact.findByIdAndRemove(id, null, function(err, contact) {
    if (err) {
      return res.send(err.message);
    }

    if (contact) {
      return res.send(contact);
    }

    return res.send('Contact not found');
  });
});

module.exports = router;
