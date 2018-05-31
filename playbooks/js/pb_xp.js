function getXPRules() {
  var xpObj = {
    earn: [
      [
        {
          text: "When "
        },{
          class: "font-bold",
          text: "you roll a 6-, when a move directs you to, or the MC tells you to,"
        },{
          text: " mark Experience. when you have 5 marks, choose an improvement and clear your Experience."
        }
      ]
    ],
    rewards: [
      "Upgrade a Stat (max +3).",
      "Gain a gear slot (max 5).",
      "Gain a new playbook move.",
      "Gain a move from another playbook."
    ]
  };
  return xpObj;
}

function getHarmRules() {
  var ret = [];

  ret.push({
    label: "Just a Scratch",
    symbols: [
      {
        class: "empty",
        count: 1
      }
    ],
    text: "You're a bit banged up, but it's nothing serious. Can be healed by choosing Shrug it off when you roll Recover, or when a Scene ends."
  });

  ret.push({
    label: "I'm Rattled",
    symbols: [
      {
        class: "empty",
        count: 1
      }
    ],
    text: "You're shaken and shocked, you have Disadvantage ongoing to any +Cool, +Sharp, or +Smarts rolls. Can be healed by choosing Shrug it off when you roll Recover, or when a Scene ends."
  });

  ret.push({
    label: "I'm Hurt Bad",
    symbols: [
      {
        class: "empty",
        count: 1
      }
    ],
    text: "You have severe bleeding or broken bones, you have Disadvantage ongoing to any roll requiring physical exertion. Can be healed by receiving Surgery."
  });

  ret.push({
    label: "I'm Knocked Out",
    symbols: [
      {
        class: "empty",
        count: 1
      }
    ],
    text: "You've been knocked unconscious and can't move, act, or even see anything. Can be healed when an Ally chooses \"First Aid\" when they roll Recover, or when a Scene ends."
  });

  ret.push({
    label: "I Can't Go On",
    class: "",
    style: "column-span: all;",
    symbols: [
      {
        class: "empty",
        count: 1
      }
    ],
    text: "Your journey took a bad turn, if nothing changes, you will be one more dead spacer."
  });

  return ret;
}

function getFoibles() {
  var ret = [
    {
      label: "Behavioural",
      text: "Describe your ethical code. When adhering to your code hinders the mission."
    },{
      label: "Compassionate",
      text: "When you put aiding the powerless ahead of the mission."
    },{
      label: "Deceptive",
      text: "When your lies about your identity or your past put the mission at risk."
    },{
      label: "Filial",
      text: "When you put the advice of ___________ ahead of the mission."
    },{
      label: "Financial",
      text: "When you hinder the mission for a chance at extra profit."
    },{
      label: "Hierarchic",
      text: "When you improve your standing or impair a rival’s among ___________."
    },{
      label: "Illustrious",
      text: "When your desire for fame draws unwanted attention to the mission."
    },{
      label: "Intimate",
      text: "When you put your friend ___________ ahead of the mission."
    },{
      label: "Martyr",
      text: "When you needlessly expose yourself to harm to protect someone else."
    },{
      label: "Network",
      text: "When your membership in ___________ hinders the mission."
    },{
      label: "Proselytising",
      text: "Describe your belief system. When you persuade others to act according to your beliefs."
    },{
      label: "Protective",
      text: "When you put your responsibility to ___________ ahead of the mission."
    },{
      label: "Prudent",
      text: "When you resolve a charged situation without violence."
    },{
      label: "Rejected",
      text: "When your former membership in ___________ hinders the mission."
    },{
      label: "Revealing",
      text: "When you discover more information about ___________."
    },{
      label: "Vengeful",
      text: "When you harm ___________ or their interests."
    },{
      label: "Violent",
      text: "When you deliberately choose to use violence when a other non-violent options exists."
    }
  ];

  return ret;
}

function getLooks(tropes) {
  function addLooksToObj(obj, list) {
    var i;
    for(i = 0; i < list.length; i++) {
      obj[ list[i] ] = true;
    }
    return obj;
  }

  var ret = [], looks = {}, key;

  var lookList = {
    dirty: ["Dusty", "Worn", "Haggard", "Weary", "Scorched", "Pinched", "Shifty", "Grave"],
    detective: ["Determined", "Stubborn", "Surly", "Suspicious"],
    soldier: ["Stern", "Stoic", "Imposing"],
    buff: ["Heavy Build", "Rugged", "Calloused", "Hard"],
    veteran: ["Calloused", "Compassionate", "Grim", "Rugged", "Scarred", "Stoic", "Weary"],
    slight: ["Lithe", "Compact", "Sleek", "Slight", "Sharp", "Nimble", "Shadowy"],
    confident: ["Confident", "Competent", "Dexterous"],
    spy: ["Nondescript", "Paranoid"],
    private: ["Guarded", "Quiet"],
    nosy: ["Curious", "Nosy"],
    sensitive: ["Compassionate"],
    bossy: ["Commanding"],
    assertive: ["Aggressive", "Forceful"],
    smart: ["Aloof", "Distracted", "Skinny", "Focused", "Tidy", "Sharp"],
    experienced: ["Wise", "Calm"],
    old: ["Elderly", "Pudgy", "Aged", "Rusty", "Faded"],
    reclusive: ["Wiry", "Paunchy", "Pale", "Pallid", "Still", "Mysterious"],
    astristocratic: ["Elegant", "Polished", "Pristine", "Neat", "Respectable"],
    charming: ["Charming", "Expressive", "Sexy", "Hot"],
    unsure: ["Shifty", "Nervous", "Craven"],
    odd: ["Unconventional"],
    fashionable: ["Trendy", "Dapper"],
    sloppy: ["Scruffy", "Worn", "Mismatched", "Ragged"],
    wild: ["Wild", "Dangerous", "Hot-blooded", "Violent"]
  };

  for(key in tropes) {
    if ( tropes[key] ) {
      looks = addLooksToObj( looks, lookList[key] );
    }
  } 

  for(key in looks) {
    ret.push( key );
  }

  return ret.sort().join(", ") +".";
}

function getFrontText() {
  var ret = [];

  ret.push({
    label: "Campaign Questions",
    class: "auto-column-2",
    //style: "width: 50%;",
    children: [
      {
        type: "ul",
        text: "What kind of faster-than-light travel exists? Any special details?",
        containerClass: "keep-together padding-top",
        list: [
          [{text: "None (period)"}],
          [{text: "Wormholes or Gates"}],
          [{text: "Jump Drive (transit time?)"}],
          [{text: "Warp Drive"}],
          [{text: "Hyperspace (single layer, multiple?)"}],
          [{text: "Magical or psionic"}]
        ]
      },{
        type: "ul",
        text: "What is the home base for the campaign?",
        containerClass: "keep-together padding-top",
        list: [
          [{text: "Starship (cast is the crew)"}],
          [{text: "Big ship (cast are a portion of the crew, maybe with their own smaller ship"}],
          [{text: "Station, Planet, or Colony"}]
        ]
      },{
        type: "ul",
        text: "What is the scope the story can be expected to span in the campaign?",
        containerClass: "keep-together padding-top",
        list: [
          [{text: "Local to the home base"}],
          [{text: "Local to one system"}],
          [{text: "Multiple star systems"}]
        ]
      },{
        type: "ul",
        text: "How pulpy versus \"realistic\" is this campaign?",
        containerClass: "keep-together padding-top",
        list: [
          [{text: "Small crews with automated ships (Pulpy)"}],
          [{text: "Large crews (Realistic)"}]
        ]
      }
    ]
  });

  ret.push({
    label: "Player Agenda",
    children: [
      {
        type: "ul",
        list: [
          [{text: "Act like you're the protagonist in this story."}],
          [{text: "Play your character like they are a real person."}],
          [{text: "Play to find out what happens."}],
          [
            {text: "The story is advanced by making "},
            {class: "font-bold", text: "moves"},
            {text: ". The most basic rule for moves is "},
            {class: "font-bold", text: "to do it, you must do it"},
            {text: "."},
            {text: " Negative consequences sometimes happen; it would make for a boring story if everything went the protagonists' way."}
          ]
        ]
      }
    ]
  });
  
  return ret;
}
