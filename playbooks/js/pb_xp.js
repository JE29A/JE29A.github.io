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
        count: 2
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
    text: "Your journey is over, you pass away, unmourned and unnoticed by the universe."
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
      label: "Masochistic",
      text: "When you suffer one or more harm."
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
