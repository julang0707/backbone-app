var Mania = Mania || {};

(function() {
  'use strict';

  $el: $('header')

  Mania.ShuffleView = Backbone.View.extend({
    template: _.template($('#shuffleView').html()),

    events: {
      'click #shuffle': 'onShuffle'
    },

    render: function() {
      return this.$el.html(this.template());
    },

    onShuffle: function() {
      this.model.get('value');
    }
  });
}());
