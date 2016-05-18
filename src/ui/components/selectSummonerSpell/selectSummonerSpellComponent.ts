///<reference path="../../_app.ts" />
'use strict';

import "../../css/select-summonerspell.less";
import ModalComponent from "../modal/modalComponent.ts";
import CDNService from "../../services/cdnService.ts";
import Component from "vue-class-component";

const Vue = <vuejs.VueStatic>require("vue");

@Component({
    template: require("./selectSummonerSpellView.html")
})
export default class SelectSummonerSpellComponent extends Vue {
    private options: lobby.SummonerSpell[];
    private selected: lobby.SummonerSpell;
    private other: lobby.SummonerSpell;
    
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
            selected: ModalComponent.params[1],
            other: ModalComponent.params[2]
        };
    }
    
    finish(arg) {
        ModalComponent.finish(arg);
        document.removeEventListener("keyup", this.listenerFun);
    }
}