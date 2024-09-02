window.addEventListener("DOMContentLoaded", init);

const teacherURI = "teachers.json";

let teacherList; 
let teacherTemplate;



function init() {
teacherList = document.querySelector("#teacher_list");
console.log("teacher_list", teacherList);

teacherTemplate = document.querySelector("template").content;
console.log("teacherTemplate", teacherTemplate)

    fetch(teacherURI)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });
}

function logJson(json){
console.log("json",json);

json.forEach();
}


function showTeacher(teacher) {
    const clone = teacherTemplate.cloneNode(true);
    clone.querySelector("h3").textContent = `${teacher.name} ${teacher.surname}`;
    clone.querySelector("p").textContent = teacher.topics[0];
    teacherList.appendChild(clone);
}
