
var app = angular.module('app', []);

app.controller('HeaderCtrl', function($scope)
{
	
});
/*app.factory("bookService", function()
{
	var books=[
	{
		"name" : "Spider",
		"author" : "Roy",
		"price" : "Rs.500"
	},
	{
		"name" : "To the Sky",
		"author" : "Emiley",
		"price" : "Rs.600"
	},
	{
		"name" : "My dreams",
		"author" : "Oscar",
		"price" : "Rs.1000"
	}
	];
return {
	getbooks : function()
	{
		return books;
	}
}
});
app.factory("kartService",function()
{
	var kart=[];
	return{
		getKart : function()
		{
			return kart;
		},
		addToKart : function(book)
		{
			kart.push(book);
		},
		buy : function(book)
		{
			alert("Thanks for buying ", book.name);
		}
	}
});
app.controller('BooksList', function($scope,bookService,kartService)
{
	$scope.books=bookService.getbooks();
	
	$scope.addToKart=function(book)
	{
		kartService.addToKart(book);
	}
	
});
app.controller('KartList', function($scope,kartService,bookService)
{
	$scope.kart=kartService.getKart();
	$scope.buy=function(book)
	{
		kartService.buy(book);
	}
});*/
