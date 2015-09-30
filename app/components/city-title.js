import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyCity(city) {
      if (confirm('Delete?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
