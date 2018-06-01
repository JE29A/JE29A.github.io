function getPBDef_medtech() {
  var trope = "medtech";
  var moves = [], calamities = [];

  var names = [
    "Alken", "McKinley", "Stanton", "Tobias", "Wynn", "Phoebe", "Cayla", "Regine", "Terica", "Teisha", "Corrinne", "Keva"
  ].sort().join(', ') + ".";

  var looks = getLooks({ veteran: true, experienced: true, smart: true, nosy: true, confident: true });

  var gearInstructions = "Choose 4 Gear from the list below to start with:";
  var gear = [
    "Stutter Pistol (1 harm, near/clear, loud, nonlethal)",
    "Subdual Weapon (1 harm, near, silent, nonlethal)",
    "Bladed Weapon (2 harm, near, silent)",
    "Tactical Pack (3 uses)",
    "Extra Ammo (3 uses)",
    "Scanner",
    "Vacsuit"
  ];

  var blurbs = [
    {text: "When the worst has happened and you are leaking your life onto the bulkhead, you don't want just any doctor -- a family practitioner is not going to be able to dig a hollowpoint out of your insides. It doesn't matter that half of the tools they carry practically run themselves, you still want a crisis tested professional. You want a medtech."},
    {text: "A medtech will drag you to cover and staple you together so you live long enough to reach proper facilities. And you won't feel a thing the entire way."},
    {class: "font-italic", text: "Medtechs aren't necessarily doctors, but they often perform those duties on frontier worlds without the ability to lure permanent transplants. Warning: if things are going well, it is possible your core feature. Make interesting relations so you'll stay relevant."}
  ];

  moves.push({
    label: "Medtech Kit",
    symbolClass: "checked",
    children: [
      {
        type: "ul",
        text: "You have a portable kit of all kinds of medical marvels.",
        list: [
          [{text: "Machining tools"}]
        ]
      },{
        type: "ul",
        text: "When you go into your workspace and dedicate yourself to making a thing, or to getting to the bottom of something, decide waht and tell the MC. The MC will tell you 1-4 of the following complications:",
        list: [
          [{text: "How long it will take to work out/through."}]
        ]
      },{
        type: "p",
        list: [
          {text: "The MC might connect them all with \"and,\" or might make it easier with an \"or.\" Once you've accomplished the necessaries, you can go ahead and accomplish the thing itself. The MC will stat it up, explain, or whatever it calls for."}
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
