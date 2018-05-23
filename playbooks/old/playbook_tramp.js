function getPlaybook_tramp() {
  return {
    trope: "tramp",
    nameModelString: "playbookModelName_tramp",
    improvements: [
      "Get +1 to Cool (max +3)",
      "Get +1 to Charm (max +2)",
      "Get +1 to Sharp (max +2)",
      "Get +1 to Smarts (max +2)",
      "Get +1 to Tough (max +2)",
      "Get a new tramp move",
      "Get a new tramp move",
      "REPLACE",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm=0, Cool+2, Sharp+1, Smarts-1, Tough+1",
      "Charm=0, Cool+2, Sharp+1, Smarts+1, Tough-1",
      "Charm+1, Cool+2, Sharp=0, Smarts-1, Tough+1",
      "Charm+2, Cool+2, Sharp=0, Smarts-1, Tough-1"
    ],
    moveInstructions: [
      "You get all the basic moves. Choose 2 tramp moves, and either another tramp move or a move from any playbook.",
      "You can use all the battle moves, but when you get the chance, look up standing overwatch, the vehicle moves, and the rules for how vehicles suffer harm."
    ],
    blurb: {
      section: 1,
      paragraphs: [
        "When you need to get somewhere discreetly, who do you turn to? Not a commercial transport. Those have planned schedules and they ID their passengers. When you need to , you need a tramp ship, and that means you need a Tramp.",
        "Tramps will go whereever they want, or whereever they are paid to go. And they don't often ask questions."
      ],
      guidance: [
        "Tramps have ships. If you can't imagine a star/space opera without a starship, you have to be a tramp. Warning: Tramp moves tend to focus on their starship, so you may feel out of place when things aren't on your ship."
      ]
    },
    gearSets: [
      {
        setClass: "",
        textClass: "",
        text: "You get:",
        listClass: "li filled",
        list: [
          "Personal ID",
          "Commlink",
          "1 handy weapon",
          "Oddments worth 4-barter",
          "Soft vacsuit",
          "Fashion suitable to your look (you detail)"
        ]
      },{
        setClass: "",
        textClass: "",
        listClass: "li empty",
        text: "Handy weapons (choose 1):",
        list: [
          "Antique revolver (2-harm close reload loud)",
          "Charge pistol (2-harm close loud)",
          "Charge rifle (2-harm close/far loud)",
          "Sabot pistol (3-harm close reload loud)"
        ]
      }
    ],
    extraCC: [
      {
        setClass: "keep-together",
        section: 1,
        textClass: "title center h4",
        text: "Your Ship",
        children: [
          {
            textClass: "",
            text: "Detail your first ship. Consider what your picks say not just about your ship, but about what your tramp can afford (or stole?)."
          }
        ]
      },{
        setClass: "keep-together",
        section: 2,
        style: "margin-top: 5px;",
        images: [
          {
            src: "timelapse4.png"
          }
        ]
      }
    ],
    history: [
    ],
    bondHistory: [
      {
        text: "Go around again for Bonds. On your turn ask one or both questions:",
        class: ""
      },{
        text: "Which one of you once got me out of some serious trouble?",
        class: "li filled instruction",
        result: "For that character, write Bond+1",
        class2: "li diamond filled plain-text",
      },{
        text: "Which one of you have I caught sometimes staring out at the stars?",
        class: "li filled instruction",
        result: "For that character, write Bond+2",
        class2: "li diamond filled plain-text",
      },{
        text: "For everyone else, write Bond+0. You are skeptical of people you don't know",
        class: "",
      }
    ],
    features: [
      {
        section: 2,
        titleDivClass: "underline thick",
        title: "Tramp Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li empty list-top",
            title: "Daredevil",
            titleClass: "h6 move-label",
            subtitle: "If you go straight into danger without hedging your bets, you get +1-armor. If you happen to be leading a gang or convoy, it gets +1-armor too.",
            subtitleClass: "h6"
          },{
            titleDivClass: "li empty list-top",
            title: "Fighter Jock Mentality",
            titleClass: "h6 move-label",
            subtitle: "When you THREATEN WITH VIOLENCE, roll+Cool instead of +Tough.",
            subtitleClass: "h6"
          },{
            titleDivClass: "li empty list-top",
            title: "Reputation",
            titleClass: "h6 move-label",
            subtitle: "When you meet someone important (your call), roll+Cool. On a hit, they've heard of you, and you say what they've heard; the MC has them respond accordingly. On a 10+, you take a +1-forward for dealing with them as well. On a miss, they've heard of you, but the MC decides what they've heard.",
            subtitleClass: "h6"
          },{
            titleDivClass: "li empty list-top",
            title: "Smuggler",
            titleClass: "h6 move-label",
            subtitle: "You know how to massage a manifest and tuck away illicit cargo. When you MANIPULATE SOMEONE in the process of smuggling contraband or passengers, roll+Coll instead of +Charm.",
            subtitleClass: "h6"
          },{
            titleDivClass: "li empty list-top",
            title: "Top Gun",
            titleClass: "h6 move-label",
            subtitle: "When you use ship systems to THREATEN WITH VIOLENCE or use battle moves, you roll+Cool instead of +Tough.",
            subtitleClass: "h6"
          },{
            titleDivClass: "li empty list-top",
            title: "Veteran Pilot",
            titleClass: "h6 move-label",
            subtitle: "When a ship you are piloting suffers v-harm, take a -1 to your roll. In addition, when a ship you are in has harm blow through to passengers, you suffer 1 less harm.",
            subtitleClass: "h6"
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
      }
    ]
  };
}

