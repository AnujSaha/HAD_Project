angular.module('calorieApp', [])
    .controller('calorieController', function($scope) {
        $scope.calculateCalories = function() {
            var age = parseInt($scope.age);
            var weight = parseFloat($scope.weight);
            var height = parseFloat($scope.height);
            var gender = $scope.gender;
            var activityLevel = $scope.activityLevel;

            var resultElement = document.getElementById('result');

            if (!age || isNaN(age) || age <= 0) {
                resultElement.innerText = "Please provide a valid age";
                return;
            } else if (!weight || isNaN(weight) || weight <= 0) {
                resultElement.innerText = "Please provide a valid weight";
                return;
            } else if (!height || isNaN(height) || height <= 0) {
                resultElement.innerText = "Please provide a valid height";
                return;
            }

            var bmr;
            if (gender === 'male') {
                bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }

            var activityFactor;
            switch (activityLevel) {
                case 'sedentary':
                    activityFactor = 1.2;
                    break;
                case 'lightlyActive':
                    activityFactor = 1.375;
                    break;
                case 'moderatelyActive':
                    activityFactor = 1.55;
                    break;
                case 'veryActive':
                    activityFactor = 1.725;
                    break;
                case 'extraActive':
                    activityFactor = 1.9;
                    break;
                default:
                    activityFactor = 1.2;
            }

            var calories = (bmr * activityFactor).toFixed(2);

            $scope.calories = calories;
            
        };
    });
