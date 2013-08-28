app.controller('WorkCtrl', ['$scope', '$routeParams', 'SiteInfo', function($scope, $routeParams, SiteInfo) {
	$scope.projects = SiteInfo.projects;
	$scope.project = {};

	if ($routeParams.extension) {
		$scope.project = SiteInfo.getProjectByUrlExtension($routeParams.extension);
	}
}]);