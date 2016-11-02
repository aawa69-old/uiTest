sap.ui.define(
	[
		// Aynchronously load required modules
		"sap/m/MessageToast",
		"sap/ui/core/mvc/Controller"
	],
	// Callback function executed after modules loaded
	function(MessageToast, Controller) {

		Controller.extend("opensap.myapp.controller.App", {

			onShowHello: function() {
				//var msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.';
				//MessageToast.show(msg);	

				// read msg from i18n model
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);

				// show message
				MessageToast.show(sMsg);
			}
		});
	}
);