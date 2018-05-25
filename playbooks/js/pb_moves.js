function getStats() {
  var stats = [];
  stats.push( getStat_charm() );
  stats.push( getStat_cool() );
  stats.push( getStat_sharp() );
  stats.push( getStat_smarts() );
  stats.push( getStat_tough() );
  return {
    printMoves: true,
    moveClass: "",
    instructions: "Assign the following scores to your Stats: +2, +1, +1, =0, -1. Each Stat can only be increased once.",
    list: stats
  };
}

function getBasicMoves() {
  var statObj = getStats();
  var ret = [], i, j, moves;
  for(i = 0; i < statObj.list.length; i++) {
    moves = statObj.list[i].moves;
    for(j = 0; j < moves.length; j++) {
      if (moves[j].type == "basic") {
        ret.push( moves[j] );
      }
    }
  }

  ret.push({
    label: "help/interfere",
    type: "basic",
    children: [
      {
        type: "p",
        list: [
          {text: "When "},
          {class: "font-bold", text: "help or interfere with someone making a move,"},
          {text: " establish what kind of move you are using to meddle, and roll+[its stat]. On a hit, choose 1:"}
        ]
      },{
        type: "ul",
        list: [
          [
            {class: "font-bold", text: "Help: "},
            {text: "Turn a miss (6-) into a partial hit (7-9)."}
          ],[
            {class: "font-bold", text: "Help: "},
            {text: "Turn a partial hit (7-9) into a complete hit (10+)."}
          ],[
            {class: "font-bold", text: "Interfere: "},
            {text: "Turn a complete hit (10+) into a partial hit (7-9)."}
          ],[
            {class: "font-bold", text: "Interfere: "},
            {text: "Turn a partial success (7-9) into a mis (6-)."}
          ]
        ]
      },{
        type: "p",
        list: [
          {class: "font-bold", text: "On a 7-9,"},
          {text: " the MC can offer you a hard bargain or an ugly choice."}
        ]
      },{
        type: "p",
        list: [
          {class: "font-bold", text: "On a miss,"},
          {text: " be prepared for the worst!"}
        ]
      }
    ]
  });

  return ret.sort(function(a, b) {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });
}

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

function getPeripheralMoves() {
  var ret = [];

  return ret;
}

