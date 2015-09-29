import Ember from 'ember';

export default Ember.Component.extend({
  updateRentelForm: false,
  actions: {
    updateRentelForm() {
      this.set('updateRentelForm', true)
    },
    update(rental) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('updateRentelForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
