function getPBDef_brick() {
  var trope = "brick";
  return {
    trope: trope,
    trope2: trope.toLowerCase().replace(/ /g, '_')
  };
}
