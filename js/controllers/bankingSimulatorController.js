/**
 * Created by mattpennella on 7/15/16.
 */
(function(angular) {
    'use strict'
    angular.module('bankingSimulatorController', ['studentService'])
    .controller('bankingSimulatorController', ['$scope', '$http', 'studentService', '$q', function($scope, $http, studentService, $q) {
        $scope.loadStudentData = function() {
            var studentDataPromise = [studentService.getStudent($scope.student)];
            $q.all(studentDataPromise).then(function(studentDataArray) {
                $scope.studentDate = studentDataArray[0].data;
            })
        };
    }]);
}(window.angular));