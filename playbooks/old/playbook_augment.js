function getPlaybook_augment() {
  return {
    section: 1,
    trope: "augment",
    nameModelString: "playbookModelName_augment",
    improvements: [
      "Get +1 to Charm (max +2)",
      "Get +1 to Cool (max +2)",
      "Get +1 to Sharp (max +2)",
      "Get +1 to Smarts (max +2)",
      "Get +1 to Tough (max +2)",
      "Get a small or light warship",
      "Get a new augment move",
      "Get a new augment move",
      "Get a move from another playbook",
      "Get a move from another playbook"
    ],
    statArrays: [
      "Charm+2, Cool+1, Sharp+1, Smarts-1, Tough=0",
      "Charm-1, Cool+2, Sharp+1, Smarts-1, Tough+1",
      "Charm+1, Cool+1, Sharp+2, Smarts-1, Tough=0",
      "Charm=0, Cool+1, Sharp+1, Smarts-1, Tough+2"
    ],
    moveInstructions: [
      "You get all the basic moves. Choose 2 augment moves, and either another augment move or a move from any playbook."
    ],
    blurb: {
      section: 1,
      paragraphs: [
        "People get hurt, that isn't anything new. And sometimes they lose things they can't do without. Fortunately, prosthesis technology has advanced to the point that they can exceed the capacity of the parts they replace. Many go under the knife for medical purposes, and maybe it started that way for you, but you didn't stop at equal competence. You are an augment.",
        "Augments have a bad rep because of holodramas, where they inevitably end up being psycho killer."
      ],
      guidance: [
        "Anyone can get a cybernetic implant by taking an augment move, playing an augment is deciding to define yourself by your many implants. Warning: Fundamentally your moves are putting gear into your body and raising your stats. This means you are better at the basic moves that are used most often."
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
          "2 specialist gear",
          "Oddments worth 3-barter",
          "Fashion suitable to your look (you detail)"
        ]
      },{
        setClass: "",
        textClass: "",
        text: "Specialist gear (choose 2):",
        listClass: "li empty",
        list: [
          "Charge pistol (2-harm close loud)",
          "Engineering kit",
          "1-armor (you detail)",
          "Soft vacsuit"
        ]
      }
    ],
    bondHistory: [
      {
        text: "Go around again for Bonds. On your turn ask one, two, or all three questions:",
        class: ""
      },{
        text: "Which one of you has helped me service an implant?",
        class: "li filled instruction",
        result: "For that character, write Bond+2",
        class2: "li filled diamond plain-text",
      },{
        text: "Which one of you is from a society that stigmatizes elective augmentation?",
        class: "li filled instruction",
        result: "For that character, write Bond-2",
        class2: "li filled diamond plain-text"
      },{
        text: "Ask yourself how obvious are your augmentations?",
        class: "instruction",
        class2: "li diamond filled plain-text",
        resultList: [
          "If they are, put Bond-1 for everyone else. You are used to the isolation that comes from being an obvious augment.",
          "If they aren't, put Bond=0 for everyone else."
        ]
      }
    ],
    features: [
      {
        section: 2,
        titleDivClass: "underline thick",
        title: "Augment Moves",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            titleDivClass: "li filled diamond list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Cybernetic Competence",
            subtitle: "Your first cybernetic implant was to compensate for a natural deficency. Choose one for each time you take this move:",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li empty list-top",
                titleClass: "h6 move-label",
                subtitleClass: "h6",
                title: "Facial Rewiring",
                subtitle: "You get +1 to Charm (max +1)."
              },{
                titleDivClass: "li empty list-top",
                titleClass: "h6 move-label",
                subtitleClass: "h6",
                title: "Hypothalamus/Pituitary Regulator",
                subtitle: "You get +1 to Cool (max +1)."
              },{
                titleDivClass: "li empty list-top",
                titleClass: "h6 move-label",
                subtitleClass: "h6",
                title: "Locus Coeruleus Implant",
                subtitle: "You get +1 to Sharp (max +1)."
              },{
                titleDivClass: "li empty list-top",
                titleClass: "h6 move-label",
                subtitleClass: "h6",
                title: "Auxiliary Cognition Unit",
                subtitle: "You get +1 to Smarts (max +1)."
              },{
                titleDivClass: "li empty list-top",
                titleClass: "h6 move-label",
                subtitleClass: "h6",
                title: "Muscle Replacement",
                subtitle: "You get +1 to Tough (max +1)."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Adrenal Upgrade",
            subtitle: "Your adrenal glands have been encouraged to overdevelop. After you take harm in a scene, you enter a Combat Reflex, and while you are in it you:",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "Have +1-ongoing for battle moves."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "Have -1-ongoing for anything unrelated to battle."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "Have -2 on all Harm move (min +0)."
              },{
                titleDivClass: "li diamond",
                titleClass: "h6",
                title: "You have to ACT UNDER PRESSURE to not kill enemies (and maybe friends)."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Dynamic Apperance",
            subtitle: "You have extensive cosmetic implants. You can change about any cosmetic feature of your body in moments except your bone structure, including your voice. Pretending to be a specific person or not recognizing someone out to find you may require ACT UNDER PRESSURE or MANIPULATE SOMEONE moves."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Nanocomputer",
            subtitle: "You have a commlink installed in your body that you can utilize at the speed of thought. You detail how it connects to external systems, some choices may require other augment moves."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Ocular Replacement",
            subtitle: "One or both of your eyes have been replaced, you detail their appearance. Then choose 3:",
            divClass: "ul",
            divList: [
              {
                titleDivClass: "li empty diamond",
                titleClass: "h6",
                title: "Low-Light Vision.",
                subtitleClass: "h6",
                subtitle: "You operate effectively as long as you aren't in total darkness."
              },{
                titleDivClass: "li empty diamond",
                titleClass: "h6",
                title: "Thermographic Vision.",
                subtitleClass: "h6",
                subtitle: "You have a +1-forward on ASSESS A SITUATION or READ A PERSON moves where seeing temperature differences would help."
              },{
                titleDivClass: "li empty diamond",
                titleClass: "h6",
                title: "Retinal Duplication.",
                subtitleClass: "h6",
                subtitle: "Your replacement(s) can duplicate retinal patterns if so programmed."
              },{
                titleDivClass: "li empty diamond",
                titleClass: "h6",
                title: "Vision Magnification.",
                subtitleClass: "h6",
                subtitle: "Your replacement(s) can zoom."
              },{
                titleDivClass: "li empty diamond",
                titleClass: "h6",
                title: "Ocular Drone.",
                subtitleClass: "h6",
                subtitle: "You can remove one or both replacement eyes and have it still provide an audio/video feed to you."
              }
            ]
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Protective Skin Weave",
            subtitle: "Webs of protective fibers have been woven above your dermis. You count as having 2-armor (doesn't stack with gear), but it is just beneath your skin."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Respiratory Replacement",
            subtitle: "Your lungs have been replaced and came with a 20 minute reserve O2 supply."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Trauma Implant",
            subtitle: "You have slots for two trauma charges in your chest cavity. You start with 2 holds (which you can recover for 1-barter expenses). You can spend a hold automatically stablize yourself or to ignore the result of a Harm move."
          }
        ]
      },{
        section: 2,
        titleDivClass: "",
        title: "Other Moves",
        titleClass: "h6 move-label",
        containerClass: "flex-1 flex-col",
        divClass: "border flex-1 flex-col",
        includeTextarea: true,
        textareaRows: 8
      },{
        section: 3,
        titleDivClass: "underline thick",
        title: "Augment History",
        titleClass: "title h3",
        divClass: "",
        divList: [
          {
            containerClass: "underline",
            titleDivClass: "list-top flex-row",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "How are obvious augments perceived?",
            includeTextarea: true,
            textareaRows: 2
          },{
            containerClass: "underline",
            titleDivClass: "list-top flex-row",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Why did you get your first implant? Why did you get more?",
            includeTextarea: true,
            textareaRows: 5
          }
        ]
      }
    ]
  };
}
