///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby-settings.less";
import ModalComponent from "../modal/modalComponent.ts";
import StaticService from "../../services/staticService.ts";
import SettingServiceStatic, { SettingService } from "../../services/settingService.ts";

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

@Component({
    template: require("./lobbySettingsVue.html")
})
export default class LobbySettingsComponent extends Vue {

    private listenerFun : any;
    private selectedIcon : user.Icon;
    private settings: SettingService;

    ready() {
        // Attach ESC listener. Is removed in finish() call.
        this.listenerFun = (evnt: KeyboardEvent) => {
            if (evnt.keyCode !== 27) return;
            this.finish(ModalComponent.params[0]);
        };
        document.addEventListener("keyup", this.listenerFun);
    }
    
    data() {
        return {
            staticService : StaticService,
            selectedIcon : ModalComponent.params[0],
            settings: SettingServiceStatic,
        };
    }

    get hostSettings() {
        return this.settings.hostSettings;
    }
    
    finish(arg) {
        ModalComponent.finish(arg);
        document.removeEventListener("keyup", this.listenerFun);
    }
}