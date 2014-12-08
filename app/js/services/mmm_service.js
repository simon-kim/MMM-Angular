'use strict';

module.exports = function(app) {
  app.factory('MnMedMod', [function() {
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }

    return function() {
      return {

        mean: function(array) {
          var total = 0;
          for (var i = 0; i < array.length; i++) {
            total += Number(array[i]);
          }
          return (total / array.length);
        },

        median: function(array) {
          var newArray = new Array(array.length);
          for (var i = 0; i < array.length; i++) {
            newArray[i] =  array[i];
          }
          var newArray2 = newArray.sort(function(a, b) {
            return a - b;
          });

          return newArray2[Math.floor(newArray2.length / 2)];
        },

        mode: function(array) {
          var newArray = [];
          var countArray = [];

          for (var j = 0; j < array.length; j++) {
            countArray.push(0);
          }

          for (var i = 0; i < array.length; i++) {
            if (newArray.indexOf(array[i]) === -1) {
              newArray.push(array[i]);
            } else {
              countArray[newArray.indexOf(array[i])]++;
            }
          }

          return newArray[countArray.indexOf(getMaxOfArray(countArray))];
        }
      };
    };
  }]);
};
