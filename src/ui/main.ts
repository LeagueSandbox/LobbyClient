///<reference path="./_app.ts" />
'use strict';

import "font-awesome/css/font-awesome.min.css";
import "./css/materialize.css";
import "./css/main.less";
import "./css/animations.less";
import "./css/ui.less";

// TypeScript tries to access the `default` field when using 
// the import from syntax. Using require is fine though.
const Vue = <vuejs.VueStatic>require("vue");
const VueRouter = <vuejs.RouterStatic>require("vue-router");
Vue.use(VueRouter);

import LobbyListComponent from "./components/lobbyList/lobbyListComponent.ts";
import LoginComponent from "./components/login/loginComponent.ts";
import ModalComponent from "./components/modal/modalComponent.ts";
import LobbyComponent from "./components/lobby/lobbyComponent.ts";
import ChampionSelectComponent from "./components/championSelect/championSelectComponent.ts"
import ReconnectComponent from "./components/reconnect/reconnectComponent.ts"

import SelectOptionComponent from "./components/selectOption/selectOptionComponent.ts";
Vue.component("select-option", SelectOptionComponent);

import SelectSummonerSpellComponent from "./components/selectSummonerSpell/selectSummonerSpellComponent.ts";
Vue.component("select-summoner-spell", SelectSummonerSpellComponent);

import LobbySettingsComponent from "./components/lobbySettings/lobbySettingsComponent.ts";
Vue.component("lobby-settings", LobbySettingsComponent);

import SelectIconComponent from "./components/selectIcon/selectIconComponent.ts";
Vue.component("select-icon", SelectIconComponent);

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
    '/login': {
        component: LoginComponent
    },
    '/lobbies': {
        component: LobbyListComponent
    },
    '/lobby': {
        component: LobbyComponent
    },
    '/championSelect': {
        component: ChampionSelectComponent
    },
    '/reconnect': {
        component: ReconnectComponent
    },
    '*': {
        component: {
            ready() { router.go("/login"); }
        }
    }
});

router.start(App, "#content");