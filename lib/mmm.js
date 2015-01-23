/*jshint node: true*/
'use strict';

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

var MeanMedianMode = function() {
  
  //calculates the average of numbers in an array by adding all numbers in the array and then dividing
  //by the number of numbers in the array.
  this.mean = function(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += Number(array[i]);
    }
    return (total / array.length);
  };
  
  //calculates the median by putting the numbers into a new array, sorting the numbers, and then returning
  //the middle number, rounding downwards.
  this.median = function(array) {
    var newArray = new Array(array.length);
    for (var i = 0; i < array.length; i++) {
      newArray[i] =  array[i];
    }
    var newArray2 = newArray.sort(function(a, b) {
      return a - b;
    });

    return newArray2[Math.floor(newArray2.length / 2)];
  };
  
  //Finds the mode of numbers in an array. A number is pushed into a new array if it has already been found
  //before. The frequency of the most occuring number is then returned, giving us the mode.
  this.mode = function(array) {
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
  };
};

var mmm = new MeanMedianMode();
module.exports = mmm;
