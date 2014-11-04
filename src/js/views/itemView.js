var ItemView = Backbone.View.extend({

  tagName: 'li',
  className: 'todo-item',

  template: _.template( $('#todo-item').html() ),

  events: {
    'click .delete': 'removeElement',
  },

  render: function() {
    this.model.save();
    var todo = this.template(this.model.toJSON());
    this.$el.html(todo);
    console.log(this.model.isNew());
    return this;
  },

  removeElement: function() {
    // DELETE in DB
    this.remove();
    this.unbind();
  },
});
