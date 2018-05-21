function scaleX(c) {
  return c * 6;
}
function scaleY(c) {
  return c * -6;
}

var app = angular.module('myApp',[]).controller("mySystems", function($scope) {
  $scope.systems = coords;
  $scope.getNumber = function(n) {
    var ret = [], i;
    for(i = 0; i < n; i++) {
      ret.push(i);
    }
    return ret;
  };
  $scope.scaleX = scaleX;
  $scope.scaleY = scaleY;
  $scope.colorZ = function(c) {
    var c2 = parseInt((c + 50) * 2.55, 10);
    var c3 = 255 - c2;
    var c2s = c2.toString(16);
    var c3s = c3.toString(16);
    if (c2s.length < 2) {
      c2s = "0"+ c2s;
    }
    if (c3s.length < 2) {
      c3s = "0"+ c3s;
    }
    return "#"+ c3s +"00"+ c2s;
  };
});

function calcDistance(s, d) {
  var dx, dy, dz;
  dx = Math.pow(s.x - d.x, 2);
  dy = Math.pow(s.y - d.y, 2);
  dz = Math.pow(s.z - d.z, 2);
  return Math.sqrt( dx + dy + dz ).toFixed(2);
};

function star_onclick(g) {
  var lru = $('g.solar-system.active.lru');
  if (lru.length > 0) {
    lru.removeClass('active lru');
  }
  var mru = $('g.solar-system.active');
  if (mru.length > 0) {
    mru.addClass('lru');
  }
  if (g.hasClass('lru')) {
    g.removeClass('lru');
  }
  g.addClass('active');

  var s = {};
  var d = { system: g.attr('system'), x: Number(g.attr('x')), y: Number(g.attr('y')), z: Number(g.attr('z')) };
  var delta = '-';
  var newLine;
  if (mru.length > 0) {
    s = { system: mru.attr('system'), x: Number(mru.attr('x')), y: Number(mru.attr('y')), z: Number(mru.attr('z')) };
    delta = calcDistance(s, d);

    /*
    newLine = $(document.createElementNS('http://www.w3.org/2000/svg', 'line')).attr({
      x1: scaleX(s.x).toFixed(2),
      y1: scaleY(s.y).toFixed(2),
      x2: scaleX(d.x).toFixed(2),
      y2: scaleY(d.y).toFixed(2)
    });
    $('#travel-path').prepend( newLine );
    */
  }
  $('g.solar-system').each(function() {
    var s = {
      system: $(this).attr('system'),
      x: Number($(this).attr('x')),
      y: Number($(this).attr('y')),
      z: Number($(this).attr('z'))
    };
    var td = $('td.system-delta[system-name="'+ s.system +'"]');
    if (td) {
      td.text( calcDistance(s, d) );
    }
  });

  $('#system-click-target').prepend('<tr>'+
      '<td class="system-name">'+ d.system +'</td>' +
      '<td class="system-coord x">'+ Number(d.x).toFixed(2) +'</td>' +
      '<td class="system-coord y">'+ Number(d.y).toFixed(2) +'</td>' +
      '<td class="system-coord z">'+ Number(d.z).toFixed(2) +'</td>' +
      '<td class="system-delta">'+ delta +'</td>' +
    '</tr>');

  return 1;
}
function clearRoute() {
  $('g.active').removeClass('active lru');
  $('#system-click-target').empty();
  $('#travel-path').empty();
  $('td.system-delta').text('');
}

