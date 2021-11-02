const cookieParser = require("cookie-parser");
const Router = require("express").Router;
const cors = require("cors");

const router = Router();
router.use(cors());
router.use(cookieParser());

export default router;
