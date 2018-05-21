function getStarWorldPlaybooks() {
  var ret = [];

  ret.push( getPlaybook_brick() );
  ret.push( getPlaybook_engineer() );
  ret.push( getPlaybook_medtech() );
  ret.push( getPlaybook_show() );
  ret.push( getPlaybook_tramp() );
  ret.push( getPlaybook_spacehand() );

  ret.push( getPlaybook_mindwalker_apportation() );
  ret.push( getPlaybook_mindwalker_biofeedback() );
  ret.push( getPlaybook_mindwalker_esper() );
  ret.push( getPlaybook_mindwalker_telekinesis() );
  ret.push( getPlaybook_mindwalker_telepathy() );

  ret.sort(function(aObj, bObj) {
    var a = aObj.psion ? 1 : 0;
    var b = bObj.psion ? 1 : 0;
    if (!aObj.trope2) {
      aObj.trope2 = String(aObj.trope).replace(' ', '');
    }
    if (!bObj.trope2) {
      bObj.trope2 = String(bObj.trope).replace(' ', '');
    }
    if (a != b) {
      return a - b;
    }
    a = aObj.trope;
    b = bObj.trope;
    if (a == b) { return 0; }
    if (a < b) { return -1; }
    return 1;
  });
  return ret;
}

function transformNpb(o) {
  return {
    trope: o.trope,
    section: o.section,
    features: o.npbFeatures
  };
}
function getStarWorldNonplaybookMoves() {
  var ret = [];
  ret.push( transformNpb( getPlaybook_augment() ) );
  
  return ret;
}
