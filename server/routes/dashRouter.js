const express = require('express');
const router = express.Router();

const {
  getDashboard
} = require('../controllers/dashController');

router
  .route("/")
  .get(getDashboard);

module.exports = router;