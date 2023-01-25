const app = new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: '',
    email: '',
    ticketQuantity: 1,
    ticketType: 'general',
    referrals: [],
    specialRequests: '',
    purchaseAgreementSigned: false
  },
  computed: {
    fullName: {
      get: function() {
              if (this.firstName && this.lastName) {
                return this.firstName + ' ' + this.lastName;
              } else {
                return this.firstName || this.lastName;
              }
            },
      set: function(newFullName) {
        const names = newFullName.split(' ');

        if (names.length === 2) {
          this.firstName = names[0];
          this.lastName = names[1];
        }

        if (names.length <= 1) {
          this.firstName = names[0] || '';
          this.lastName = '';
        }
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