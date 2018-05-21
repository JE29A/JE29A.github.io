var app = angular.module('myApp',[]).controller("myPlaybooks", function($scope) {
  $scope.uniqueInputModel = {};

/***********************************************************************
 * function
 ***********************************************************************/
  $scope.firstLetterIsAVowel = function(str) {
    if (!str) {
      return false;
    }
    var s = String(str).substring(0,1).toLowerCase();
    switch(s) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
    }
    return false;
  };

  $scope.repeatNTimes = function(n) {
    var ret = [];
    var i;
    for(i = 0; i < n; i++) {
      ret.push( i );
    }
    return ret;
  };

  $scope.groupArrIntoSets = function(arr, size, class) {
    var ret = [], temp;
    var i;
    if (!size) { size = 2; }
    if (!class) { class = ''; }
    temp = [];
    for(i = 0; i < arr.length; i++) {
      temp.push( arr[i] );
      if (temp.length >= size) {
        ret.push( temp );
        temp = [];
      }
    }
    if (temp.length > 0) {
      while (temp.length < size) {
        temp.push({ class: class});
      }
      ret.push( temp );
    }
    return ret;
  };

/***********************************************************************
 * data
 ***********************************************************************/
 $scope.shipPlaybooks = getShips();
});

function getShips() {
  var ret = [];
  
  return ret;
}

function genericShip() {
  return {
    trope: "generic ship",
    
  };
}
