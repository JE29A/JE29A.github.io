function getPlaybook_mindwalker_telepathy() {
  return {
    trope: "pusher",
    psion: true,
    nameModelString: "playbookModelName_pusher",
    improvements: [
      "Get +1 to Charm (max +3)",
      "Get +1 to Cool (max +2)",
      "Get +1 to Sharp (max +2)",
      "Get +1 to Smarts (max +2)",
      "Get +1 to Tough (max +2)",
      "Get a new pusher move",
      "Get a new pusher move",
      "Choose a second psion playbook and get a move from it",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm+2, Cool+1, Sharp=0, Smarts-1, Tough+1",
      "Charm+2, Cool=0, Sharp+1, Smarts-1, Tough+1",
      "Charm+2, Cool+1, Sharp-1, Smarts+1, Tough=0",
      "Charm+2, Cool=0, Sharp+1, Smarts+1, Tough-1"
    ],
    moveInstructions: [
      "You get all the basic moves and the Telepathy move. Choose an additional pusher move, and either another pusher move or a move from any playbook."
    ],
    blurb: {
      section: 2,
      paragraphs: [
        "Psions are the practiced psychics of known space, and they look like anyone else. People with telepathy are called pushers because they can push messages or even actions into other people's minds.",
        "Pushers are the most disturbing of the psions. Shapers can adjust their own bodies, tekes can move things, and espers can dig into people's deepest secrets, but pushers can make other people do things."
      ],
      guidance: [
        "Pushers are spooky and really fun to play. Their moves are powerful, but not entirely outside the range of what other characters can accomplish."
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
        title: "Pusher Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li list-top",
            title: "Telepathy",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "You can establish mental communication with other people in close proximity. Information cannot be coerced. If a subject is unwilling, you must roll+Charm. On a 10+, your message is received clearly. On a 7-9, your intent gets through. On a miss, the subject knows you tried to intrude, so you should prepare for the worst!"
          },{
            titleDivClass: "li empty list-top",
            title: "Mind Blast",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires Telepathy) Your mind is a focused weapon (2-harm close area ignores armor). When you MIND BLAST, roll+Charm."
          },{
            titleDivClass: "li empty list-top",
            title: "Mind Shield",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "You can protect yourself from mental effects by 'shouting' louder. If you have to ACT UNDER PRESSURE because of exposure to psychic phenomena, roll+Charm instead of +Cool. On a 10+, in addition to completing your action, choose one:",
            divClass: "",
            divList: [
              {
                titleDivClass: "li filled diamond",
                titleClass: "h6",
                title: "You know where the effect came from."
              },{
                titleDivClass: "li filled diamond",
                titleClass: "h6",
                title: "You protect those immediately around you from the effect."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            title: "Mind Wipe",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires Telepathy) You can use your telepathy to scramble people's short term memory. Roll+Charm. On a 10+, choose 3. On a 7-9, choose 1. On a miss, your efforts failed but were noticed; prepare for the worst!",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li filled diamond",
                titleClass: "h6",
                subtitleClass: "h6 instruction",
                title: "You wipe more than one target.",
                subtitle: "If you want to wipe more than three people, you need to choose this twice. You can't manage more than a dozen at once."
              },{
                titleDivClass: "li filled diamond",
                titleClass: "h6",
                subtitleClass: "h6 instruction",
                title: "You erased the last few minutes.",
                subtitle: "If you want to wipe the entire last hour, you need to choose this twice."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            title: "Suggestion",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires Telepathy) You have turned your telepathy into projecting thoughts into people. When you want to IMPLANT AN ACTIONABLE IDEA IN SOMEONE'S MIND, roll+Charm. On a 10+, choose 1. One a 7-9, choose 2:",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "They only obey non-harmful parts of your command."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "They are stilted, clumsy, and obviously controlled."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "You suffer 1-harm (ignores armor)."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            title: "Vanish",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            subtitle: "(Requires Telepathy) You are able to make people not notice you or whatever else you desire. Roll+Charm. On 10+, you succeed. On 7-9: choose 1. On a miss, prepare for the worst!",
            divClass: "ul auto-column-2",
            divList: [
              {
                titleDivClass: "li filled diamond",
                titleClass: "h6",
                title: "You missed a few targets and they felt it."
              },{
                titleDivClass: "li filled diamond",
                titleClass: "h6",
                title: "It won't last long."
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

