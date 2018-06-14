"use strict";

var UI = {

    // Keycode for enter key
    enterKey: 13,
    
    // UI elements
    clientUI: $('#client'),
    installerUI: $('#installer'),
    monthUI: $('#month'),
    cashUI: $('#cash'),
    chequeUI: $('#cheque'),
    totalTicketsUI: $('#totalTickets'),
    totalCashUI: $('#totalCash'),
    totalChequeUI: $('#totalCheque'),

    // Get data from the inputs
    getTicketData: function() {
        let ticketData = {
            client: this.clientUI.val(),
            installer: this.installerUI.val(),
            month: this.monthUI.val(),
            cash: formatMoney(this.cashUI.val()),
            cheque: formatMoney(this.chequeUI.val())
        };
        return ticketData;
    },

    // Insert a row in the table using the data of the ticket
    addTicket: function(ticket, ticketIndex) {
        // Get the table from the UI
        let table = document.getElementById('tickets');
        // Insert a new row in the table
        let ticketRow = table.insertRow(ticketIndex);
        // Add the reference of the row to the ticket
        ticket.row = ticketRow;
        // Set id of the ticket to the row
        ticketRow.setAttribute('id', ticket.id);
        // Insert a new cell for each prop of the ticket
        insertCells(ticketRow, ticket, ticketIndex);
        // Add the prop name to each cell of the row
        addNameToEachCell(ticketRow);
    },

    // Reset the values of each input
    resetInputs: function() {
        // Reset values
        this.clientUI.val('');
        this.installerUI.val('');
        this.monthUI.val('');
        this.cashUI.val('');
        this.chequeUI.val('');
        // Focus the first input
        this.clientUI.focus();
    },

    // Update the stats
    updateTotalStats: function(newStats) {
        this.totalCashUI.text('$ ' + newStats.totalCash);
        this.totalChequeUI.text('$ ' + newStats.totalCheque);
        this.totalTicketsUI.text(newStats.totalTickets);
    },

    // Update the value of a property
    updateProperty: function(property, newValue) {
        // If the value is a money value, format
        if (typeof newValue === 'number') {
            newValue = '$ ' + newValue;
        }
        property.innerHTML = newValue;
    }

}