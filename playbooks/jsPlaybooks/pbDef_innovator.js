function getPBDef_innovator() {
  var trope = "innovator";
  var moves = [], calamities = [];

  var names = [
    "Alken", "McKinley", "Stanton", "Tobias", "Wynn", "Phoebe", "Cayla", "Regine", "Terica", "Teisha", "Corrinne", "Keva"
  ].sort().join(', ') + ".";

  var looks = getLooks({ dirty: true, experienced: true, smart: true, bossy: true, sloppy: true });

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
    {text: "When only an impossible solution can set things right, people turn to the innovator. They might not have discovered hyperspace, but they figured out how to avoid having a ship get ripped apart by competing gravity (before too many killed themselves sailing into them anyway)."},
    {text: "Any ship setting off for parts unknown probably has at least one innovator onboard."},
    {class: "font-italic", text: "Innovators are the zany inventors. They can fix things, but they really shine when they are pushing the bounds of what is possible. Play a innovator if you want to be instrumental in specific circumstances. Warning: your workspace depends on resources, and lots of them, so make friends with everyone you can."}
  ];

  /*
  moves.push({
    label: "Bonefeel",
    symbolClass: "",
    children: [
      {
        type: "p",
        list: [
          {class: "font-bold", text: "At the beginning of the session,"},
          {text: " roll+Smarts. On a hit, hold 1. On a 10+, you have a +1 forward when you spend the hold. At any time, either you or the MC can spend your hold to have you already be there, with the proper tools and knowledge, with or without any clear explanation why. On a miss, the MC holds 1, and can spend it to have you be there already, but somehow pinned, caught or trapped."}
        ]
      }
    ]
  });
  */

  moves.push({
    label: "Focused Intensity",
    symbolClass: "",
    children: [
      {
        type: "p",
        list: [
          {text: "When you "},
          {class: "font-bold", text: "act under pressure, stand overwatch, or bait a trap,"},
          {text: " roll+Smarts instead of +Cool."}
        ]
      }
    ]
  });

  moves.push({
    label: "Things Speak",
    symbolClass: "",
    children: [
      {
        type: "p",
        list: [
          {text: "When you "},
          {class: "font-bold", text: "handle or examine something,"},
          {text: " roll+Smarts. On a hit, you can ask the MC questions. On a 10+, ask 2. On a 7-9, ask 1:"}
        ]
      },{
        type: "ul",
        list: [
          [{text: "What's wrong with this, and how might I fix it?"}],
          [{text: "What is the most recent modification made to this?"}],
          [{text: "Who made this?"}],
          [{text: "What is it made of?"}],
          [{text: "What does it do?"}]
        ]
      }
    ]
  });

  moves.push({
    label: "Usually Right",
    symbolClass: "",
    children: [
      {
        type: "p",
        list: [
          {text: "When  "},
          {class: "font-bold", text: "a character comes to you for advice,"},
          {text: " tell them what you honestly think the best course is. If they do it, they take +1 to any rolls they make in the doing, and you mark experience."}
        ]
      }
    ]
  });

  moves.push({
    label: "Weird Science",
    symbolClass: "",
    children: [
      {
        type: "p",
        list: [
          {text: "Some component of your workspace, or some arrangement of components, is especially exotic (possibly from another dimension or level of reality). Choose and name it, or else leave it for the MC to reveal during play."}
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
