function getPlaybook_brick() {
  return {
    trope: "brick",
    nameModelString: "playbookModelName_brick",
    improvements: [
      "Get +1 to Charm (max +2)",
      "Get +1 to Cool (max +2)",
      "Get +1 to Sharp (max +2)",
      "Get +1 to Smarts (max +2)",
      "Get a new brick move",
      "Get a new brick move",
      "Get a new brick move",
      "Get a small or light warship",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm-1, Cool+1, Sharp+1, Smarts=0, Tough+2",
      "Charm-1, Cool+1, Sharp=0, Smarts+1, Tough+2",
      "Charm-1, Cool+2, Sharp=0, Smarts-1, Tough+2",
      "Charm+1, Cool+1, Sharp=0, Smarts-1, Tough+2"
    ],
    moveInstructions: [
      "You get all the basic moves. Choose 2 brick moves, and either another brick move or a move from any playbook.",
      "You can use all the battle moves, but when you get the chance, look up seize by force and laying down fire."
    ],
    blurb: {
      section: 1,
      paragraphs: [
        "The frontiers can be a mean, ugly, violent place. Law and society aren't a given everywhere. In those places, what's yours is yours only while you can hold it. Or as long as you have a brick backing you up.",
        "Bricks aren't soldiers; they are mercenaries loaded for bear. Or whatever tough large predator is found on a planet. The point is that \"reasonable response\" and \"appropriate restraint\" aren't in their vocabulary."
      ],
      guidance: [
        "Bricks are the baddest of asses. Their moves are simple, direct, and violent. If you want to answer affirmatively to, \"Tell me you brought the grenades,\" play a brick. Warning: if things are going well, you might not be using your special moves. Interesting relationships can keep you in the scene."
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
          "1 big weapon",
          "2 serious weapons",
          "1 backup weapon",
          "Oddments worth 2-barter",
          "Battle armor (2-armor)",
          "Soft vacsuit",
          "Fashion suitable to your look (you detail)"
        ]
      }
    ],
    history: [
      /*
      {
        text: "How did you become a brick?",
        class2: "li filled instruction",
        resultList: [
          "Former soldier?",
          "?"
        ]
      }
      */
    ],
    bondHistory: [
      {
        text: "Go around again for Bonds. On your turn ask one, two, or all three questions:",
        class: ""
      },{
        text: "Which one of you once left me bleeding, and did nothing for me?",
        class: "li filled instruction",
        result: "For that character, write Bond-2",
        class2: "li filled diamond plain-text",
      },{
        text: "Which one of you has fought shoulder to shoulder with me?",
        class: "li filled instruction",
        result: "For that character, write Bond+3",
        class2: "li filled diamond plain-text",
      },{
        text: "Which one of you is the [prettiest, smartest, next toughest, or ugliest]?",
        class: "li filled instruction",
        result: "For that character, write Bond+1",
        class2: "li filled diamond plain-text",
      },{
        text: "For everyone else, write Bond-1. You don't find a particular need to understand most people.",
        class: "",
      }
    ],
    features: [
      {
        section: 2,
        titleDivClass: "underline thick",
        title: "Brick Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Always Be Prepared",
            subtitle: "You have a well-stocked and high quality trauma kit. It counts as a medtech's kit with a capacity of 2-stock."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Bail",
            subtitle: "Name your escape route and roll+Tough. On a 10+, you make it. On a 7-9, you can go or stay, but if you go it costs you: leave something behind, or take something with you, the MC will tell you what. On a miss, you're caught vulnerable, half in and half out."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Battle-hardened",
            subtitle: "When you ACT UNDER PRESSURE, or when you stand overwatch, roll+Tough instead of +Cool."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Brutally Effective",
            subtitle: "Whenever you inflict harm, inflict +1-harm."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Pulse of the Fight",
            subtitle: "When you rely on INTUITION during a battle, roll+Tough instead of +Smarts."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Really Tough",
            subtitle: "You get +1 Tough (Max +3)."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label-no-punc",
            subtitleClass: "h6",
            title: "\"You and what army?\"",
            subtitle: "In battle, you treat opposing units as one size smaller when exchanging harm."
          }
        ]
      },{
        section: 2,
        titleDivClass: "",
        title: "Other Moves",
        titleClass: "h6 move-label",
        subtitleClass: "h6 instruction",
        subtitle: "",
        containerClass: "flex-1 flex-col",
        divClass: "border flex-1 flex-col",
        includeTextarea: true,
        textareaRows: 10
      },{
        section: 2,
        titleDivClass: "underline thick overline",
        title: "Brick Weapons",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li filled list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Big Gun",
            subtitle: "(choose 1):",
            divClass: "ul auto-column-2",
            divList: [
              {
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Battle rifle",
                subtitle: "(3-harm close/far loud autofire)"
              },{
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Penetrator rifle",
                subtitle: "(4-harm far/extreme)"
              },{
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Plasma cannon",
                subtitle: "(4-harm ap close area messy)"
              },{
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Rocket launcher",
                subtitle: "(4-harm far/extreme area messy reload)"
              },{
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Silenced sniper rifle",
                subtitle: "(3-harm far/extreme)"
              }
            ]
          },{
            titleDivClass: "li filled list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Serious Guns",
            subtitle: "(choose 2):",
            divClass: "ul auto-column-2",
            divList: [
              {
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Autoflechette",
                subtitle: "(3-harm close messy)"
              },{
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Charge rifle",
                subtitle: "(2-harm close/far loud)"
              },{
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Charge SMG",
                subtitle: "(2-harm close autofire loud)"
              },{
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Grenades",
                subtitle: "(4-harm hand close messy loud reload)"
              },{
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Sabot pistol",
                subtitle: "(3-harm close reload loud)"
              },{
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Armor Piercing",
                subtitle: "(Add ap to all your guns)"
              }
            ]
          },{
            titleDivClass: "li filled list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Backup weapons",
            subtitle: "(choose 1):",
            divClass: "ul auto-column-2",
            divList: [
              {
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Charge pistol",
                subtitle: "(2-harm close loud)"
              },{
                titleDivClass: "li empty list-top keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "Vibroknife (2-harm close)",
                subtitle: "(2-harm close autofire loud)"
              }
            ]
          }
        ]
      },{
        section: 2,
        titleDivClass: "",
        title: "Other Weapons",
        titleClass: "h6 move-label",
        divClass: "border",
        includeTextarea: true,
        textareaRows: 6
      },{
        section: "3",
        containerClass: "border pad",
        titleDivClass: "underline thick",
        title: "Your warship",
        titleClass: "title h4",
        ships: [
          {
            showTitle: false,
            shipSuffix: "",
            largeClass: "h4",
            groupClass: "h6 feature-margin",
            showPossessiveInstructions: false,
            showNeutralInstructions: true,
            showFrames: true,
            sizes: {
              small: true,
              light: true,
              medium: true,
              heavy: true,
              capital: true
            },
            showOptions: true,
            showWarship: true,
            showShipCrew: true,
            showShip: false,
            showCrew: false,
            crewStr: "crew",
            hideDelta: true
          }
        ]
      }
    ]
  };
}
