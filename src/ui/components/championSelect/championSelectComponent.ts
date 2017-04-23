///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

import "../../css/champion-select.less";

import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";
import NetworkService from "../../services/networkService.ts";
import NetworkServiceStatic, { NetworkService } from "../../services/networkService.ts";
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

    ready() {
        if (!NetworkService.currentConnection) {
            this.$router.go("/loading");
        }
        this.remainingTime = 90;
        this.canPick = true;
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
                NetworkServiceStatic.lockChampion();
            }
        }
    }
    selectChampion(championId){
        if (this.canPick == true){
            this.selectedChampion = championId;
            NetworkServiceStatic.selectChampion(championId);
            console.log("aqui")
        }
    }
}