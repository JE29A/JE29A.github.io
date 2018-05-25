function firstLetterIsAVowel_def(str) {
  if (!str) {
    return false;
  }
  var s = String(str).substring(0,1).toLowerCase();
  switch(s) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
  }
  return false;
}

function repeatInObject_def(obj) {
  var key, ret = [];
  for(key in obj) {
    ret.push( key );
  }
  return ret;
}

function repeatNTimes_def(n) {
  var ret = [];
  var i;
  for(i = 0; i < n; i++) {
    ret.push( i );
  }
  return ret;
}

function groupArrIntoSets_def(arr, size, classStr) {
  var ret = [], temp;
  var i;
  if (!size) { size = 2; }
  if (!classStr) { classStr = ''; }
  temp = [];
  for(i = 0; i < arr.length; i++) {
    temp.push( arr[i] );
    if (temp.length >= size) {
      ret.push( temp );
      temp = [];
    }
  }
  if (temp.length > 0) {
    while (temp.length < size) {
      temp.push({ class: classStr});
    }
    ret.push( temp );
  }
  return ret;
}
