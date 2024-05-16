"use strict"

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: 100.00,
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: 350.00,
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: 50.00,
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: 50.00,
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: 50.00,
    }
];

//creating variables to store the values in the function and to use outside of it
let courseid;
let over50 = [];
let classroom = [];

//finds courses using "id's" as a parameter
function courseId(_course){
    courseid = courses.find((course) => course.CourseId == _course);
};

//finds courses using "Location" as a parameter
function classLocation(_classroom){
    classroom = courses.filter((course) => course.Location == _classroom);
};

//finds courses using course fee's as a parameter 
function over50Dollars(_fee){
    over50 = courses.filter((course) => course.Fee > _fee);
};

let over50dollars = over50Dollars(50);

let course = courseId('PROJ500');

console.log(`Searched for Course Id: "${courseid.CourseId}" \nThe Course Title: "${courseid.Title}" \n`)

course = courseId('PROG200');

let classRoom = classLocation('Classroom 1');

console.log(`Searched for Course Id: "${courseid.CourseId}" \nThe Course Starts in: "${courseid.StartDate}" \n`)

console.log(`Course titles with a fee over $50 are: \n${over50[0].Title} 
${over50[1].Title} \n`)

console.log(`Class meeting in classroom 1 are: \n${classroom[0].Title} 
${classroom[1].Title}`)