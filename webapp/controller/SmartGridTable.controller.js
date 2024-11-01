sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("smarttables.controller.SmartGridTable", {
        onInit: function () {

        },

        onClick:function(){
            var route = this.getOwnerComponent().getRouter();
            route.navTo("RouteResponsiveSmartTable")
        },
        onPaste: function(oEvent) {
			var oResult = oEvent.getParameter("result");
			var oModel = new JSONModel();
			var oMessageTemplate;

			if (oResult.errors) {
				oMessageTemplate = new MessageItem({
					type: 'Error',
					title: 'row: {row}, column: {column}',
					subtitle: 'Property: {property}',
					description: '{message}'
				});
				oModel.setData(oResult.errors);
			} else {
				var sDescription = "";
				Object.keys(oResult.parsedData[0]).forEach(function(key) {
					sDescription += key + ": {" + key + "}\r\n";
				});
				oMessageTemplate = new MessageItem({
					type: 'Information',
					title: 'Pasted Row',
					description: sDescription
				});
				oModel.setData(oResult.parsedData);
			}

			var oBackButton;
			var oMessageView = new MessageView({
				showDetailsPageHeader: false,
				itemSelect: function () {
					oBackButton.setVisible(true);
				},
				items: {
					path: "/",
					template: oMessageTemplate
				}
			});
			oMessageView.setModel(oModel);

			oBackButton = new Button({
				icon: IconPool.getIconURI("nav-back"),
				visible: false,
				press: function () {
					oMessageView.navigateBack();
					this.setVisible(false);
				}
			});

			this.oDialog = new Dialog({
				resizable: true,
				content: oMessageView,
				state: oResult.errors ? 'Error' : 'Success',
				beginButton: new Button({
					press: function () {
						this.getParent().close();
					},
					text: "Close"
				}),
				customHeader: new Bar({
					contentLeft: [oBackButton],
					contentMiddle: [
						new Title({
							text: oResult.errors ? "Parsing Errors" : "Data pasted successfully",
							level: "H1"
						})
					]
				}),
				contentHeight: "50%",
				contentWidth: "50%",
				verticalScrolling: false,
				afterClose: function () {
					this.destroy();
				}
			});

			oMessageView.navigateBack();
			this.oDialog.open();
		},
    });
});
