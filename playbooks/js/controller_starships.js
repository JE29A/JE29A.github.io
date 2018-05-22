var app = angular.module('myApp',[]).controller("myPlaybooks", function($scope) {
  $scope.uniqueInputModel = {
    FTL: '',
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
    label: "None",
    selected: "selected",
    moves: [
      [
        {
          class: "",
          text: "Your ship lacks an FTL system. It does not have a FTL move."
        }
      ]
    ]
  });
  
  ret.push({
    label: "Stardrive",
    moves: [
      [
        {
          class: "font-bold",
          text: "Starfall:"
        },{
          class: "",
          text: " When "
        },{
          class: "font-bold",
          text: "you plot a starfall under pressure or near a large gravity source"
        },{
          class: "",
          text: ", roll+Smarts or +Cool modified by +Maintenance. If you have ample time, still roll, but you treat a miss as a hit. "
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
          text: "Starrise:"
        },{
          class: "",
          text: " After a ship has spent 121 hours in drivespace, roll+Maintenance. "
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

  ret.push({
    label: "Hyperspace",
    moves: [
      [
        {
          class: "font-bold",
          text: "Gentle Operations: "
        },{
          class: "",
          text: "When "
        },{
          class: "font-bold",
          text: "you translate up or down under ideal circumstances"
        },{
          class: "",
          text: ", you succeed with no damage or translation trauma."
        }
      ],[
        {
          class: "font-bold",
          text: "Translate Up:"
        },{
          class: "",
          text: " When "
        },{
          class: "font-bold",
          text: "you translate up to a higher level of hyperspace under pressure"
        },{
          class: "",
          text: ", roll+Smarts modified by +Maintenance. "
        },{
          class: "font-bold",
          text: "On a hit"
        },{
          class: "",
          text: ", you translate up successfully. "
        },{
          class: "font-bold",
          text: "On a 10+"
        },{
          class: "",
          text: ", you also retain much of your velocity."
        },{
          class: "font-bold",
          text: "On a miss"
        },{
          class: "",
          text: ", prepare for the worst!"
        }
      ],[
        {
          class: "font-bold",
          text: "Crash Translation (down):"
        },{
          class: "",
          text: " When "
        },{
          class: "font-bold",
          text: "you initiate a multiple translation down or do it with a high velocity"
        },{
          class: "",
          text: ", roll+Smarts modified by +Maintenance. Your ship successfully translates down, but your crash translation is very obvious to all gravity sensors with range on you. Each passengar has to make a "
        },{
          class: "font-bold",
          text: "translation trauma"
        },{
          class: "",
          text: "move. "
        },{
          class: "font-bold",
          text: "On a hit"
        },{
          class: "",
          text: ", your ship translated without suffering damage. "
        },{
          class: "font-bold",
          text: "On a 10+"
        },{
          class: "",
          text: ", you complete it as gently as possible: each passenger onboard has a +1 forward on their "
        },{
          class: "font-bold",
          text: "translation trauma"
        },{
          class: "",
          text: " move. "
        },{
          class: "font-bold",
          text: "On a miss"
        },{
          class: "",
          text: ", you still translate down, but also mark System Damage, Direct Hit, Hull Breach, or Adrift."
        }
      ],[
        {
          class: "font-bold",
          text: "Translation Trauama:"
        },{
          class: "",
          text: " When "
        },{
          class: "font-bold",
          text: "you are onboard a ship during a crash translation"
        },{
          class: "",
          text: ", roll+Tough. "
        },{
          class: "font-bold",
          text: "On a 10+"
        },{
          class: "",
          text: ", you suffer no meaningful symptoms. "
        },{
          class: "font-bold",
          text: "On a 7-9"
        },{
          class: "",
          text: ", you suffer from mild nausea and have a -1 ongoing for the next few minutes. "
        },{
          class: "font-bold",
          text: "On a miss"
        },{
          class: "",
          text: ", you are a mess and have a -1 ongoing for the next hour."
        }
      ]
    ]
  });

  var i;
  for(i = 0; i < ret.length; i++) {
    ret[i].key = ret[i].label.replace(/ /g, '_').toLowerCase();
  }

  ret.sort(function(a, b) {
    if (a.key == 'none') { return -1; }
    if (b.key == 'none') { return 1; }
    if (a.key > b.key) { return 1; }
    if (a.key < b.key) { return -1; }
    return 0;
  });
  return ret;
}

function getShips() {
  var ret = [];
  ret.push( generateShip({trope: 'Sheradin', size: 2, sizeLabel: 'Trader'} ) );
  
  return ret;
}

function generateShip(s) {
  if (!s) { s = {}; }
  return {
    trope: s.trope || 'Generic',
    trope2: (s.trope.replace(/ /g, '_') || 'Generic').toLowerCase(),
    size: s.size || 1,
    sizeLabel: s.sizeLabel || 'Ship',
    startingValues: {
      payments: 10 + 5 * (s.size || 1),
      disposition: 0
    }
  };
}

