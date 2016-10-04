(function() {
    var CustomersController = function ($scope, customersFactory) {

        $scope.customers = [];

        function init() {
            $scope.customers = customersFactory.getCustomers();
        }

        init();

        $scope.doSort = function (propName) {
            $scope.sortby = propName;
            $scope.reverse = !$scope.reverse;
        };

        console.log($scope);


    };



        CustomersController.$inject = ['$scope', 'customersFactory'];

        angular.module('customersApp')
            .controller('CustomersController', CustomersController);



})();
