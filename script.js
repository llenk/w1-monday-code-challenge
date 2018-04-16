$(document).ready(doWhenReady);

let divCounter = 0;

function doWhenReady() {
    $('#generateButt').on('click', addDiv);
}

function addDiv() {
    divCounter++;
    $('#divOfDivs').append(`<div><p>${divCounter}</p></div>`);
}