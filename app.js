const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const dirName = require("./utils/pathUtils");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(dirName, "/public")));

app.use((req,res, next)=>{
    res.status(404).sendFile(path.join(dirName, "/views/error404.html"));
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})