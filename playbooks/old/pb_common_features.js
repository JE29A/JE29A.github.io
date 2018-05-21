function getReusedFeatureCatalog() {
  var ret = [], i, temp;
  var blank = {
    divList: [ {} ]
  };

  temp = getCommonFeatures_detail();
  for(i = 0; i < temp.length; i++) {
    ret.push( temp[i] );
  }
  //while (ret.length % 2 > 0) { ret.push( blank ); }

  temp = getCommonFeatures_history();
  for(i = 0; i < temp.length; i++) {
    ret.push( temp[i] );
  }
  //while (ret.length % 2 > 0) { ret.push( blank ); }

  temp = getCommonFeatures_moves();
  for(i = 0; i < temp.length; i++) {
    ret.push( temp[i] );
  }
  //while (ret.length % 2 > 0) { ret.push( blank ); }

  while (ret.length % 4 > 0) { ret.push( blank ); }
  return ret;
}

function getReusedFeatureCatalog_MC() {
  var ret = [], i, temp;
  var blank = {
    divList: [ {} ]
  };

  temp = getCommonFeatures_groups();
  for(i = 0; i < temp.length; i++) {
    ret.push( temp[i] );
  }
  //while (ret.length % 2 > 0) { ret.push( blank ); }

  temp = getCommonFeatures_ships();
  for(i = 0; i < temp.length; i++) {
    ret.push( temp[i] );
  }
  //while (ret.length % 2 > 0) { ret.push( blank ); }

  while (ret.length % 4 > 0) { ret.push( blank ); }
  return ret;
}

function getCommonFeatures_groups() {
  var ret = [], i, npcs = [];
  var npcs_raw = [{
    label: "System Governor",
    tags: "Overconfident, hard to reach, bribable"
  },{
    label: "Bureaucrat",
    tags: "Boss of his fiefdom, bribable"
  },{
    label: "Naval Officer",
    tags: "Military overconfidence, military support, bound by accords"
  },{
    label: "Pirate Captain",
    tags: "Wrathful, outlaw, fragile confidence"
  },{
    label: "Repair Chief",
    tags: "Professional, uncouth, busy"
  },{
    label: "Interrogator",
    tags: "Skeptical, determined, fanatical"
  },{
    label: "Merchant",
    tags: "Helpful for a buck."
  },{
    label: "Magnate",
    tags: "High stakes, connected"
  }];

  for(i = 0; i < npcs_raw.length; i++) {
    npcs.push({
      titleDivClass: "list-top",
      titleClass: "h6 title",
      subtitleClass: "h6",
      title: npcs_raw[i].label,
      subtitle: "(Possible Tags: "+ (npcs_raw[i].tags || "") +")"
    });
  }

  ret.push({
    section: 0,
    sectionType: "individuals",
    sectionName: "ready-npcs",
    divClass: "",
    divList: [
      {
        titleDivClass: "underline thick",
        titleClass: "h3 title",
        title: "Sample NPCs",
        divClass: "",
        divList: npcs
      }
    ]
  });

  ret.push({
    section: 0,
    sectionType: "groups",
    sectionName: "groups-1",
    divClass: "",
    divList: [
      {
        titleDivClass: "underline thick",
        titleClass: "h3 title",
        title: "Sample Groups",
        divClass: "",
        divList: [
          {
            containerClass: "border-thin",
            title: "Advanced Assault Team",
            titleClass: "title h4",
            divClass: "",
            divList: [],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showCrew: true,
                showCrewDetails: true,
                crewDetailRows: 1,
                crewStr: "Crew ",
                crewStr_name: "Assault Team",
                crewStr_size: "Small",
                crewStr_harm: 2,
                crewStr_armor: 2,
                crewStr_tags: "Professional soldiers.",
                crewStr_details: "Sophisticated equipment"
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Covert Assault Team",
            titleClass: "title h4",
            divClass: "",
            divList: [],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showCrew: true,
                showCrewDetails: true,
                crewDetailRows: 1,
                crewStr: "Crew ",
                crewStr_name: "Assault Team",
                crewStr_size: "Small",
                crewStr_harm: 2,
                crewStr_armor: 1,
                crewStr_tags: "Professional soldiers, stealthy",
                crewStr_details: "Military equipment."
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Pirate Boarding Party",
            titleClass: "title h4",
            divClass: "",
            divList: [],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showCrew: true,
                showCrewDetails: true,
                crewDetailRows: 1,
                crewStr: "Crew ",
                crewStr_name: "Pirate Boarding Party",
                crewStr_size: "Small",
                crewStr_harm: 2,
                crewStr_armor: 0,
                crewStr_tags: "Criminal inclinations.",
                crewStr_details: "Vacsuits, charge pistols, and vibroknives."
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Orbital Repair Crew",
            titleClass: "title h4",
            divClass: "",
            divList: [],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showCrew: true,
                showCrewDetails: true,
                crewDetailRows: 1,
                crewStr: "Crew ",
                crewStr_name: "Orbital Repair Crew",
                crewStr_size: "Medium",
                crewStr_harm: 1,
                crewStr_armor: 0,
                crewStr_tags: "Technically inclined.",
                crewStr_details: "Vacsuits, tools."
              }
            ]
          }
        ]
      }
    ]
  });

  return ret;
}

function getCommonFeatures_ships() {
  var ret = [];

  ret.push({
    section: 0,
    sectionType: "ships",
    sectionName: "ships-light",
    divClass: "",
    divList: [
      {
        titleDivClass: "underline thick",
        titleClass: "h3 title",
        title: "Light Ships",
        divClass: "",
        divList: [
          {
            containerClass: "border-thin",
            title: "Crew Transport",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Light transport for moving personnel between installations. Ship Option: +1 handling."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Crew Transport",
                shipStr_frame: "1 - Light",
                shipStr_massive: 2,
                shipStr_handling: 1,
                shipStr_speed: 3,
                shipStr_armor: 1,
                shipStr_weapons: "None or Close Armament (5-harm close) and Assault Boarding Capability",
                shipStr_tags: ""
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Superiority Fighter",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Light superiority fighter. Ship Option: -1 Massive."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Superiority Fighter",
                shipStr_frame: "1 - Light",
                shipStr_massive: 1,
                shipStr_handling: 0,
                shipStr_speed: 3,
                shipStr_armor: 2,
                shipStr_weapons: "Close Armament (5-harm close), +1-armor.",
                shipStr_tags: ""
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Survey Ship",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Light survey ship. Ship Option: FTL-capable."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Superiority Fighter",
                shipStr_frame: "1 - Light",
                shipStr_massive: 2,
                shipStr_handling: 0,
                shipStr_speed: 3,
                shipStr_armor: 1,
                shipStr_weapons: "Ranged Armament (3-harm close/far), Larger Broadside.",
                shipStr_tags: ""
              }
            ]
          }
        ]
      }
    ]
  });

  ret.push({
    section: 0,
    sectionType: "ships",
    sectionName: "ships-small",
    divClass: "",
    divList: [
      {
        titleDivClass: "underline thick",
        titleClass: "h3 title",
        title: "Small Ships",
        divClass: "",
        divList: [
          {
            containerClass: "border-thin",
            title: "Destroyer",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Small warship typically used for merchant escort duties and fleet screening. Ship Option: FTL-capable, +1 speed."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Destroyer",
                shipStr_frame: "2 - Small",
                shipStr_massive: 8,
                shipStr_handling: 0,
                shipStr_speed: 3,
                shipStr_armor: 2,
                shipStr_weapons: "Ranged Armament (4-harm close/far), Larger Broadside.",
                shipStr_tags: ""
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Small Merchant",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Small civilian ship typically used for cargo transport. Ship Option: FTL-capable, +Frame2 Massive."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Small Merchant",
                shipStr_frame: "2 - Small",
                shipStr_massive: 12,
                shipStr_handling: 0,
                shipStr_speed: 2,
                shipStr_armor: 2,
                shipStr_weapons: "None.",
                shipStr_tags: ""
              }
            ]
          }
        ]
      }
    ]
  });

  ret.push({
    section: 0,
    sectionType: "ships",
    sectionName: "ships-medium",
    divClass: "",
    divList: [
      {
        titleDivClass: "underline thick",
        titleClass: "h3 title",
        title: "Medium Ships",
        divClass: "",
        divList: [
          {
            containerClass: "border-thin",
            title: "Cruiser",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Medium warship typically used for long-term detached operations. Ship Option: FTL-capable, +1 speed."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Crew Transport",
                shipStr_frame: "3 - Medium",
                shipStr_massive: 20,
                shipStr_handling: 0,
                shipStr_speed: 2,
                shipStr_armor: 2,
                shipStr_weapons: "Ranged Armament (5-harm close/far), Larger Broadside.",
                shipStr_tags: ""
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Heavy Cruiser",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Medium warship typically used for fleet screening. Ship Option: FTL-capable, +1 armor."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Crew Transport",
                shipStr_frame: "3 - Medium",
                shipStr_massive: 20,
                shipStr_handling: 0,
                shipStr_speed: 1,
                shipStr_armor: 3,
                shipStr_weapons: "Ranged Armament (5-harm close/far), Larger Broadside.",
                shipStr_tags: ""
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Medium Merchant",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Medium ship for large hauling. Ship Option: FTL-capable, +frame2 massive."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Crew Transport",
                shipStr_frame: "3 - Medium",
                shipStr_massive: 29,
                shipStr_handling: 0,
                shipStr_speed: 1,
                shipStr_armor: 2,
                shipStr_weapons: "None.",
                shipStr_tags: ""
              }
            ]
          }
        ]
      }
    ]
  });

  ret.push({
    section: 0,
    sectionType: "ships",
    sectionName: "ships-heavy",
    divClass: "",
    divList: [
      {
        titleDivClass: "underline thick",
        titleClass: "h3 title",
        title: "Heavy Ships",
        divClass: "",
        divList: [
          {
            containerClass: "border-thin",
            title: "Battleship",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Heavy warship typically used for long-term detached operations. Ship Option: FTL-capable, +1 armor."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Crew Transport",
                shipStr_frame: "4 - Heavy",
                shipStr_massive: 45,
                shipStr_handling: 0,
                shipStr_speed: 0,
                shipStr_armor: 4,
                shipStr_weapons: "Ranged Armament (6-harm close/far), Larger Broadside.",
                shipStr_tags: ""
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Heavy Merchant",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Heavy ship used for bulk transport. Ship Option: FTL-capable, +frame2 massive."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Crew Transport",
                shipStr_frame: "4 - Heavy",
                shipStr_massive: 61,
                shipStr_handling: 0,
                shipStr_speed: 1,
                shipStr_armor: 3,
                shipStr_weapons: "None",
                shipStr_tags: ""
              }
            ]
          }
        ]
      }
    ]
  });

  ret.push({
    section: 0,
    sectionType: "ships",
    sectionName: "ships-capital",
    divClass: "",
    divList: [
      {
        titleDivClass: "underline thick",
        titleClass: "h3 title",
        title: "Capital Ships",
        divClass: "",
        divList: [
          {
            containerClass: "border-thin",
            title: "Dreadnought",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Capital warship typically used in fleet operations. Ship Option: FTL-capable, +1 armor."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Dreadnought",
                shipStr_frame: "5 - Capital",
                shipStr_massive: 100,
                shipStr_handling: 0,
                shipStr_speed: 0,
                shipStr_armor: 5,
                shipStr_weapons: "Ranged Armament (7-harm close/far), Larger Broadside, Divide Fire.",
                shipStr_tags: ""
              }
            ]
          }
        ]
      },{
        titleDivClass: "underline thick",
        titleClass: "h3 title",
        title: "Super Capital Ships",
        divClass: "",
        divList: [
          {
            containerClass: "border-thin",
            title: "Super Dreadnought",
            titleClass: "title h4",
            divClass: "",
            divList: [
              {
                titleClass: "h6",
                title: "Super capital warship typically used in fleet operations. Ship Option: FTL-capable, +1 armor."
              }
            ],
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Super Dreadnought",
                shipStr_frame: "6 - Super Cap.",
                shipStr_massive: 130,
                shipStr_handling: 0,
                shipStr_speed: 0,
                shipStr_armor: 6,
                shipStr_weapons: "Ranged Armament (7-harm close/far), +1 armor, Divide Fire.",
                shipStr_tags: ""
              }
            ]
          }
        ]
      }
    ]
  });

  ret.push({
    section: 0,
    sectionType: "ships",
    sectionName: "ships-archaic",
    divClass: "",
    divList: [
      {
        titleDivClass: "underline thick",
        titleClass: "h3 title",
        title: "Archaic Warships",
        divClass: "",
        divList: [
          {
            titleClass: "h6",
            title: "These ships are especially old, and feature 1 less ship option and 1 less war option than their sizes normally allow."
          },{
            containerClass: "border-thin",
            title: "Cutter, Archaic",
            titleClass: "title h4",
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Cutter, Archaic",
                shipStr_frame: "1 - Light",
                shipStr_massive: 2,
                shipStr_handling: 0,
                shipStr_speed: 3,
                shipStr_armor: 1,
                shipStr_weapons: "Close Armament (5-harm close).",
                shipStr_tags: ""
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Destroyer, Archaic",
            titleClass: "title h4",
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Destroyer, Archiac",
                shipStr_frame: "2 - Small",
                shipStr_massive: 8,
                shipStr_handling: 0,
                shipStr_speed: 2,
                shipStr_armor: 2,
                shipStr_weapons: "Close Armament (6-harm close).",
                shipStr_tags: ""
              }
            ]
          },{
            containerClass: "border-thin",
            title: "Cruiser, Archaic",
            titleClass: "title h4",
            ships: [
              {
                showTitle: false,
                shipSuffix: "",
                largeClass: "h4",
                groupClass: "h6",
                showShip: true,
                shipStr_name: "Cruiser, Archiac",
                shipStr_frame: "3 - Medium",
                shipStr_massive: 8,
                shipStr_handling: 0,
                shipStr_speed: 1,
                shipStr_armor: 2,
                shipStr_weapons: "Close Armament (7-harm close).",
                shipStr_tags: ""
              }
            ]
          }
        ]
      }
    ]
  });

  return ret;
}

function getCommonFeatures_detail() {
  var ret = [];

  ret.push({
    section: 3,
    sectionType: "detail",
    sectionName: "squad",
    titleDivClass: "underline thick",
    titleClass: "h3 title",
    title: "Squad",
    divClass: "",
    divList: [
      {
        titleDivClass: "list-top",
        titleClass: "h6",
        subtitleClass: "h6",
        title: "By default, your squad consists of 5 combatants with an assortment of charge rifles, armor, and a desire for money (2-harm 1-armor small crew profit-seeking)."
      },{
        titleDivClass: "list-top",
        titleClass: "h6",
        subtitleClass: "h6",
        title: "Choose 2:",
        divClass: "ul",
        divList: [
          {
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Your squad is 10 or so people.",
            subtitle: "Medium instead of small crew."
          },{
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Well Armed.",
            subtitle: "+1-harm."
          },{
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Well Armored.",
            subtitle: "+1-armor."
          },{
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Your squad is loyal to you.",
            subtitle: "Drop profit-seeking."
          },{
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Your squad has a good reputation.",
            subtitle: "Add honorable."
          }
        ]
      },{
        titleDivClass: "list-top",
        titleClass: "h6",
        subtitleClass: "h6",
        title: "And choose 1:",
        divClass: "ul",
        divList: [
          {
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Your squad is made up for free agents.",
            subtitle: "Vulnerable: desertion."
          },{
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Your squad is contracted from regular employer.",
            subtitle: "Vulnerable: obligation."
          },{
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Your squad are coarse.",
            subtitle: "Add uncouth."
          }
        ]
      },{
        containerClass: "",
        titleDivClass: "",
        title: "Your crew",
        titleClass: "title h4",
        ships: [
          {
            showTitle: false,
            shipSuffix: " 2",
            largeClass: "h4",
            groupClass: "h6",
            showShipCrew: false,
            showShip: false,
            showCrew: true,
            showCrewDetails: true,
            crewDetailRows: 10,
            crewStr: "crew",
            hideDelta: false
          }
        ]
      }
    ]
  });

  ret.push({
    section: 3,
    sectionType: "detail",
    sectionName: 'spacer-crew',
    titleDivClass: "underline thick",
    titleClass: "h3 title",
    title: "Spacer Crew",
    divClass: "",
    divList: [
      {
        titleDivClass: "list-top",
        titleClass: "h6",
        subtitleClass: "h6",
        title: "(Requires the Chief Spacer move.) You have a small crew of spacers that work for/under you (1-harm small crew unprofessional). With their assistance you can use Proper-ish Job on a small ship, and Juryrig a medium ship. Working with a smaller crew could draw out the schedule or inflict a -1 forward. or be outright impossible.",
      },{
        titleDivClass: "list-top",
        titleClass: "h6",
        subtitleClass: "h6",
        title: "Choose 2:",
        divClass: "ul",
        divList: [
          {
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Medium/Heavy:",
            subtitle: "Your crew is medium sized, making it large enough to properly service a medium ship and juryrig a heavy ship. Each time you take this option, increase the crew size again (Proper/Juryrig).",
            divClass: "ul flex-row-wrap",
            divList: [
              {
                containerClass: "flex-basis-33",
                titleDivClass: "li empty diamond",
                titleClass: "h6",
                title: "Heavy/Capital"
              },{
                containerClass: "flex-basis-33",
                titleDivClass: "li empty diamond",
                titleClass: "h6",
                title: "Capital/Super Capital"
              },{
                containerClass: "flex-basis-33",
                titleDivClass: "li empty diamond",
                titleClass: "h6",
                title: "Super Capital/?"
              }
            ]
          },{
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Professional:",
            subtitle: "Your crew has benefitted under your management. Drop unprofessional tag."
          },{
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Armored:",
            subtitle: "Your crew has access to basic armor (1-armor)."
          },{
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Well Armed:",
            subtitle: "Your crew has access to weapons beyond their work tools (2-harm)."
          },{
            titleDivClass: "li empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Machine Workshop:",
            subtitle: "Your crew has access to machining tools and can create new parts assuming they have the necessary raw materials. If you take this option again, you have printing fabricators that can very quickly make almost any replacement part."
          }
        ]
      },{
        titleDivClass: "list-top",
        titleClass: "h6",
        title: "Choose 1:",
        divClass: "ul",
        divList: [
          {
            titleDivClass: "li diamond empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Under Contract:",
            subtitle: "Your crew are actually employed by someone else. Add obligation."
          },{
            titleDivClass: "li diamond empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Loose-knit:",
            subtitle: "Your crew are free agents, they can come or go as they please. Add fickle."
          },{
            titleDivClass: "li diamond empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Locals:",
            subtitle: "Your crew are hired from specific local systems and won't go far from it. Add roots."
          },{
            titleDivClass: "li diamond empty",
            titleClass: "h6",
            subtitleClass: "h6",
            title: "Coarse:",
            subtitle: "Your crew aren't very refined. Add uncouth."
          }
        ]
      },{
        containerClass: "",
        titleDivClass: "",
        title: "Your crew",
        titleClass: "title h4",
        ships: [
          {
            showTitle: false,
            shipSuffix: " 2",
            largeClass: "h4",
            groupClass: "h6",
            showShipCrew: false,
            showShip: false,
            showCrew: true,
            showCrewDetails: true,
            crewDetailRows: 10,
            crewStr: "crew",
            hideDelta: false
          }
        ]
      }
    ]
  });

  ret.sort(function(a, b) {
    if (a.sectionName < b.sectionName) { return -1; }
    if (a.sectionName > b.sectionName) { return 1; }
    return 0;
  });

  return ret;
}

function getCommonFeatures_history() {
  var ret = [];

  ret.push({
    section: 3,
    sectionType: "history",
    sectionName: 'psion-history',
    containerClass: "flex-1 flex-col",
    titleDivClass: "underline thick",
    title: "Psion History",
    titleClass: "title h3",
    divClass: "flex-1 flex-col",
    divList: [
      {
        titleDivClass: "list-top",
        titleClass: "h6",
        subtitleClass: "h6",
        title: "How are psions identified where you are from?",
        subtitle: "",
        divClass: "auto-column-2 list-top",
        divList: [
          {
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            title: "As they manifest."
          },{
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            title: "Mandatory screening."
          }
        ]
      },{
        titleDivClass: "list-top",
        titleClass: "h6",
        subtitleClass: "h6",
        title: "What happens to psions that are identified?",
        subtitle: "",
        divClass: "auto-column-2 list-top",
        divList: [
          {
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            subtitleClass: "h6 instruction inline-block",
            title: "Nothing, they enjoy equal rights.",
            subtitle: "(Access to psion schools.)"
          },{
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            subtitleClass: "h6 instruction inline",
            title: "Being a psion is a crime.",
            subtitle: "(Expulsion, branding, confinement, and/or execution.)"
          },{
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            subtitleClass: "h6 instruction inline",
            title: "Conscription.",
            subtitle: "(Psion boarding school, mandatory service.)"
          },{
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            subtitleClass: "h6 instruction inline-block",
            title: "They are granted elevated rights.",
            subtitle: "(Everyone else is a second class citizen.)"
          }
        ]
      },{
        titleDivClass: "list-top",
        titleClass: "h6",
        subtitleClass: "h6",
        title: "How did you refine your powers?",
        subtitle: "",
        divClass: "auto-column-2 list-top",
        divList: [
          {
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            title: "At a psion school."
          },{
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            title: "Discreetly on your own."
          },{
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            title: "Mentored by a rogue psion."
          }
        ]
      },{
        titleDivClass: "list-top",
        titleClass: "h6",
        subtitleClass: "h6",
        title: "How did you come to be where you are now?",
        subtitle: "",
        divClass: "auto-column-2 list-top",
        divList: [
          {
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            title: "You are a free individual."
          },{
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            title: "You are a rogue psion."
          },{
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            title: "You are a fugitive psion."
          },{
            titleDivClass: "li empty keep-together list-bottom",
            titleClass: "h6",
            title: "You are on detached service."
          }
        ]
      },{
        titleDivClass: "list-top",
        titleClass: "h6",
        subtitleClass: "h6",
        title: "Are shapers treated any differently?",
      },{
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
  });

  ret.sort(function(a, b) {
    if (a.sectionName < b.sectionName) { return -1; }
    if (a.sectionName > b.sectionName) { return 1; }
    return 0;
  });

  return ret;
}

function getCommonFeatures_moves() {
  var ret = [];

  ret.push({
    section: 2,
    sectionType: "moves",
    sectionName: "cybernetic-moves",
    titleDivClass: "underline thick",
    title: "Cybernetic Moves",
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
            subtitle: "You get +1 to Charm (max +0)."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Hypothalamus/Pituitary Regulator",
            subtitle: "You get +1 to Cool (max +0)."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Locus Coeruleus Implant",
            subtitle: "You get +1 to Sharp (max +0)."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Auxiliary Cognition Unit",
            subtitle: "You get +1 to Smarts (max +0)."
          },{
            titleDivClass: "li empty list-top",
            titleClass: "h6 move-label",
            subtitleClass: "h6",
            title: "Muscle Replacement",
            subtitle: "You get +1 to Tough (max +0)."
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
  });

  ret.sort(function(a, b) {
    if (a.sectionName < b.sectionName) { return -1; }
    if (a.sectionName > b.sectionName) { return 1; }
    return 0;
  });

  return ret;
}
