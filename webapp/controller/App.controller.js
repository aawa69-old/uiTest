sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"opensap/myapp/model/formatter"
	],
	function(Controller, MessageToast, Filter, FilterOperator, formatter) {
		"use strict";

		return Controller.extend("opensap.myapp.controller.App", {

			formatter: formatter,

			onShowHello: function() {

				// read msg from i18n model
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);

				// show message
				MessageToast.show(sMsg);
			},

			onFilterProducts: function(oEvent) {

				var aFilter = []; // build filter array
				var sQuery = oEvent.getParameter("query"); // fetch event parameter
				var oList = this.getView().byId("productsList"); // retrieve list control
				var oBinding = oList.getBinding("items"); // get binding for aggregation 'items'

				if (sQuery) {
					aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
				}

				oBinding.filter(aFilter); // apply filter. an empty filter array will show all items
			},

			onItemSelected: function(oEvent) {
				var oSelectedItem = oEvent.getParameter("listItem");
				var oContext = oSelectedItem.getBindingContext('es4');
				var sPath = oContext.getPath();
				var oProductDetailPanel = this.byId("productDetailsPanel");

				oProductDetailPanel.bindElement({ path: 'es4>' + sPath }).setVisible(true);
			}
		});
	});