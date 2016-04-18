ariApp.directive('typedjs', function () {
    return {
        restrict: 'E',    
        scope: { strings: '=' },
        template:'<span id="typed-output"></span>',
        link: function ($scope, $element, $attrs) {
          var options = {strings: $scope.strings,
                          typeSpeed: 25,
                          contentType: "html",
                          showCursor:true,
                          cursorChar:"|"
                          };

          $(function(){
            $("#typed-output").typed( options );
          });
        }
    };
});