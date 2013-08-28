app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', { templateUrl: 'partials/home', controller: 'HomeCtrl' });
	$routeProvider.when('/profile', { templateUrl: '/partials/profile', controller: 'ProfileCtrl' });
	$routeProvider.when('/services', { templateUrl: '/partials/services', controller: 'ServicesCtrl' })
	$routeProvider.when('/work', { templateUrl: '/partials/work', controller: 'WorkCtrl' });
	$routeProvider.when('/work/:extension', { templateUrl: '/partials/project', controller: 'WorkCtrl' });
	$routeProvider.when('/resume', { templateUrl: '/partials/resume', controller: 'ResumeCtrl' });
	$routeProvider.otherwise('/');
}]);