sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("smarttables.controller.SmartTables", {
        onInit: function () {

        },

        onClick:function(){
            var route = this.getOwnerComponent().getRouter();
            route.navTo("RouteTable")
        },
        onClickResponsive:function(){
            var route = this.getOwnerComponent().getRouter();
            route.navTo("RouteResponsiveSmartTable")
        },
        onClickGrid:function(){
            var route = this.getOwnerComponent().getRouter();
            route.navTo("RouteSmartGridTable")
        }
    });
});
