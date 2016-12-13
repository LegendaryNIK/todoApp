app.controller('testCrtl',function ($scope, $localStorage) {

    $scope.itemStorage = [];
    $scope.maxItems = 8;
    $scope.maxComments = 5;
    $scope.isDisabled = true;

    //Item object constructor
    function Item(name) {
        this.itemName = name;
        this.comments = [];
    }
    
    //check if local storage exists
    $scope.start = function () {
        if (typeof($localStorage.test) !== 'undefined')
        {$scope.itemStorage = $localStorage.test;}
        else
        {
            $localStorage.test=[];
            $scope.itemStorage=$localStorage.test;
        }
    }
    
    //expand lists
    $scope.expand = function (arg) {
        if (arg === 'items') {$scope.maxItems = $scope.itemStorage.length}
        else if (arg === 'comments') {$scope.maxComments = $scope.selectedComments.length}
    }
    
    //add new item
    $scope.addItem = function() {
        if($scope.itemName!=null){
        let newItem = new Item($scope.itemName);
        $scope.itemStorage.push(newItem);
        $scope.itemName = null;}
    };
    
    //delete item
    $scope.deleteItem = function(index){
        $scope.itemStorage[index].comments = [];
        $scope.itemStorage.splice(index,1);
        onDelete(index);
    };
    //Taking care of 'active' flag not leaving selected after non-active 
    // item was deleted and removing it if selected item was deleted
    function onDelete(index) {
        if (index === $scope.indexOfItem) {
            $scope.isDisabled = true;
            $scope.selectedComments = null;
            $scope.indexOfItem = -1;
        }
        else{
            if ($scope.indexOfItem>index){
                $scope.indexOfItem-=1
            }
        }
    } 
    
    //Marking selected item with 'active' flag
    $scope.selectItem = function (index) {
        $scope.selectedComments = $scope.itemStorage[index].comments;
        reset(index);
        $scope.indexOfItem = index;
        $scope.isDisabled = false;
    };
    //Scroll back to top and merge comment section when select another item
    function reset(index) {
        if (index!=$scope.indexOfItem) {
            $scope.maxComments = 5;
            window.scrollTo(0, 0);
        }
    }
    
    //add new commentary
    $scope.addCom = function () {
        if ($scope.commentary != null){
            let newComment = {com: $scope.commentary};
            $scope.commentary = null;
            $scope.selectedComments.push(newComment);
        }
    }
});