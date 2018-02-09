var app = angular.module(('sampleApp',[]));
app.controller('SampleAppCtr',function($scope){
    $scope.items = [{"name":"n1","value":"v1"},
        {"name":"n2","value":"v2"},
        {"name":"n3","value":"v3"},
        {"name":"n4","value":"v4"}];

    $scope.url = "table.html";
});