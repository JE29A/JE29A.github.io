function getPlaybook_engineer() {
  return {
    trope: "engineer",
    nameModelString: "playbookModelName_engineer",
    improvements: [
      "Get +1 to Charm (max +2)",
      "Get +1 to Cool (max +2)",
      "Get +1 to Sharp (max +2)",
      "Get +1 to Tough (max +2)",
      "Add 2 options to your workspace",
      "Get a new engineer move",
      "Get a new engineer move",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm+1, Cool-1, Sharp+1, Smarts+2, Tough=0",
      "Charm-1, Cool=0, Sharp+2, Smarts+2, Tough-1",
      "Charm=0, Cool+1, Sharp+1, Smarts+2, Tough-1",
      "Charm-1, Cool+1, Sharp=0, Smarts+2, Tough+1"
    ],
    moveInstructions: [
      "You get all the basic moves. Choose 1 engineer move, and either another engineer move or a move from any playbook.",
      "You can use all the battle moves, but when you get the chance, read up on KEEPING AN EYE OUT, BAITING A TRAP, and TURNING THE TABLES, as well as the rules for how vehicles suffer harm."
    ],
    blurb: {
      section: 1,
      paragraphs: [
        "When only an impossible solution can set things right, people turn to the engineer. They might not have discovered hyperspace, but they figured out how to avoid having a ship get ripped apart by competing gravity (before too many killed themselves sailing into them anyway).",
        "Any ship setting off for parts unknown probably has at least one engineer onboard."
      ],
      guidance: [
        "Engineers are the zany inventors. They can fix things, but they really shine when they are pushing the bounds of what is possible. Play a engineer if you want to be instrumental in specific circumstances. Warning: your workspace depends on resources, and lots of them, so make friends with everyone you can."
      ]
    },
    gearSets: [
      {
        setClass: "",
        textClass: "",
        text: "You get:",
        listClass: "li filled",
        list: [
          "Workspace",
          "Personal ID",
          "Commlink",
          "Oddments worth 6-barter",
          "Soft vacsuit",
          "Fashion suitable to your look (you detail)",
          "Three normal gear or weaponry"
        ]
      }
    ],
    extraCC: [
      {
        setClass: "keep-together",
        section: 1,
        textClass: "title center h4",
        text: "Projects",
        listClass: "",
        listContainerClass: "",
        containerClass: "",
        children: [
          {
            textClass: "",
            text: "During play, it's your job to have your character start and pursue projects. They can be any projects you want, both long term and short. begin by thinking up the project you're working on this very morning, as play begins."
          }
        ]
      }
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
        title: "Engineer Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Bonefeel",
            subtitle: "At the beginning of the session, roll+Smarts. On a hit, hold 1. On a 10+, you have a +1 forward when you spend the hold. At any time, either you or the MC can spend your hold to have you already be there, with the proper tools and knowledge, with or without any clear explanation why. On a miss, the MC holds 1, and can spend it to have you be there already, but somehow pinned, caught or trapped."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Deep Insights",
            subtitle: "Get +1 Smarts (max +3)",
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Focused Intensity",
            subtitle: "When you do ACT UNDER PRESSURE, STAND OVERWATCH, or BAIT A TRAP, roll+Smarts instead of +Cool."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Things Speak",
            subtitle: "Whenever you handle or examine something, roll+Smarts. On a hit, you can ask the MC questions. On a 10+, ask 2. On a 7-9, ask 1:",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond",
                titleClass: "h6 instruction",
                title: "What's wrong with this, and how might I fix it?"
              },{
                titleDivClass: "li diamond",
                titleClass: "h6 instruction",
                title: "What is the most recent modification made to this?"
              },{
                titleDivClass: "li diamond",
                titleClass: "h6 instruction",
                title: "Who made this?"
              },{
                titleDivClass: "li diamond",
                titleClass: "h6 instruction",
                title: "What is it made of?"
              },{
                titleDivClass: "li diamond",
                titleClass: "h6 instruction",
                title: "What does it do?"
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Usually Right",
            subtitle: "When a character comes to you for advice, tell them what you honestly think the best course is. If they do it, they take +1 to any rolls they make in the doing, and you mark experience."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Weird Science",
            subtitle: "Some component of your workspace, or some arrangement of components, is especially exotic (possibly from another dimension or level of reality). Choose and name it, or else leave it for the MC to reveal during play."
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
        titleDivClass: "underline thick",
        titleClass: "title h3",
        title: "Workspace",
        divClass: "",
        divList: [
          {
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Choose which of the following your workspace includes. Choose 3:",
            subtitle: "",
            divClass: "ul auto-column-2",
            divList: [
              {
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Machining tools"
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Scrap pile"
              },{
                titleDivClass: "li empty",

                titleClass: "h6",
                title: "Controlled environment"
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Proving range"
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Material fabricator"
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Prototype from a previous job"
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Booby traps"
              }
            ]
          },{
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "When you go into your workspace and dedicate yourself to making a thing, or to getting to the bottom of something, decide waht and tell the MC. The MC will tell you 1-4 of the following complications:",
            subtitle: "",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "How long it will take to work out/through."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "First you'll have to get/build/fix/figure out ___."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "You're going to need ____ to help you with it."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "It's going to cost you a lot of barter."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "The best you'll be able to do is a weak or unreliable version."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "It's going to mean exposing yourself (plus colleagues) to serious danger."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "You're going to have to add _____ to your workplace first."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "It's going to take multiple tries."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "You're going to have to take ____ apart to do it."
              }
            ]
          },{
            titleDivClass: "",
            titleClass: "h6",
            title: "The MC might connect them all with \"and,\" or might make it easier with an \"or.\""
          },{
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Once you've accomplished the necessaries, you can go ahead and accomplish the thing itself. The MC will stat it up, explain, or whatever it calls for."
          }
        ]
      },{
        section: '3b',
        titleDivClass: "thick overline",
        titleClass: "title h3",
        title: "Projects",
        subtitleClass: "h6 instruction",
        subtitle: "",
        containerClass: "flex-1 flex-col",
        divClass: "border flex-1 flex-col",
        includeTextarea: true
      }
    ]
  };
}
