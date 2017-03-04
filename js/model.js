app.factory("bookfactory",function($http,$q){
    console.log("model goes");
 var object = {
 serverCall:function(bookname){
    
     var pr = $q.defer();$http.get(urls.ebookurl+urls.search+bookname).then(function(data){
    
         pr.resolve(data);
     },function(error){
         pr.reject(error);
     });
     return pr.promise;
 }
 };
 return object;
    
});