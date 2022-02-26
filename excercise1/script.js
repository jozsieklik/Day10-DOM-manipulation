/* 
-Get your solution of the fourth exercise from the html day
-Create and include a scripts.js file just like before
-Create an array with random names and yours
-Using forEach to add each name to the <ul> list
-(Optional) Your name should be bold
 */

let names = ["Peter", "Samantha", "Jack", "Jozef","George", "Mikael"];

names.forEach(function(n) {
    if (n === "Jozef") {
        $("ul").append(`<li><strong>${n}</strong></li>`)
    } else {
        $("ul").append(`<li>${n}</li>`)
    }
});