"use strict";

// Import the Babel polyfill, needed for generators.
//import "babel-polyfill";

// Import CSS.
import "font-awesome/css/font-awesome.min.css";
import "./css/main.css";
import "./css/animations.css";

// Import Angular and dependencies.
import "angular";
import "angular-route";

// Import components.
import loginCtrl from "./components/login/loginCtrl";
import loginTemplate from "./components/login/loginView.html";

// Setup actual angular application.
const app = angular.module("app", ["ngRoute"]);

// Setup controllers.
app.controller("loginCtrl", loginCtrl);

// Setup routes.
app.config(["$routeProvider", prov => {
	prov.when("/login", {
		template: loginTemplate,
		controller: "loginCtrl"
	}).otherwise({ redirectTo: "/login" });
}]);