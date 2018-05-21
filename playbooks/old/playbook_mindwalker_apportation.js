function getPlaybook_mindwalker_apportation() {
  return {
    trope: "porter",
    psion: true,
    nameModelString: "playbookModelName_porter",
    improvements: [
      "Get +1 to Smarts (max +3)",
      "Get +1 to Charm (max +2)",
      "Get +1 to Cool (max +2)",
      "Get +1 to Sharp (max +2)",
      "Get +1 to Tough (max +2)",
      "Get a new porter move",
      "Get a new porter move",
      "Choose a second psion playbook and get a move from it",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm=0, Cool+1, Sharp+1, Smarts+2, Tough-1",
      "Charm+1, Cool+1, Sharp=0, Smarts+2, Tough-1",
      "Charm-1, Cool+1, Sharp+1, Smarts+2, Tough=0",
      "Charm-1, Cool=0, Sharp+1, Smarts+2, Tough+1"
    ],
    moveInstructions: [
      "You get all the basic moves and the Apportation move. Choose another porter move, and either another porter move or a move from any playbook."
    ],
    blurb: {
      section: 2,
      paragraphs: [
        "Psions are the practiced psychics of known space, and they look like anyone else. People with power over time and space are called porters.",
        "Often confused with tekes, porters don't actually move things, they bend time and space around things. Porters are known to be able to pull and push items forward in time, teleporting from place, and sometimes even call future versions of themselves back in time temporarily."
      ],
      guidance: [
        "Warning: Some porter moves require you to know the history of a place."
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
        title: "Porter Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li list-top",
            title: "Apportation",
            titleClass: "h6 move-label",
            subtitle: "When you want to PULL OR PUSH AN OBJECT FORWARD IN TIME, state the object you seek to move and roll+Smarts. On a 10+, choose 3. On a 7-9, choose 2:",
            subtitleClass: "h6",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond h6",
                title: "The object is larger than 2 kg (but not more than 4 kg)."
              },{
                titleDivClass: "li diamond h6",
                title: "The object originated or lands at a point far away in space."
              },{
                titleDivClass: "li diamond h6",
                title: "The object pulled is similar in function. (Choose this twice to have it be almost exactly the same, e.g. a different gun.)"
              },{
                titleDivClass: "li diamond h6",
                title: "The object pushed is at close range. (Chose this twice to target something at far range.)"
              },{
                titleDivClass: "li diamond h6",
                title: "The object pushed is moving rapidly relative to you."
              },{
                titleDivClass: "li diamond h6",
                title: "You push the object almost exactly as far into the future as you intended."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            title: "Duplicate",
            titleClass: "h6 move-label",
            subtitle: "(Requires Apportation) You can PULL YOURSELF FROM THE FUTURE. Roll+Smarts, on a hit, a future version of you appears for 20 seconds. On a 10+, choose 2. On a 7-9, choose 1:",
            subtitleClass: "h6",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond h6",
                title: "Your future self is inclined to help."
              },{
                titleDivClass: "li diamond h6",
                title: "Your future self comes from far away in space."
              },{
                titleDivClass: "li diamond h6",
                title: "Your future self planned for this moment and has a handy item."
              },{
                titleDivClass: "li diamond h6",
                title: "Your future self stays a minute."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            title: "Teleport",
            titleClass: "h6 move-label",
            subtitle: "(Requires Apportation) When you want to TELEPORT ACROSS PHYSICAL SPACE, roll+Smart. If you have the time, you can use a teleport calculator to create a hypnotic mosaic to handle the math for you, in which case you have a +1 forward. On a 10+, choose 3. On a 7-9, choose 2. On a miss, prepare for the worst (and possibly last) teleport of your life!",
            subtitleClass: "h6",
            divClass: "ul auto-column-2",
            divList: [
              {
                titleDivClass: "li diamond h6",
                title: "You arrive safely at a destination you can't see."
              },{
                titleDivClass: "li diamond h6",
                title: "You take +1 passenger."
              },{
                titleDivClass: "li diamond h6",
                title: "You orient exactly as you planned. You have a +1-forward on your next ACT UNDER PRESSURE, THREATEN WITH VIOLENCE or battle move."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            title: "Timeslip",
            titleClass: "h6 move-label",
            subtitle: "(Requires Apportation) When you want to TELEPORT FORWARD IN TIME, roll+Smarts. On a hit, you go up to a few seconds into the future. On a 10+, choose 1:",
            subtitleClass: "h6",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond h6",
                title: "You go up to five minutes into the future."
              },{
                titleDivClass: "li diamond h6",
                title: "You go exactly as far as you intended. You have a +1-forward on your next ACT UNDER PRESSURE, THREATEN WITH VIOLENCE or battle move."
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

