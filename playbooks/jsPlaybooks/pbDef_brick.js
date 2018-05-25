function getPBDef_brick() {
  var trope = "brick";
  var moves = [], calamities = [];

  var names = [
    "Thrax", "Shen", "Bastion", "Helm", "Valik", "Handen", "Mei", "Phasral", "Malcom", "Desen", "Harric", "Grunt"
  ].sort().join(', ') + ".";

  var looks = getLooks({ buff: true, veteran: true, soldier: true });

  var gearInstructions = "Choose 5 Gear from the list below to start with:";
  var gear = [
    "Pistol (2 harm, near/close, loud)",
    "Assault Rifle (2 harm, close/far, autofire, loud)",
    "Flechette (3 harm, close, loud, messy, -1 vs armor)",
    "Subdual Weapon (1 harm, near, silent, nonlethal)",
    "Bladed Weapon (2 harm, near, silent)",
    "Tactical Armor (1 armor)",
    "Tactical Pack (3 uses)",
    "Extra Ammo (3 uses)",
    "Scanner",
    "Vacsuit"
  ];

  moves.push({
    label: "\"You And What Army?\"",
    class: "",
    children: [
      {
        type: "p",
        list: [
          {
            text: "When "
          },{
            class: "font-bold",
            text: "you match yourself against a group in battle,"
          },{
            text: " you ignore extra incoming harm equal to your Cool+Sharp."
          }
        ]
      }
    ]
  });

  moves.push({
    label: "Always Be Prepared",
    children: [
      {
        type: "p",
        list: [
          {
            text: "When ",
          },{
            class: "font-bold",
            text: "you recover in battle,"
          },{
            text: " declare you will use at least one hold to use First Aid on an ally or repair a weapon to roll+Tough instead of +Cool."
          }
        ]
      }
    ]
  });

  moves.push({
    label: "Bail",
    children: [
      {
        type: "p",
        list: [
          {
            text: "When "
          },{
            class: "font-bold",
            text: "you see an opportunity get out,"
          },{
            text: " name it and roll+Tough. "
          },{
            class: "font-bold inline-block",
            text: "On a 10+,"
          },{
            text: " you make it. "
          },{
            class: "font-bold inline-block",
            text: "On a 7-9,"
          },{
            text: "you can go or stay, but if you go it costs you: leave something behind, or take something with you, the MC will tell you want. "
          },{
            class: "font-bold inline-block",
            text: "On a miss,"
          },{
            text: " you're caught vulnerable, half in and half out. "
          },{
            class: "font-bold inline-block",
            text: "Prepare for the worst!"
          }
        ]
      }
    ]
  });

  moves.push({
    label: "Battle-hardened",
    children: [
      {
        type: "p",
        list: [
          {
            text: "When ",
          },{
            class: "font-bold",
            text: "you act under pressure or stand overwatch,"
          },{
            text: " roll+Tough instead of +Cool."
          }
        ]
      }
    ]
  });

  moves.push({
    label: "Brutally Effective",
    children: [
      {
        type: "p",
        list: [
          {
            text: "Whenever you inflict harm, inflict +1 harm.",
          }
        ]
      }
    ]
  });

  moves.push({
    label: "Heavy Weapon",
    children: [
      {
        type: "p",
        list: [
          {
            text: "You have a special weapon that doesn't count against your gear slots, choose 1:"
          }
        ]
      },{
        type: "ul",
        list: [
          [
            {
              text: "Penetrator Rifle (4 harm, far/extreme, armor piercing, loud)."
            }
          ],[
            {
              text: "Plasma Cannon (4 harm, close, dangerous, messy)."
            }
          ],[
            {
              text: "Rocket Launcher (4 harm, far/extreme, area, loud, messy, reload)."
            }
          ],[
            {
              text: "Silenced Sniper Rifle (3 harm, far/extreme)."
            }
          ]
        ]
      }
    ]
  });

  moves.push({
    label: "Pulse of the Fight",
    children: [
      {
        type: "p",
        list: [
          {
            text: "When "
          },{
            class: "font-bold",
            text: "you assess a situation during battle,"
          },{
            text: " roll+Tough instead of +Sharp."
          }
        ]
      }
    ]
  });

  /*
  calamities.push({
    text: "You suffer a terrible wound, illness, or debility. Describe what you have lost."
  });
  */

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
