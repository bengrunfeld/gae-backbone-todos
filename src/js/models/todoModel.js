var TodoModel = Backbone.Model.extend({

  defaults: {
    title: 'default title'
  },

  url: 'http://localhost:8080/todos/api/v0.1.0/',
});
