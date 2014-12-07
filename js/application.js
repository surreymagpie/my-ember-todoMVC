window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
Todos.ApplicationSerializer = DS.LSSeriallizer.extend();
