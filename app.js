var app = angular.module("carRentalModule", []);

app.service("carRentalService", function($http) {
    this.result = function() {
        return $http.get("data/mock.json");
    }
    console.log($http.get("data/mock.json"));

});

app.controller("carRentalController", function(carRentalService) {
    var that = this;
    this.selected = undefined;
    carRentalService.result().then(function(response) {
        that.dataObj = JSON.parse(JSON.stringify(response.data.cars));
        console.log(that.dataObj);
    });
    this.location = that.dataObj;
    console.log(that.dataObj);
});