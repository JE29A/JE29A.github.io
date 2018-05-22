var app = angular.module('myApp',[]).controller("myPlaybooks", function($scope) {
  $scope.uniqueInputModel = {
    FTL: {},
    ships: {}
  };
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
  $scope.groupArrIntoSets = function(arr, size, classStr) {
    var ret = [], temp;
    var i;
    if (!size) { size = 2; }
    if (!classStr) { classStr = ''; }
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
        temp.push({ class: classStr});
      }
      ret.push( temp );
    }
    return ret;
  };
/***********************************************************************
 * data
 ***********************************************************************/
 $scope.shipPlaybooks = getShips();
 $scope.FTLs = getFTL();
});
function getFTL() {
  var ret = [];
  ret.push({
    label: "Stardrive",
    moves: [
      [
        {
          class: "font-bold",
          text: "Starfall Move:"
        },{
          class: "",
          text: "When "
        },{
          class: "font-bold",
          text: "you plot a starfall under pressure"
        },{
          class: "",
          text: ", roll+Smarts, +Cool, or +Maintenance (whichever is lowest). "
        },{
          class: "font-bold",
          text: "On a hit"
        },{
          class: "",
          text: ", your ship accepts the course and goes into drivespace. "
        },{
          class: "font-bold",
          text: "On a 10+"
        },{
          class: "",
          text: ", you have a +1 forward on your following starrise move. "
        },{
          class: "font-bold",
          text: "On a miss"
        },{
          class: "",
          text: ", something is wrong with your calculation or your stardrive."
        }
      ],[
        {
          class: "font-bold",
          text: "Starrise Move:"
        },{
          class: "",
          text: "After a ship has spent 121 hours in drivespace, roll+Maintenance. "
        },{
          class: "font-bold",
          text: "On a 10+"
        },{
          class: "",
          text: ", your ship comes out exactly where intended. "
        },{
          class: "font-bold",
          text: "On a 7-9"
        },{
          class: "",
          text: ", your ship comes out close of drivespace hours or days of cruising speed away from where you intended. "
        },{
          class: "font-bold",
          text: "On a miss"
        },{
          class: "",
          text: ", your ship comes out a great distance from its intended destination, or even at the point it departed from. On a hit or miss, your ship needs (2d6+5) * 4 hours to collect enough tachyons before it can engage in another starfall."
        }
      ]
    ]
  });
  /*
  ret.push({
    label: "Hyperspace",
    moves: [
      [
        {
          class: "",
          text: "dfadfdd"
        }
      ]
    ]
  });
  */
  ret.sort(function(a, b) {
    if (a.label > b.label) { return 1; }
    if (a.label < b.label) { return -1; }
    return 0;
  });
  return ret;
}
function getShips() {
  var ret = [];
  ret.push( genericShip() );
  
  return ret;
}
function autoShip(size, trope) {
  if (!size || size < 1) {
    size = 0;
  }
  if (!trope) {
    trope = "Generic Ship "+ String(size);
  }
  return {
    trope: trope,
    trope2: String(trope).replace(/ /g,"_"),
    size: 1,
    startingValues: {
      payments: 10 + 10 * size,
      disposition: 0
    }
  };
}
function genericShip() {
  return autoShip(1, 'Generic');
}
