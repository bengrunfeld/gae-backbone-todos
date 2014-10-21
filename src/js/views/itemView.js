var ItemView = Backbone.View.extend({

  tagName: 'li',
  className: 'todo-item',

  template: _.template( $('#todo-item').html() ),

  events: {
    'click .delete': 'removeElement',
  },

  render: function() {
    var todo = this.template(this.model.toJSON());
    this.$el.html(todo);
    return this;
  },

  removeElement: function() {
    this.remove();
    this.unbind();
  },
});
