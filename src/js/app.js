$(function(){

  // Start the application. We define the collection
  // first, because the View sets an event listener for it
  todos = new TodoCollection();
  var todoView = new TodoView();

  // Set event handler to filter keypresses
  $('.todo-input').on('keypress', addRecord);

  function addRecord(event) {
    // If enter/return key wasn't pressed, bail
    if ( event.which !== 13 ) {
      return;
    }

    // Create a new model using user input
    var todoModel = new TodoModel({title: $('.todo-input').val()});

    // Add new model to collection
    todos.add(todoModel);

    // Reset the input box for easier usage
    $('.todo-input').val('');
  }
});
