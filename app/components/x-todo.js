import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  classNameBindings: ['isFlagged'],

  isFlagged: false,

  actions: {
    toggleFlag() {
      this.toggleProperty('isFlagged');
    },

    complete() {
      this.sendAction('action', this.get('todo'));
    }
  }
});
