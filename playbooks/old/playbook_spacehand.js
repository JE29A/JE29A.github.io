function getPlaybook_spacehand() {
  return {
    trope: "spacer",
    nameModelString: "playbookModelName_spacer",
    improvements: [
      "Get +1 to Smarts (max +3)",
      "Get +1 to Cool (max +2)",
      "Get +1 to Sharp (max +2)",
      "Get +1 to Tough (max +2)",
      "REPLACE",
      "Get a new spacer move",
      "Get a new spacer move",
      "Get a new spacer move",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm-1, Cool+1, Sharp=0, Smarts+2, Tough+1",
      "Charm+1, Cool=0, Sharp+1, Smarts+2, Tough-1",
      "Charm=0, Cool-1, Sharp+1, Smarts+2, Tough+1",
      "Charm+1, Cool+1, Sharp-1, Smarts+2, Tough=0"
    ],
    moveInstructions: [
      "You get all the basic moves. Choose 2 spacer moves and either another spacer move or a move from any playbook.",
      "You can use all the battle moves, but when you get the chance, check Proper-ish Job and Juryrig, as well as the rules for how vehicles suffer harm."
    ],
    blurb: {
      section: 1,
      paragraphs: [
        "\"Everyone grows up in gravity. They learn to walk in it. They learn to eat in it. They learn to do everything in it. But take the most basic action in gravity, and do it in null-g, what happens? Try turning your head, do it. Just make sure you have a recepticle ready because I am not cleaning up your mess. When people need to get stuff done outside our cozy gravity zones, they come to someone like me and my crew.\"",
        "The spacehands are the unsung backbone of the modern economy. As no man is an island, no ship is built by one person. Everything that can't be built on a planet, or is just way cheaper to build in orbit, is built by spacehands. They scurry over the hauls of ships to turn a few hundred megatons of material into a functional ship or orbital habitat."
      ],
      guidance: [
        "Spacers are the builders and mechanics. They and their teams fix things like surgical teams fix people. Play a spacer if you want to have a welder on one hip and a network trunk exuder on the other."
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
          "Oddments worth 2-barter",
          "Soft vacsuit",
          "Mechanics tools",
          "Fashion suitable to your look (you detail)"
        ]
      }
      /*
      ,{
        setClass: "",
        textClass: "title center h4",
        text: "Spacer Crew",
        listClass: "",
        list: [
          "You have a spacer crew detailed to the left."
        ]
      }
      */
    ],
    history: [
    ],
    bondHistory: [
      {
        text: "Go around again for Bonds. On your turn ask either or both questions:",
        class: ""
      },{
        text: "Which one of you breaks the most things?",
        class: "li filled instruction",
        result: "For that character, write Bond+1",
        class2: "li filled diamond plain-text",
      },{
        text: "Which one of you recruited me?",
        class: "li filled instruction",
        result: "For that character, write Bond+2",
        class2: "li filled diamond plain-text",
      },{
        text: "For everyone else, write Bond-1. You are too busy keeping things running to keep abreast of everyone's daily nonsense.",
        class: "",
      }
    ],
    features: [
      {
        section: 2,
        titleDivClass: "underline thick",
        title: "Spacehand Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Proper-ish Job",
            subtitle: "When you want to GET SOMETHING PROPERLY FIXED on a light ship without assistance or access to dock resources, roll+Smarts. On a hit you get it working or replaced. On a 10+, choose 1:",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "You finished in record time."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "You didn't use more parts or fabrication than expected."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "You notice something else is broken, take a +1-forward on your next technical move."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Juryrig",
            subtitle: "When you want to GET SOMETHING WORKING RIGHT NOW on a small ship without assistance, roll+Smarts. On a 10+, choose 1. On a 7-9, choose 2:",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "It will take a few hours."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "You have to divert power/parts from another system."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "It will only work a little while."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "It will have a -1 ongoing until it is fixed properly."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Extra-Vehicular Activities",
            subtitle: "You are familiar with the differences of operating in null gravity. You are not clumsy and if you have to ACT UNDER PRESSURE under those conditions, roll+Smarts instead of +Cool."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Talk Shop",
            subtitle: "When you are MANIPULATING SOMEONE TECHNICALLY INCLINED, roll+Smarts instead of +Charm."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Wholesale Connections",
            subtitle: "When you are LOOKING FOR SOME PARTICULAR THING TO BUY, roll+Smarts instead of +Sharp. If a choice has to be made, you can choose instead of the MC. When you MAKE KNOWN THAT YOU WANT A THING AND DROP JINGLE TO SPEED IT ON ITS WAY, you have a discount of 1-barter."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Chief Spacer",
            subtitle: "You are a chief spacer and have a spacer crew. Detail them on the back."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Experienced Chief",
            subtitle: "(Requires Chief Spacer.) Add an option to your crew or erase one option."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Over-Qualified Chief",
            subtitle: "(Requires Experienced Chief.) Add two options to your crew."
          }
        ]
      },{
        section: '2b',
        titleDivClass: "",
        title: "Other Moves",
        titleClass: "h6 move-label",
        subtitleClass: "h6 instruction",
        subtitle: "",
        containerClass: "flex-1 flex-col",
        divClass: "border flex-1 flex-col",
        includeTextarea: true
      },{
        section: 3,
        useCommon: "spacer-crew",
        containerClass: ""
      }
    ]
  };
}
