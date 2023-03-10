function notePageLoad() {
  const welcomeText = document.getElementById("welcomeText");
  const currentUsername = localStorage.getItem("current-username");
  welcomeText.innerText = `Welcome ${currentUsername}`;
  retrieveUserNotes()
}

function retrieveUserNotes() {
    console.log('retrieving user notes')
    let table = `
    <thead>
        <tr>
            <th>key</th>
            <th>name</th>
            <th>date</th>
        </tr>
    </thead>
    `
    testNotes.forEach(note => {
        table += `
        <tr>
            <td>${note.key}</td>
            <td>${note.name}</td>
            <td>${note.date}</td>
        </tr>
        `
    })
    document.getElementById('note-page-list').innerHTML = table;
}

const testNotes = [
    {key: 1, name: "TestNote1", value: "TestNote1 notes in here, this is the content of it", date: "0/0/2015"},
    {key: 2, name: "TestNote2", value: "TestNote2 notes in here, this is the content of it", date: "0/0/2016"},
    {key: 3, name: "TestNote3", value: "TestNote3 notes in here, this is the content of it", date: "0/0/2017"},
    {key: 4, name: "TestNote4", value: "TestNote4 notes in here, this is the content of it", date: "0/0/2018"},
    {key: 5, name: "TestNote5", value: "TestNote5 notes in here, this is the content of it", date: "0/0/2019"}
]