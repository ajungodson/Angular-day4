// var app=angular.module('mainApp',['ngRoute']);
// app.config(function($routeProvider){
//     $routeProvider
//     .when('/',{})
//     .when('/anotherPage',{})
//     .otherwise({})
// })

// basic
// var app=angular.module('mainApp',['ngRoute']);
// app.config(function($routeProvider){
//     $routeProvider
//     .when('/',{
//         template:'Welcome User'

//     })

//     .when('/anotherPage',{
//         template:'Welcome User , Again'

//     })

//     .otherwise({
//         redirectTo:'/'

//     });
// });

// var app=angular.module('mainApp',[]);

// app.controller('people',function($scope){
//    $scope.persons=[
//        {
//            "Name":"aswathy",
//            "Age":"23"
//        },

//        {
//         "Name":"Amal",
//         "Age":"22"
//     },
//    ]
     
// })





var app=angular.module('myModule',[])

app.controller('myController',function($scope,$http){
    $scope.carts=[]
 $http({
     method:'GET',
     url:'/model/database.json'


 }).then(function(response){
     $scope.products=response.data;
 })

$scope.addtocart=function(product){
    if(product){
        $scope.carts.push({p_id:product.p_id,p_name:product.p_name,p_price:product.p_price

        })
    }

}


$scope.total=0;
$scope.setTotals=function(cart){
    if(cart){
        $scope.total=$scope.total+cart.p_price
    }
}
$scope.removecart=function(cart){
    if(cart){
        $scope.carts.splice($scope.carts.indexOf(cart),1)
        $scope.total=$scope.total-cart.p_price

    }
}
})
   










