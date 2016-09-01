(function(angular) {
    'use strict'
    angular.module('transactionService', [])
    .service('transactionService', ['$http', function($http){
        this.getTransactions = function(id) {
            return $http.get('transactionInfo.json').success(function(transactions) {
                return transactions;
            });
        };
    }]);
}(window.angular));