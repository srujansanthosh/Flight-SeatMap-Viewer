(function(){
    angular
        .module("SeatMap")
        .controller("FlightsController", FlightsController);

    function FlightsController($scope,$http){
        function init() {

            $http.get('data/seats.json').then(function (response) {
                $scope.seats = response.data;


                function sortSeats(a, b){
                    if (a.row < b.row)  return -1;
                    else if (a.row > b.row)  return 1;
                    else {
                        if (a.seat > b.seat)  return 1;
                        else if (a.seat < b.seat)  return -1;
                    }
                    return 0;
                }

                $scope.firstSeats = [];
                for (seat in $scope.seats) {
                    if ($scope.seats[seat].class == "First") {
                        $scope.firstSeats.push($scope.seats[seat])
                    }
                }
                $scope.firstSeats.sort(sortSeats);
                console.log('first ',$scope.firstSeats);


                $scope.businessSeats = [];
                for (seat in $scope.seats) {
                    if ($scope.seats[seat].class == "Business") {
                        $scope.businessSeats.push($scope.seats[seat])
                    }
                }
                $scope.businessSeats.sort(sortSeats);
                console.log('business ',$scope.businessSeats);

                $scope.economySeats = [];
                for (seat in $scope.seats) {
                    if ($scope.seats[seat].class == "Economy") {
                        $scope.economySeats.push($scope.seats[seat])
                    }
                }
                $scope.economySeats.sort(sortSeats);
                console.log('economy ',$scope.economySeats);


                // var obj = {};
                //
                // for (var i=0;i<response.data.length; i++) {
                //     var val = response.data[i];
                //
                //     if(!obj[val.class]) {
                //         obj[val.class] = {};
                //     }
                //     if(!obj[val.class][val.row]){
                //         obj[val.class][val.row] = {};
                //     }
                //     if(!obj[val.class][val.row][val.seat]){
                //         obj[val.class][val.row][val.seat] = {};
                //     }
                //
                //     obj[val.class][val.row][val.seat] = {
                //         occupied: val.occupied,
                //         premium: val.premium,
                //         overWing: val.overWing
                //     }
                // }
                // console.log($scope.obj = obj);



            });
        }
        init();
    }
})();


<!--=================================================================================================================-->
                                                    <!--NOTES-->
<!--=================================================================================================================-->

// 1. Initial version of the app where I split the total seats based on cabin class and sort them based on
// columns(seats) and rowsd and display the seats in sequencila order in the view
// 2. As mentioned before it wasn't dynamic as there was no way to find the number of columns(seats) in each row.
//
// function sortSeats(a, b){
//     if (a.row < b.row)  return -1;
//     else if (a.row > b.row)  return 1;
//     else {
//         if (a.seat > b.seat)  return 1;
//         else if (a.seat < b.seat)  return -1;
//     }
//     return 0;
// }
//
// $scope.firstSeats = [];
// for (seat in $scope.seats) {
//     if ($scope.seats[seat].class == "First") {
//         $scope.firstSeats.push($scope.seats[seat])
//     }
// }
// $scope.firstSeats.sort(sortSeats);
// console.log('first ',$scope.firstSeats);
//
//
// $scope.businessSeats = [];
// for (seat in $scope.seats) {
//     if ($scope.seats[seat].class == "Business") {
//         $scope.businessSeats.push($scope.seats[seat])
//     }
// }
// $scope.businessSeats.sort(sortSeats);
// console.log('business ',$scope.businessSeats);
//
// $scope.economySeats = [];
// for (seat in $scope.seats) {
//     if ($scope.seats[seat].class == "Economy") {
//         $scope.economySeats.push($scope.seats[seat])
//     }
// }
// $scope.economySeats.sort(sortSeats);
// console.log('economy ',$scope.economySeats);


// The seats of a particular row are displayed correctly but seats within a row are not in the order.

// function sort(object){
//     if (typeof object != "object" ) // Not to sort the array
//         return object;
//     var keys = Object.keys(object);
//     keys.sort(function(a,b){
//         if (typeof(object[a])!== 'object') { return -1 } else { return 1 }
//     });
//     if( Object.prototype.toString.call( object ) === '[object Array]' ) {
//         var newObject = [];
//     } else {
//         var newObject = {}; }
//
//     for (var i = 0; i < keys.length; i++){
//         newObject[keys[i]] = sort(object[keys[i]])
//     }
//     return newObject;
// }


// Tried to convert the response object into a nested array so as to sort the rows

// var arr  = [],
//     keys = Object.keys(obj);
//
// for(var i=0,n=keys.length;i<n;i++){
//     var key  = keys[i];
//     arr[key] = obj[key];
// }

<!--=================================================================================================================-->

