const express = require('express');
const Transporter = require('../controllers/transportation.controller');

const router = express.Router();

router.post('/addTransporter', Transporter.addTransporter);
router.get('/countTransporter', Transporter.countTransporter);
router.patch('/updateTransporter/:_id', Transporter.updateTransporter);
router.delete('/removeTransporter/:_id', Transporter.removeTransporter);

module.exports = router;