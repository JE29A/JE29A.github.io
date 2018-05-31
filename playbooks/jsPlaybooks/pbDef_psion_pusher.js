function getPBDef_psion_pusher() {
  var trope = "pusher";
  var moves = [], calamities = [];

  var names = [
    "Alken", "McKinley", "Stanton", "Tobias", "Wynn", "Phoebe", "Cayla", "Regine", "Terica", "Teisha", "Corrinne", "Keva"
  ].sort().join(', ') + ".";

  var looks = getLooks({ spy: true, experienced: true, fashionable: true, sloppy: true, bossy: true });

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
    {text: "Psions are the practiced psychics of known space, and they look like anyone else. People with telepathy are called pushers because they can push messages or even actions into other people's minds."},
    {text: "Pushers are the most disturbing of the psions. Shapers can adjust their own bodies, tekes can move things, and espers can dig into people's deepest secrets, but pushers can make other people do things."},
    {class: "font-italic", text: "Pushers are spooky and really fun to play. Their moves are powerful, but not entirely outside the range of what other characters can accomplish."}
  ];

  moves.push({
    label: "Telepathy",
    symbolClass: "checked",
    children: [
      {
        type: "p",
        list: [
          {
            text: "You can establish voluntary mental communication with other people nearby. When "
          },{
            class: "font-bold",
            text: "you want to establish mental communication with someone far away or unwilling,"
          },{
            text: " roll+Charm."
          }
        ]
      },{
        type: "ul",
        list: [
          [{text: "On a 10+, your message is received clearly."}],
          [{text: "On a 7-9, some details get confused."}],
          [{text: "On a miss, the subject knows you tried intrude, so you should prepare for the worst!"}]
        ]
      }
    ]
  });

  moves.push({
    label: "Mr. Cellophane",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires Telepathy) When " },
          { class: "font-bold", text: "you want to make people ignore you," },
          { text: " roll+Charm. On a 10+, you succeed. On a 7-9, choose 1. On a miss, prepare for the worst!" }
        ]
      },{
        type: "ul",
        list: [
          [{text: "You missed a few targets, you know which ones."}],
          [{text: "It won't last long."}]
        ]
      }
    ]
  });

  moves.push({
    label: "Mind Blast",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires Telepathy) When " },
          { class: "font-bold", text: "you attack with your telepathy" },
          { text: " (1 harm, close, ignores armor), roll+Charm." }
        ]
      }
    ]
  });

  moves.push({
    label: "Mind Shield",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires Telepathy) When " },
          { class: "font-bold", text: "you have to defend against or act under pressure because of a mental assault or intrusion," },
          { text: " roll+Charm. On a 10+, you either know where the effect came from or protect those around you from the effect." }
        ]
      }
    ]
  });

  moves.push({
    label: "Mind Wipe",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires Telepathy) When " },
          { class: "font-bold", text: "you try to push the most recent memories from a subject's mind," },
          { text: " roll+Charm. On a 10+, choose 3. On a 7-9, choose 1. On a miss, prepare for the worst." }
        ]
      },{
        type: "ul",
        list: [
          [{text: "You wipe memories from three additional people."}],
          [{text: "You erase 15 additional minutes of memories."}]
        ]
      }
    ]
  });

  moves.push({
    label: "Suggestion",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires Telepathy) When " },
          { class: "font-bold", text: "you implant an actionable idea in someone's mind," },
          { text: " roll+Charm. On a 10+, choose 1. On a 7-9, choose 2:" }
        ]
      },{
        type: "ul",
        list: [
          [{text: "They only obey non-harmful parts of your command."}],
          [{text: "They are stilted, clumsy, and obviously controlled."}],
          [{text: "You suffer 1 harm (ignores armor)."}]
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
    statAdvice: "Charm is your main stat.",
    moves: moves,
    moveCreation: [
      ""
    ],
    calamities: calamities
  };
}
