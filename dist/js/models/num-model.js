'use strict';

var Mania = Mania || {};

(function () {
  'use strict';

  Mania.NumModel = Backbone.Model.extend({
    randNum: function randNum() {
      var value = function value() {
        Math.floor(Math.random() * 10 + 1);
      };
      return value;
      this.set({ value: num });
    }
  });
})();