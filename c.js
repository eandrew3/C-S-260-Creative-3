angular
	.module('addGoal', ['checklist-model'])
	.controller('addGoalsController', ['$scope', function($scope) {

		$scope.goals = [];

		$scope.selected = {gs: []};

		$scope.addGoal = function() {
			$scope.goals.push({'title': $scope.newGoal, 'done':false})
			$scope.newGoal = ''
		}

		$scope.deleteGoal = function(index) {	
			$scope.goals.splice(index, 1);
		}
	}])
