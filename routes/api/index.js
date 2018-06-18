const router = require("express").Router();
const trailRoutes = require("./trails");

// trail routes
router.use("/trails", trailRoutes);

module.exports = router;