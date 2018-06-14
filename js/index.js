"use strict";

$('input').on('keyup', function(e) {
    // If the key pressed is not the ENTER key
    if (e.keyCode !== UI.enterKey) return;

    // Get data of inputs
    var ticketData = UI.getTicketData();
    // Create the ticket
    var ticket = app.createTicket(ticketData);
    // Add the ticket to the list
    app.addTicket(ticket);
    // Add the ticket to the UI
    UI.addTicket(ticket, app.tickets.length);
    // Update the total stats
    app.updateTotals();
    // Reset inputs
    UI.resetInputs();
    // Delete the previous event handlers 
    $('#tickets td').off('click');
    // Add event handler to the cells except the first one (index)
    $('#tickets td').not(":eq(0)").click(function() {
        // 'this' refers to the ticket property clicked
        app.updateTicketProperty(this);
    });

});





