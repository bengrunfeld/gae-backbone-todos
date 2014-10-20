var TodoView = Backbone.View.extend({

  // Listen to the collection. If something is added,
  // re-render the view with the addition
  initialize: function(){
    this.listenTo(todos, 'add', this.addOne);
  },

  addOne: function(){
    // print all model title in the collection
    todos.forEach(function(thisModel){
      var todo = new ItemView({model: thisModel});
      $('.todo-title').append(todo.render().el);
    });
    return this;
  },
});
