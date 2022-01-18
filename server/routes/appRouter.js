const express = require('express');
const router = express.Router();

const {
  getLandingPage,
  loginUser
} = require('../controllers/appController');

router
  .route("/")
  .get(getLandingPage)
  .post(loginUser);

module.exports = router;