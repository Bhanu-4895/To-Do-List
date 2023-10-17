var express = require('express');
var router = express.Router();
const ctrlLocation = require('../controllers/locations');
const ctrlOther = require('../controllers/others');



/*Design page*/
router.get('/',ctrlLocation.designpage);
router.get('/about',ctrlOther.about)

router.get('/contact', ctrlOther.ContactPage);

router.get('/login',ctrlOther.getLogin );
  
// Route for the registration 
router.get('/signup', ctrlOther.getRegistration);

router.post('/signup', ctrlOther.postRegistration);
module.exports = router;
