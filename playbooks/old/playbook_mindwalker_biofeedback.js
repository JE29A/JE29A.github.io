function getPlaybook_mindwalker_biofeedback() {
  return {
    trope: "shaper",
    psion: true,
    nameModelString: "playbookModelName_shaper",
    improvements: [
      "Get +1 to Cool (max +3)",
      "Get +1 to Charm (max +2)",
      "Get +1 to Sharp (max +2)",
      "Get +1 to Smarts (max +2)",
      "Get +1 to Tough (max +2)",
      "Get a new shaper move",
      "Get a new shaper move",
      "Choose a second psion playbook and get a move from it",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm=0, Cool+2, Sharp+1, Smarts-1, Tough+1",
      "Charm+1, Cool+2, Sharp+1, Smarts-1, Tough=0",
      "Charm+1, Cool+2, Sharp-1, Smarts=0, Tough+1",
      "Charm-1, Cool+2, Sharp+1, Smarts+1, Tough+1"
    ],
    moveInstructions: [
      "You get all the basic moves and the Biofeedback move. Choose an additional shaper move, and either another shaper move or a move from any playbook."
    ],
    blurb: {
      section: 2,
      paragraphs: [
        "Psions are the practiced psychics of known space, and they look like anyone else. The ones that can control their own bodies on a microscopic level are called shapers.",
        "Shapers are the only psions that focus their power more internally. They can go without food or water, heal quickly, bend their bio energy into a weapon, and even phase matter. As a result, they tend to attract less stigma than the other kinds."
      ],
      guidance: [
        "Shapers are the oddest of the psions because their power is focused internally. Their moves are powerful, but not entirely outside the range of what other characters can accomplish."
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
        title: "Shaper Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li filled list-top",
            title: "Biofeedback",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "You are able to regulate your body to an unnatural degree. You use up air, water, and calories at a quarter of the rate as normal. In addition, your natural healing rate is doubled."
          },{
            titleDivClass: "li empty list-top",
            title: "Harden",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires Biofeedback) You are able to manipulate your dermis integrity to shrug off wounds. You have +1 armor while you are conscious."
          },{
            titleDivClass: "li empty list-top",
            title: "Healing",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires Biofeedback) You can regulate the regeneration of yourself or someone else. When you want to HEAL yourself or someone else, make physical contact and roll+Cool. On a 10+, they are stablized and recover 1-harm. On a 7-9, choose to stabilize or to recover 1-harm. On a miss, prepare for the worst!"
          },{
            titleDivClass: "li empty list-top",
            title: "Intangibility",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires Biofeedback) You can meddle with the strong nuclear forces that hold matter together. When you want to PHASE SOMETHING you are touching, roll+Cool. On a hit, you are able to phase yourself. On a 10+, you can also phase up to two people or a surface. On a miss, prepare for the worst!"
          },{
            titleDivClass: "li empty list-top",
            title: "Weapon",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires Biofeedback) You can shape your bio energy into a weapon (2-harm obvious hand) extending from one of your hands. When you THREATEN WITH VIOLENCE, roll+Cool instead of +Tough."
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

