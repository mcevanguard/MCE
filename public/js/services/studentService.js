/**
 * Created by mattpennella on 7/15/16.
 */
(function(angular) {
    'use strict'
    angular.module('studentService', [])
    .service('studentService', ['$http', function($http){
        this.getStudent = function(id) {
            return $http.get('Student.json').success(function(students) {
                return students;
            });
        };
    }]);
}(window.angular));