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
import ModalComponent from "./components/modal/modalComponent.ts";
import LobbyComponent from "./components/lobby/lobbyComponent.ts";

import SelectOptionComponent from "./components/selectOption/selectOptionComponent.ts";
Vue.component("select-option", SelectOptionComponent);

import SelectChampionComponent from "./components/selectChampion/selectChampionComponent.ts";
Vue.component("select-champion", SelectChampionComponent);

import SelectSummonerSpellComponent from "./components/selectSummonerSpell/selectSummonerSpellComponent.ts";
Vue.component("select-summoner-spell", SelectSummonerSpellComponent);

import CheckboxComponent from "./components/checkbox/checkboxComponent.ts";
Vue.component("checkbox", CheckboxComponent);

import SettingComponent from "./components/setting/settingComponent.ts";
Vue.component("setting", SettingComponent);

import backgroundSrc from "./directives/backgroundSrc.ts";
Vue.directive("background-src", backgroundSrc);

import formatTime from "./filters/formatTime.ts";
Vue.filter("formatTime", formatTime);

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
        component: LobbyComponent
    },
    '*': {
        component: {
            // Redirect to '/loading' if no urls match.
            ready() { router.go("/loading"); }
        }
    }
});

router.start(App, "#content");