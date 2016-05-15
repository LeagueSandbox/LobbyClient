///<reference path="./_app.ts" />
'use strict';

import "font-awesome/css/font-awesome.min.css";
import "./css/main.less";
import "./css/animations.less";
import "./css/ui.less";

// TypeScript tries to access the `default` field when using 
// the import from syntax. Using require is fine though.
const Vue = <vuejs.VueStatic>require("vue");
const VueRouter = <vuejs.RouterStatic>require("vue-router");
Vue.use(VueRouter);

import LoadingComponent from "./components/loading/loadingComponent.ts";
import LobbyListComponent from "./components/lobbyList/lobbyListComponent.ts";
import LoginComponent from "./components/login/loginComponent.ts";

const NYI = Vue.extend({
    template: `<strong>Route not yet implemented.</strong>`
});

const App = Vue.extend({});
const router = new VueRouter();

// Map available routes.
router.map({
    '/loading': {
        component: LoadingComponent
    },
    '/login': {
        component: LoginComponent
    },
    '/lobbies': {
        component: LobbyListComponent
    },
    '/lobby': {
        component: NYI
    },
    '*': {
        component: {
            // Redirect to '/loading' if no urls match.
            ready() { router.go("/loading"); }
        }
    }
});

router.start(App, "#content");