function getPBDef_psion_teke() {
  var trope = "teke";
  var moves = [], calamities = [];

  var names = [
    "Hammer", "Ness", "McKinley", "Stanton", "Tobias", "Wynn", "Phoebe", "Cayla", "Regine", "Terica", "Teisha", "Corrinne", "Keva"
  ].sort().join(', ') + ".";

  var looks = getLooks({ spy: true, experienced: true, fashionable: true, sloppy: true, bossy: true });

  var gearInstructions = "Choose 4 Gear from the list below to start with:";
  var gear = [
    "Stutter Pistol (1 harm, near/clear, loud, nonlethal)",
    "Subdual Weapon (1 harm, near, silent, nonlethal)",
    "Tactical Armor (1 armor)",
    "Tactical Pack (3 uses)",
    "Scanner",
    "Vacsuit"
  ];

  moves.push({
    label: "TK",
    symbolClass: "checked",
    children: [
      {
        type: "p",
        list: [
          {
            text: "You can move things you can see with your mind. When "
          },{
            class: "font-bold",
            text: "you act under pressure to move something big or compete for control of an object,"
          },{
            text: " roll+Tough instead of +Cool. In addition, you can use your telekinesis as a weapon (1 harm near/close). If you fling objects it becomes obvious and may deal additional damage."
          }
        ]
      }
    ]
  });

  moves.push({
    label: "Kinetic Shield",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires TK) When " },
          { class: "font-bold", text: "you concentrate on your kinetic shield," },
          { text: " you have 2 armor and can prevent air from exchanging sides of the barrier, but take a -1 ongoing on all rolls while you do. If you want to hold against a vacuum, you my have to act under (no air) pressure." }
        ]
      }
    ]
  });

  moves.push({
    label: "Levitate",
    children: [
      {
        type: "p",
        list: [
          {text: "(Requires TK) When " },
          {class: "font-bold", text: "you act under pressure to resist gravity to float to a position,"},
          {text: " roll+Tough instead of +Cool." }
        ]
      }
    ]
  });

  moves.push({
    label: "TK-Electricity",
    children: [
      {
        type: "p",
        list: [
          {text: "(Requires TK) When "},
          {class: "font-bold", text: "you use your telekinesis as a weapon,"},
          {text: " can be 3 harm, near/close, obvious, messy (ignore messy when near)."}
        ]
      }
    ]
  });
  moves.push({
    label: "TK-Fire",
    children: [
      {
        type: "p",
        list: [
          {text: "(Requires TK) When "},
          {class: "font-bold", text: "you use your telekinesis as a weapon,"},
          {text: " can be 4 harm, close, obvious, dangerous."}
        ]
      }
    ]
  });
  moves.push({
    label: "TK-Force",
    children: [
      {
        type: "p",
        list: [
          {text: "(Requires TK) When "},
          {class: "font-bold", text: "you use your telekinesis as a weapon,"},
          {text: " can be 2 harm, close, forceful."}
        ]
      }
    ]
  });
  moves.push({
    label: "TK-Frost",
    children: [
      {
        type: "p",
        list: [
          {text: "(Requires TK) When "},
          {class: "font-bold", text: "you use your telekinesis as a weapon,"},
          {text: " can be 3 harm, close, obvious, restraining."}
        ]
      }
    ]
  });

  return {
    trope: trope,
    trope2: trope.toLowerCase().replace(/ /g, '_'),
    names: names,
    looks: looks,
    gearInstructions: gearInstructions,
    gear: gear,
    statAdvice: "Tough is your main stat.",
    moves: moves,
    moveCreation: [
      ""
    ],
    calamities: calamities
  };
}
