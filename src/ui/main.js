"use strict";

// Import the Babel polyfill, needed for generators.
//import "babel-polyfill";

// Import CSS.
import "font-awesome/css/font-awesome.min.css";
import "./css/main.less";
import "./css/animations.less";
import "./css/ui.less";

// Import Angular and dependencies.
import "angular";
import "angular-route";

// Import components.
import loginCtrl from "./components/login/loginCtrl";
import loginTemplate from "./components/login/loginView.html";

// Import directives.
import checkboxCtrl from "./directives/checkbox/checkboxCtrl";
import checkboxTemplate from "./directives/checkbox/checkboxView.html";

import selectCtrl from "./directives/uikit-select/selectCtrl";
import selectTemplate from "./directives/uikit-select/selectView.html";

// Setup actual angular application.
const app = angular.module("app", ["ngRoute"]);

// Setup controllers.
app.controller("loginCtrl", loginCtrl);
app.controller("checkboxCtrl", checkboxCtrl);
app.controller("selectCtrl", selectCtrl);

// Setup directives.
app.directive('checkbox', () => ({
	restrict: "E",
	template: checkboxTemplate,
	controller: "checkboxCtrl",
	scope: { "value": "=" }
}));

app.directive('uikitSwitch', () => ({
	transclude: true,
	restrict: "E",
	template: selectTemplate,
	controller: "selectCtrl",
	scope: { "value": "=", "placeholder": "@" },
	link: selectCtrl.link
}));

// Setup routes.
app.config(["$routeProvider", prov => {
	prov.when("/login", {
		template: loginTemplate,
		controller: "loginCtrl"
	}).otherwise({ redirectTo: "/login" });
}]);