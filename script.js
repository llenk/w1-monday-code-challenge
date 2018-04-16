$(document).ready(doWhenReady);

let divCounter = 0;

function doWhenReady() {
    $('#generateButt').on('click', addDiv);
}

function addDiv() {
    divCounter++;
    $('#divOfDivs').append(`<div style="background:red"><p>${divCounter}</p>
        <button class="swapper">Swap</button>
        <button class="delete">Delete</button>
    </div>`);
}