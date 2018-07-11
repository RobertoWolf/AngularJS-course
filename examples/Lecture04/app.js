(function (){
'use strict'; /* to prevent mistakes like defining a variable in the
global evironment */

var x = "hello" /* when 'use strict'; is defined, var is needed to
define a local variable, otherwise the browser will complian*/

angular.module('myFirstApp', [])

.controller('MyFirstContoller', function () {

});

})();
