angular
	.module('addGoal', [])
	.controller('addGoalsController', ['$scope', function($scope) {

		$scope.goals = [];


		$scope.addGoal = function() {
			$scope.goals.push({'title': $scope.newGoal, 'done':false})
			$scope.newGoal = ''
			var audio = new Audio('c.mp3');
 			audio.play();
		}

		$scope.deleteGoal = function(index) {	
			$scope.goals.splice(index, 1);
		}
	}])
