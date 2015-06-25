		


var mapControllers = angular.module('mapControllers',[]);

mapControllers.controller("SimpleController",function($scope){
	$scope.customers = [
		{name: 'John Doe', city:'Pheonix'},
		{name: 'Dan Gleesack', city: 'Bangkok'}
		];
});