const express = require('express');
const router = express.Router();

router.use("/bikes", require("./bikes"))
router.use("/parts", require("./parts"))
router.use("/accessories", require("./accessories"))

module.exports = router;