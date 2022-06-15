const express = require("express");

const HelloWorldController = require("../controllers/hello-world");

const router = express.Router();

router.get("/handShake", HelloWorldController.handShake);

module.exports = router;
