var TodoView = Backbone.View.extend({

  // Listen to the collection. If something is added,
  // render the addition to the DOM
  initialize: function(){
    this.listenTo(todos, 'add', this.addOne);
  },

  addOne: function(thisModel){
    // Render the model to screen

    var todo = new ItemView({model: thisModel});
    $('.todo-title').append(todo.render().el);
  },
});
