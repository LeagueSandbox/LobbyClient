"use strict";

// Import the Babel polyfill, needed for generators.
import "babel-polyfill";

// Import Font Awesome.
import "font-awesome/css/font-awesome.min.css";

// Import Angular and dependencies.
import "angular";
import "angular-route";

const app = angular.module("app", ["ngRoute"]);

import loginCtrl from "./components/login/loginCtrl";
import loginTemplate from "./components/login/loginView.html";

// Setup controllers.
app.controller("loginCtrl", loginCtrl);

// Setup routes.
app.config(["$routeProvider", prov => {
	prov.when("/login", {
		template: loginTemplate,
		controller: "loginCtrl"
	}).otherwise({ redirectTo: "/login" });
}]);