var Mania = Mania || {};

(function() {
  'use strict';

  Mania.AppView = Backbone.View.extend({
    el: '#mania-app',

    initialize: function() {
      this.shuffleView = new Mania.ShuffleView();
      this.inputView = new Mania.InputView();
    },

    render: function() {
      this.$('header').html(this.shuffleView.render());
      this.$('main').html(this.inputView.render());
    }

  });
}());
