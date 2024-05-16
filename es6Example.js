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

// let over50 = courses.filter((lessThan) => lessThan.Fee <= 50)
// console.log(over50);

// over50.forEach(a => {
//     let over502 = a.Title
//     console.log(over502);
// });

// let fee = courses.find((course) => course.CourseId == "PROG200")
// console.log(fee.Fee);
let fee1 = [];
fee1 = courses.filter((course) => course.Location == "Classroom 1")
console.log(fee1);

fee1.forEach(Cl => {
    console.log(Cl.Title)
});

// .filter and . find = methods


