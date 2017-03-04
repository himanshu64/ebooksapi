app.controller("ebookCtrlflow",function($scope,bookfactory){
console.log("controller goes");
$scope.showIt = false;

  
  
$scope.searchebook = function(){
    var bookname =$scope.search;
   
    var promise = bookfactory.serverCall(bookname);
    promise.then(function(data){
      
        $scope.showIt = true;
        $scope.result = data;
       
      //  document.write(JSON.stringify($scope.result.data.Books));
      $scope.result = $scope.result.data.Books;
    },function(error){
        $scope.error = error;
    });
}
$scope.singleSearch = function(){
    
}

});