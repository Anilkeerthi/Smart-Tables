sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("smarttables.controller.ResponsiveSmartTable", {
        onInit: function () {

        },

        onClick:function(){
            var route = this.getOwnerComponent().getRouter();
            route.navTo("RouteResponsiveSmartTable")
        }
    });
});
