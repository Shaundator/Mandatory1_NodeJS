const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(session({
    secret: 'secret-key',
    resave: 'false',
    saveUninitialized: false
}));

const PORT = 8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontPage/frontPage.html");
});

app.get("/note-page", (req, res) => {
    res.sendFile(__dirname + "/public/notePage/notePage.html")
})

app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
        return;
    }
});