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
    private selectedChampion : number;
    private remainingTime: number;
    private leftTeam: number[];
    private rightTeam: number[];
    private timer;

    ready() {
        if (!NetworkService.currentConnection) {
            this.$router.go("/loading");
        }
        this.remainingTime = 10;
        this.canPick = true;
        this.timer = setInterval(this.startTimer, 1000);
    }
    startTimer() {
        this.remainingTime = this.remainingTime - 1;
        if (this.remainingTime == 0){
            clearInterval(this.timer);
            this.lock();
        }
    }
    data() {
        return {
            staticService: StaticService,
            canPick: this.canPick,
            remainingTime: this.remainingTime
        };
    }
    lock() {
        if (this.canPick == true){
            if (this.selectedChampion != null){
                this.canPick = false;
                NetworkService.lockChampion();
            }
        }
    }
    selectChampion(championId){
        if (this.canPick == true){
            this.selectedChampion = championId;
            NetworkService.selectChampion(championId);
            let button = document.getElementById('3');
            //button.setAttribute("v-background-src", "staticService.championById(20).skins[0].splashCutoutURL")
            button.attributes['v-background-src'] = 'staticService.championById(20).skins[0].splashCutoutURL';
        }
    }
}