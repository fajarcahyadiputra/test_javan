const router = require('express').Router();
const {dashboard} = require("../controllers/home")

router.get('/', dashboard);

module.exports = router