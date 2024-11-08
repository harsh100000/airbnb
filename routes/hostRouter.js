const express = require("express");
const path = require("path");
const dirName = require("../utils/pathUtils");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res) => {
    res.sendFile(path.join(dirName, "/views/addHome.html"));
    });

// hostRouter.post("/add-home", (req, res, next) => {
//     res.send(`
//         <h1>Home registered successfully</h1>
//         <h2>House Name : ${req.body.housename}</h2>
//         <h2>Location : ${req.body.location}</h2>
//         <a href="/">Go To Home</a>
//     `);
//     next();
// });

hostRouter.post("/add-home", (req, res) => {
    res.redirect(`/host/registration?housename=${encodeURIComponent(req.body.housename)}&location=${encodeURIComponent(req.body.location)}`);
});

hostRouter.get("/registration", (req, res) => {
    res.sendFile(path.join(dirName, "/views/registeredPage.html"));
});

module.exports = hostRouter;