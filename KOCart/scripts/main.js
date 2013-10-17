require(["../lib/jquery_v2.0.3.js", "../lib/address_v1.5.js", "../lib/ko_v2.3.0","../scripts/products"],
	function($, address, ko, products) {
		var $body = document.getElementsByTagName("body")[0];
		ko.applyBindings(products, $body);
	}
);