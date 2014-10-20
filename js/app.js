$(function(){

  // Start the application
  todos = new TodoCollection();
  var todoView = new TodoView();

  $('.submit').on('click', function(){

    // Create a new model using user input
    var todoModel = new TodoModel();
    todoModel.set({title: $('.todo-input').val()});

    // Add new model to collection
    todos.add(todoModel);
  });
});
