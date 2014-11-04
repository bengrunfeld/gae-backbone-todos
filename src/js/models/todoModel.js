var TodoModel = Backbone.Model.extend({

  defaults: {
    id: 0,
    title: 'default title'
  },

  url: 'http://localhost:8080/todos/api/v0.1.0/',
});
