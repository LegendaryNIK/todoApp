app.controller('testCrtl',function ($scope, $localStorage) {
    $scope.itemStorage = [];

    //check if local storage exists
    if (typeof $localStorage.test !== 'undefined')
    {$scope.itemStorage = $localStorage.test;}
    else
    {
        $localStorage.test=[];
        $scope.itemStorage=$localStorage.test;
    };

    function Item(name) {
        this.itemName = name;
        this.comments = [];
    }
    $scope.addItem = function() {
        let newItem = new Item($scope.itemName);
        $scope.itemStorage.push(newItem);
        $scope.itemName = null;
    };
    $scope.deleteItem = function(index){
        $scope.itemStorage.splice(index,1);
    };
    $scope.selectItem = function (index) {
        $scope.selectedComments = $scope.itemStorage[index].comments;
    };
    $scope.addCom = function () {
        let newComment = {com: $scope.commentary};
        $scope.selectedComments.push(newComment);
        $scope.commentary = null;
    }
});
