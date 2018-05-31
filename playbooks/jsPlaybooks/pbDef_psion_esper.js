function getPBDef_psion_esper() {
  var trope = "esper";
  var moves = [], calamities = [];

  var names = [
    "Alken", "McKinley", "Stanton", "Tobias", "Wynn", "Phoebe", "Cayla", "Regine", "Terica", "Teisha", "Corrinne", "Keva"
  ].sort().join(', ') + ".";

  var looks = getLooks({ nosy: true, sensitive: true, detective: true, fashionable: true, private: true });

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
    {text: "Psions are the practiced psychics of known space, and they look like anyone else. People with Extra Sensory Perception are called espers, and 'extra' doesn't give what they perceive justice."},
    {text: "Being an esper isn't a walk in the park. Mundies think their lives are loud? Try being open to the feelings, or even the thoughts, of everyone around you. So you have your own baggage and the impressions of everyone around you's baggage. On top of that, nearly every faction has strict regulations that apply to psions; ranging from mandatory conscription to total criminality. No one likes the idea of someone being able to snoop on their private thoughts."},
    {class: "font-italic", text: "Espers are spooky. If you want to be in on everyone else's private business, play an esper. Their moves extend what other characters can do to add range or discretion. Warning: you are empath if not more, so expect to make people uncomfortable."}
  ];

  moves.push({
    label: "ESP",
    symbolClass: "checked",
    children: [
      {
        type: "p",
        list: [
          {text: "(Passive) When "},
          {class: "font-bold", text: "you read someone nearby,"},
          {text: " you can ask if they are telling the truth without making a move or using a hold. "},
          {text: "You sense the usage of psychic moves nearby. If, "},
          {class: "font-bold", text: "you come into physical contact with a person,"},
          {text: " add \"Are you a psion?\" as a question when you read a person. If you are a mind reader, you no longer need to be in physical contact."}
        ]
      }
    ]
  });

  moves.push({
    label: "Clairvoyant",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires ESP) You can use " },
          { class: "font-bold", text: "read a person and assess a situation from a great distance" },
          { text: " if you can justify a connection (e.g. know the subject, or looking at the other side of a barrier)." }
        ]
      }
    ]
  });

  moves.push({
    label: "Mind Reader",
    children: [
      {
        type: "p",
        list: [
          { text: "(Requires ESP) When " },
          { class: "font-bold", text: "you sift through a person's thoughts," },
          { text: " treat it as a read a person move. Spend your holds on normal questions, or one of the following:" }
        ]
      },{
        type: "ul",
        list: [
          [{text: "They don't notice the intrusion or what you learned."}],
          [{text: "What are they thinking about?"}]
        ]
      }
    ]
  });

  moves.push({
    label: "Postcog",
    children: [
      {
        type: "p",
        list: [
          {text: "(Requires ESP) When " },
          {class: "font-bold", text: "you touch an item or location and try to experience what happened,"},{text: " roll+Sharp. On a 10+, hold 3. On a 7-9, hold 1. Spend your holds to ask questions from the read a person or assess a situation moves."}
        ]
      }
    ]
  });

  moves.push({
    label: "Precog",
    children: [
      {
        type: "p",
        list: [
          {text: "(Requires ESP) When " },
          {class: "font-bold", text: "you rely on glimpses of the near future to act under pressure,"},
          {text: " roll+Sharp instead of +Cool." }
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
    statAdvice: "Sharp is your main stat.",
    moves: moves,
    moveCreation: [
      ""
    ],
    calamities: calamities
  };
}
