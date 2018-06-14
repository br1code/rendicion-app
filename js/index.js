"use strict";

/* Add event listener for each input in order to
    add a ticket when the user press enter key */
$('input').on('keyup', addTicketEvent);

function addTicketEvent(e) {
    // If the key pressed is not the ENTER key
    if (e.keyCode !== UI.enterKey) return;

    // Get data of inputs
    let ticketData = UI.getTicketData();

    // Create the ticket
    let ticket = app.createTicket(ticketData);

    // Add the ticket to the list
    app.addTicket(ticket);

    /* Create a row for the new ticket and return a reference
        of the row */
    let ticketRow = UI.addTicket(ticket, app.tickets.length);

    /* Add the event handler of 'update a property' to each cell
        that contains a property of the new ticket created */
    addEventToEachCell(ticketRow, app.updateTicketProperty);

    // Update the total stats
    app.updateTotals();

    // Reset inputs
    UI.resetInputs();
}





