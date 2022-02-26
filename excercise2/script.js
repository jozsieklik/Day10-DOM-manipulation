/*
Add a new block at the end of the page, the title should be in a heading, the text should be in a paragraph 
block
*/


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("body").append(`<div class="new"></div>`)
$(".new").append(`<h1>${additionalBlock.title}</h1>`);
$(".new").append(`<p>${additionalBlock.text}</p>`);