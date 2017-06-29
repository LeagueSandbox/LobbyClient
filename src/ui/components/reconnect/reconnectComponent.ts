///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

import "../../css/lobby.less";

import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";
import NetworkService from "../../services/networkService.ts";
import SettingService from "../../services/settingService.ts";
import ModalComponent from "../modal/modalComponent.ts";

@Component({
    template: require("./reconnectView.html")
})
export default class ReconnectComponent extends Vue {

    ready() {
        if (!NetworkService.currentConnection) {
            this.$router.go("/login");
        }
    }
    reconnect() {
        NetworkService.startGameAgain();
    }
    leave() {
        NetworkService.leaveLobby();
        this.$router.go("/lobbies");
    }
}