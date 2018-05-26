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
          {class: "font-bold", text: "you help or interfere with someone making a move,"},
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

function getMoves_Commerce() {
  var ret = [];

  ret.push({
    label: "Negotiate Terms",
    type: "commerce",
    children: [
      {
        type: "p",
        list: [
          {text: "When "},
          {class: "font-bold", text: "you commit to a Contract or Mission and meet with your contact to negotiate the terms,"},
          {text: " roll+Disposition or +Rank if you know your Client, or roll+Sharp at Disadvantage if you don't. "},
          {class: "font-bold", text: "On a 10+,"},
          {text: " your strong relationship or negotiating skills are top notch, choose 2. "},
          {class: "font-bold", text: "On a 7-9,"},
          {text: " you manage to get a small concession, choose 1. "},
          {class: "font-bold", text: "On a miss,"},
          {text: " you get stonewalled, or there's just nothing else they can give you."},
        ]
      },{
        type: "ul",
        list: [
          [{text: "You negotiate a better payment upon completion. When you complete this Contract, roll your ship payment move at advantage."}],
          [{text: "You gain some useful information from your contact, the MC will reveal a hidden detail of the Contract."}],
          [{text: "You get an up-front expenses payment or resource provided. Each Crew Member makes a roll on Hey Big Spender, at Disadvantage."}]
        ]
      }
    ]
  });

  ret.push({
    label: "Hey Big Spender",
    type: "commerce",
    children: [
      {
        type: "p",
        list: [
          {text: "When "},
          {class: "font-bold", text: "you're flush with Currency and go looking for something to spend your ill gotten gains on,"},
          {text: " roll+Disposition (default +0) with the local vendors or contacts to see what you can find. "},
          {class: "font-bold", text: "On a 10+,"},
          {text: " you can find your heart's desire, spend big, and live life to the fullest. Purchase 1 item from the Specialist or Black Market list, or choose 3 from below. "}
          ,{class: "font-bold", text: "On a 7-9,"},
          {text: " you've got plenty of time and money, choose 2."},
          {class: "font-bold", text: "On a 6-,"},
          {text: " you only have access to the basics, choose 1."}
        ]
      },{
        type: "ul",
        list: [
          [{text: "Heal all Harm you have suffered with a few days rough but competent treatment."}],
          [{text: "Mark 1 Tick on a personal project."}],
          [{text: "Make 1 purchase on the Advanced Gear list."}],
          [{text: "Make 2 purchases on the Basic Gear list."}]
        ]
      }
    ]
  });

  ret.push({
    label: "Test Drive",
    type: "commerce",
    children: [
      {
        type: "p",
        list: [
          {class: "font-bold", text: "When you go to the scrap dealers and vendors of vehicles looking for a deal on particular type of Vehicle,"},
          {text: " say what you're looking for and either take it as-is or roll+Sharp."},
          {class: "font-bold", text: "On a 12+,"},
          {text: " you find a superb example of engineering, or get a customized vehicle. Make 2 enhancements. "},
          {class: "font-bold", text: "On a 10+,"},
          {text: " it's better than average, make 1 enhancement. "},
          {class: "font-bold", text: "On a 7-9, "},
          {text: "it's serviceable, take it as-is. "},
          {class: "font-bold", text: "On a 6-,"},
          {text: " you had to take what you could get, make 1 Compromise."}
        ]
      },{
        type: "p",
        list: [
          {text: "When you make an Enhancement, add a +Strength, or remove a -Weakness, as established."},
          {text: "When you make a Compromise, remove a +Strength, or add a -Weakness, as established."}
        ]
      },{
        type: "ul",
        class: "font-italic",
        list: [
          [{text: "Speeder: 1 Hit, +Responsive, +Speedy, -Fragile, -Cramped."}],
          [{text: "Passenger Vehicle: 1 Hit, +Reliable, +Inconspicuous, +Spacious, -Fragile."}],
          [{text: "Military Vehicle: 2 Hits, +Reliable +Armored, +Equipped 1, -Sluggish."}],
          [{text: "Shuttle: 2 Hits, +Spacious, +Armored, +Spacefaring, -Ponderous."}],
          [{text: "Fighter: 3 Hits, +Responsive, +Speedy, +Spacefaring, +Equipped 1, -Cramped."}],
          [{text: "Armature: 3 Hits, +Responsive, +Spacefaring, +Equipped 2, -Ponderous -Cramped."}]
        ]
      }
    ]
  });

  ret.push({
    label: "Lucrative Exports",
    type: "commerce",
    children: [
      {
        type: "p",
        list: [
          {text: "When "},
          {class: "font-bold", text: "your Crew hits the markets and exchanges with plenty of money, and go looking for cargo to purchase and transport for sale elsewhere,"},
          {text: " roll+Disposition (default +0) with the local vendors and contacts."}
        ]
      },{
        type: "ul",
        list: [
          [
            {class: "font-bold", text: "On a 10+,"},
            {text: " there's plenty to choose from. Choose 1 and describe it: Valuable Cargo, Contraband Cargo, or Cheap Cargo."}
          ],[
            {class: "font-bold", text: "On a 7-9,"},
            {text: " there's an OK selection. Choose 1 and describe it: Contraband Cargo or Cheap Cargo."}
          ],[
            {class: "font-bold", text: "On a miss,"},
            {text: " it's slim pickings. You manage to buy some Cheap Cargo, describe it."}
          ]
        ]
      }
    ]
  });

  ret.push({
    label: "Merchantile",
    type: "commerce",
    children: [
      {
        type: "p",
        list: [
          {text: "When you dock in a systemw ith your cargo hold full of goods to sell, roll 2d6. If you are selling Contraband Cargo, add +1 to the roll. If you are selling Valuable Cargo, you have Advantage."}
        ]
      },{
        type: "ul",
        list: [
          [
            {class: "font-bold", text: "On a 10+,"},
            {text: " it's a good sale, choose 1 from your Ship Payment Move."}
          ],[
            {class: "font-bold", text: "On a 7-9,"},
            {text: " you can only get paid in kind. Roll Lucrative Exports."}
          ],[
            {class: "font-bold", text: "On a miss,"},
            {text: " it's a net loss. Either the market was unfavorable or someone blew the profits."}
          ]
        ]
      }
    ]
  });

  return ret;
}

