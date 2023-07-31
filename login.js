angular.module('myApp', []).controller('LoginController', function($scope) {
  $scope.login = function() {
    // Check if the username and password are correct.
    if ($scope.username == 'admin' && $scope.password == 'bradley') {
      // Redirect the user to the home page.
      window.location.href = 'fitmain.html';
    } else {
      // Show an error message.
      alert('Naam me kya rakha hai');
    }
  };
});