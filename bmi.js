angular.module('bmiApp', [])
    .controller('bmiController', function($scope) {
        $scope.calculateBMI = function() {
            var height = parseFloat($scope.height);
            var weight = parseFloat($scope.weight);

            var resultElement = document.getElementById('result');

            if (!height || isNaN(height) || height < 0) {
                resultElement.innerText = "Please provide a valid height";
                return;
            } else if (!weight || isNaN(weight) || weight < 0) {
                resultElement.innerText = "Please provide a valid weight";
                return;
            }

            var bmi = (weight / ((height * height) / 10000)).toFixed(2);

            if (bmi < 18.5) {
                resultElement.innerText = "Under Weight";
                return;
            } else if (bmi >= 18.5 && bmi < 24.9) {
                resultElement.innerText = "Normal";
                return;
            } else if (bmi >= 25 && bmi < 29.9) {
                resultElement.innerText = "Over Weight";
                return;
            } else if (bmi >= 30 && bmi < 34.9) {
                resultElement.innerText = "Obesity (Class I)";
                return;
            } else if (bmi >= 35.5 && bmi < 39.9) {
                resultElement.innerText = "Obesity (Class II)";
                return;
            } else {
                resultElement.innerText = "Extreme Obesity";
                return;
            }

            resultElement.innerText = "";
        };
    });
