(function () {
    //we are going  to load the application/ Configure it
    // If you don't provide the array, [], then it is a read operation
    angular
        .module("SeatMap") //.module gives an angular object
        .config(Config);

    // the function is parsed by angular and angular can read what it is
    //this is inverse of control. we are not responsible for life time of this

    function Config($routeProvider) {
        $routeProvider

        /* User */
            .when("/", {
                templateUrl: "views/flightseats.html",
                controller: "FlightsController",
                controllerAs: "model"

            })
            .when("/flights", {
                templateUrl: "views/flightseats.html",
                controller: "FlightsController",
                controllerAs: "model"

            })
            .otherwise({
                redirectTo: "views/flightseats.html",
                controller: "FlightsController",
                controllerAs : "model"
            });

    }
})();