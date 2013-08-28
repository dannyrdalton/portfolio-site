app.controller('HomeCtrl', ['$scope', '$location', 'SiteInfo', function($scope, $location, SiteInfo) {

	$scope.skills = SiteInfo.skills;

	$scope.projects = SiteInfo.projects;

	$scope.goTo = function(path) {
		$location.path(path);
	};
}]);