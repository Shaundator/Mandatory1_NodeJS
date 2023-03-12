const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

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



// API Links

// Get
app.get("/api/notes/", (req, res) => {
    const tempNotes = fetchAllNotes();
    res.send(tempNotes)
});

// Get By Id
app.get("/api/notes/:key", (req, res) => {
    const key = req.params.key
    const tempNote = fetchNoteByKey(key);
    res.send(tempNote);
});

// Post
app.post("/api/notes", (req, res) => {
    const newNote = {
        key: ++currentId,
        name: req.body.name,
        value: req.body.value,
        date: req.body.date,
        author: "admin" // localStorage.getItem("current-username")
    }
    postNote(newNote);
    res.send(newNote);
});

// Patch
app.patch("/api/notes/:id", (req, res) => {
    const key = parseInt(req.params.id);
    const oldNote = fetchNoteByKey(key);
    if(oldNote == null) {
        res.status(404).send(`No notes found with the key ${key}`);
    } else {
        const newNote = updateNote(oldNote, req.body);
        res.send(newNote);
    }
})

// Delete
app.delete("/api/notes/:key", (req, res) => {
    const key = req.params.key;
    const index = dummyNotes.findIndex((note) => note.key == key);
    if(index == -1){
        res.status(404).send(`No notes found with the id ${key}`);
    } else {
        dummyNotes.splice(index, 1);
        res.send(`Note with the key:(${key}) has been deleted...`);
    }
})


// API Functions
function fetchAllNotes() {
    console.log('current id = ' + currentId)
    return dummyNotes;
}

function fetchNoteByKey(key) {
    let tempNote;
    dummyNotes.forEach(note => {
        if(note.key == key) {
            tempNote = note;
        }
    })
    return tempNote;
}

function postNote(newNote) {
    dummyNotes.push(newNote);
}

function patchNote(oldNote, newNote){
    const index = dummyNotes.findIndex((note) => note === oldNote)
    if(newNote.name != null){
        dummyNotes[index].name = newNote.name;
    }
    if(newNote.value != null){
        dummyNotes[index].value = newNote.value;
    }
    if(newNote.date != null){
        dummyNotes[index].date = newNote.date;
    }
}

function validateCurrentUser(note){
    if(note.author == localStorage.getItem('current-username')){
        return true;
    }
    return false;
}


const dummyNotes = [
    {key: 1, name: "TestNote1", value: "TestNote1 notes in here, this is the content of it", date: "0/0/2015", author: "admin"},
    {key: 2, name: "TestNote2", value: "TestNote2 notes in here, this is the content of it", date: "0/0/2016", author: "admin"},
    {key: 3, name: "TestNote3", value: "TestNote3 notes in here, this is the content of it", date: "0/0/2017", author: "admin"},
    {key: 4, name: "TestNote4", value: "TestNote4 notes in here, this is the content of it", date: "0/0/2018", author: "admin"},
    {key: 5, name: "TestNote5", value: "TestNote5 notes in here, this is the content of it", date: "0/0/2019", author: "admin"}
];

let currentId = dummyNotes.length;