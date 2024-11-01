/*global QUnit*/

sap.ui.define([
	"smarttables/controller/SmartTables.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SmartTables Controller");

	QUnit.test("I should test the SmartTables controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
