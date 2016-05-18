///<reference path="../../_app.ts" />
'use strict';

import "../../css/select-champion.less";
import ModalComponent from "../modal/modalComponent.ts";
import CDNService from "../../services/cdnService.ts";

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

@Component({
    template: require("./selectChampionView.html")
})
export default class SelectChampionComponent extends Vue {
    private options: lobby.Champion[];
    private currentChampion: lobby.Champion;
    
    private searchTerm: string;
    private top: boolean;
    private jungle: boolean;
    private mid: boolean;
    private bot: boolean;
    private support: boolean;
    
    private listenerFun: any;
    
    ready() {
        // Attach ESC listener. Is removed in finish() call.
        this.listenerFun = (evnt: KeyboardEvent) => {
            if (evnt.keyCode !== 27) return;
            this.finish(ModalComponent.params[1]);
        };
        document.addEventListener("keyup", this.listenerFun);
    }
    
    data() {
        return {
            options: ModalComponent.params[0],
            currentChampion: ModalComponent.params[1],
            
            searchTerm: "",
            top: true,
            jungle: true,
            mid: true,
            bot: true,
            support: true
        };
    }
    
    finish(arg) {
        ModalComponent.finish(arg);
        document.removeEventListener("keyup", this.listenerFun);
    }
}