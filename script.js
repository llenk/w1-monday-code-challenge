$(document).ready(doWhenReady);

let divCounter = 0;

function doWhenReady() {
    $('#generateButt').on('click', addDiv);
}

function addDiv() {
    divCounter++;
    $('#divOfDivs').append(`<div style="background:red">
        <p>${divCounter}</p>
        <button class="swapper">Swap</button>
        <button class="delete">Delete</button>
    </div>`);
    $('.swapper:last').on('click', swapBackground);
    $('.delete:last').on('click', deleteDiv);
}

function swapBackground() {
    if (this.parentElement.style.background == 'red') {
        this.parentElement.style.background = 'yellow';
    }
    else {
        this.parentElement.style.background = 'red'
    }
}

function deleteDiv() {
    this.parentElement.remove();
}