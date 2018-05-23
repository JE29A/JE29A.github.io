function getPlaybook_medtech() {
  return {
    trope: "medtech",
    nameModelString: "playbookModelName_medtech",
    improvements: [
      "Get +1 to Sharp (max +3)",
      "Get +1 to Charm (max +2)",
      "Get +1 to Cool (max +2)",
      "Get +1 to Smarts (max +2)",
      "Get +1 to Tough (max +2)",
      "Get a new medtech move",
      "Get a new medtech move",
      "Get a supplier (detail with the MC)",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm+1, Cool+1, Sharp+2, Smarts=0, Tough-1",
      "Charm-1, Cool+1, Sharp+2, Smarts+1, Tough=0",
      "Charm-1, Cool+1, Sharp+2, Smarts=0, Tough+1",
      "Charm+1, Cool-1, Sharp+2, Smarts+1, Tough=0"
    ],
    moveInstructions: [
      "You get all the basic moves. You also have medtech kit. Choose 1 medtech move, and either another medtech move or a move from any playbook.",
      "You can use all the battle moves, but when you get the chance, look up seize by force and laying down fire."
    ],
    blurb: {
      section: 1,
      paragraphs: [
        "When the worst has happened and you are leaking your life onto the bulkhead, you don't want just any doctor -- a family practitioner is not going to be able to dig a hollowpoint out of your insides. It doesn't matter that half of the tools they carry practically run themselves, you still want a crisis tested professional. You want a medtech.",
        "A medtech will drag you to cover and staple you together so you live long enough to reach proper facilities. And you won't feel a thing the entire way."
      ],
      guidance: [
        "Medtechs aren't necessarily doctors, but they often perform those duties on frontier worlds without the ability to lure permanent transplants. Warning: if things are going well, it is possible your core feature. Make interesting relations so you'll stay relevant."
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
          "1 practical weapon",
          "Oddments worth 4-barter",
          "Soft vacsuit",
          "Fashion suitable to your look (you detail)",
          "At your option, 1-armor"
        ]
      },{
        setClass: "",
        textClass: "",
        text: "Small practical weapons (choose 1):",
        listClass: "li empty",
        list: [
          "Charge pistol (2-harm close loud)",
          "Vibroknife (2-harm hand)",
          "Stunbaton (1-harm stun)"
        ]
      }
    ],
    history: [
    ],
    bondHistory: [
      {
        text: "Go around again for Bonds. On your turn ask one, two, or all three questions:",
        class: ""
      },{
        text: "Which one of you should I expect to be operating on the most?",
        class: "li filled instruction",
        result: "For that character, write Bond-2",
        class2: "li filled diamond plain-text",
      },{
        text: "Which one of you held the clamps and helped me save a life?",
        class: "li filled instruction",
        result: "For that character, write Bond+2",
        class2: "li filled diamond plain-text",
      },{
        text: "Which one of you has been with me the longest and seen what I've seen?",
        class: "li filled instruction",
        result: "For that character, write Bond+3",
        class2: "li filled diamond plain-text",
      },{
        text: "For everyone else, write Bond+1. You keep your eyes open.",
        class: "",
      }
    ],
    features: [
      {
        section: 2,
        titleDivClass: "underline thick",
        title: "Medtech Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Battlefield Grace",
            subtitle: "While you are caring for people, not fighting, you get +1 armor."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Combat Administration",
            subtitle: "You know how to deal with unruly patients: dose 'em. When you need to INJECT SOMEONE, roll+Sharp to get in close and jab it in (assuming the target's armor doesn't prevent it). On a 10+, you reached the artery, and they go down pretty quick. On a 7-9, it will take a little while to kick in. On a miss, prepare for the worst! You can also THREATEN SOMEONE WITH AN INJECTION, roll+Sharp instead of +Tough."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "'Everybody Lies'",
            subtitle: "Everybody lies to cover up embarrassing history. When you MANIPULATE SOMEONE that needs your help, you can roll+Sharp instead of +Charm, but you use the grace of a doctors' handwriting (so they will dislike you). If you use this on another character, they reduce their Bond to you by 1."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "First Aid",
            subtitle: "When you really need someone on their feet, you can expend 1-stock to attempt to improve their condition, roll+Sharp. On a hit the patient stabilizes. On a 7-9, choose 1:",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "The patient takes a -1 forward."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "The patient heals 1-harm but takes a -1 ongoing until it is fixed properly."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "The patient heals 1-harm but it will return as 2-harm and become unstable again later."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Infirmary -- REPLACE",
            subtitle: "You get a surgical infirmary (you detail where) with life support, a pharma-printer, robotic arm assistant, and smart dispenser. Get patients into it and you can work on them with a 1-stock discount (+1 for 0-stock, +2 for 1-stock, +3 for 1-stock). Modern facilities don't waste surgical kits like 21st century chop-shops."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Professionalism",
            subtitle: "When you HELP or INTERFERE WITH SOMEONE, you can roll+Sharp regardless of your narrative explanation."
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
        title: "Medtech Kit",
        titleClass: "title h3",
        divList2: [
          {
            titleDivClass: "keep-together",
            style: "float: right; margin: 5px 0px 5px 5px; border: 2px solid black; position: relative; width: 80px; height: 45px;",
            titleClass: "h6 title border-text top-side",
            title: "Stock"
          }
        ],
        divClass: "",
        divList: [
          {
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "You have a portable kit of all kinds of medical marvels: scissors, gloves, clamps, scalpels, traumafoam, electric cautizer, instant bloodpacks, NervePinch(tm) nanopaste, AutoSthesia injector, internal body imager, MobileER(tm) resuscitation unit, etc. It all fits in a hard backpack. When you use it, spend its stock; you can spend 0-3 of its stock per use. You can resupply it for 1-barter per 3-stock, if your circumstances let you barter for medical supplies.",
            subtitle: ""
          },{
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "It begins play holding 6-stock.",
            subtitle: ""
          },{
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "To use it to STABILIZE AND HEAL SOMEONE AT 4 OR LOWER: roll+Stock spent. On a hit, they stabilize and heal to 5, and choose 2 (on a 10+) or 1 (on a 7-9):",
            subtitle: "",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond keep-together",
                titleClass: "h6 instruction",
                subtitleClass: "h6",
                title: "They fight you and you have to put them under anesthesia. How long will they be out?"
              },{
                titleDivClass: "li diamond keep-together",
                titleClass: "h6 instruction",
                subtitleClass: "h6",
                title: "They respond very well to treatment. Recover 1 of the stock you spent, if you spent any."
              },{
                titleDivClass: "li diamond keep-together",
                titleClass: "h6 instruction",
                subtitleClass: "h6",
                title: "The pain and drugs make them babble the truth to you. Ask them what secret they spill."
              },{
                titleDivClass: "li diamond keep-together",
                titleClass: "h6 instruction",
                subtitleClass: "h6",
                title: "They're at your complete mercy. What do you do to them?"
              },{
                titleDivClass: "li diamond keep-together",
                titleClass: "h6 instruction",
                subtitleClass: "h6",
                title: "Their course of recovery teaches you something about your craft. Mark experience."
              },{
                titleDivClass: "li diamond keep-together",
                titleClass: "h6 instruction",
                subtitleClass: "h6",
                title: "They owe you for your time, attention, and supplies, and you're going to hold them to it."
              },{
                titleDivClass: "keep-together",
                titleClass: "h6",
                subtitleClass: "h6",
                title: "On a miss, they take 1-harm instead."
              }
            ]
          },{
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "To use it to SPEED RECOVERY OF SOMEONE AT 5 or 6: don't roll. Spend 1-stock. They choose: they spend a day (6) or 3 days (5) hopped up on the good stuff, or they ignore doctor's orders during their recovery to be mostly functional but in agony.",
            subtitle: ""
          },{
            titleDivClass: "li filled list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "To use it to REVIVE SOMEONE WHOSE LIFE HAS BECOME UNTENABLE, spend 2-stock. They come back, but you get to choose how they come back. Chose from the regular \"when life is untenable\" list, or else choose 1:",
            subtitle: "",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond keep-together",
                titleClass: "h6 instruction",
                subtitleClass: "h6",
                title: "They come back in your deep, deep debt."
              },{
                titleDivClass: "li diamond keep-together",
                titleClass: "h6 instruction",
                subtitleClass: "h6",
                title: "They come back with a prosthetic (you detail)."
              }
            ]
          },{
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "To use it to TREAT AN NPC, spend 1-stock. They're stable now and they'll recover in time."
          },{
            titleDivClass: "list-top",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "To use it to INSTALL CYBERWARE IN SOMEONE, spend 1-stock. The implant is installed properly, but the patient has a -1 ongoing until they get used to it (enough time places or they roll a 10+ on a move that relies on it)."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "You have a supplier",
            subtitle: "At the beginning of every session, gain 2-stock, to a maximum of 6-stock."
          }
        ]
      }
    ]
  };
}
