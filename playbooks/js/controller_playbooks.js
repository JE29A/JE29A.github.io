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
      showMoveReference: true
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
  $scope.frontTextBlocks = getFrontText();
  $scope.moves = {
    basic: getBasicMoves(),
    commerce: getMoves_Commerce()
  };
  console.log( $scope.moves.basic );
});

function getPlaybookDefinitions() {
  var ret = [];

  ret.push( getPBDef_brick() );

  ret.push( getPBDef_psion_esper() );
  ret.push( getPBDef_psion_porter() );
  ret.push( getPBDef_psion_pusher() );
  ret.push( getPBDef_psion_shaper() );
  ret.push( getPBDef_psion_teke() );

  return ret;
}
