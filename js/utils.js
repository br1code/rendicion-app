"use strict";

// UTILS

// Get the element from the DOM by id
function getById(id) {
    return document.getElementById(id);
}
// Format a money value - Example: '550.5084' -> 550.50
function formatMoney(value) {
    return parseFloat(parseFloat(value).toFixed(2));
}
// Generate a random id
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
// Insert new cells in a row using the data of the ticket
function insertCells(ticketRow, ticket, ticketIndex) {
    ticketRow.insertCell(0).innerHTML = ticketIndex;
    ticketRow.insertCell(1).innerHTML = ticket.client;
    ticketRow.insertCell(2).innerHTML = ticket.installer;
    ticketRow.insertCell(3).innerHTML = ticket.month;
    ticketRow.insertCell(4).innerHTML = '$ ' + ticket.cash;
    ticketRow.insertCell(5).innerHTML = '$ ' + ticket.cheque;
}
// Set 'ticketProperty' attribute to each cell to use later
function addNameToEachCell(row) {
    let props = ['client', 'installer', 'month', 'cash', 'cheque'];
    let cells = row.cells;
    // Avoid the first cell to not add a property to the index of the row
    for (let i = 1; i < cells.length; i++) {
        cells[i].setAttribute('ticketProperty', props[i - 1]);
    }
}

// Add a event handler to each cell of a row
function addEventToEachCell(row, listener) {
    // Avoid the first cell to not allow modify the totalTickets property
    for (let i = 1; i < row.cells.length; i++) {
        row.cells[i].addEventListener('click', function(e) {
            listener(row.cells[i]);
        });
    }
}