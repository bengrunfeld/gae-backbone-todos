$(function(){

  // Start the application. We define the collection
  // first, because the View sets an event listener for it
  todos = new TodoCollection();
  var todoView = new TodoView();

  // Populate the viewport with DB entries
  //todos.fetch();

  // Set event handler to filter keypresses
  $('.todo-input').on('keypress', createRecord);
});
