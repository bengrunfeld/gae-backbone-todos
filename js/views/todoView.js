var TodoView = Backbone.View.extend({

  el: $('.todo-title'),
  template: _.template( $('#todo-item').html() ),

  render: function(){
    var todo = this.template(this.model.toJSON());
    this.$el.html(todo);
    return this;
  }
});
