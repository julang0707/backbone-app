'use strict';

var Mania = Mania || {};

(function () {
  'use strict';

  var Inputs = Backbone.Collection.extend({
    model: Mania.NumModel
  });

  Mania.InputsCollection = new Inputs();
})();