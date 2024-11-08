const express = require("express");
const path = require("path");
const dirName = require("../utils/pathUtils");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.sendFile(path.join(dirName, "/views/home.html"));
});

module.exports = userRouter;