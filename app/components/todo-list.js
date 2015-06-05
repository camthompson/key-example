import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',

  actions: {
    complete(todo) {
      this.get('todos').removeObject(todo);
    }
  }
});
