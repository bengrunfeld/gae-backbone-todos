$(function(){

  // Start the application. We define the collection
  // first, because the View sets an event listener for it
  todos = new TodoCollection();
  var todoView = new TodoView();

  function addRecord(event) {

    // Check if enter/return key was pressed.
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

  // Set event handler to filter keypresses
  $('.todo-input').on('keypress', addRecord);
});
