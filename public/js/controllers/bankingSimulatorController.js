/**
 * Created by mattpennella on 7/15/16.
 */
(function(angular) {
    'use strict'
    angular.module('bankingSimulatorController', ['studentService','transactionService'])
    .controller('bankingSimulatorController', ['$scope','$http', 'studentService','transactionService', '$q', function($scope, $http, studentService,transactionService, $q) {
            $scope.modal = {};
            $scope.selectedStudent;
            $scope.selectedMonth = new Date().getMonth()-1;
            $scope.fullMonthName= ["January","Feburary","March","April","May","June","July",
                                    "August","September","October","November","December"];
       
        $scope.loadStudentData = function() {
            var studentDataPromise = [studentService.getStudent($scope.student)];
            $q.all(studentDataPromise).then(function(studentDataArray) {
                $scope.studentData = studentDataArray[0].data;
            })
        };
        
         $scope.loadTransactionData = function() {
            var transactionDataPromise = [transactionService.getTransactions($scope.transactions)];
            $q.all(transactionDataPromise).then(function(transactionDataArray) {
                $scope.transactionData = transactionDataArray[0].data;
            })
        };
        
       
        $scope.removeStudent = function(rowIndex){
            // pass studentID instead of rowIndex??? or maybe pass both??
            if(confirm('Are you sure you want to delete this Student?')){
                $scope.studentData.splice(rowIndex,1);
                // call method with query to remove student from table here
            }
        };
        
        $scope.setSelectedStudent = function(student){
            $scope.selectedStudent = student;
        }
        
        
        $scope.addStudent = function(modal){
            $scope.studentData.push({'Name':modal.studentName, 'Role': modal.studentRole, 'Balance': modal.startingBalance});
            $scope.modal = {};
        };
       
       $scope.whatKindOfUser = function(){
         // do session and Authentication check
         // if student call setSelectedStudent and send studentData[0] (for when student logs in)
       };
       
       $scope.setMonth= function(monthIncrement){
           alert("monthIncrement: " + monthIncrement);
           if(monthIncrement === 1){
               // increase month by 1
               alert("is 1");
           }else if (monthIncrement === -1){
               // decrease month by 1
               alert("is -1");
           }else{
               // no month set, set to current month
               $scope.selectedMonth = $scope.currentDate.getMonth();
               alert("selectedMonth: " + $scope.selectedMonth);
               
           }
           
       };
        
        $scope.loadStudentData();
        $scope.loadTransactionData();
    }]);
}(window.angular));