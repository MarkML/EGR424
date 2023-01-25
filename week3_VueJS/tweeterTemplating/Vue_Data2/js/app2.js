const app = new Vue({
  el: '#app',
  data: {
    firstName: 'Joe',
    lastName: 'Blogg',
    email: '',
    ticketQuantity: 2,
    ticketType: '',
    referrals: [],
    specialRequests: '',
    purchaseAgreementSigned: false
  },

  // computed is a separate object
  // the key: is the name of the property and the value: is a function
  computed: {
    fullName: function() {
      if (this.firstName && this.lastName) {
        return this.firstName + ' ' + this.lastName;
      } else {
        return this.firstName || this.lastName;
      }
    },
    ticketDescription: function() {
      let readableTicketType = 'General Admission';
      if (this.ticketType === 'vip') {
        readableTicketType = 'VIP';
      }

      let ticketPluralization = 'tickets';
      if (this.ticketQuantity === 1) {
        ticketPluralization = 'ticket';
      }

      return this.ticketQuantity + ' ' + readableTicketType + ' ' + ticketPluralization;
    }
  }
});