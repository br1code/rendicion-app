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
    let cells = row.cells;
    cells[1].setAttribute('ticketProperty', 'client');
    cells[2].setAttribute('ticketProperty', 'installer');
    cells[3].setAttribute('ticketProperty', 'month');
    cells[4].setAttribute('ticketProperty', 'cash');
    cells[5].setAttribute('ticketProperty', 'cheque');
}