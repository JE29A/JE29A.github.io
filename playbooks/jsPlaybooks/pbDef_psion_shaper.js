function getPBDef_psion_shaper() {
  var trope = "shaper";
  var moves = [], calamities = [];

  var names = [
    "Alken", "McKinley", "Stanton", "Tobias", "Wynn", "Phoebe", "Cayla", "Regine", "Terica", "Teisha", "Corrinne", "Keva"
  ].sort().join(', ') + ".";

  var looks = getLooks({ buff: true, experienced: true, sloppy: true, private: true });

  var gearInstructions = "Choose 4 Gear from the list below to start with:";
  var gear = [
    "Pistol (2 harm, near/close, loud)",
    "Stutter Pistol (1 harm, near/clear, loud, nonlethal)",
    "Subdual Weapon (1 harm, near, silent, nonlethal)",
    "Tactical Pack (3 uses)",
    "Extra Ammo (3 uses)",
    "Scanner",
    "Vacsuit"
  ];

  var blurbs = [
    {text: "Psions are the practiced psychics of known space, and they look like anyone else. The ones that can control their own bodies on a microscopic level are called shapers."},
    {text: "Shapers are the only psions that focus their power more internally. They can go without food or water, heal quickly, bend their bio energy into a weapon, and even phase matter. As a result, they tend to attract less stigma than the other kinds."},
    {class: "font-italic", text: "Shapers are the oddest of the psions because their power is focused internally. Their moves are powerful, but not entirely outside the range of what other characters can accomplish."}
  ];

  moves.push({
    label: "Bio-mastery",
    symbolClass: "checked",
    children: [
      {
        type: "p",
        list: [
          {
            text: "When "
          },{
            class: "font-bold",
            text: "you recover to Shrug It Off,"
          },{
            text: " Clear both \"Just a scratch\" and \"I'm rattled\" on yourself."
          }
        ]
      }
    ]
  });

  moves.push({
    label: "Healer",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires Bio-mastery) When " },
          { class: "font-bold", text: "you perform psychic-surgery on yourself or someone else" },
          { text: ", roll+Cool. On a hit, the subject heals \"I'm hurt bad.\" On a 10+, choose 1." }
        ]
      },{
        type: "ul",
        list: [
          [{text: "It only takes a minute to perform."}],
          [{text: "The subject also heals \"Just a scratch\" or \"I'm rattled.\""}]
        ]
      }
    ]
  });

  moves.push({
    label: "Bio Weapon",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires Bio-mastery) When " },
          { class: "font-bold", text: "you use your bio-energy to threaten with violence or exchange harm," },
          { text: " roll+Cool instead of +Tough." }
        ]
      }
    ]
  });

  moves.push({
    label: "Hardened",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires Bio-mastery) While you are conscious, you have +1 armor (max 2)." },
        ]
      }
    ]
  });

  moves.push({
    label: "Intangibility",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires Bio-mastery) When " },
          { class: "font-bold", text: "you want to phase something you are touching," },
          { text: " roll+Cool. On a hit, you are able to phase yourself. On a 10+, you can also phase up to two additional people or a surface. On a miss, prepare for the worst!" }
        ]
      }
    ]
  });

  return {
    trope: trope,
    trope2: trope.toLowerCase().replace(/ /g, '_'),
    blurbs: blurbs,
    names: names,
    looks: looks,
    gearInstructions: gearInstructions,
    gear: gear,
    statAdvice: "Cool is your main stat.",
    moves: moves,
    moveCreation: [
      ""
    ],
    calamities: calamities
  };
}
