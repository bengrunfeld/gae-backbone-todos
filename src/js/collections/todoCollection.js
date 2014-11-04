var TodoCollection = Backbone.Collection.extend({

  // Choose the model this collection is based on
  model: TodoModel,

  url: 'http://localhost:8080/todos/api/v0.1.0/',
});
