$(function(){

  var bookTitleModel = new TodoModel();
  bookTitleModel.set({title: 'Catch 22'});
  var articleView = new TodoView({model: bookTitleModel});
  articleView.render();
});
