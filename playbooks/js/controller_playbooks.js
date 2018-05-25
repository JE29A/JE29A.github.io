$(document).ready(function() {
  $('span.symbol.clickable').on('click', function() {
    $(this).toggleClass('checked');
  });
});

var app = angular.module('myApp',[]).controller("myPlaybooks", function($scope) {
  //local models
  $scope.uniqueInputModel = {
    playbooks: {},
    controls: {
      showMoveReference: false
    }
  };
  //functions
  $scope.firstLetterIsAVowel = firstLetterIsAVowel_def;
  $scope.repeatInObject = repeatInObject_def;
  $scope.repeatNTimes = repeatNTimes_def;
  $scope.groupArrIntoSets = groupArrIntoSets_def;
  //data
  $scope.stats = getStats();
  $scope.xp = getXPRules();
  $scope.harmBoxes = getHarmRules();
  $scope.foibles = getFoibles();
  $scope.playbooks = getPlaybookDefinitions();
});

function getPlaybookDefinitions() {
  var ret = [];

  ret.push( getPBDef_brick() );

  return ret;
}
