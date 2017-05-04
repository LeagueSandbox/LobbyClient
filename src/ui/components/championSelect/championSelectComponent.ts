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
    private players;
    private leftTeam: number[];
    private rightTeam: number[];
    private timer;

    ready() {
        if (!NetworkService.currentConnection) {
            this.$router.go("/login");
        }
        this.remainingTime = 90;
        this.canPick = true;
        this.timer = setInterval(this.startTimer, 1000);
        this.players = [];
        NetworkService.getChampionSelectData()
    }
    created() {
        NetworkService.on("get-championselect-data", players => {
            this.players = players;
        });
        NetworkService.on("champion-select-update", players => {
            this.players = players;
        });
        NetworkService.on("stop-timer", data => {
            console.log("stop received")
            this.remainingTime = 0;
            this.$router.go("/reconnect");
        });
    }
    startTimer() {
        this.remainingTime = this.remainingTime - 1;
        if (this.remainingTime == 0) {
            clearInterval(this.timer);
            this.lock();
        }
    }
    data() {
        return {
            staticService: StaticService,
            canPick: this.canPick,
            remainingTime: this.remainingTime,
            players: this.players
        };
    }
    lock() {
        if (this.canPick == true) {
            if (this.mySelectedChampion != null) {
                this.canPick = false;
                NetworkService.lockChampion();
            }
        }
    }
    selectMyChampion(championId) {
        if (this.canPick == true) {
            this.mySelectedChampion = championId;
            NetworkService.selectMyChampion(championId);
        }
    }
    selectChampion(playerId, championId) {
        this.players[playerId].champion = championId;
    }
}