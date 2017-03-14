var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){
	
	console.log("In myController.....");
	
	$scope.newUser = {};
	
	$scope.clickedUser = {};
	
	$scope.message="";
	

	$scope.users = [
		{username: "neehad", fullName: "Neehad Fattah", email:"neehadfattah@yahoo.com"},
		{username: "shahan", fullName: "Shahan Uzzaman", email:"msc48@njit.edu"},
		{username: "rameez", fullName: "Rameez Khan", email:"rameezmiah@gmail.com"}
	];	
	
	$scope.saveUser = function(){
		console.log($scope.newUser);
		
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message="User added successfully";
		
	};
	
	
	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};
	
	$scope.updateUser = function(){
		$scope.message="User edited successfully";
	};
	
	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
		$scope.message="User deleted successfully";
	};
	
	$scope.clearMessage = function(){
		$scope.message = "";
	}
});
