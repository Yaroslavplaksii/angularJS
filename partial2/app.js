var app = angular.module('sampleApp',[]);
app.controller('SampleAppCtr',function($scope){
    $scope.items = [{"name":"n1","value":"v1"},
        {"name":"n2","value":"v2"},
        {"name":"n3","value":"v3"},
        {"name":"n4","value":"v4"}];

      $scope.tableView = "table.html";
      $scope.listView = "list.html";

      $scope.url =  $scope.tableView;

    $scope.clickTable = function(){
        $scope.url =  $scope.tableView;
    }
    $scope.clickList = function(){
        $scope.url =  $scope.listView;
    }
});