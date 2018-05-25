function getStats() {
  var stats = [];
  stats.push( getStat_charm() );
  stats.push( getStat_cool() );
  stats.push( getStat_sharp() );
  stats.push( getStat_smarts() );
  stats.push( getStat_tough() );
  //stats.push( getStat_smarts_old() );
  //stats.push( getStat_weird() );
  return {
    printMoves: true,
    moveClass: "",
    instructions: "Assign the following scores to your Stats: +2, +1, +1, =0, -1. Each Stat can only be increased once.",
    list: stats
  };
};

function getStat_charm() {
  return {
    label: "Charm",
    moves: [
      {
        label: "manipulate someone",
        type: "basic",
        children: [
          {
            type: "p",
            list: [
              {text: "When you try to MANIPULATE, BLUFF, FAST-TALK, OR LIE TO SOMEONE, tell them what you want them to do, give them a reason, and roll+Charm. For NPCs:"}
            ]
          },{
            type: "ul",
            list: [
              [
                {class: "font-bold", text: "On a 13+,"},
                {text: " they do it and you change their nature. Choose one of the following; tell the MC to erase their threat type altogether and write it in instead."}
              ],[
                {class: "font-bold", text: "10+,"},
                {text: " they’ll go along with you, unless or until some fact or action betrays the reason you gave them."}
              ],[
                {class: "font-bold", text: "On a 7-9,"},
                {text: " they’ll go along with you, but they need some concrete assurance, corroboration, or evidence first."}
              ],[
                {class: "font-bold", text: "On a miss,"},
                {text: " be prepared for the worst!"}
              ]
            ]
          }
        ]
      }
    ]
  };
}
function getStat_cool() {
  return {
    label: "Cool",
    moves: [
      {
        label: "act under pressure",
        type: "basic",
        children: [
          {
            type: "p",
            list: [
              {text: "When "},
              {class: "font-bold", text: "you act under pressure,"},
              {text: " roll+Cool."}
            ]
          },{
            type: "ul",
            list: [
              [
                {class: "font-bold", text: "On a 13+,"},
                {text: " you transcend the danger, the pressure, the possibility of harm. You do what you set out to do, and the MC will offer you a better outcome, true beauty, or a moment of grace."}
              ],[
                {class: "font-bold", text: "10+,"},
                {text: " you do it."}
              ],[
                {class: "font-bold", text: "On a 7-9,"},
                {text: " you flinch, hesitate, or stall: the MC can offer you a worse outcome, a hard bargain, or an ugly choice."}
              ],[
                {class: "font-bold", text: "On a miss,"},
                {text: " be prepared for the worst!"}
              ]
            ]
          }
        ]
      },{
        label: "recover",
        type: "basic",
        children: [
          {
            type: "p",
            list: [
              {text: "When "},
              {class: "font-bold", text: "you're out of direct danger and take a moment to gather yourself,"},
              {text: " roll+Cool. "},
              {class: "font-bold", text: "On a hit,"},
              {text: " choose 2. "},
              {class: "font-bold", text: "On a 13+,"},
              {text: " you finish quickly and have a +1 forward. "},
              {class: "font-bold", text: "On a 7-9,"},
              {text: " you took a little too long, and your enemy gets a chance to get into a better position or prepare themselves."},
              {class: "font-bold", text: "On a miss,"},
              {text: " you should prepare for the worst!"}
            ]
          },{
            type: "ul",
            list: [
              [
                {class: "font-bold", text: "Refresh: "},
                {text: "ready a Move or piece of Gear that has been Discharged."}
              ],[
                {class: "font-bold", text: "First Aid: "},
                {text: "spend 1 use of a Tactical Pack to heal \"I'm kncoked out\" on an ally."}
              ],[
                {class: "font-bold", text: "Shrug It Off: "},
                {text: "heal \"Just a scratch\" or \"I'm rattled\" on yourself."}
              ],[
                {class: "font-bold", text: "Stabilize Someone: "},
                {text: "spend 1 use of a Tactical Pack to prevent someone with \"I can't go on\" from dying, for now."}
              ]
            ]
          }
        ]
      },{
        label: "subterfuge moves",
        type: "other",
        children: []
      }
    ]
  };
}
function getStat_sharp() {
  return {
    label: "Sharp",
    moves: [
      {
        label: "assess a situation",
        type: "basic",
        children: [
          {
            type: "p",
            list: [
              {text: "When "},
              {class: "font-bold", text: "you assess a situation,"},
              {text: " roll+Sharp. You will gain a number of holds to spend on questions. Whenever you act on one of the MC's answers, take +1 forward. "},
              {class: "font-bold", text: "On a 10+,"},
              {text: " hold 3. "},
              {class: "font-bold", text: "On a 7-9,"},
              {text: " hold 1. "},
              {class: "font-bold", text: "On a miss,"},
              {text: " hold 1 and spend it immediately, but be prepared for the worst! "},
              {class: "font-bold", text: "On a 13+,"},
              {text: " spend a hold to ask any question you want about the scene, otherwise choose from the following:"}
            ]
          },{
            type: "ul",
            list: [
              [{text: "Where's my best escape route / way in / way past?"}],
              [{text: "Which enemy is most vulnerable to me?"}],
              [{text: "Which enemy is the biggest threat?"}],
              [{text: "What should I be on the lookout for?"}],
              [{text: "What's my enemy's true position?"}],
              [{text: "Who's in control here?"}]
            ]
          }
        ]
      },{
        label: "read a person",
        type: "basic",
        children: [
          {
            type: "p",
            list: [
              {text: "When "},
              {class: "font-bold", text: "you read a person,"},
              {text: " roll+Sharp. You will gain a number of holds to spend on questions. "},
              {class: "font-bold", text: "On a 10+,"},
              {text: " hold 3. "},
              {class: "font-bold", text: "On a 7-9,"},
              {text: " hold 1. "},
              {class: "font-bold", text: "On a miss,"},
              {text: " hold 1 and spend it immediately, and prepare for the worst! "},
              {class: "font-bold", text: "On a 13+,"},
              {text: " spend a hold to ask any question you want of the person, otherwise choose from the following:"}
            ]
          },{
            type: "ul",
            list: [
              [{text: "Is your character telling the truth?"}],
              [{text: "What’s your character really feeling?"}],
              [{text: "What does your character intend to do?"}],
              [{text: "What does your character wish I’d do?"}],
              [{text: "How could I get your character to —?"}]
            ]
          }
        ]
      }
    ]
  };
}

function getStat_tough() {
  return {
    label: "Tough",
    moves: [
      {
        label: "threaten with violence",
        type: "basic",
        children: [
          {
            type: "p",
            list: [
              {text: "When "},
              {class: "font-bold", text: "you threat someone with violence,"},
              {text: " roll+Tough."}
            ]
          },{
            type: "p",
            list: [
              {class: "font-bold", text: "On a 13+,"},
              {text: " they have to cave and do what you want. You've overwhelmed them; they can't possibly bring themselves to force your hand. "}
            ]
          },{
            type: "p",
            list: [
              {class: "font-bold", text: "On a 10-12,"},
              {text: " they have to choose:"}
            ]
          },{
            type: "ul",
            list: [
              [{text: "Force your hand and accept the threatened violence."}],
              [{text: "Cave and do what you want."}]
            ]
          },{
            type: "p",
            list: [
              {class: "font-bold", text: "On a 7-9,"},
              {text: " they can choose 1 of the above, or 1 of the following:"}
            ]
          },{
            type: "ul",
            list: [
              [{text: "Get out of your way."}],
              [{text: "Barricade themselves securely in."}],
              [{text: "Give you something they think you want, or tell you what you want to hear."}],
              [{text: "Back off calmly, hands where you can see."}]
            ]
          },{
            type: "p",
            list: [
              {class: "font-bold", text: "On a miss,"},
              {text: " prepare for the worst!"}
            ]
          }
        ]
      },{
        label: "battle moves",
        type: "other",
        children: []
      }
    ]
  };
}

function getStat_smarts() {
  return {
    label: "Smarts",
    moves: [
      {
        label: "use computer",
        type: "basic",
        children: [
          {
            type: "p",
            list: [
              {text: "When "},
              {class: "font-bold", text: "you use a computer with credentials,"},
              {text: " roll+Smarts."}
            ]
          },{
            type: "ul",
            list: [
              [
                {class: "font-bold", text: "On a 13+,"},
                {text: " you speed through menus and command lines and evade detection to do what you set out to do, and the MC will offer you a better outcome."}
              ],[
                {class: "font-bold", text: "10-12,"},
                {text: " you accomplish your task."}
              ],[
                {class: "font-bold", text: "7-9,"},
                {text: " it takes a while: the MC can offer you a worse outcome, a hard bargain, or an ugly choice."}
              ],[
                {class: "font-bold", text: "On a miss,"},
                {text: " be prepared for the worst!"}
              ]
            ]
          }
        ]
      }
    ]
  };
}
function getStat_weird() {
  return {
    label: "Weird",
    moves: [
      {
        label: "intuition",
        type: "basic",
        children: [
          {
            text: "When you RELY ON YOUR INTUITION, roll+Weird. On a hit, the MC tells you something new and interesting about the current situation, and might ask you a question or two; answer them."
          },{
            class: "li",
            text: "On a 10+, the MC gives you good detail."
          },{
            class: "li",
            text: "On a 7-9, the MC gives you an impression. If you already know all there is to know, the MC will tell you that."
          },{
            class: "basic-move-miss"
          },{
            class: "advanced-move first",
            text: "On a 13+, your imagination offers unconventional ideas that border on prescience."
          }
        ]
      }
    ]
  };
}

function getPeripheralMoves() {
  var arr = [];

  arr.push({
    label: "Barter Moves",
    children: [
      {
        text: "When you GIVE 1-BARTER TO SOMEONE, BUT WITH STRINGS ATTACHED, it counts as manipulating them and hitting the roll with a 10+, no leverage or roll required."
      },{
        class: "list-top",
        text: "When you GO INTO A BUSTLING MARKET, LOOKING FOR SOME PARTICULAR THING TO BUY, and it's not obvious whether you should be able to just go buy one like that, roll+Sharp. On a 10+, yes, you can just go buy it like that. On a 7-9, the MC chooses 1:"
      },{
        class: "li filled",
        text: "It costs 1-barter more than you'd expect."
      },{
        class: "li filled",
        text: "It's not openly for sale, but you find someone who can lead you to someone selling it."
      },{
        class: "li filled",
        text: "It's not openly for sale, but you find someone who sold it recently, who may be willing to introduce you to their previous buyer."
      },{
        class: "li filled",
        text: "It's not available for sale, but you find something similar. Will it do?"
      },{
        text: "On a miss, the MC chooses 1, plus it costs 1-barter more."
      },{
        class: "list-top",
        text: "When you MAKE KNOWN THAT YOU WANT A THING AND DROP JINGLE TO SPEED IT ON ITS WAY, roll+Barter spent (max roll+3). It has to be a thing you could legitimately get this way. On a 10+ it comes to you, no strings attached. On a 7-9 it comes to you, or something pretty close. On a miss, it comes to you, but with strings very much attached."
      }
    ]
  });

  arr.push({
    label: "Insight",
    children: [
      {
        text: "When you are able to go to someone for INSIGHT, ask them what they think your best course is, and the MC will tell you. If you pursue that course, take +1 to any rolls you make in the pursuit. If you pursue that course but don't accomplish your ends, you mark experience."
      }
    ]
  });

  arr.push({
    label: "WHEN AN NPC TAKES HARM",
    children: [
      {
        class: "li instruction",
        title: "1-harm:",
        titleClass: "bold",
        text: "cosmetic damage, pain, concussion, fear if the NPC's likely to be afraid of pain."
      },{
        class: "li instruction",
        title: "2-harm:",
        titleClass: "bold",
        text: "wounds, unconsciousness, bad pain, broken bones, shock. Likely fatal, occasionally immediately fatal."
      },{
        class: "li instruction",
        title: "3-harm:",
        titleClass: "bold",
        text: "give it 50-50 it's immediately fatal. Otherwise, terrible wounds, shock, death soon."
      },{
        class: "li instruction",
        title: "4-harm:",
        titleClass: "bold",
        text: "usually immediately fatal, but sometimes the poor fuck has to wait to die, mangled and ruined."
      },{
        class: "li instruction",
        title: "5-harm and more:",
        titleClass: "bold",
        text: "fatal and increasingly bodily destructive."
      }
    ]
  });

  arr.push({
    label: "Harm and Healing Moves",
    children: [
      {
        text: "When you SUFFER HARM, roll+Harm suffered (after armor, if you're wearing any). On a 10+, the MC can choose 1:"
      },{
        class: "li filled",
        text: "You're out of action: unconscious, trapped, incoherent or panicked."
      },{
        class: "li filled",
        text: "It's worse than it seemed. Take an additional 1-harm."
      },{
        class: "li filled",
        text: "Choose 2 from the 7-9 list below"
      },{
        text: "On a 7-9, the MC can choose 1:"
      },{
        class: "li filled",
        text: "You lose your footing."
      },{
        class: "li filled",
        text: "You lose your grip on whatever you're holding."
      },{
        class: "li filled",
        text: "You lose track of someone or something you're attending to."
      },{
        class: "li filled",
        text: "You miss noticing something important."
      },{
        text: "On a miss, the MC can nevertheless choose something from the 7-9 list above. If she does, though, it's instead of some of the harm you're suffering, so you take -1 harm."
      },{
        class: "list-top",
        text: "When you INFLICT HARM ON ANOTHER PLAYER'S CHARACTER, the other character gets +1-Bond with you (on their sheet) for every segment of harm you inflict. If this brings them to Bond+4, they reset to Bond+1 as usual, and therefore mark experience."
      },{
        class: "list-top",
        text: "When you HEAL ANOTHER PLAYER'S CHARACTER'S HARM, you get +1-Bond with them (on your sheet) for every segment of harm you heal. If this brings you to Bond+4, you reset to Bond+1 as usual, and therefore mark experience."
      }
    ]
  });

  arr.push({
    label: "Degrees of Harm",
    children: [
      {
        class: "",
        text: "For each 1-harm you suffer, mark a segment of the harm track. Start in the highest number segment and continue down."
      },{
        class: "list-top",
        text: "The segments before the unstable bar are less serious, the three segments after are more serious. Mark the last segment and your character’s life has become untenable."
      },{
        class: "list-top",
        text: "Before box 4, harm will go away by itself with time. Box 4 won't get worse or better by itself. After 3, unstabilized harm will get worse by itself, stabilized harm will not, and it'll get better only with medical treatment."
      },{
        class: "list-top",
        text: "When life becomes untenable, choose 1:"
      },{
        class: "li",
        text: "Come back with -1 to a stat (min -2)"
      },{
        class: "li",
        text: "Come back with -1 to a different stat (min -2)"
      },{
        class: "li",
        text: "Die"
      }
    ]
  });

  arr.push({
    label: "USING A GROUP AS A WEAPON",
    children: [
      {
        class: "",
        text: "When you have a group, you can EXECUTE SOMEONE, THREATEN WITH VIOLENCE, or make a battle move, using your group as a weapon. When you do, you roll the dice and make your choices, but it's your group that inflicts and suffers harm, not you yourself."
      },{
        class: "list-top",
        text: "Groups inflict and suffer harm as established, as usual: they inflict harm equal to their own harm rating, minus their enemy's armor rating, and the suffer harm equal to their enemy's harm rating minus their own armor. Harm = weapon - armor."
      },{
        class: "list-top",
        text: "However, if there's a size mismatch, the bigger group inflicts +1-harm and gets +1-armor for each step of size difference. Sizes go: Individual, small group, medium, heavy, capital, super capital."
      },{
        class: "list-top",
        text: "Ships have similar sizes (light, small, medium, heavy, capital, super capital), but their size difference bonuses are baked into their weapon harm calculations and armor."
      }
    ]
  });

  arr.push({
    label: "WHEN A GROUP TAKES HARM",
    children: [
      {
        class: "li instruction",
        title: "1-harm:",
        titleClass: "bold",
        text: "a few injuries, one or two serious, no fatalities."
      },{
        class: "li instruction",
        title: "2-harm:",
        titleClass: "bold",
        text: "many injuries, several serious, a couple of fatalities."
      },{
        class: "li instruction",
        title: "3-harm:",
        titleClass: "bold",
        text: "widespread injuries, many serious, several fatalities."
      },{
        class: "li instruction",
        title: "4-harm:",
        titleClass: "bold",
        text: "widespread serious injuries, many fatalities."
      },{
        class: "li instruction",
        title: "5-harm and more:",
        titleClass: "bold",
        text: "widespread fatalities, few survivors."
      },{
        class: "list-top bold",
        text: "Does the group hold together?"
      },{
        text: "With a strong, present leader, a group will hold together if it suffers up to 4-harm. If the leader is weak or absent, it'll hold together if it suffers up to 3-harm. If the leader is both weak and absent, it'll hold together if it suffers 1- or 2-harm. If it has no leader, it'll hold together if it suffers 1-harm, but no more."
      },{
        class: "list-top",
        text: "A PC group leader can hold a group together by imposing her will on it, if she has pack alpha, or by ordering it to hold discipline, if she has leadership, but otherwise it follows these rules, same as for NPCs."
      },{
        class: "list-top bold",
        text: "What about PC group members?"
      },{
        text: "If a PC is a member of a group taking harm, how much harm the PC takes depends on her role in the group. If she's a leader or a prominent, visible member, she suffers the same harm the group does. If she's just someone in the group, or if she's intentionally protecting herself from harm instead of fighting with the group, she suffers 1-harm less."
      }
    ]
  });

  return arr;
}

function getBattleMoves() {
  var arr = [];

  arr.push({
    label: "Exchanging Harm",
    children: [
      {
        text: "When you EXCHANGE HARM, both sides simultaneously inflict and suffer harm as established:"
      },{
        class: "li filled",
        text: "You inflict harm equal to the harm rating of your weapon, minus the armor rating of your enemy's armor."
      },{
        class: "li filled",
        text: "You suffer harm equal to the harm rating of your enemy's weapon, minus the armor rating of your own armor."
      }
    ]
  });

  arr.push({
    label: "Seize By Force",
    children: [
      {
        text: "To SEIZE SOMETHING BY FORCE, exchange harm, but first roll+Tough. On a 10+, choose 3. On a 7–9, choose 2. On a miss, choose 1:"
      },{
        class: "li filled",
        text: "You inflict terrible harm (+1-harm)."
      },{
        class: "li filled",
        text: "You suffer little harm (-1-harm)."
      },{
        class: "li filled",
        text: "You take definite and undeniable control of it."
      },{
        class: "li filled",
        text: "You impress, dismay, or frighten your enemy."
      },{
        class: "list-top",
        text: "VARIATIONS"
      },{
        class: "li filled",
        text: "To ASSAULT A SECURE POSITION, roll to seize by force, but instead of choosing to take definite control of it, you can choose to force your way into your enemy's position."
      },{
        class: "li filled",
        text: "To KEEP HOLD OF SOMETHING YOU HAVE, roll to seize by force, but instead of choosing to take definite control, you can choose to keep definite control of it."
      },{
        class: "li filled",
        text: "To FIGHT YOUR WAY FREE, roll to seize by force, but instead of choosing to take definite control, you can choose to win free and get away."
      },{
        class: "li filled",
        text: "To DEFEND SOMEONE ELSE FROM ATTACK, roll to seize by force, but instead of choosing to take definite control, you can choose to protect them from harm."
      }
    ]
  });

  arr.push({
    label: "Single Combat",
    children: [
      {
        text: "When you do single combat with someone, no quarters, exchange harm, but first roll+Tough. On a 10+, both. On a 7–9, choose 1. On a miss, your opponent chooses 1 against you:"
      },{
        class: "li filled",
        text: "You inflict terrible harm (+1-harm)."
      },{
        class: "li filled",
        text: "You suffer little harm (-1-harm)."
      },{
        text: "After you exchange harm, do you prefer to end the fight now, or fight on? If both of you prefer to end the fight now, it ends. If both of you prefer to fight on, it continues, and you must make the move again. If one of you prefers to end the fight, though, and the other prefers to fight on, then the former must choose: flee, submit to the latter's mercy, or fight on after all."
      }
    ]
  });

  arr.push({
    label: "TACTICAL AND SUPPORT MOVES",
    children: [
      {
        text: "When you LAY DOWN FIRE, roll+Tough. On a 10+, choose 3. On a 7-9, choose 2. On a miss, choose 1:"
      },{
        class: "li filled",
        text: "You provide covering fire, allowing another character to move or act freely."
      },{
        class: "li filled",
        text: "You provide supporting fire, giving another PC +1-choice to their own battle move."
      },{
        class: "li filled",
        text: "You provide suppressing fire, denying another character to move or act freely. (If a PC, they may still act under fire.)"
      },{
        class: "li filled",
        text: "You take an opportune shot, inflicting harm (but -1-harm) on an enemy within your reach."
      },{
        class: "list-top",
        text: "When you STAND OVERWATCH for an ally, roll+Cool. On a hit, if anyone attacks or interfefires with your ally, you attack them and inflict harm as established, as well as warning your ally. On a 10+, choose 1:"
      },{
        class: "li filled",
        text: "…And you inflict your harm befofire they can carry out their attack or interference."
      },{
        class: "li filled",
        text: "…And you inflict terrible harm (+1-harm)."
      },{
        class: "",
        text: "On a miss, you afire able to warn your ally but not attack your enemy."
      },{
        class: "list-top",
        text: "When you KEEP AN EYE OUT for what's coming, roll+Sharp. On a 10+, hold 3. On a 7-9, hold 2. On a miss, hold 1. During the battle, spend your hold, 1 for 1, to ask the MC what's coming and choose 1:"
      },{
        class: "li filled",
        text: "Direct a PC ally's attention to an enemy. If they make a battle move against that enemy, they get +1-choice to their move."
      },{
        class: "li filled",
        text: "Give a PC ally an order, instruction, or suggestion. If they do it, they get +1 to any rolls they make in the effort."
      },{
        class: "li filled",
        text: "Direct any ally's attention to an enemy. If they attack that enemy, they inflict +1-harm."
      },{
        class: "li filled",
        text: "Direct any ally's attention to a danger. They take -1-harm from that danger."
      }
    ]
  });

  arr.push({
    label: "SUBTERFUGE MOVES",
    children: [
      {
        text: "When YOU'RE THE BAIT, roll+cool. On a 10+, choose 2. On a 7-9, choose 1:"
      },{
        class: "li filled",
        text: "You draw your prey all the way into the trap. Otherwise, they only approach."
      },{
        class: "li filled",
        text: "Your prey doesn't suspect you. Otherwise, they're wary and alert."
      },{
        class: "li filled",
        text: "You don't expose yourself to extra risk. Otherwise, any harm your prey inflicts is +1."
      },{
        text: "On a miss, the MC chooses 1 for you."
      },{
        class: "list-top",
        text: "When YOU'RE THE CAT, roll+Cool. On a hit, you catch your prey out. On a 10+, you've driven them first to a place of your choosing; say where. On a 7-9, you've had to follow them where they wanted to go; they say where. On a miss, your prey escapes you."
      },{
        class: "list-top",
        text: "When YOU'RE THE MOUSE, roll+Cool. On a 10+, you escape clean and leave your hunter hunting. On a 7-9, your hunter catches you out, but only after you've led them to a place of your choosing; say where. On a miss, your hunter catches you out and the MC says where."
      },{
        class: "list-top",
        text: "When IT'S NOT CERTAIN WHERE YOU'RE THE CAT OR THE MOUSE, roll+Sharp. On a hit, you decide which you are. On a 10+, you take +1-forward as well. On a miss, you're the mouse."
      }
    ]
  });

  return arr;
}

function getVehicleMoves() {
  var arr = [];

  arr.push({
    label: "Board a Moving Vehicle",
    children: [
      {
        text: "To BOARD A MOVING VEHICLE, roll+Cool, minus its speed. To board one moving vehicle from another, roll+Cool, minus the difference between their speeds. On a 10+, you're on and you made it look easy. Take +1-forward. On a 7–9, you're on, but jesus. On a miss, the MC chooses: you're hanging on for dear life, or you're down and good luck to you."
      }
    ]
  });

  arr.push({
    label: "DEAL WITH BAD CONDITIONS",
    children: [
      {
        text: "When you have to deal with bad conditions, roll+Cool, plus your vehicle's handling. On a 10+, you fly through untouched. On a 7–9, choose 1:"
      },{
        class: "li filled instruction",
        text: "You slow down and pick your way forward."
      },{
        class: "li filled instruction",
        text: "You push too hard and your vehicle suffers harm as established."
      },{
        class: "li filled instruction",
        text: "You ditch out and go back or try to find another way."
      },{
        text: "On a miss, the MC chooses 1 for you; the others are impossible."
      }
    ]
  });

  arr.push({
    label: "OPERATE ANY OTHER VEHICLE SYSTEM",
    children: [
      {
        text: "Use your other moves (basic moves, battle moves, or playbook moves)."
      }
    ]
  });

  arr.push({
    label: "OUTDISTANCE ANOTHER VEHICLE",
    children: [
      {
        text: "When you TRY TO OUTDISTANCE ANOTHER VEHICLE, roll+Cool, modified by the vehicles' relative speed. On a 10+, you outdistance them and break away. On a 7–9, choose 1:"
      },{
        class: "li filled instruction",
        text: "You outdistance them and break away, but your vehicle suffers 1-harm ap from the strain."
      },{
        class: "li filled instruction",
        text: "You don't escape them, but you can go to ground in a place you choose."
      },{
        class: "li filled instruction",
        text: "They overtake you, but their vehicle suffers 1-harm ap from the strain. On a miss, your counterpart chooses 1 against you."
      },{
        text: "On a miss, your counterpart chooses 1 against you."
      }
    ]
  });

  arr.push({
    label: "OVERTAKE ANOTHER VEHICLE",
    children: [
      {
        text: "When you TRY TO OVERTAKE ANOTHER VEHICLE, roll+Cool, modified by the vehicles' relative speed. On a 10+, you overtake them and draw alongside. On a 7–9, choose 1:"
      },{
        class: "li filled instruction",
        text: "You overtake them, but your vehicle suffers 1-harm ap from the strain."
      },{
        class: "li filled instruction",
        text: "You don't overtake them, but you can drive them into a place you choose."
      },{
        class: "li filled instruction",
        text: "They outdistance you, but their vehicle suffers 1-harm ap from the strain."
      },{
        text: "On a miss, your counterpart chooses 1 against you."
      }
    ]
  });

  arr.push({
    label: "SHOULDER ANOTHER VEHICLE",
    children: [
      {
        text: "To SHOULDER ANOTHER VEHICLE, roll+Cool. On a hit, you shoulder it aside, inflicting v-harm as established. On a 10+, you inflict v-harm+1. On a miss, it shoulders you instead, inflicting v-harm as established."
      }
    ]
  });

  return arr;
}

function getVehicleHarmMoves() {
  arr = [];
  arr.push({
    label: "USING A VEHICLE AS A WEAPON",
    children: [
      {
        text: "When you're behind the wheel, you can EXECUTE SOMEONE, THREATEN WITH VIOLENCE, or make a battle move, using your vehicle as a weapon. When you do, you roll the dice and make your choices, but it's your vehicle that inflicts and suffers harm, not you yourself."
      },{
        class: "list-top",
        text: "Against a person:"
      },{
        class: "li instruction",
        text: "A glancing hit from a moving vehicle inflicts 2-harm (ap)."
      },{
        class: "li instruction",
        text: "A direct hit from a moving vehicle inflicts 3-harm (ap) plus its massive."
      },{
        class: "list-top",
        text: "Against another vehicle:"
      },{
        class: "li instruction",
        text: "A glancing hit inflicts v-harm."
      },{
        class: "li instruction",
        text: "A direct hit inflicts 3-harm plus its massive, minus the target vehicle's massive and armor. Treat 0-harm and less as v-harm."
      },{
        class: "li instruction",
        text: "When you're able to ram or T-bone another vehicle, you inflict the harm of a direct hit (3-harm +massive, minus your target's armor +massive) and suffer the harm of a glancing hit (v-harm)."
      },{
        class: "list-top",
        text: "Against a building:"
      },{
        class: "li instruction",
        text: "A glancing hit from a moving vehicle inflicts 2-harm."
      },{
        class: "li instruction",
        text: "A direct hit from a moving vehicle inflicts 3-harm plus its massive, minus the structure's armor."
      }
    ]
  });

  arr.push({
    label: "WHEN A VEHICLE SUFFERS HARM",
    children: [
      {
        text: "Vehicles can suffer regular harm, from bullets, explosions, and direct hits from other vehicles, or v-harm, from glancing hits."
      },{
        class: "list-top",
        text: "When a vehicle suffers regular harm, there are two considerations: how much damage the vehicle itself suffers, and how much harm blows through to the people inside."
      },{
        class: "li instruction",
        title: "1-harm:",
        titleClass: "bold",
        text: "cosmetic damage. Bullet holes, broken glass, smoke. 0-harm can blow through to passengers."
      },{
        class: "li instruction",
        title: "2-harm:",
        titleClass: "bold",
        text: "functional damage. Fuel leak, shot-out tires, engine stall, problems with steering, braking or acceleration. Can be field-patched. 1-harm can blow through to passengers."
      },{
        class: "li instruction",
        title: "3-harm:",
        titleClass: "bold",
        text: "serious damage. Functional damage affecting multiple functions, but can be field-patched. 2-harm can blow through to passengers."
      },{
        class: "li instruction",
        title: "4-harm:",
        titleClass: "bold",
        text: "breakdown. Catastrophic functional damage, can be repaired in a garage but not in the field, or can used for parts. 3-harm can blow through to passengers."
      },{
        class: "li instruction",
        title: "5-harm and more:",
        titleClass: "bold",
        text: "total destruction. Full harm can blow through to passengers, plus they can suffer additional harm if the vehicle explodes or crashes."
      },{
        class: "list-top",
        text: "Whether harm blows through to a vehicle's driver and passengers, doesn't blow through, or just hits them too without having to blow through, depends on the MC's judgment of the circumstances and the vehicle."
      }
    ]
  });

  arr.push({
    label: "V-HARM",
    children: [
      {
        text: "V-harm as established is the attacking car's massive minus the defending car's massive or handling, defender's choice."
      },{
        class: "list-top",
        text: "When you SUFFER V-HARM, roll+v-harm suffered. On a 10+, you lose control, and your attacker chooses 1:"
      },{
        class: "li instruction",
        text: "You crash."
      },{
        class: "li instruction",
        text: "You spin out."
      },{
        class: "li instruction",
        text: "Choose 2 from the 7–9 list below."
      },{
        class: "list-top",
        text: "On a 7–9, you're forced to swerve. Your attacker chooses 1:"
      },{
        class: "li instruction",
        text: "You give ground."
      },{
        class: "li instruction",
        text: "You're driven off course, or forced onto a new course."
      },{
        class: "li instruction",
        text: "Your car takes 1-harm ap, right in the transmission."
      },{
        text: "On a miss, you swerve but recover without disadvantage."
      }
    ]
  });

  arr.push({
    label: "WHEN A BUILDING TAKES HARM",
    children: [
      {
        text: "As with vehicles, when a building suffers harm, there are two considerations: structural damage to the building itself, and how much of the harm blows through to the people inside."
      },{
        class: "list-top",
        text: "Harm to buildings and other structures is non-cumulative. Don't bother tracking a building's harm on a countdown. Shooting a building 3 times with your 3-harm shotgun doesn't add up to 9-harm and make the building collapse."
      },{
        class: "list-top instruction bold",
        text: "When a building or structure suffers..."
      },{
        class: "li instruction",
        titleClass: "bold",
        title: "1-harm – 3-harm:",
        text: "cosmetic damage. Bullet holes, broken glass, scorch marks, chipped surfaces. 0-harm can blow through to inhabitants."
      },{
        class: "li instruction",
        titleClass: "bold",
        title: "4-harm – 6-harm:",
        text: "severe cosmetic damage. Many holes or large holes, no intact glass, burning or smoldering. 2-harm can blow through to inhabitants."
      },{
        class: "li instruction",
        titleClass: "bold",
        title: "7-harm – 8-harm:",
        text: "Structural damage. Strained load-bearing walls or pillars, partial collapse, raging fire. 4-harm can blow through to inhabitants. Further structural damage can lead to full collapse."
      },{
        class: "li instruction",
        titleClass: "bold",
        title: "9-harm and more:",
        text: "destruction. Full harm can blow through to inhabitants, plus they can suffer additional harm as the building or structure collapses."
      },{
        class: "list-top",
        text: "Whether harm actually does through to a building's inhabitants depends on the MC's judgment of the circumstances and the building. Don't stand near the windows!"
      }
    ]
  });

  return arr;
}


