var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
	$scope.friends = ['Corey', 'Alex', 'Brett', 'Steve'];



	$scope.addFriend = function() {
		$scope.friends.push($scope.modelName);
		$scope.modelName = "";
	}
});