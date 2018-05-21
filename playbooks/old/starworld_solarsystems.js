function getKnownSystems() {
  var ret = [];

  ret.push({
    NAME: 'Mobius',
    features: [
      { label: 'Planet', value: 'Mobius' },
      { label: 'Feature', value: 'Asteroid Belt' }
    ],
    descriptions: [],
    stakes: [],
    threats: []
  });

  ret.push({
    NAME: 'New Tuscany',
    features: [
      { label: 'Planet', value: 'Tuscany' },
      { label: 'Feature', value: 'Asteroid Belt' }
    ],
    descriptions: [],
    stakes: [],
    threats: []
  });

  ret.push({
    NAME: 'Nova Terra',
    features: [
      { label: 'Planet', value: 'Terra Prime' },
      { label: 'Feature', value: '' }
    ],
    descriptions: [],
    stakes: [],
    threats: []
  });

  ret.push({
    NAME: 'Old Earth',
    features: [
      { label: 'Planet', value: 'Earth' },
      { label: 'Feature', value: 'Martian Orbital Yards' }
    ],
    descriptions: [],
    stakes: [],
    threats: []
  });

  ret.push({
    NAME: 'Spindle',
    features: [
      { label: 'Planet', value: 'Spindle' },
      { label: 'Feature', value: 'Asteroid Belt' }
    ],
    descriptions: [],
    stakes: [],
    threats: []
  });

  ret.push({
    NAME: 'Montana',
    features: [
      { label: 'Planet', value: 'Montana' },
      { label: 'Feature', value: 'Asteroid Belt' }
    ],
    descriptions: [],
    stakes: [],
    threats: []
  });

  ret.sort(function(a, b) {
    if (a.NAME > b.NAME) { return 1; }
    if (a.NAME < b.NAME) { return -1; }
    return 0;
  });

  while(ret.length % 4 > 0) {
    ret.push( getBlankSolarSystem( (ret.length % 4)+9 ) );
  }
  return ret;
}

function getKnownFactions() {
  var ret = [];

  ret.push({
    NAME: 'Cygni Combine',
    features: [
      { label: 'Origin', value: 'Cyngi' },
      { label: 'Kind', value: 'Psion dominated' },
      { label: 'Impulse', value: '' }
    ],
    descriptions: [],
    stakes: [],
    threats: []
  });
  while(ret.length % 4 > 0) {
    ret.push( getBlankFaction( (ret.length % 4)+9 ) );
  }

  return ret;
}

function getBlankSolarSystem(id) {
  var features = [], i;
  for(i = 1; i <= 4; i++) {
    features.push({
      label: 'Planet / Feature #'+ i,
      value: ''
    });
  }
  return {
    NAME: '',
    id: 'solar-system-'+ (id ? id : '') +'-'+ parseInt( Math.random() * 1000, 10),
    features: features,
    descriptions: [],
    stakes: [],
    threats: []
  };
}

function getBlankFaction(id) {
  var features = [], i;
  features.push({
    label: 'Origin',
    value: ''
  });
  features.push({
    label: 'Kind',
    value: ''
  });
  features.push({
    label: 'Impulse',
    value: ''
  });
  
  return {
    NAME: '',
    id: 'faction-'+ (id ? id : '') +'-'+ parseInt( Math.random() * 1000, 10),
    features: features,
    descriptions: [],
    stakes: [],
    threats: []
  };
}
