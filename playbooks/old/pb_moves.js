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
    commonArrays: [
      "Assign your own +2/+1/+1/=0/-1 stat array",
      "Assign your own +2/+2/=0/-1/-1 stat array"
    ],
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
            classes: "",
            text: "When you try to MANIPULATE, BLUFF, FAST-TALK, OR LIE TO SOMEONE, tell them what you want them to do, give them a reason, and roll+Charm. For NPCs:"
          },{
            classes: "li",
            text: "10+, they’ll go along with you, unless or until some fact or action betrays the reason you gave them."
          },{
            classes: "li",
            text: "On a 7-9, they’ll go along with you, but they need some concrete assurance, corroboration, or evidence first."
          },{
            classes: "",
            text: "For PCs: on a 10+, both. On a 7-9, choose 1:"
          },{
            classes: "li",
            text: "If they go along with you, they mark experience."
          },{
            classes: "li",
            text: "If they refuse, erase one of their stat highlights for the remainder of the session."
          },{
            text: "What they do then is up to them."
          },{
            classes: "basic-move-miss"
          },{
            classes: "advanced-move first",
            text: "On a 12+, only if they’re an NPC, they do it, and furthermore you change their nature. Choose one of the following; tell the MC to erase their threat type altogether and write it in instead."
          },{
            classes: "li",
            text: "ally: friend (impulse: to back you up)"
          },{
            classes: "li",
            text: "ally: lover (impulse: to give you shelter & comfort)"
          },{
            classes: "li",
            text: "ally: right hand (impulse: to follow through on your intentions)"
          },{
            classes: "li",
            text: "ally: representative (impulse: to pursue your interests in your absence)"
          },{
            classes: "li",
            text: "ally: guardian (impulse: to intercept danger)"
          },{
            classes: "li",
            text: "ally: confidante (impulse: to give you advice, perspective, or absolution.)"
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
            classes: "",
            text: "When you want to ACT UNDER PRESSURE, roll+Cool."
          },{
            classes: "li",
            text: "10+, you do it."
          },{
            classes: "li",
            text: "7-9, you flinch, hesitate, or stall: the MC can offer you a worse outcome, a hard bargain, or an ugly choice."
          },{
            classes: "basic-move-miss"
          },{
            classes: "advanced-move first",
            text: "On a 12+, you transcend the danger, the pressure, the possibility of harm. You do what you set out to do, and the MC will offer you a better outcome, true beauty, or a moment of grace."
          }
        ]
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
            text: "When you ASSESS A CHARGED SITUATION, roll+Sharp. On a hit, you can ask the MC questions. Whenever you act on one of the MC’s answers, take +1. On a 10+, ask 3. On a 7-9, ask 1:"
          },{
            classes: "li",
            text: "Where's my best escape route / way in / way past?"
          },{
            classes: "li",
            text: "Which enemy is most vulnerable to me?"
          },{
            classes: "li",
            text: "Which enemy is the biggest threat?"
          },{
            classes: "li",
            text: "What should I be on the lookout for?"
          },{
            classes: "li",
            text: "What's my enemy's true position?"
          },{
            classes: "li",
            text: "Who's in control here?"
          },{
            classes: "basic-move-miss",
            text: "On a miss, ask 1 anyway, but be prepared for the worst!"
          },{
            classes: "advanced-move first",
            text: "On a 12+, ask any 3 questions you want about the scene."
          }
        ]
      },{
        label: "read a person",
        type: "basic",
        children: [
          {
            text: "When you read a person in a charged interaction, roll+Sharp. On a 10+, hold 3. On a 7-9, hold 1. While you’re interacting with them, spend your hold to ask questions from this list:"
          },{
            classes: "li",
            text: "Is your character telling the truth?"
          },{
            classes: "li",
            text: "What’s your character really feeling?"
          },{
            classes: "li",
            text: "What does your character intend to do?"
          },{
            classes: "li",
            text: "What does your character wish I’d do?"
          },{
            classes: "li",
            text: "How could I get your character to —?"
          },{
            classes: "basic-move-miss",
            text: "On a miss, ask 1 anyway, but be prepared for the worst!"
          },{
            classes: "advanced-move first",
            text: "On a 12+, ask any 3 questions you want about this person."
          }
        ]
      }
    ]
  };
}
function getStat_smarts_old() {
  return {
    label: "Smarts",
    moves: [
      {
        label: "ponder",
        type: "basic",
        children: [
          {
            text: "When you take the time to PONDER a location, roll+Smarts. On a 10+, hold 3. On a 7-9, hold 1. Spend your hold to ask questions from this list:"
          },{
            classes: "li",
            text: "What happened here?"
          },{
            classes: "li",
            text: "How long ago did this happen?"
          },{
            classes: "li",
            text: "What is out of place?"
          },{
            classes: "li",
            text: "What is broken?"
          },{
            classes: "li",
            text: "Where could things be hidden?"
          },{
            classes: "li",
            text: "What could do this?"
          },{
            classes: "basic-move-miss",
            text: "On a miss, ask 1 anyway, but be prepared for the worst!"
          },{
            classes: "advanced-move first",
            text: "On a 12+, ask any 3 questions about the location."
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
            classes: "",
            text: "When you THREATEN SOMEONE WITH VIOLENCE, roll+Tough. On a 10+, they have to choose:"
          },{
            classes: "li",
            text: "Force your hand and accept the threatened violence."
          },{
            classes: "li",
            text: "Cave and do what you want."
          },{
            classes: "",
            text: "On a 7-9, they can choose 1 of the above, or 1 of the following:"
          },{
            classes: "li",
            text: "Get out of your way."
          },{
            classes: "li",
            text: "Barricade themselves securely in."
          },{
            classes: "li",
            text: "Give you something they think you want, or tell  you want you want to hear."
          },{
            classes: "li",
            text: "Back off calmly, hands where you can see."
          },{
            classes: "basic-move-miss"
          },{
            classes: "advanced-move first",
            text: "On a 12+, they have to cave and do what you want. You've overwhelmed them; they can't possibly bring themselves to force your hand."
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
        label: "intuit",
        type: "basic",
        children: [
          {
            text: "When you RELY ON YOUR INTUITION, roll+Smarts. On a hit, the MC tells you something new and interesting about the current situation, and might ask you a question or two; answer them."
          },{
            classes: "li",
            text: "On a 10+, the MC gives you good detail."
          },{
            classes: "li",
            text: "On a 7-9, the MC gives you an impression. If you already know all there is to know, the MC will tell you that."
          },{
            classes: "basic-move-miss"
          },{
            classes: "advanced-move first",
            text: "On a 12+, your imagination offers unconventional ideas that border on prescience."
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
            classes: "li",
            text: "On a 10+, the MC gives you good detail."
          },{
            classes: "li",
            text: "On a 7-9, the MC gives you an impression. If you already know all there is to know, the MC will tell you that."
          },{
            classes: "basic-move-miss"
          },{
            classes: "advanced-move first",
            text: "On a 12+, your imagination offers unconventional ideas that border on prescience."
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
        classes: "list-top",
        text: "When you GO INTO A BUSTLING MARKET, LOOKING FOR SOME PARTICULAR THING TO BUY, and it's not obvious whether you should be able to just go buy one like that, roll+Sharp. On a 10+, yes, you can just go buy it like that. On a 7-9, the MC chooses 1:"
      },{
        classes: "li filled",
        text: "It costs 1-barter more than you'd expect."
      },{
        classes: "li filled",
        text: "It's not openly for sale, but you find someone who can lead you to someone selling it."
      },{
        classes: "li filled",
        text: "It's not openly for sale, but you find someone who sold it recently, who may be willing to introduce you to their previous buyer."
      },{
        classes: "li filled",
        text: "It's not available for sale, but you find something similar. Will it do?"
      },{
        text: "On a miss, the MC chooses 1, plus it costs 1-barter more."
      },{
        classes: "list-top",
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
        classes: "li instruction",
        title: "1-harm:",
        titleClass: "bold",
        text: "cosmetic damage, pain, concussion, fear if the NPC's likely to be afraid of pain."
      },{
        classes: "li instruction",
        title: "2-harm:",
        titleClass: "bold",
        text: "wounds, unconsciousness, bad pain, broken bones, shock. Likely fatal, occasionally immediately fatal."
      },{
        classes: "li instruction",
        title: "3-harm:",
        titleClass: "bold",
        text: "give it 50-50 it's immediately fatal. Otherwise, terrible wounds, shock, death soon."
      },{
        classes: "li instruction",
        title: "4-harm:",
        titleClass: "bold",
        text: "usually immediately fatal, but sometimes the poor fuck has to wait to die, mangled and ruined."
      },{
        classes: "li instruction",
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
        classes: "li filled",
        text: "You're out of action: unconscious, trapped, incoherent or panicked."
      },{
        classes: "li filled",
        text: "It's worse than it seemed. Take an additional 1-harm."
      },{
        classes: "li filled",
        text: "Choose 2 from the 7-9 list below"
      },{
        text: "On a 7-9, the MC can choose 1:"
      },{
        classes: "li filled",
        text: "You lose your footing."
      },{
        classes: "li filled",
        text: "You lose your grip on whatever you're holding."
      },{
        classes: "li filled",
        text: "You lose track of someone or something you're attending to."
      },{
        classes: "li filled",
        text: "You miss noticing something important."
      },{
        text: "On a miss, the MC can nevertheless choose something from the 7-9 list above. If she does, though, it's instead of some of the harm you're suffering, so you take -1 harm."
      },{
        classes: "list-top",
        text: "When you INFLICT HARM ON ANOTHER PLAYER'S CHARACTER, the other character gets +1-Bond with you (on their sheet) for every segment of harm you inflict. If this brings them to Bond+4, they reset to Bond+1 as usual, and therefore mark experience."
      },{
        classes: "list-top",
        text: "When you HEAL ANOTHER PLAYER'S CHARACTER'S HARM, you get +1-Bond with them (on your sheet) for every segment of harm you heal. If this brings you to Bond+4, you reset to Bond+1 as usual, and therefore mark experience."
      }
    ]
  });

  arr.push({
    label: "Degrees of Harm",
    children: [
      {
        classes: "",
        text: "For each 1-harm you suffer, mark a segment of the harm track. Start in the highest number segment and continue down."
      },{
        classes: "list-top",
        text: "The segments before the unstable bar are less serious, the three segments after are more serious. Mark the last segment and your character’s life has become untenable."
      },{
        classes: "list-top",
        text: "Before box 4, harm will go away by itself with time. Box 4 won't get worse or better by itself. After 3, unstabilized harm will get worse by itself, stabilized harm will not, and it'll get better only with medical treatment."
      },{
        classes: "list-top",
        text: "When life becomes untenable, choose 1:"
      },{
        classes: "li",
        text: "Come back with -1 to a stat (min -2)"
      },{
        classes: "li",
        text: "Come back with -1 to a different stat (min -2)"
      },{
        classes: "li",
        text: "Die"
      }
    ]
  });

  arr.push({
    label: "USING A GROUP AS A WEAPON",
    children: [
      {
        classes: "",
        text: "When you have a group, you can EXECUTE SOMEONE, THREATEN WITH VIOLENCE, or make a battle move, using your group as a weapon. When you do, you roll the dice and make your choices, but it's your group that inflicts and suffers harm, not you yourself."
      },{
        classes: "list-top",
        text: "Groups inflict and suffer harm as established, as usual: they inflict harm equal to their own harm rating, minus their enemy's armor rating, and the suffer harm equal to their enemy's harm rating minus their own armor. Harm = weapon - armor."
      },{
        classes: "list-top",
        text: "However, if there's a size mismatch, the bigger group inflicts +1-harm and gets +1-armor for each step of size difference. Sizes go: Individual, small group, medium, heavy, capital, super capital."
      },{
        classes: "list-top",
        text: "Ships have similar sizes (light, small, medium, heavy, capital, super capital), but their size difference bonuses are baked into their weapon harm calculations and armor."
      }
    ]
  });

  arr.push({
    label: "WHEN A GROUP TAKES HARM",
    children: [
      {
        classes: "li instruction",
        title: "1-harm:",
        titleClass: "bold",
        text: "a few injuries, one or two serious, no fatalities."
      },{
        classes: "li instruction",
        title: "2-harm:",
        titleClass: "bold",
        text: "many injuries, several serious, a couple of fatalities."
      },{
        classes: "li instruction",
        title: "3-harm:",
        titleClass: "bold",
        text: "widespread injuries, many serious, several fatalities."
      },{
        classes: "li instruction",
        title: "4-harm:",
        titleClass: "bold",
        text: "widespread serious injuries, many fatalities."
      },{
        classes: "li instruction",
        title: "5-harm and more:",
        titleClass: "bold",
        text: "widespread fatalities, few survivors."
      },{
        classes: "list-top bold",
        text: "Does the group hold together?"
      },{
        text: "With a strong, present leader, a group will hold together if it suffers up to 4-harm. If the leader is weak or absent, it'll hold together if it suffers up to 3-harm. If the leader is both weak and absent, it'll hold together if it suffers 1- or 2-harm. If it has no leader, it'll hold together if it suffers 1-harm, but no more."
      },{
        classes: "list-top",
        text: "A PC group leader can hold a group together by imposing her will on it, if she has pack alpha, or by ordering it to hold discipline, if she has leadership, but otherwise it follows these rules, same as for NPCs."
      },{
        classes: "list-top bold",
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
        classes: "li filled",
        text: "You inflict harm equal to the harm rating of your weapon, minus the armor rating of your enemy's armor."
      },{
        classes: "li filled",
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
        classes: "li filled",
        text: "You inflict terrible harm (+1-harm)."
      },{
        classes: "li filled",
        text: "You suffer little harm (-1-harm)."
      },{
        classes: "li filled",
        text: "You take definite and undeniable control of it."
      },{
        classes: "li filled",
        text: "You impress, dismay, or frighten your enemy."
      },{
        classes: "list-top",
        text: "VARIATIONS"
      },{
        classes: "li filled",
        text: "To ASSAULT A SECURE POSITION, roll to seize by force, but instead of choosing to take definite control of it, you can choose to force your way into your enemy's position."
      },{
        classes: "li filled",
        text: "To KEEP HOLD OF SOMETHING YOU HAVE, roll to seize by force, but instead of choosing to take definite control, you can choose to keep definite control of it."
      },{
        classes: "li filled",
        text: "To FIGHT YOUR WAY FREE, roll to seize by force, but instead of choosing to take definite control, you can choose to win free and get away."
      },{
        classes: "li filled",
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
        classes: "li filled",
        text: "You inflict terrible harm (+1-harm)."
      },{
        classes: "li filled",
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
        classes: "li filled",
        text: "You provide covering fire, allowing another character to move or act freely."
      },{
        classes: "li filled",
        text: "You provide supporting fire, giving another PC +1-choice to their own battle move."
      },{
        classes: "li filled",
        text: "You provide suppressing fire, denying another character to move or act freely. (If a PC, they may still act under fire.)"
      },{
        classes: "li filled",
        text: "You take an opportune shot, inflicting harm (but -1-harm) on an enemy within your reach."
      },{
        classes: "list-top",
        text: "When you STAND OVERWATCH for an ally, roll+Cool. On a hit, if anyone attacks or interfefires with your ally, you attack them and inflict harm as established, as well as warning your ally. On a 10+, choose 1:"
      },{
        classes: "li filled",
        text: "…And you inflict your harm befofire they can carry out their attack or interference."
      },{
        classes: "li filled",
        text: "…And you inflict terrible harm (+1-harm)."
      },{
        classes: "",
        text: "On a miss, you afire able to warn your ally but not attack your enemy."
      },{
        classes: "list-top",
        text: "When you KEEP AN EYE OUT for what's coming, roll+Sharp. On a 10+, hold 3. On a 7-9, hold 2. On a miss, hold 1. During the battle, spend your hold, 1 for 1, to ask the MC what's coming and choose 1:"
      },{
        classes: "li filled",
        text: "Direct a PC ally's attention to an enemy. If they make a battle move against that enemy, they get +1-choice to their move."
      },{
        classes: "li filled",
        text: "Give a PC ally an order, instruction, or suggestion. If they do it, they get +1 to any rolls they make in the effort."
      },{
        classes: "li filled",
        text: "Direct any ally's attention to an enemy. If they attack that enemy, they inflict +1-harm."
      },{
        classes: "li filled",
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
        classes: "li filled",
        text: "You draw your prey all the way into the trap. Otherwise, they only approach."
      },{
        classes: "li filled",
        text: "Your prey doesn't suspect you. Otherwise, they're wary and alert."
      },{
        classes: "li filled",
        text: "You don't expose yourself to extra risk. Otherwise, any harm your prey inflicts is +1."
      },{
        text: "On a miss, the MC chooses 1 for you."
      },{
        classes: "list-top",
        text: "When YOU'RE THE CAT, roll+Cool. On a hit, you catch your prey out. On a 10+, you've driven them first to a place of your choosing; say where. On a 7-9, you've had to follow them where they wanted to go; they say where. On a miss, your prey escapes you."
      },{
        classes: "list-top",
        text: "When YOU'RE THE MOUSE, roll+Cool. On a 10+, you escape clean and leave your hunter hunting. On a 7-9, your hunter catches you out, but only after you've led them to a place of your choosing; say where. On a miss, your hunter catches you out and the MC says where."
      },{
        classes: "list-top",
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
        classes: "li filled instruction",
        text: "You slow down and pick your way forward."
      },{
        classes: "li filled instruction",
        text: "You push too hard and your vehicle suffers harm as established."
      },{
        classes: "li filled instruction",
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
        classes: "li filled instruction",
        text: "You outdistance them and break away, but your vehicle suffers 1-harm ap from the strain."
      },{
        classes: "li filled instruction",
        text: "You don't escape them, but you can go to ground in a place you choose."
      },{
        classes: "li filled instruction",
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
        classes: "li filled instruction",
        text: "You overtake them, but your vehicle suffers 1-harm ap from the strain."
      },{
        classes: "li filled instruction",
        text: "You don't overtake them, but you can drive them into a place you choose."
      },{
        classes: "li filled instruction",
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
        classes: "list-top",
        text: "Against a person:"
      },{
        classes: "li instruction",
        text: "A glancing hit from a moving vehicle inflicts 2-harm (ap)."
      },{
        classes: "li instruction",
        text: "A direct hit from a moving vehicle inflicts 3-harm (ap) plus its massive."
      },{
        classes: "list-top",
        text: "Against another vehicle:"
      },{
        classes: "li instruction",
        text: "A glancing hit inflicts v-harm."
      },{
        classes: "li instruction",
        text: "A direct hit inflicts 3-harm plus its massive, minus the target vehicle's massive and armor. Treat 0-harm and less as v-harm."
      },{
        classes: "li instruction",
        text: "When you're able to ram or T-bone another vehicle, you inflict the harm of a direct hit (3-harm +massive, minus your target's armor +massive) and suffer the harm of a glancing hit (v-harm)."
      },{
        classes: "list-top",
        text: "Against a building:"
      },{
        classes: "li instruction",
        text: "A glancing hit from a moving vehicle inflicts 2-harm."
      },{
        classes: "li instruction",
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
        classes: "list-top",
        text: "When a vehicle suffers regular harm, there are two considerations: how much damage the vehicle itself suffers, and how much harm blows through to the people inside."
      },{
        classes: "li instruction",
        title: "1-harm:",
        titleClass: "bold",
        text: "cosmetic damage. Bullet holes, broken glass, smoke. 0-harm can blow through to passengers."
      },{
        classes: "li instruction",
        title: "2-harm:",
        titleClass: "bold",
        text: "functional damage. Fuel leak, shot-out tires, engine stall, problems with steering, braking or acceleration. Can be field-patched. 1-harm can blow through to passengers."
      },{
        classes: "li instruction",
        title: "3-harm:",
        titleClass: "bold",
        text: "serious damage. Functional damage affecting multiple functions, but can be field-patched. 2-harm can blow through to passengers."
      },{
        classes: "li instruction",
        title: "4-harm:",
        titleClass: "bold",
        text: "breakdown. Catastrophic functional damage, can be repaired in a garage but not in the field, or can used for parts. 3-harm can blow through to passengers."
      },{
        classes: "li instruction",
        title: "5-harm and more:",
        titleClass: "bold",
        text: "total destruction. Full harm can blow through to passengers, plus they can suffer additional harm if the vehicle explodes or crashes."
      },{
        classes: "list-top",
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
        classes: "list-top",
        text: "When you SUFFER V-HARM, roll+v-harm suffered. On a 10+, you lose control, and your attacker chooses 1:"
      },{
        classes: "li instruction",
        text: "You crash."
      },{
        classes: "li instruction",
        text: "You spin out."
      },{
        classes: "li instruction",
        text: "Choose 2 from the 7–9 list below."
      },{
        classes: "list-top",
        text: "On a 7–9, you're forced to swerve. Your attacker chooses 1:"
      },{
        classes: "li instruction",
        text: "You give ground."
      },{
        classes: "li instruction",
        text: "You're driven off course, or forced onto a new course."
      },{
        classes: "li instruction",
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
        classes: "list-top",
        text: "Harm to buildings and other structures is non-cumulative. Don't bother tracking a building's harm on a countdown. Shooting a building 3 times with your 3-harm shotgun doesn't add up to 9-harm and make the building collapse."
      },{
        classes: "list-top instruction bold",
        text: "When a building or structure suffers..."
      },{
        classes: "li instruction",
        titleClass: "bold",
        title: "1-harm – 3-harm:",
        text: "cosmetic damage. Bullet holes, broken glass, scorch marks, chipped surfaces. 0-harm can blow through to inhabitants."
      },{
        classes: "li instruction",
        titleClass: "bold",
        title: "4-harm – 6-harm:",
        text: "severe cosmetic damage. Many holes or large holes, no intact glass, burning or smoldering. 2-harm can blow through to inhabitants."
      },{
        classes: "li instruction",
        titleClass: "bold",
        title: "7-harm – 8-harm:",
        text: "Structural damage. Strained load-bearing walls or pillars, partial collapse, raging fire. 4-harm can blow through to inhabitants. Further structural damage can lead to full collapse."
      },{
        classes: "li instruction",
        titleClass: "bold",
        title: "9-harm and more:",
        text: "destruction. Full harm can blow through to inhabitants, plus they can suffer additional harm as the building or structure collapses."
      },{
        classes: "list-top",
        text: "Whether harm actually does through to a building's inhabitants depends on the MC's judgment of the circumstances and the building. Don't stand near the windows!"
      }
    ]
  });

  return arr;
}


