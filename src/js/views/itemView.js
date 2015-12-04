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

  save_to_db: function() {
    var save_result = this.model.save();
  },

  removeElement: function() {
    // DELETE in DB

    // Shows that we have access to the model
    // console.log();

    // sends HTTP DELETE to /todos/2 and removes from collection
    // console.log(this.model.toJSON);
    // todo = todos.get(this.model.toJSON().id);
    // console.log(todo);
    this.model.destroy();

    // Sends a "DELETE" to the server, but does not append id to URL
    // this.model.destroy();

    this.remove();
    this.unbind();
  },
});
