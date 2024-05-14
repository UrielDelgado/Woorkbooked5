"use strict"
let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];




   function isOver60(arrayValue) {
    if (arrayValue > 60) {
    return true;
    }
    else {
    return false;
    }
   }
   let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
   let firstValOver60Position = numbers.findIndex(isOver60); 
    // returns the index 2
   if (firstValOver60Position != -1) {
    console.log("First value over 60 found at position " +
    firstValOver60Position);
   }
   else {
    console.log("No values over 60");
   }

   function isOver60(arrayValue) {
    if (arrayValue > 60) {
    return true;
    }
    else {
    return false;
    }
   }
   let numbers2 = [7, 9, 64, 60, 12, 13, 67, 66];
   let allOver60 = numbers2.filter(isOver60); 
    // returns an array containing [64, 67, 66]
   if (allOver60.length > 0) {
    console.log(allOver60); // displays the array
   }
   else {
    console.log("No values over 60");
   }