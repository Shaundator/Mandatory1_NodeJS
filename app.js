const express = require("express");
const app = express();

app.use(express.static("public"));

const PORT = 8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontPage/frontPage.html");
});

app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
        return;
    }
});