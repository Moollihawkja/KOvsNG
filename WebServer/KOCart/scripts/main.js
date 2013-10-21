
require(["/KOCart/lib/ko_v2.3.0.js"],
	function(ko) {

	//	ko.bindingHandlers.smartImage = {
	//init: function() {…},
	//update: function() {…}
//}



		var $body = document.getElementsByTagName("body")[0];

		function ContactViewModel(contact, viewModel) {
			var self = this;

			self.id = contact._id;
			self.departments = ["Engineering", "Executive", "Human Resources", "Sales"];
			self.name = ko.observable(contact.name);
			self.department = ko.observable(contact.department);
			self.isEditable = ko.computed(function() {
				return viewModel.mode() == 'edit';
			});
			self.edit = function(contact, event){  
				$.address.value('edit');
				viewModel.mode('edit');
				viewModel.contacts.remove(function(item){ return item.id != contact.id });
			};

			self.view = function(contact, event){ 
				$.address.value('view');
				viewModel.mode('view');
				viewModel.contacts.remove(function(item){ return item.id != contact.id });
			};
			self.save = function(contact, event) {
				$.post("/api/KOvsNG/update/" + contact.id, 
				   { name: contact.name, department: contact.department},
				   function(data){
						console.log(data);
						self.view(contact, event);
					}
				);
			};

		}

		function ViewModel() {
			var self = this;
			self.mode = ko.observable();
			self.contacts = ko.observableArray();
			self.listAll = function() {
				$.address.value('list');
				$.get("/api/KOvsNG/list",function(data){
					self.mode('listAll');
					self.contacts($.map(data, function(v){return new ContactViewModel(v, self);}));
				});
			};

		}

		ko.applyBindings(new ViewModel(), $body);

	}
);