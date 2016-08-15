/**
 * Created by mattpennella on 7/15/16.
 */
(function(angular) {
    'use strict'
    angular.module('bankingSimulatorApp', ['ngRoute', 'controllers', 'services']);
    angular.module('bankingSimulatorApp').config(function($routeProvider, $sceProvider) {
        $sceProvider.enabled(false);

        $routeProvider.when('/Student/:studentId/transaction', {
            templateUrl: 'partials/transaction.html'
        }).otherwise ({
            templateUrl: 'partials/transaction.html'
        });
    });

}(window.angular));