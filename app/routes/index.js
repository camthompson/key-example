import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    const todos = [
      Ember.Object.create({ name: 'Thing 1', id: '123' }),
      Ember.Object.create({ name: 'Thing 2', id: '345' }),
      Ember.Object.create({ name: 'Thing 3', id: '789' }),
      Ember.Object.create({ name: 'Thing 4', id: '012' })
    ];
    controller.set('todos', todos);
  }
});
