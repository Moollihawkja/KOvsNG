require(["../lib/ko_v2.3.0","../scripts/products"], function(ko, products) {
	var $body = document.getElementsByTagName("body")[0];
	ko.applyBindings(products, $body);
});