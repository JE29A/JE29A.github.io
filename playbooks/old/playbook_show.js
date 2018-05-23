function getPlaybook_show() {
  return {
    trope: "show",
    nameModelString: "playbookModelName_show",
    improvements: [
      "Get +1 to Cool (max +2)",
      "Get +1 to Sharp (max +2)",
      "Get +1 to Smarts (max +2)",
      "Get +1 to Tough (max +2)",
      "Get a new show move",
      "Get a new show move",
      "Get a new show move",
      "REPLACE",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm+2, Cool=0, Sharp+1, Smarts+1, Tough-1",
      "Charm+2, Cool-1, Sharp+1, Smarts=0, Tough+1",
      "Charm+2, Cool+1, Sharp=0, Smarts-1, Tough+1",
      "Charm+2, Cool+1, Sharp-1, Smarts+1, Tough=0"
    ],
    moveInstructions: [
      "You get all the basic moves. Choose 2 show moves, and either another show move or a move from any playbook."
    ],
    blurb: {
      section: 1,
      paragraphs: [
        "You are an actor, a personality, the show. Okay... maybe you didn't hit it big, but you have all the right stuff. Most of showbiz is being in the right place at the right time. And anyway, you have found a better gig right now.",
        "Shows take the expression, 'Dress for the job you want,' and apply it to everything in their lives. They make themselves known and command attention."
      ],
      guidance: [
        "Shows are all about style over substance. If you want to fake it 'til you make it, play a show. Warning: you are all about being the center of attention, that means you are better at getting into trouble than getting out of it."
      ]
    },
    bondHistory: [
      {
        text: "Go around again for Bonds. On your turn, ask one or both questions:",
      },{
        text: "What is your favorite entertainment? (E.g. live vs recorded, or genres.)",
        class: "li filled instruction",
        result: "For characters that mention one that match your past career, put Bond+2.",
        class2: "li filled diamond plain-text",
      },{
        text: "Which of you have seen my professional work?",
        class: "li filled instruction",
        class2: "li filled diamond plain-text",
        resultList: [
          "For characters that praised it, put Bond+1."
        ]
      },{
        text: "For everyone else, put Bond-1. \"Who doesn't watch [format]?\"",
        class: ""
      }
    ],
    gearSets: [
      {
        setClass: "",
        textClass: "",
        text: "You get:",
        listClass: "li filled",
        list: [
          "Personal ID",
          "Commlink",
          "Lots of headshots",
          "Prop keepsakes from past work",
          "Oddments worth 4-barter",
          "Sizable wardrobe",
          "Pretty much anything you want to buy"
        ]
      }
    ],
    features: [
      {
        section: 2,
        titleDivClass: "underline thick",
        title: "Show Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Action [Format] Star",
            subtitle: "Be it holograms, trideo, or even old fashioned video, you know the demands of an action star: salient punning. When you make an appropriate pun to some current event you were involved in, you get a +1-forward."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Experienced Negotiator",
            subtitle: "You are no stranger to the negotiating table. When you READ A PERSON during a negotiation, rolled+Charm instead of +Sharp."
          }
          /*
          ,{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Heartthrob",
            subtitle: "When you flirtatiously MANIPULATE SOMEONE, you can use promises in your assurance."
          }
          */
          ,{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label-no-punc",
            subtitleClass: "h6",
            title: "'I Can't Work Like This!'",
            subtitle: "Sometimes the fastest way to make an exit is to make a scene. And boy can you make a scene. If things haven't escalated too far and you can offer at least a half-baked reason for you to be offended enough to leave, you can roll+Charm to get clear of a scene. On a 10+, the staff wants you gone as quickly and discreetly as possible. On a 7-9, you played it a little too much and at least one staff member tries to placate you (and possibly notice something you didn't want them to). On a miss, your performance is terrible so you should prepare for the worst!"
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label-no-punc",
            subtitleClass: "h6",
            title: "'I Do My Own Stunts.'",
            subtitle: "When you are ACTING UNDER PRESSURE in a physical task (especially if it involves jumping through glass or high falls), roll+Charm instead of +Cool."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label-no-punc",
            subtitleClass: "h6",
            title: "'Make My Day.'",
            subtitle: "You When you THREATEN WITH VIOLENCE, roll+Charm instead of +Tough. If your hand is forced, you can choose a 7-9 result or roll+Cool, on a hit you can decide to follow through, on a miss you chicken out, so prepare for the worst!"
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Punditry",
            subtitle: "When you MANIPULATE SOMEONE without the intention of getting anything beyond attention or their opinion, you don't need to offer assurance,  corroboration, or evidence (definitely not evidence)."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Screentested",
            subtitle: "You don't have a bad side, you are ready for holo projection. You gain +1 Charm."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Self-Promotion",
            subtitle: "You are a celebrity, or at least you can convince people you might be. Given enough time, you can complete a social media campaign to hype yourself or someone else. This counts as corroboration when you try to MANIPULATE your way into places."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label-no-punc",
            subtitleClass: "h6",
            title: "'These Are Not Egyptian Cotton.'",
            subtitle: "If you want to be treated like the best, you need to be able to recognize the best. You can accurately judge the quality of goods unless the MC says otherwise. In addition, you don't need to ASSESS A SITUATION to learn who is in control here (if you can't see them, you recognize that person is absent)."
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
        titleDivClass: "underline thick",
        title: "\"Here's My Headshot\"",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "What careers have you been in?",
            subtitle: "",
            divClass: "flex-row-wrap row-size-2",
            divList: [
              {
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "News/Television Personality"
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Recorded Acting"
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Live Theater"
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Musician"
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Celebrity Activism"
              },{
                titleDivClass: "li empty flex-row",
                titleClass: "h6",
                subtitleClass: "h6 flex-1 underline",
                title: "Other",
                subtitle: " "
              }
            ]
          },{
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "How do you answer when asked, 'What are you working on now?'",
            subtitle: "",
            divClass: "flex-row-wrap row-size-2",
            divList: [
              {
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Promotional tour"
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Extended research."
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "I'm looking for a new venue."
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "I'm on sabbatical."
              },{
                titleDivClass: "li empty",
                titleClass: "h6",
                title: "Show biz didn't work out for me."
              },{
                titleDivClass: "li empty flex-row",
                titleClass: "h6",
                subtitleClass: "h6 flex-1 underline",
                title: "Other ",
                subtitle: " ",
              }
            ]
          },{
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "What really happened?",
            subtitle: "",
            divClass: "border",
            includeTextarea: true,
            textareaRows: 7,
            textareaClass: "flex-1"
          }
        ]
      },{
        section: 3,
        titleDivClass: "",
        title: "Other Details",
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
