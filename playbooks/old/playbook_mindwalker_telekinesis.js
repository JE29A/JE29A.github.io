function getPlaybook_mindwalker_telekinesis() {
  return {
    trope: "teke",
    psion: true,
    nameModelString: "playbookModelName_teke",
    improvements: [
      "Get +1 to Tough (max +3)",
      "Get +1 to Charm (max +2)",
      "Get +1 to Cool (max +2)",
      "Get +1 to Sharp (max +2)",
      "Get +1 to Smarts (max +2)",
      "Get a new teke move",
      "Get a new teke move",
      "Choose a second psion playbook and get a move from it",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm=0, Cool+1, Sharp+1, Smarts-1, Tough+2",
      "Charm+1, Cool+1, Sharp=0, Smarts-1, Tough+2",
      "Charm-1, Cool+1, Sharp+1, Smarts=0, Tough+2",
      "Charm-1, Cool=0, Sharp+1, Smarts+1, Tough+2"
    ],
    moveInstructions: [
      "You get all the basic moves and the Telekinesis move. Choose another teke move, and either another teke move or a move from any playbook."
    ],
    blurb: {
      section: 2,
      paragraphs: [
        "Psions are the practiced psychics of known space, and they look like anyone else. People with telekinesis are called tekes ('teeks').",
        "Not as unnerving as espers or pusher, tekes are not immune to stigma. At best they are asked to perform tricks: knock over an empty can, float a commlink, whatever. At worst they are viewed like a person with a weapon. Which is to be expected since many factions have trained tekes in their military or security services."
      ],
      guidance: [
        "Tekes are like psychic bricks, with a few different tricks. Warning: Like bricks, when things are going well, you might be juggling the contents of your pockets. So try to keep yourself involved and come up with "
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
        title: "Teke Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li list-top",
            title: "Telekinesis",
            titleClass: "h6 move-label",
            subtitle: "You have telekinesis. You can move things you can see with your mind. Your telekinsis alone can be a weapon (1-harm close), but items you are wielding with it may inflict more harm based on their size and may gain the obvious tag.",
            subtitleClass: "h6"
          },{
            titleDivClass: "li empty list-top",
            title: "Elemental-kinesis",
            titleClass: "h6 move-label",
            subtitle: "(Requires Telekinesis) You have honed your telekinesis and can directly manipulate a form of energy. When you use a battle move using your elemental kinesis, roll+Tough. Choose once for each time you take this move:",
            subtitleClass: "h6",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond empty h6",
                title: "Electricity: 3-harm obvious messy hand/close; not messy at hand range."
              },{
                titleDivClass: "li diamond empty h6",
                title: "Fire: 4-harm obvious dangerous close."
              },{
                titleDivClass: "li diamond empty h6",
                title: "Force: 2-harm forceful close."
              },{
                titleDivClass: "li diamond empty h6",
                title: "Frost: 3-harm obvious restraining close."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            title: "Kinetic Shield",
            titleClass: "h6 move-label",
            subtitle: "(Requires Telekinesis) You can exert your telekinesis into a force field around yourself. When you concentrate on your shield, you gain +2 armor, but you take a -1 ongoing on all rolls while you do. If you want to hold against a vacuum, you may have to ACT UNDER PRESSURE.",
            subtitleClass: "h6"
          },{
            titleDivClass: "li empty list-top",
            title: "Levitate",
            titleClass: "h6 move-label",
            subtitle: "(Requires Telekinesis) You can float yourself into a form of flight. Your environment determines if you take a penalty while levitating yourself. You may have to ACT UNDER PRESSURE to keep it up.",
            subtitleClass: "h6",
            divClass: "ul auto-column-2",
            divList: [
              {
                titleDivClass: "li diamond h6",
                title: "Null gravity: No penalty."
              },{
                titleDivClass: "li diamond h6",
                title: "Low grav or bouyant: -1 ongoing."
              },{
                titleDivClass: "li diamond h6",
                title: "Normal conditions: -2 ongoing."
              },{
                titleDivClass: "li diamond h6",
                title: "High grav or burdened: -3 ongoing."
              }
            ]
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

