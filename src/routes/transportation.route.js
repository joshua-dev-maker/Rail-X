const express = require('express');
const admin = require('../controllers/transportation.controller');

const router = express.Router();

router.post('/createAdmin', admin.createAdmins);
router.get('/countAdmin', admin.countAdmin);
router.patch('/updateAdmin/:_id', admin.updateAdmins);
router.delete('/removeAdmins/:_id', admin.removeAdmins);

module.exports = router;