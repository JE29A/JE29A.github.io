function getPBDef_psion_porter() {
  var trope = "porter";
  var moves = [], calamities = [];

  var names = [
    "Alken", "McKinley", "Stanton", "Tobias", "Wynn", "Phoebe", "Cayla", "Regine", "Terica", "Teisha", "Corrinne", "Keva"
  ].sort().join(', ') + ".";

  var looks = getLooks({ spy: true, experienced: true, fashionable: true, sloppy: true });

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
    {text: "Psions are the practiced psychics of known space, and they look like anyone else. People with power over time and space are called porters."},
    {text: "Often confused with tekes, porters don't actually move things, they bend time and space around things. Porters are known to be able to pull and push items forward in time, teleporting from place, and sometimes even call future versions of themselves back in time temporarily."},
    {class: "font-italic", text: "Warning: Some porter moves require you to know the history of a place."}
  ];

  moves.push({
    label: "Apportation",
    symbolClass: "checked",
    children: [
      {
        type: "p",
        list: [
          {
            text: "When "
          },{
            class: "font-bold",
            text: "you want to pull or push an object forward in time,"
          },{
            text: " state the object you seek to move and roll+Smarts. On a 10+, choose 3. On a 7-9, choose 2:"
          }
        ]
      },{
        type: "ul",
        list: [
          [{ text: "The object is larger than 2 kg (but not more than 4 kg)." }],
          [{ text: "The object originated or lands at a point far away in space." }],
          [{ text: "The object pulled is similar in function. (Choose this twice to have it be almost exactly the same, e.g. a different gun.)" }],
          [{ text: "The object pushed is at close range. (Chose this twice to target something at far range.)" }],
          [{ text: "The object pushed is moving rapidly relative to you." }],
          [{ text: "You push the object almost exactly as far into the future as you intended." }]
        ]
      }
    ]
  });

  moves.push({
    label: "Duplicate",
    class: "",
    children: [
      {
        type: "p",
        list: [
          {
            text: "(Requires Apportation) When "
          },{
            class: "font-bold",
            text: "you want to pull version of yourself from the future,"
          },{
            text: " roll+Smarts. On a hit, \"you\" show up for 20 seconds (max 2 moves performed). On a 10+, choose 2. On a 7-9, choose 1:"
          }
        ]
      },{
        type: "ul",
        list: [
          [{ text: "Your future self is inclined to help." }],
          [{ text: "Your future self didn't need a reason to already be in the area." }],
          [{ text: "Your future self planned for this moment and has a handy item." }],
          [{ text: "Your future self stays long enough to do two extra moves." }]
        ]
      }
    ]
  });

  moves.push({
    label: "Teleport",
    class: "",
    children: [
      {
        type: "p",
        list: [
          {
            text: "(Requires Apportation) When "
          },{
            class: "font-bold",
            text: "you want to teleport across physical space,"
          },{
            text: " roll+Smarts. On a 10+, choose 3. On a 7-9, choose 2:"
          }
        ]
      },{
        type: "ul",
        list: [
          [{ text: "You arrive safely at a destination you can't see." }],
          [{ text: "You take +1 passenger along." }],
          [{ text: "You orient exactly as you planned. You have a +1 forward on your next " },
           { class: "font-bold", text: "act under pressure, threaten with vioelnce or battle move."}
          ]
        ]
      }
    ]
  });

  moves.push({
    label: "Timeslip",
    class: "",
    children: [
      {
        type: "p",
        list: [
          {
            text: "(Requires Apportation) When "
          },{
            class: "font-bold",
            text: "you want to teleport forward in time,"
          },{
            text: " roll+Smarts. On a hit, you go up to a dozen seconds in time. On a 10+, choose 1:"
          }
        ]
      },{
        type: "ul",
        list: [
          [{ text: "You go up to five minutes into the future." }],
          [{ text: "You go exactly as you intended. You have a +1 forward on your next " },
           { class: "font-bold", text: "act under pressure, threaten with vioelnce or battle move."}
          ]
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
    statAdvice: "Smarts is your main stat.",
    moves: moves,
    moveCreation: [
      ""
    ],
    calamities: calamities
  };
}
