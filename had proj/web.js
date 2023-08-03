var app = angular.module('workoutApp', []);

app.controller('WorkoutController', function ($scope, $window) {
    $scope.exercises = [
        {
            name: 'Push-pull-legs',
            description: 'The push/pull/legs split is probably the most efficient workout split there is because all related muscle groups are trained together in the same workout. This means that you get the maximum overlap of movements within the same workout, and the muscle groups being trained get an overall benefit from this overlap.',
            imageUrl: 'zim1.png'
        },
        {
            name: 'upper-lower',
            description: 'This split involves separating upper body and lower body workouts. On the upper body day, you work the chest, shoulders, back, biceps, and triceps. On the lower body day, you target the hip flexors, glutes, quads, hamstrings, and calf muscles.The upper/lower split can be adjusted for different schedules (2, 3, 4, or 5 workouts per week), and it works extremely well for building muscle, losing fat, gaining strength, and more.',
            imageUrl: 'uplow1.jpg'
        },
        {
            name: 'push day routine',
            description: '.DAY 1.',
            imageUrl: 'push.jpeg'
        },
        {
            name: 'upper split',
            description: '.DAY 1.',
            imageUrl: 'upper.jpeg'
        },
        {
            name: 'pull day routine',
            description: '.DAY 2.',
            imageUrl: 'pull.jpeg'
        },
        {
            name: 'lower split',
            description: '.DAY 2.',
            imageUrl: 'lower.jpeg'
        },
        {
            name: 'leg day routine',
            description: 'DAY 3',
            imageUrl: 'leg.jpeg'
        },
        {
            name: '.DAY 3.',
            description: '',
            imageUrl: 'rest.jpeg'
        } 
        
    ];
});
