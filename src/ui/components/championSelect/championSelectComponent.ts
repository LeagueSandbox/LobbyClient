///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

import "../../css/champion-select.less";

import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";
import NetworkService from "../../services/networkService.ts";
import SettingService from "../../services/settingService.ts";
import ModalComponent from "../modal/modalComponent.ts";

@Component({
    template: require("./championSelectView.html")
})
export default class ChampionSelectComponent extends Vue {
    private canPick: boolean;
    private mySelectedChampion: number;
    private remainingTime: number;
    private players: Object[];
    private leftTeam: number[];
    private rightTeam: number[];
    private timer: number;

    ready() {
        if (!NetworkService.currentConnection) {
            this.$router.go("/login");
        }
        NetworkService.getChampionSelectData();
        NetworkService.on("get-championselect-data", players => {
            this.players = players;
        });
        NetworkService.on("champion-select-update", players => {
            this.players = players;
        });
        NetworkService.on("stop-timer", data => {
            this.remainingTime = 0;
            this.$router.go("/reconnect");
        });
    }
    timerStep() {
        this.remainingTime = this.remainingTime - 1;
        if (this.remainingTime === 0) {
            clearInterval(this.timer);
            this.lock();
        }
    }
    data() {
        this.remainingTime = 90;
        this.canPick = true;
        this.players = [];
        this.timer = setInterval(this.timerStep.bind(this), 1000);
        return {
            staticService: StaticService,
            canPick: this.canPick,
            remainingTime: this.remainingTime,
            players: this.players
        };
    }
    lock() {
        if ((this.canPick && this.mySelectedChampion)) {
            this.canPick = false;
            NetworkService.lockChampion();
        }
    }
    selectMyChampion(championId: number) {
        if (this.canPick) {
            this.mySelectedChampion = championId;
            NetworkService.selectMyChampion(championId);
        }
    }
}
