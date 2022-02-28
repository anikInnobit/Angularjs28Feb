var app = angular.module('myApp');

app.directive(`root-app`, function(){
    return {restrict:`E`, templateUrl:`${__dirname}/app.html`, link:function(scope){scope.someText="Hello"}}
})