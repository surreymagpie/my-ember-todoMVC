Todos.EditTodoView = Ember.TextField.extend({
	didInsertElement: function() {
		return this.$().focus();
	}
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);
