$(document).ready(function() {
  $('span.symbol.clickable').on('click', function() {
    $(this).toggleClass('checked');
  });
});

var app = angular.module('myApp',[]).controller("myPlaybooks", function($scope) {
  $scope.uniqueInputModel = {
    FTL: '',
    ships: {},
    shipType: ''
  };

  //functions
  $scope.firstLetterIsAVowel = firstLetterIsAVowel_def;
  $scope.repeatInObject = repeatInObject_def;
  $scope.repeatNTimes = repeatNTimes_def;
  $scope.groupArrIntoSets = groupArrIntoSets_def;
  //data
  $scope.shipPlaybooks = getShips();
  $scope.FTLs = getFTL();
  $scope.shipBays = getShipBays();
  $scope.shipModules = getShipModules();
  $scope.shipFuses = getShipFuses();
});

function getShipFuses() {
  var ret = [];

  ret.push({
    label: "Independent Spacers (Debt Clock)",
    fuseLabel: "Debt Clock",
    key: "",
    missionCompleteStr: "Get Paid",
    blurb: "Your crew are independent spacers trying to make a living and also to pay off the debt on your ship. You'll need to take jobs, and earn big to keep the debt collectors at bay.",
    looks: "Dirty, rusted, grimy, worn, outdated, stuttering, dented, rattles, listing, scorched, ugly, functional.",
    creationList: [
      {
        title: "Debt and your Creditor",
        texts: [
          "Your starting Debt is 20 Payments. Write this figure in your Ship's Payments panel. Describe your Creditor and what makes them dangerous. Your Creditor's Disposition starts at Neutral, 0."
        ]
      }
    ],
    getPaidPrompt: [
      {text: "When "},
      {class: "font-bold", text: "your Crew successfully completes a Contract and collects their pay"},
      {text: " from the client or contact, roll+Contract Rating."}
    ],
    getPaidHolds: [
      [
        {class: "font-bold", text: "On a 13+, "},
        {text: "you did exceptionally well, choose 4."}
      ],[
        {class: "font-bold", text: "On a 10-12, "},
        {text: "you get a great deal, choose 3."}
      ],[
        {class: "font-bold", text: "On a 7-9, "},
        {text: "you you get what you excepted, choose 2."}
      ],[
        {class: "font-bold", text: "On a 6-, "},
        {text: "you get a raw deal or it is a set up. You may either walk away with a token payment and choose 1, or choose 2 but deal with an enemy that's found you and wants to settle things now."}
      ]
    ],
    getPaidChoices: [
      "You make a payment to your Creditor, reduce Payments by 1 and reset the Debt Clock.",
      "You pay to maintain your ship, clear Maintenance Past Due and reset the Maintenance Clock.",
      "You get the Ship patched up. Remove all Damage from the Ship.",
      "You purchase an Upgrade for your Ship.",
      "You go shopping for a new Vehicle, roll Test Drive.",
      "You fill the Ship's cargo hold with lucrative goods for slae elsewhere, roll Lucrative Exports to determine what Cargo is available.",
      "You divide the spoils for some walking around money, each crew member rolls on Hey Big Spender."
    ],
    getPaidAftermath: "After you've made your selections and resolved any consequent moves, you need to find more work.",
    rows: [
      [
        {
          colspan: 2,
          text: "Creditor",
          textClass: "h5 font-bold text-left",
          type: "textarea",
          riderClass: "border h6",
          riderStyle: "width: 100%;",
          riderRows: 7
        }
      ],[
        {
          cellClass: "padding-top text-left",
          text: "Payments",
          textClass: "h5 font-bold inline-block text-left",
          type: "input",
          riderType: "number",
          riderClass: "border h6 no-spinner text-center float-right",
          riderStyle: "width: 35px;",
          riderMin: 0,
          riderMax: 100
        },{
          cellClass: "padding-top text-right",
          text: "Disposition",
          textClass: "h5 font-bold inline-block",
          type: "input",
          riderType: "number",
          riderClass: "border h6 no-spinner text-center float-left",
          riderStyle: "width: 25px;",
          riderMin: -2,
          riderMax: 2
        }
      ]
    ],
    children: [
      {
        type: "p",
        list: [
          {
            text: "When "
          },{
            class: "font-bold",
            text: "you complete an episode"
          },{
            text: ", mark one Debt Clock. When "
          },{
            class: "font-bold",
            text: "the Debt Clock is full"
          },{
            text: ", reduce your creditor's Disposition by 1, and your Creditor comes looking for you."
          }
        ]
      },{
        type: "p",
        list: [
          {
            text: "Some moves will allow you to clear the Debt Clock and reduce your Payments. When your Payments reaches 0, you own your ship."
          }
        ]
      }
    ]
  });

  ret.push({
    label: "Organization Service (Duty Clock)",
    fuseLabel: "Duty Clock",
    key: "duty",
    missionCompleteStr: "Report Success",
    blurb: "You are semi-autonomous special agents of an organization. Your organization may be an espionage & intelligence agency, a corporation, a government, or a security & investigation agency or association. It may be a local organization looking to expand or already a galaxyspanning. Your Organization gives you missions, but leave how you complete them up to you.",
    looks: "Sleek, Chrome, Elegant, Murmuring, Smooth, Sharp, Functional, Military, Advanced, Experimental, Prototype, Spacious.",
    creationList: [
      {
        title: "Duty & Rank",
        texts: [
          "Your Organization commands you, and you have a duty to them. As a group of semi-autonomous Specialists, your crew will be given missions by your Organization that furthers their agenda, purpose, or duty.",
          "Describe your Organization and their purpose. Your Crew starts at Rank 0. Your Rank has a minimum value of -1 and a maximum of +3."
        ]
      }
    ],
    getPaidPrompt: [
      {text: "When "},
      {class: "font-bold", text: "your Crew successfully completes a Mission and is debriefed by their superiors,"},
      {text: " roll+Rank."}
    ],
    getPaidHolds: [
      [
        {class: "font-bold", text: "On a 13+, "},
        {text: "your superiors are extremely impressed, choose 4."}
      ],[
        {class: "font-bold", text: "On a 10-12, "},
        {text: "you are commended for your service, choose 3."}
      ],[
        {class: "font-bold", text: "On a 7-9, "},
        {text: "your work is recognized, choose 2."}
      ],[
        {class: "font-bold", text: "On a 6-, "},
        {text: "your failures are focused on or someone else steals your glory. Choose 1 or confront that rival within your Organization to choose 2."}
      ]
    ],
    getPaidChoices: [
      "You make the right connections within your Organization, increase Duty by 1.",
      "You put your Ship in for a service, and reset the Maintenance Fuse.",
      "You get your Ship patched up. Remove all Damage from the Ship",
      "You requisition an Upgrade for your Ship.",
      "You requisition a new Vehicle.",
      "You collect your Salary and have off-duty time to spend it, each crew member rolls on Hey Big Spender."
    ],
    getPaidAftermath: "After you've made your selections and resolved any consequent moves, You've used up your off-duty time, and another mission awaits.",
    rows: [
      [
        {
          colspan: 2,
          text: "Organization",
          textClass: "h5 font-bold text-left",
          type: "textarea",
          riderClass: "border h6",
          riderStyle: "width: 100%;",
          riderRows: 7
        }
      ],[
        {
          cellClass: "padding-top text-left vertical-align-top",
          text: "Rank",
          textClass: "h5 font-bold inline-block text-left",
          type: "input",
          riderType: "number",
          riderClass: "border h6 no-spinner text-center float-right",
          riderStyle: "width: 40px;",

          riderMin: -1,
          riderMax: 3
        },{
          cellClass: "padding-top text-right vertical-align-top",
          text: "Disposition",
          textClass: "h5 font-bold inline-block text-right",
          type: "input",
          riderType: "number",
          riderClass: "border h6 no-spinner text-center float-left",
          riderStyle: "width: 40px;",
          riderMin: -2,
          riderMax: +2
        }
      ]
    ],
    children: [
      {
        type: "p",
        list: [
          {
            text: "When "
          },{
            class: "font-bold",
            text: "the Duty Clock is full"
          },{
            text: ", reset it and increase your Rank by 1, to a maximum Rank of +3. When you fail in a mission set by your Organization, the MC will tell you one of the following:"
          }
        ]
      },{
        type: "ul",
        list: [
          [
            {
              class: "font-italic",
              text: "Your failure has affected many in your Organization, and your reputation takes a hit. Reduce your Organization's Disposition by 1."
            }
          ],[
            {
              class: "font-italic",
              text: "Your failure goes on your permanent record. Reduce Duty by 1. If your Duty is at 0, reduce Rank by 1 to a minimum Rank of -1."
            }
          ]
        ]
      }
    ]
  });

  ret.push({
    label: "Pirates (Crime Clock)",
    fuseLabel: "Crime Clock",
    key: "pirate",
    missionCompleteStr: "Fence Cargo",
    blurb: "Freebooters, Corsairs, Buccaneers, Privateers. You may be called many things, but it is very clear what you are. No good, low down, dirty pirates. You prey on the weak, take what you want, and kill anyone who gets in your way. No-one expects mercy from pirates, and so they will give no mercy to you. At least, that's your reputation. Will you live up to the name you have been given as violent, bloodthirsty illegals, or will you carve a more noble destiny?",
    looks: "Brutal, Predatory, Spikes, Skulls, Dangerous, Mismatched, Intimidating, Piecemeal, Ugly, Vicious, Rusty, Black, Functional, Cramped, Rattling, Groaning.",
    creationList: [
      {
        title: "Crime & Infamy",
        texts: [
          "As a pirate ship, you have infamy for breaking the law and attacking the innocent, whether that reputation is justified or not. As such, you are wanted by a powerful agency of galactic law.",
          "Describe the nature of your crews criminal reputation, and why civilized space hates and fears you. When you complete a Contract or Episode Strain that brings your Crimes to the attention of others, mark the Crime Clock."
        ]
      }
    ],
    getPaidPrompt: [
      {text: "When "},
      {class: "font-bold", text: "your Crew successfully completes a Contract or a Raid and sells their spoils or collects their pay,"},
      {text: " roll+Contract Rating."}
    ],
    getPaidHolds: [
      [
        {class: "font-bold", text: "On a 13+, "},
        {text: "you make out like bandits, choose 4."}
      ],[
        {class: "font-bold", text: "On a 10-12, "},
        {text: "you get a great deal, choose 3."}
      ],[
        {class: "font-bold", text: "On a 7-9, "},
        {text: "you get what you expected, choose 2."}
      ],[
        {class: "font-bold", text: "On a 6-, "},
        {text: "it's a raw deal or a set up. You may either walk away with a token payment and choose 1, or choose 2 but a rival or the authorities show up to ruin your day."}
      ]
    ],
    getPaidChoices: [
      "You pay Fines or frame someone else for your crimes, uncheck Infamous and reset the Crime Fuse.",
    "You pay the bills, you pay the maintenance costs for your ship, and reset the Maintenance Fuse.",
    "You get the Ship patched up. Remove all Damage from the Ship.",
    "You purchase an Upgrade for your Ship.",
    "You go shopping for a new Vehicle, roll Test Drive.",
    "You fill your ship’s cargo hold with lucrative goods for sale elsewhere, roll Lucrative Exports to determine what Cargo is available.",
    "You divide the spoils for some walking around money, each crew member rolls on Hey Big Spender."
    ],
    getPaidAftermath: "After you've made your selections and resolved any consequent moves, you're broke again and need to find more prey.",
    rows: [
      [
        {
          colspan: 2,
          text: "Reputation",
          textClass: "h5 font-bold text-left",
          type: "textarea",
          riderClass: "border h6",
          riderStyle: "width: 100%;",
          riderRows: 7
        }
      ]
    ],
    children: [
      {
        type: "p",
        list: [
          {
            text: "When "
          },{
            class: "font-bold",
            text: "you complete a Contract or Episode that reinforces your criminal Reputation"
          },{
            text: ", increase your Crime Clock by 1. When "
          },{
            class: "font-bold",
            text: "your Crime Clock is full"
          },{
            text: ", mark Infamous."
          }
        ]
      },{
        type: "div",
        class: "h5",
        symbols: [
          {
            class: "empty",
            count: 1
          }
        ],
        text: "Infamous",
        textClass: "h5 font-bold"
      },{
        type: "p",
        list: [
          {text: "When you roll The Crew Is Back In Town while Infamous is checked, you have Disadvantage."}
        ]
      }
    ]
  });

  return ret;
}

function getFTL() {
  var ret = [];

  ret.push({
    label: "None",
    key: "",
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
          text: ", something went wrong!"
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
          text: "Translation Trauma:"
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
    if (ret[i].key == undefined) {
      ret[i].key = ret[i].label.replace(/ /g, '_').toLowerCase();
    }
  }

  ret.sort(function(a, b) {
    if (a.key == '') { return -1; }
    if (b.key == '') { return 1; }
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

function getShipBays() {
  var ret = [];

  ret.push({
    name: "Crew Quarters",
    symbols: [],
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "The Ship has births for the main crew."
          }
        ]
      },{
        type: "textarea",
        class: "h7 font-normal border",
        style: "width: 100%;",
        rows: 12
      }
    ]
  });

  ret.push({
    name: "Cargo Bay",
    symbols: [],
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "The Ship starts with a standard cargo bay. If your ship also has hidden storage, make sure to note what is placed where."
          }
        ]
      },{
        type: "textarea",
        class: "h7 font-normal border",
        style: "width: 100%;",
        rows: 16
      }
    ]
  });

  ret.push({
    name: "Computer Core",
    symbols: [
      {
        class: "empty checked",
        count: 0
      },{
        class: "empty",
        count: 3
      }
    ],
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "The Ship's main computer houses a semi self-aware Virtual Intelligence that is capable of operating the ship. Detail the Ship VI's name. "
          },{
            class: "",
            text: "The Ship VI's stats are determined by how many Upgrade Points you have invested in this Module."
          }
        ]
      },{
        type: "ul",
        class: "li-none",
        list: [
          [
            {
              class: "inline-block",
              style: "width: 83px;",
              text: "1 Upgrade Point:"
            },{
              class: "",
              text: "=0/=0/-1/-1/-2"
            }
          ],[
            {
              class: "inline-block",
              style: "width: 83px;",
              text: "2 Upgrade Point: "
            },{
              class: "",
              text: "+1/=0/=0/-1/-1"
            }
          ],[
            {
              class: "inline-block",
              style: "width: 83px;",
              text: "3 Upgrade Points: "
            },{
              class: "",
              text: "+1/+1/=0/=0/-1"
            }
          ]
        ]
      },{
        type: "p",
        class: "",
        list: [
          {
            class: "",
            text: "The ship also has 1 or 2 personality traits from below (or make up your own)."
          }
        ]

      },{
        type: "p",
        class: "text-center font-italic",
        list: [
          {
            class: "",
            text: "Bloodthirsty, Pacifist, Posh, Crude, Indecisive, Curious, Thoughtful, Lonely, Dispassionate"
          }
        ]
      }
    ]
  });

  return ret;

  ret.push({
    name: "",
    symbolClass: "",
    symbolCount: 1,
    hasDischarged: true,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: ""
          }
        ]
      },{
        type: "ul",
        class: "",
        list: [
          [
            {
              class: "",
              text: ""
            }
          ]
        ]
      }
    ]
  });
}

function getShipModules() {
  var ret = [];

  ret.push({
    name: "FTL Capable",
    symbolClass: "empty",
    symbolCount: 1,
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Your ship is FTL capable. Select a choice on the front page."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Additional Habital Space",
    symbols: [
      {
        class: "empty",
        count: 1
      }
    ],
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "The Ship can carry many more passengers and has additional comforts."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Advanced Sensors",
    symbolClass: "empty",
    symbolCount: 1,
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Advanced sensors allow yoru ship to quickly acquire and analyze massive amounts of data. You have Advantage on "
          },{
            class: "font-bold",
            text: "assess a situation"
          },{
            class: "",
            text: " using your ship's sensors to "
          },{
            class: "font-bold",
            text: "run a scan"
          },{
            class: "",
            text: "."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Attached Transport Shuttle",
    symbolClass: "empty",
    symbolCount: 1,
    hasDischarged: false,
    tags: "3 Hits, Spacefaring, Cargo, Passengers, Workhorse",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "A basic model shuttle that attaches to the outer hull of your ship. The shuttle doesn't have any weapons or defenses of its own, but it's perfect for getting some passengers or cargo from one place to another."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Hidden Storage",
    symbols: [
      {
        class: "empty",
        count: 1
      }
    ],
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "In addition to the normal cargo bay, the Ship has a hidden one that is shielded against deep scans. A careful search of the ship will eventually notice missing volume in the ship."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Mining Equipment",
    symbols: [
      {
        class: "empty",
        count: 1
      }
    ],
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Your ship is equiped with the necessary equipment to fracture and collect minerals from asteroids or planet surfaces."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Infirmary/Autodoc",
    symbolClass: "empty",
    symbolCount: 2,
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "For 1 Upgrade Point, the Ship has an infirmary that can accomodate many patients. Restocked as part of maintaining the ship."
          }
        ]
      },{
        type: "p",
        list: [
          {
            class: "",
            text: "For 2 Upgrade Points, the infirmary also has an Autodoc bay that can treat injuries or wounds. Unsympathetic, rough surgery in an Autodoc heals the \"I'm Hurt Bad\" Harm. More unusual or bizarre maladies require an expert."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Machine Shop/Fabricator",
    symbolClass: "empty",
    symbolCount: 2,
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "With 1 Upgrade Point, the Ship has a machine shop where some components can be created with enough time. With 2 Upgrade Points, the ship has advanced fabricating printers that can create nanocircuitry if it has the necessary raw materials."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Extra Hull Plating",
    symbolClass: "empty",
    symbolCount: 3,
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Your ship may take 1 extra hit of superficial damage for each Upgrade Point spent on this Module."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Redundant Systems",
    symbolClass: "empty",
    symbolCount: 1,
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Redundant systems and backups make your ship more reliable. Your ship can take an additional System Hit harm. Additionally, you have Advantage when making repairs in a fraught situation."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Sidewalls",
    symbolClass: "empty",
    symbolCount: 2,
    hasDischarged: true,
    tags: "Discharge",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Your ship can generate reinforcement shielding. When you at hit, Discharge Sidewalls and ignore 1 instance of Damage dealt to your Ship or Vehicle."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Lasers",
    symbolClass: "empty",
    symbolCount: 1,
    hasDischarged: false,
    tags: "1 Damage, Near/Close/Far, Discharge",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Versatile, low cost, accuracy in a vacuum make cohesive beam weapons like lasers the most common and reliable ship-to-ship weapons in production."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Missiles",
    symbolClass: "empty",
    symbolCount: 2,
    hasDischarged: false,
    tags: "2 Damage, Close/Far/Extreme",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Missiles are launched by rails before activating onboard rockets. You have Disadvantage on attacks at extreme range if the target is able to alter course. If a target's course is entirely predictable, a missile could be sent on a ballastic course and have an effectively infinite range."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Plasma Cannon",
    symbolClass: "empty",
    symbolCount: 2,
    hasDischarged: false,
    tags: "3 Damage, Close/Far",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Plasma cannons fire magnetically bundled balls of superheated tungsten. The magnetic bundle that holds it together dissipates before it can go beyond far range."
          }
        ]
      }
    ]
  });

  ret.push({
    name: "Railgun",
    symbolClass: "empty",
    symbolCount: 3,
    hasDischarged: false,
    tags: "4 Damage, Close/Far",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Railguns magnetically propel small, high density slugs at extremely high velocity. You can use one at infinite range against target's with predictable courses."
          }
        ]
      }
    ]
  });

    ret.push({
    name: "Specialized Compartments",
    symbolClass: "empty",
    symbolCount: 3,
    hasDischarged: false,
    tags: "",
    children: [
      {
        type: "p",
        list: [
          {
            class: "",
            text: "Your ship has an additional specialized compartment for each Upgrade Point. Detail them."
          }
        ]
      },{
        type: "textarea",
        class: "h7 font-normal border",
        style: "width: 100%;",
        rows: 6
      }
    ]
  });

  return ret;
}
