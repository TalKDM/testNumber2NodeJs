const addCourse = () => {
    const courseNameInput = document.querySelector('.courseNameInput').value;
    const numStudentsIn = document.querySelector('.numStudentsIn').value;
    const yearIn = document.querySelector('.yearIn').value;
    fetch('/add', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            courseNameInput,
            numStudentsIn,
            yearIn
        })
    }).then(res => res.json())
    .then(data => {
        const { message } = data;
        if (message === 'ok') {
            alert('course added!')
        } else {
            alert('error!')
        }
    })
};

const allStudents = () => {
    const allDiv = document.querySelector('.allCoursesDiv');
    fetch('/all')
    .then(res => res.json())
    .then(data => {
        const { message } = data;
        const sort = message.sort((a, b) => {
            return a.course_name - b.course_name
        });
        let p = document.createElement("p");
        p.innerHTML = JSON.stringify(sort);
        allDiv.append(p);
    })
};