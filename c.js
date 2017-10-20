angular
	.module('addGoal', [])
	.controller('addGoalsController', ['$scope', function($scope) {

		$scope.goals = [];


		$scope.addGoal = function() {
			$scope.goals.push({'title': $scope.newGoal, 'done':false})
			$scope.newGoal = ''
			var audio = new Audio('beep-02.mp3');
 			audio.play();
		}

		$scope.deleteGoal = function(index) {	
			$scope.goals.splice(index, 1);
		}
	}])
