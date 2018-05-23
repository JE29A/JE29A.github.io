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
          text: "mark Experience. when you have 5 marks, choose an improvement and clear your Experience."
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
    text: "You're a bit banged up, but it's nothing serious. Can be healed by choosing Shrug it off when you roll Recover, or when a Scene ends."
  });

  ret.push({
    label: "I'm Rattled",
    text: "You're shaken and shocked, you have Disadvantage ongoing to any +Cool, +Sharp, or +Smarts rolls. Can be healed by choosing Shrug it off when you roll Recover, or when a Scene ends."
  });

  ret.push({
    label: "I'm Hurt Bad",
    text: "You have severe bleeding or broken bones, you have Disadvantage ongoing to any roll requiring physical exertion. Can be healed by receiving Surgery."
  });

  ret.push({
    label: "I'm Knocked Out",
    text: "You've been knocked unconscious and can't move, act, or even see anything. Can be healed when an Ally chooses \"First Aid\" when they roll Recover, or when a Scene ends."
  });

  ret.push({
    label: "I Can't Go On",
    text: "Your journey is over, you pass away, unmourned and unnoticed by the vast black of space."
  });

  return ret;
}
