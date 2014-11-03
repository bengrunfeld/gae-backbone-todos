function addRecord(event) {
  // CREATE record in DB

  // If enter/return key wasn't pressed, bail
  if ( event.which !== 13 ) {
    return;
  }

  // Create a new model using user input
  var todoModel = new TodoModel({title: $('.todo-input').val()});
  todoModel.save();

  // Add new model to collection
  todos.add(todoModel);

  // Reset the input box for easier usage
  $('.todo-input').val('');
}

