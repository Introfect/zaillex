const router = require("express").Router();
const authRouter = require("./auth/authRoutes");


router.use("/auth", authRouter);


module.exports = router;