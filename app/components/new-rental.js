import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

  saveRental() {
      var params = {
        // owner: this.get('owner') ? this.get('owner') : "",
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        date_added: Date.now()
      };
      this.set('addNewRental', false),
      this.sendAction('saveRental', params);
    },

    save1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.sendAction('update2', params);
    }
  }
});
