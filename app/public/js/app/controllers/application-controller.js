app.controller('AppCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.goTo = function(path) {
		$location.path(path);
	};
}]);