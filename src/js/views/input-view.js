var Mania = Mania || {};

(function() {
  'use strict';

  el: $('main')

  Mania.InputView = Backbone.View.extend({
    template: _.template($('#inputView').html()),

    events: {
      'keypress #input': 'onEnter'
    },

    render: function() {
      return this.$el.html(this.template());
    },

    onEnterPress: function(event) {
      if (event.keyCode === ENTER_KEY) {
        var $input = this.$('#input');
        var text = $input.val();

        // Reset the text
        $input.val('');

        // Add the new model to the todos collection
        Todo.TodosCollection.add({
          title: text
        });
      }
    }
  })
}());
