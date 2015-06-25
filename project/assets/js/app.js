



var app = angular.module('app', ['ngRoute','mapControllers']);

	app.config( function($routeProvider){
		$routeProvider
			.when('/',
				{
					controller:'SimpleController',
					templateUrl: 'app/components/login/loginView.html'
				})
			.when('/signup',
				{
					controller:'SimpleController',
					templateUrl: 'app/components/signup/signupView.html'
				})
			.otherwise('/')
	});

