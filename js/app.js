"use strict";

// Ticket constructor
function Ticket(client, installer, month, cash, cheque) {
    this.client = client || 'Abonado';
    this.installer = installer || 'Instalador';
    this.month = month || 'Mes';
    this.cash = cash || 0;
    this.cheque = cheque || 0;
    this.id = generateId();
}

var app = {

    tickets: [],
    totalCash: 0,
    totalCheque: 0,

    // Create the ticket using the data of the UI
    createTicket: function(data) {
        var ticket = new Ticket(
            data.client,
            data.installer,
            data.month,
            data.cash,
            data.cheque
        );
        return ticket;
    },

    // Add a ticket to the tickets list
    addTicket: function(ticket) {
        this.tickets.push(ticket);
    },

    // Update the totals stats calculating the totals of each ticket
    updateTotals: function() {
        // Reset the totals
        this.totalCash = 0;
        this.totalCheque = 0;
        // Add the money value of each ticket to the totals
        this.tickets.forEach((ticket) => {
            this.totalCash += ticket.cash;
            this.totalCheque += ticket.cheque;
        });
        // Set the new stats
        var newStats = {
            totalCash: this.totalCash,
            totalCheque: this.totalCheque,
            totalTickets: this.tickets.length
        };
        // Update the total stats from the UI
        UI.updateTotalStats(newStats);
    },

    // Update a property of a ticket
    updateTicketProperty: function(property) {
        // Get the new value with a simple input alert
        let newValue = prompt('Ingrese el nuevo valor');
        // Validate the value
        if (!newValue) return;
        // Get the id of the ticket
        let ticketId = property.parentElement.getAttribute('id');
        // Get the ticket by the id
        let ticket = this.getTicketById(ticketId);
        // Get the property name to change
        let propertyName = property.attributes.ticketProperty.value;
        // If the property is a money value, convert to float
        if (propertyName === 'cash' || propertyName === 'cheque') {
            // Validate money value
            if (isNaN(parseFloat(newValue))) return;
            newValue = parseFloat(newValue);
        }
        // Update the property of the ticket
        ticket[propertyName] = newValue;
        // Update the property from the UI
        UI.updateProperty(property, newValue);
        // Update the total stats
        this.updateTotals();
    },

    // Get a ticket from the tickets list by the id
    getTicketById: function(id) {
        // Find the element with that id and return it
        return this.tickets.find(function(ticket) {
            return ticket.id === id;
        });
    }

};