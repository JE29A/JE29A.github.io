$(document).ready(function() {
  $('span.symbol.clickable').on('click', function() {
    $(this).toggleClass('checked');
  });
});

var app = angular.module('myApp',[]).controller("myPlaybooks", function($scope) {
  $scope.uniqueInputModel = {
    playbooks: {}
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
  $scope.repeatInObject = function(obj) {
    var key, ret = [];
    for(key in obj) {
      ret.push( key );
    }
    return ret;
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
************************************************************************/
  $scope.stats = getStats();
  $scope.xp = getXPRules();
  $scope.harmBoxes = getHarmRules();
  $scope.playbooks = getPlaybookDefinitions();
});

function getPlaybookDefinitions() {
  var ret = [];

  ret.push( getPBDef_brick() );

  return ret;
}
