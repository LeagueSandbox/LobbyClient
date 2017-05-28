///<reference path="../../_app.ts" />
'use strict';

import "../../css/select-icon.less";
import ModalComponent from "../modal/modalComponent.ts";
import StaticService from "../../services/staticService.ts";

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

@Component({
    template: require("./selectIconView.html")
})
export default class SelectIconComponent extends Vue {

    private listenerFun: ;
    private selectedIcon: user.Icon;

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
            staticService: StaticService,
            selectedIcon: ModalComponent.params[0]
        };
    }

    finish(arg: user.Icon) {
        ModalComponent.finish(arg);
        document.removeEventListener("keyup", this.listenerFun);
    }
}
