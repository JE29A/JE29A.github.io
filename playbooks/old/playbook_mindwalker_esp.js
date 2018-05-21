function getPlaybook_mindwalker_esper() {
  return {
    trope: "esper",
    psion: true,
    nameModelString: "playbookModelName_esper",
    improvements: [
      "Get +1 to Sharp (max +3)",
      "Get +1 to Charm (max +2)",
      "Get +1 to Cool (max +2)",
      "Get +1 to Smarts (max +2)",
      "Get +1 to Tough (max +2)",
      "Get a new esper move",
      "Get a new esper move",
      "Choose a second psion playbook and get a move from it",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm+1, Cool+1, Sharp+2, Smarts-1, Tough=0",
      "Charm=0, Cool+1, Sharp+2, Smarts-1, Tough+1",
      "Charm+1, Cool=0, Sharp+2, Smarts+1, Tough-1",
      "Charm-1, Cool+1, Sharp+2, Smarts=0, Tough+1"
    ],
    moveInstructions: [
      "You get all the basic moves and the ESP move. Choose an additional esper move, and either another esper move or a move from any playbook."
    ],
    blurb: {
      section: 2,
      paragraphs: [
        "Psions are the practiced psychics of known space, and they look like anyone else. People with Extra Sensory Perception are called espers, and 'extra' doesn't give what they perceive justice.",
        "Being an esper isn't a walk in the park. Mundies think their lives are loud? Try being open to the feelings, or even the thoughts, of everyone around you. So you have your own baggage and the impressions of everyone around you's baggage. On top of that, nearly every faction has strict regulations that apply to psions; ranging from mandatory conscription to total criminality. No one likes the idea of someone being able to snoop on their private thoughts."
      ],
      guidance: [
        "Espers are spooky. If you want to be in on everyone else's private business, play an esper. Their moves extend what other characters can do to add range or discretion. Warning: you are empath if not more, so expect to make people uncomfortable."
      ]
    },
    gearSets: [
      {
        setClass: "",
        textClass: "",
        text: "You get:",
        listClass: "li filled",
        list: [
          "Personal ID (real or forged)",
          "Commlink",
          "1 small weapon",
          "Oddments worth 2-barter",
          "Fashion suitable to your look (you detail)"
        ]
      },{
        setClass: "",
        textClass: "",
        text: "Small weapon (choose 1):",
        listClass: "li empty",
        list: [
          "Knife (1-harm hand)",
          "Vibroknife (2-harm hand)",
          "Charge pistol (2-harm close loud)"
        ]
      }
    ],
    history: [
    ],
    bondHistory: [
      {
        text: "Go around again for Bonds. On your turn ask one or both questions:",
      },{
        text: "Are any of you scared of psions?",
        class: "li filled instruction",
        class2: "li filled diamond plain-text",
        resultList: [
          "For characters that explicitly deny it and suggest psions deserve more trust, put Bond+3",
          "For characters that say yes, put Bond-2"
        ]
      },{
        text: "Were any of you vocal about psion rights before you realized I was one?",
        class: "li filled instruction",
        result: "For those characters, write Bond+3",
        class2: "li diamond filled plain-text",
      },{
        text: "Which one of you did I confide my psychic abilities to?",
        class: "li filled instruction",
        result: "For that character, write Bond+2",
        class2: "li diamond filled plain-text",
      },{
        text: "For everyone else, ask yourself, \"Are you a rogue psion?\"",
        class: "instruction",
        resultList:[
          "If so, put Bond-1 for everyone else. You aren't interested in getting close to everybody.",
          "If not, put Bond+1 for everyone else."
        ],
        class2: "li diamond filled plain-text",
      }
    ],
    features: [
      {
        section: 2,
        titleDivClass: "underline thick",
        title: "Esper Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li list-top",
            title: "Extra Sensory Perception (ESP)",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Passive) You are extraordinarily sensitive to your surroundings, especially to the emotions of those around you. When you successfully READ SOMEONE, you can ask if they are telling the truth without using a hold."
          },{
            titleDivClass: "li empty list-top",
            title: "Clairvoyant",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires ESP) You are able to project your awareness out from your body. When you want to REMOTELY VIEW a person or place you can justify, roll+Sharp. On a hit, you are able to make ASSESS A SITUATION and READ A PERSON moves at -1-ongoing of the remote location. On a 10+, you ignore the -1-ongoing. On a miss, you cannot remote view again until you have had time to rest, and you should prepare for the worst!"
          },{
            titleDivClass: "li empty list-top",
            title: "Mind Reader",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires ESP) You can sort through a person's thoughts. You can attempt to READ A PERSON without directly communicating with them. Add the following choices to spend holds on:",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond",
                titleClass: "h6",
                subtitleClass: "h6 instruction",
                title: "They don't notice.",
                subtitle: "If this choice is not selected, the subject will know someone is rooting through their mind."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                subtitleClass: "h6 instruction",
                title: "What are you thinking about?"
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            title: "Postcog",
            titleClass: "h6 move-label",
            subtitle: "(Requires ESP) You are able to read the psychic impressions of a place or item. ASSESS A SITUATION after the fact or READ A PERSON that held or used an item. Imprints fade with time and can be covered over by other strong impressions.",
            subtitleClass: "h6"
          },{
            titleDivClass: "li empty list-top",
            title: "Precog",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires ESP) You often get a flash of insight when you would be surprised, roll+Sharp. On a hit, you are able to make sense of the flash. On a 10+, you have a +1-forward."
          },{
            titleDivClass: "li empty list-top",
            title: "Sensitive",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires ESP, passive) You automatically notice when someone uses an active psychic move in your presence and the nature of their move. If you make physical contact with a person, you can choose 'Are you a psion?' as a question when you READ A PERSON, you do not need physical contact if you are a mind reader."
          }
        ]
      },{
        section: 2,
        titleDivClass: "",
        title: "Other Moves",
        titleClass: "h6 move-label",
        divClass: "border flex-1 flex-col",
        includeTextarea: true,
        textareaRows: 2,
        textareaClass: "flex-1",
        containerClass: "flex-1 flex-col"
      },{
        section: 3,
        useCommon: "psion-history",
        containerClass: "flex-1 flex-col"
      }
    ]
  };
}

