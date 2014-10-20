var ItemView = Backbone.View.extend({

  template: _.template( $('#todo-item').html() ),

  render: function(){
    var todo = this.template(this.model.toJSON());
    this.$el.html(todo);
    return this;
  },
});
