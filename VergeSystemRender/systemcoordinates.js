var coords = [
  {system: "Aegis", x: 0, y: 0, z: 0, majorSystem: true},
  {system: "Aila", x: -28.2, y: -20.93, z: 17},
  {system: "Algbeta", x: -12.8, y: -14.52, z: -24.59},
  {system: "Algemron", x: -14.71, y: -16.86, z: -31.56, majorSystem: true},
  {system: "Amandorna", x: -29.9, y: 9.91, z: 1},
  {system: "Annahoy", x: 18.75, y: -1.1, z: 15},
  {system: "Argos", x: -19.52, y: -9.02, z: 5.62, majorSystem: true},
  {system: "Arisnar", x: -3.88, y: -1.2, z: -33},
  {system: "Armstrong", x: -26.3, y: -13.82, z: -28},
  {system: "Artaius", x: -27.87, y: 30.87, z: 23},
  {system: "Ataru", x: -18.42, y: 14.98, z: -42},
  {system: "Bahne", x: -3.78, y: 21.19, z: 23},
  {system: "Bifrost", x: 4.84, y: -33.76, z: 24},
  {system: "Brazos", x: 4.79, y: 37.72, z: -50},
  {system: "Calesque", x: 23.85, y: -18.74, z: -41.12},
  {system: "Cambria", x: -17.82, y: 31.25, z: 17},
  {system: "Chester", x: -28.14, y: -3.55, z: 19.33},
  {system: "Chimera", x: 28, y: 2.8, z: 27},
  {system: "Chinju", x: 7.24, y: -23.54, z: 5.26},
  {system: "Chisholm", x: 6.35, y: 27.65, z: -8},
  {system: "Corrivale", x: 29.74, y: 11.26, z: 34.98, majorSystem: true},
  {system: "Coulomb", x: -31.58, y: 6.23, z: 19.44, majorSystem: true},
  {system: "Crow", x: -16.25, y: -1.31, z: -14},
  {system: "Dewi", x: -16.11, y: 9.43, z: -15.36},
  {system: "Diana", x: 2.38, y: -42.26, z: 7.88},
  {system: "Dilemma", x: -19.2, y: 18, z: -17},
  {system: "Dlaertha", x: -3.91, y: 25.89, z: 16},
  {system: "Dolthan", x: -13.4, y: 31.48, z: -12},
  {system: "Eldala", x: -30.5, y: 20.68, z: -14.44},
  {system: "Endomar", x: 26.22, y: -10.47, z: 32.33, majorSystem: true},
  {system: "Esheena", x: -16.48, y: -9, z: 39},
  {system: "Exile", x: -8.81, y: 11.25, z: -9},
  {system: "Fraloan", x: -29.88, y: -28.61, z: 31},
  {system: "Garad", x: 27, y: -2.77, z: -19.42},
  {system: "Garner's Flare", x: 21.53, y: -31.65, z: -6},
  {system: "Gobosch", x: 21.7, y: 30.63, z: -37},
  {system: "Golfstone", x: 27.23, y: -39.81, z: -21.4},
  {system: "Halmeara", x: 26.9, y: -13.92, z: 3},
  {system: "Hammer's Star", x: -13.3, y: -37.88, z: 17.1, majorSystem: true},
  {system: "Hathorn", x: -7.5, y: -25, z: 21},
  {system: "Hawran", x: -21.8, y: 38.22, z: -41},
  {system: "Hippocampus", x: -8.35, y: -38.86, z: 2},
  {system: "Hogan's Goat", x: -1.73, y: -43.76, z: -40},
  {system: "Hormozi", x: -18.27, y: 24.33, z: -49},
  {system: "Ignatius", x: 18.72, y: 28.35, z: -11.97, majorSystem: true},
  {system: "Ilyndyl", x: 4.93, y: -21.45, z: 5},
  {system: "Isle's Observatory", x: -18.89, y: -39.64, z: 3},
  {system: "Itrius", x: 9.85, y: -4.34, z: -10},
  {system: "Janet's Star", x: 17.08, y: -15.44, z: 15},
  {system: "Jenelle's Star", x: -2.08, y: -29.12, z: -44},
  {system: "Jhianna", x: -20.06, y: -37.05, z: -11},
  {system: "Karnath", x: 16.74, y: 8.21, z: -36.18, majorSystem: true},
  {system: "Karppolla", x: 29.9, y: -24.2, z: 41},
  {system: "Killra", x: -13.87, y: -21.22, z: -4},
  {system: "Kitsune", x: 12.71, y: -40.05, z: -22},
  {system: "Loman", x: 20, y: -26.99, z: 21},
  {system: "Lombard", x: 11.2, y: -26.23, z: -14},
  {system: "Lucullus", x: -3.27, y: 18.36, z: -7.78, majorSystem: true},
  {system: "Mantebron", x: -27.3, y: 16.66, z: -22.07, majorSystem: true},
  {system: "McComb's Star", x: -8.01, y: -2.72, z: -7.04},
  {system: "McKitterick", x: 25.85, y: 15.75, z: 45},
  {system: "Mercedes", x: -26.14, y: -34.22, z: 23},
  {system: "Meriden", x: -13.6, y: -31.19, z: 9.88},
  {system: "Mikoa", x: 6.37, y: 3.88, z: 1},
  {system: "Miyashi", x: 17.65, y: 17.5, z: -17},
  {system: "MLA 733051", x: -5.5, y: 8.59, z: 10},
  {system: "Morgan's Star", x: 3.68, y: -38.8, z: 31},
  {system: "Myroune", x: 10.3, y: 12.9, z: -24},
  {system: "Nethreen", x: -28.9, y: 25.93, z: 36},
  {system: "Nyrthak", x: 32.66, y: 23.9, z: -15},
  {system: "Oasis", x: -5.37, y: -6.91, z: 9},
  {system: "Oberon", x: 13.24, y: -18.08, z: -4.2, majorSystem: true},
  {system: "Orca", x: 4.2, y: -18.01, z: 13},
  {system: "Oscar 44", x: -4.81, y: 6.71, z: 9.31},
  {system: "Pallas", x: 23.86, y: 21.2, z: 26},
  {system: "Patriot", x: 30.51, y: 30.44, z: 1.11},
  {system: "Peter's Star", x: -23.85, y: 3.57, z: 30},
  {system: "Polytroika", x: -0.4, y: -18.24, z: 27.64},
  {system: "Ptolemy", x: 2.54, y: 33.18, z: 26.35, majorSystem: true},
  {system: "Pugsly", x: 8.92, y: 17.28, z: -22},
  {system: "Rathos", x: 20.98, y: -38.49, z: 12},
  {system: "Red 72", x: 1.15, y: 5.86, z: 8},
  {system: "Resont", x: 14.88, y: -35.14, z: 21.19},
  {system: "Retrast", x: 18.72, y: 22.64, z: 9.91},
  {system: "Richards", x: -7.31, y: 6.12, z: 19},
  {system: "Riga 9", x: 0.45, y: -3.53, z: -1.54},
  {system: "Rinstoke", x: 5.68, y: -7.86, z: 24.02, majorSystem: true},
  {system: "Riptide", x: -1.9, y: 40.9, z: 15},
  {system: "Sage", x: -8.86, y: 21.33, z: 31},
  {system: "Schultzie", x: 25.14, y: 37.11, z: 27},
  {system: "Sedin", x: 18.79, y: 11.21, z: -23},
  {system: "Smithee", x: -22.26, y: 35.34, z: 2},
  {system: "Spiderhole", x: -4.01, y: -34.22, z: 33.12},
  {system: "Strome", x: -6.15, y: 30, z: 3},
  {system: "Talbott", x: 14.36, y: 1.29, z: -17.31},
  {system: "Tarsis", x: -14.31, y: 7.31, z: -6.09},
  {system: "Tatsuko", x: 9.07, y: 32.24, z: -11},
  {system: "Tavis", x: 25.12, y: -18.9, z: -33},
  {system: "Tendril", x: 36.24, y: 33.82, z: 6.44, majorSystem: true},
  {system: "Teph", x: 28.8, y: -33.71, z: 39},
  {system: "Terivine", x: 1.35, y: 11.41, z: 17.48, majorSystem: true},
  {system: "Thalaassa", x: 25.43, y: 10.77, z: 16.12},
  {system: "Three Fates", x: 19.66, y: 5.81, z: 10.21},
  {system: "Tibonther", x: 8.63, y: 18.53, z: -25.31},
  {system: "Tinja", x: 13.47, y: -33, z: 20},
  {system: "Tychus", x: 23.82, y: -37.7, z: -24.78},
  {system: "Unicorn", x: -12.03, y: 2.14, z: -25},
  {system: "Valles", x: 19.8, y: 33.26, z: 6},
  {system: "Vesk", x: -31.77, y: -10.2, z: -18},
  {system: "Vethril", x: 1.86, y: 17.37, z: -48},
  {system: "Vieron", x: 4.12, y: -31.84, z: -13.39, majorSystem: true},
  {system: "Walin", x: -21.21, y: 21.21, z: 1},
  {system: "Wicker", x: -30.42, y: 39.18, z: -14},
  {system: "Wicky", x: 11.29, y: -10.04, z: 9},
  {system: "Wyclyffe", x: 7.29, y: 8.1, z: -7},
  {system: "Yandub", x: -3.59, y: -11.19, z: 41.38},
  {system: "Zeb", x: -18.76, y: -27.02, z: -14},
  {system: "Zelmon", x: 18.02, y: 13.09, z: 34},
  {system: "Zerigal", x: -7.75, y: 36.95, z: 22},
  {system: "Zin Point", x: -21.57, y: -22.79, z: -8},
  {system: "Zyron", x: 19.21, y: 1.12, z: -30}
];

function unpackData(arr, key, condition) {
  var ret = [], el, i, skip;
  for(i = 0; i < arr.length; i++) {
    el = arr[i];
    skip = false;
    if (condition) {
      for(k in condition) {
        if (el[k] != condition[k]) {
          skip = true;
          break;
        }
      }
    }
    if (!skip) {
      ret.push( el[key] );
    }
  }
  return ret;
}
function padNumber(str, len) {
  while (str.length < len) {
    str = '0'+ String(str);
  }
  return str;
}
function generateHexColor(arr, condition) {
  var ret = [], i, el;
  var c, r, g, b, skip = false;
  g = 22;
  for(i = 0; i < arr.length; i++) {
    skip = false;
    el = arr[i];
    if (condition) {
      for(k in condition) {
        if (el[k] != condition[k]) {
          skip = true;
          break;
        }
      }
    }
    if (!skip) {
      r = parseInt((el.z + 50) * 2.35 + 20, 10);
      b = 255 - r;
      c = '#'+ padNumber( Number(r).toString(16), 2 )
             + padNumber( Number(g).toString(16), 2 )
             + padNumber( Number(b).toString(16), 2 );
      ret.push(c);
    }
  }
  return ret;
}
function calculateSize(arr, condition) {
  var ret = [], r, i;
  for(i = 0; i < arr.length; i++) {
    skip = false;
    el = arr[i];
    if (condition) {
      for(k in condition) {
        if (el[k] != condition[k]) {
          skip = true;
          break;
        }
      }
    }
    if (!skip) {
      r = (el.majorSystem ? 8 : 6)
      ret.push( r );
    }
  }
  return ret;
}

function assignCoordsTo3dObject(obj, coords) {
  obj.x = unpackData(coords, 'x');
  obj.y = unpackData(coords, 'y');
  obj.z = unpackData(coords, 'z');
  return obj;
}

var condition = undefined;
var systems3d = {
  type: 'scatter3d',
  mode: 'markers',
  x: unpackData(coords, 'x', condition),
  y: unpackData(coords, 'y', condition),
  z: unpackData(coords, 'z', condition),
  text: unpackData(coords, 'system', condition),
  //hoverinfo: 'text+x+y+z',
  marker: {
    symbol: 'circle',
    color: generateHexColor(coords, condition),
    size: calculateSize(coords, condition),
    opacity: 0.5,
    line: {
      color: '#000',
      width: 1
    }
  }
};

var systemRoute = [];
var systemRoute3d = {
  type: 'scatter3d',
  mode: 'lines',
  opacity: 0.5,
  line: {
    width: 3,
    color: 'rgb(55, 200, 80)'
  }
};

var layout = {
  dragmode: true,
  width: 700,
  height: 700,
  margin: {
    l: 0, r: 0, b: 0, t: 0
  },
  scene: {
    xaxis: {
      type: 'linear',
      range: [-50, 50],
      nticks: 11
    },
    yaxis: {
      type: 'linear',
      range: [-50, 50],
      nticks: 11
    },
    zaxis: {
      type: 'linear',
      range: [-50, 50],
      nticks: 11
    }
  }
};

$(document).ready(function() {
  var data = [ systems3d ];
  Plotly.newPlot('map-holder', data, layout);
  
  var myMapHolder = document.getElementById('map-holder');
});
