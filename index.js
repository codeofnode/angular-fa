'use strict'

module.exports =

require('angular').module('ngFixedAlert', []).

  value('faCss', {
    position:'fixed',
    top:0,
    left:0,
    'font-weight' : 'bold',
    'font-family': 'monospace',
    'padding' : '0.2em 0 0.3em 0',
    width: '100%',
    background: 'orange',
    'text-align':'center'
  }).

  directive('rFa', function(faCss, $compile, $timeout){
    return {
      restrict : 'A',
      link : function(scope, element, attrs) {
        if(!attrs.rFa) return;
        element.css(faCss);
        element.html('<span></span>');
        attrs.$observe('rFa', function(value) {
          if(value) element.find('span').html(value);
          else scope.closeMe();
        });
        if(attrs.closable !== 'false'){
          scope.closeMe = function() {
            scope.$destroy();
            element.remove();
          };
          element.append($compile('<a href ng-click="closeMe()" style="width:2%;float:right;padding-right:0.3em;">&times;</a>')(scope));
          if(attrs.autoHide){
            $timeout(scope.closeMe, Number(attrs.autoHide) || 7000);
          }
        }
      }
    };
  });
