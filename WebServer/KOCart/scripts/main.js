
require(["/KOCart/lib/ko_v2.3.0.js","/KOCart/scripts/products.js"],
	function(ko, products) {
		var $body = document.getElementsByTagName("body")[0];
		ko.applyBindings(products, $body);

		$.get("/api/KOvsNG/list",function(data){
			console.log(data);
		})

	}
);