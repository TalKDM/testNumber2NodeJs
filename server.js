const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const PORT = 4000;


app.use(express.static("public" ));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const arr = [];
const students = [];

app.post('/add', (req, res) => {
    const { courseNameInput, numStudentsIn, yearIn } = req.body;
    const newCourse = ({
        course_name: courseNameInput,
        students: numStudentsIn,
        beginning_course_year: yearIn,
    })
    arr.push(newCourse);
    fs.writeFile("courses.txt", JSON.stringify(arr), (err) => {
        if (err) throw err;
    })
    res.send({message: 'ok'})
    console.log('course added!');
    console.log(arr);
});

app.get('/addNewCourse', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    res.send({message: "data transfer!"});
});

app.get('/all', (req, res) => {
    res.json({message: arr});
    console.log(arr);
});


app.listen(PORT, () => {
    console.log(`Server is listen on port ${PORT}`);
});