var app = angular.module('myApp',[]).controller("myPlaybooks", function($scope) {
  $scope.playbookModel = {};
  $scope.header = {
    titleTag: "Star World Playbooks"
  };

  $scope.getSolarSystemDetails = function(count) {
    if (!count || count < 1) {
      count = 1;
    }
    var ret = [], i;
    for(i = 0; i < count; i++) {
      ret.push( getBlankSolarSystem(i) );
    }
    return ret;
  };
  $scope.getFactionDetails = function(count) {
    if (!count || count < 1) {
      count = 1;
    }
    var ret = [], i;
    for(i = 0; i < count; i++) {
      ret.push( getBlankFaction(i) );
    }
    return ret;
  };

  $scope.findObjInArray = function(arr, param, value) {
    var ret = [], i;
    for(i = 0; i < arr.length; i++) {
      if (arr[i][param] == value) {
        ret.push( arr[i] );
      }
    }
    return ret;
  };

  $scope.regroupSet = function(O, groupSize) {
    var ret = [], temp = [], i;
    if (!O || O.length < 1) {
      return ret;
    }
    if (!groupSize || groupSize < 1) {
      return ret;
    }
    for(i = 0; i < O.length; i++) {
      temp.push( O[i] );
      if (temp.length >= groupSize) {
        ret.push( temp );
        temp = [];
      }
    }
    if (temp.length > 0) {
      while(temp.length % groupSize > 0) {
        temp.push( { divList:[ {} ], children: [ { } ] } );
      }
      ret.push( temp );
    }
    return ret;
  };

  $scope.deriveNumber = function(size, perPage, expectedMod) {
    if (!size || size < 1) { size = 1; }
    if (!perPage || perPage < 1) { perPage = 1; }
    var n = Math.ceil(size / perPage);
    switch( expectedMod ) {
      case 0:
        if (n % 2 != 0) { n++; }
        break;
      case 1:
        if (n % 2 != 1) { n++; }
        break;
      default:
    }
    var ret = [], i;
    for(i = 0; i < n; i++) {
      ret.push({
        MIN: i * perPage,
        MAX: (i + 1) * perPage - 1,
        size: size,
        perPage: perPage,
        n: n
      });
    }
    return ret;
  };

  $scope.testRange = function(i, o) {
    i = parseInt(i, 10);
    var ret = (o.MIN <= i && i <= o.MAX);
    return ret;
  };
  
  $scope.getNumber = function(n, expectedMod) {
    var x;
    var ret = [];
    switch( expectedMod ) {
      case 0:
        if (n % 2 != 0) { n++; }
        break;
      case 1:
        if (n % 2 != 1) { n++; }
        break;
      default:
    }
    for(x = 1; x <= n; x++) {
      ret.push( x );
    }
    return ret;
  };

  $scope.getNumberIdx = function(n, divider, expectedMod) {
    var x;
    var ret = [];
    var n2 = n;
    if (!n2 || n2 < 1) {
      return ret;
    }
    if (!divider) {
      divider = 1;
    }
    var n2 = parseInt(n2 / divider, 10);
    switch( expectedMod ) {
      case 0:
        if (n2 % 2 != 0) { n2++; }
        break;
      case 1:
        if (n2 % 2 != 1) { n2++; }
        break;
      default:
    }
    for(x = 0; x < n2; x++) {
      ret.push( x );
    }
    return ret;
  }
  $scope.testNumberIdx = function(a, ad, b, bd) {
    if (!a) { a = 0; }
    if (!ad) { ad = 1; }
    if (!b) { b = 0; }
    if (!bd) { bd = 1; }
    return parseInt(a / ad, 10) == parseInt(b / bd, 10);
  }

  $scope.pagenumber = 0;
  $scope.getPageNumber = function() {
    var ret = '';
    return ret;
  }

  $scope.stats = getStats();

  $scope.basicMoves = [];
  var i, j;
  for( i = 0; i < $scope.stats.list.length; i++) {
    for(j = 0; j < $scope.stats.list[i].moves.length; j++) {
      if ( $scope.stats.list[i].moves[j].type == 'basic' ) {
        $scope.basicMoves.push( $scope.stats.list[i].moves[j] );
      }
    }
  }

  $scope.basicMoves.push({
    label: "execute someone",
    children: [
      {
        classes: "",
        text: "When you ATTACK SOMEONE UNSUSPECTING OR HELPLESS, ask the MC if you could miss. If you could, treat it as threatening with violence, but your victim has no choice to cave and do what you want. If you couldn't miss, simply inflict harm as established."
      }
    ]
  });

  $scope.basicMoves.push({
    label: "help/interfere",
    children: [
      {
        classes: "",
        text: "When you HELP or INTERFERE WITH someone who's making a move, establish how you help or interfere, and the MC will decide whether you roll +Bond or which +stat. On a hit, choose 1:"
      },{
        classes: "li filled",
        text: "Help: Turn a miss (6-) into a partial hit (7-9)."
      },{
        classes: "li filled",
        text: "Help: Turn a partial hit (7-9) into a complete hit (10+)."
      },{
        classes: "li filled",
        text: "Interfere: Turn a complete hit (10+) into a partial hit (7-9)."
      },{
        classes: "li filled",
        text: "Interfere: Turn a partial success (7-9) into a mis (6-)."
      },{
        classes: "li filled basic-move-miss",
        text: ""
      },{
        text: "On a 7-9, you have a complication. If the someone is aware of your attempt, they mark +1-bond."
      }
    ]
  });

  $scope.basicMoves.push({
    label: "session end",
    children: [
      {
        classes: "",
        text: "AT THE END OF EVERY SESSION, choose a character who knows you better than they used to. If there's more than one, choose one at your whim. Tell that player to add +1 to their Bond with you on their sheet. If this brings them to Bond+4, they reset to Bond+1 (and therefore mark experience). If no one knows you better, choose a character who doesn't know you as well as they thought, or choose any character at your whim. Tell that player to take -1 to their Bond with you on their sheet. If this brings them to Bond -3, they reset to Bond=0 (and therefore mark experience)."
      }
    ]
  });

  $scope.basicMoves.sort(function(objA,objB) {
    var a = String(objA.label).toLowerCase();
    var b = String(objB.label).toLowerCase();
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });

  $scope.harmBoxes = {
    boxes: [
      {
        label: "6",
        classes: "",
        flex: "1"
      },{
        label: "5",
        classes: "",
        flex: "1"
      },{
        label: "4",
        classes: "",
        flex: "1"
      },{
        label: "3",
        classes: "",
        flex: "1"
      },{
        label: "2",
        classes: "",
        flex: "1"
      },{
        label: "1 (untenable)",
        classes: "",
        flex: "3"
      }
    ],
    unstable: [
      {
        style: "border: 1px solid white; flex: 3; opacity: 0; margin-right: 0px;",
        text: ""
      },{
        style: "border: 1px solid black; flex: 6; margin-left: 16px;",
        text: "unstable"
      }
    ],
    untenableText: "When life become untenable:",
    untenableList: [
      "Come back with -1 to a stat (min -2)",
      "Come back with -1 to a different stat (min -2)",
      "Die"
    ]
  };

  $scope.XP = {
    leftText: "Experience:",
    boxes: ["", "", "", "", "▶"],
    rightText: "Improve",
    instructions: []
  };

  $scope.references = getLooksReference();

  $scope.improvementInstructions = [
    "Mark an experience circle whenever you: fulfill one of your motivations, reset your Bond with someone, miss (and prepare for the worst!), or a move tells you to.",
    "When you mark the 5th circle, improve and erase your experience circles.",
    "Each time you improve, choose one improvement. Check it off; you can't choose it again."
  ];

  $scope.improvementsAdvanced = [
    "Get +1 to any stat (max +3)",
    "Retire your character",
    "Create a second character",
    "Change to a new playbook",
    "Mark 3 basic moves as advanced",
    "Mark 3 basic moves as advanced"
  ];

  $scope.bonds = {
    title: "Bonds",
    subtitle: "(Help or interfere; session end)",
    preamble: [
      "Everyone introduces their characters by name, look and outlook. Take your turn.",
      "List the other characters’ names."
    ],
    postamble: [
      "On the others’ turns, answer their questions as you like.",

      "Bonds represent how interested you are in another character, whether it is affection or hate.",
      "At any time if your bond to another character increases to +4, reset it to +1 (and therefore mark experience). If your bond to another character reduces to -3, reset it to +0 (and therefore mark experience)."
    ]
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

  $scope.peripheralMoves = getPeripheralMoves();
  $scope.battleMoves = getBattleMoves();
  $scope.vehicleMoves = getVehicleMoves();
  $scope.vehicleHarmMoves = getVehicleHarmMoves();
  $scope.knownSolarSystems = getKnownSystems();
  $scope.knownFactions = getKnownFactions();
  $scope.playbooks = getStarWorldPlaybooks();
  //$scope.npbList = getStarWorldNonplaybookMoves();
  $scope.reusedFeatureCatalog = getReusedFeatureCatalog();
  $scope.reusedFeatureCatalog_MC = getReusedFeatureCatalog_MC();

  $scope.MC = {
    basics: getMC_basics(),
    firstSession: getMC_firstSession(),
    threatMapTools: getMC_threatMapTools()
  };
});



