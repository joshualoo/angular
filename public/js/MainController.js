var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) { 



}]);// controller ends 

// get JSON data
app.controller('MainController', function($scope, $http) {

	// set the search bar to show real time results
	$scope.searchNames  = ''; 

  //set edit ablity to false 
  $scope.input = 0;

	$http.get("assets/contacts.json").then(function(response) {
        $scope.contacts = response.data.contacts;
  
  		// make a global selected array to store the info
        $scope.selected = [];

        // when a name is clicked, then change it to true and show its JSON info
        $scope.select = function(fname, lname, phone, address, email){
        	$scope.selected = [fname, lname, phone, address, email]; 
    		 };

		// show details in the right pane
        $scope.show = function(){
        	return $scope.selected[0];       	
       };     

 
 });//http.get ends 
           
});//controller ends 









