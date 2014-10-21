var TodoView = Backbone.View.extend({

  // Listen to the collection. If something is added,
  // re-render the view with the addition
  initialize: function(){
    this.listenTo(todos, 'add', this.addOne);
  },

  events: function() {
  },

  addOne: function(thisModel){
    // Render data to screen
    var todo = new ItemView({model: thisModel});
    $('.todo-title').append(todo.render().el);
  },
});
