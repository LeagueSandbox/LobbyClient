///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

import "../../css/login.less";

import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";
import NetworkService from "../../services/networkService.ts";
import SettingService from "../../services/settingService.ts";
import ModalComponent from "../modal/modalComponent.ts";

@Component({
    template: require("./loginView.html")
})
export default class LoginComponent extends Vue {
    private isLoading: boolean;
    private previousInvalid: boolean;
    
    private username: string;
    private host: string;
    private path: string;
    private port: string;
    private state: string;
    private icon : any;

    ready() {
        if (localStorage.getItem("path") != undefined && localStorage.getItem("path") != "") {
            this.path = localStorage.getItem("path");
        } else {
            this.path = "Path to LoL 4.20";
        }
        if (localStorage.getItem("host") != undefined && localStorage.getItem("host") != "") {
            this.host = localStorage.getItem("host");
        }
        if (localStorage.getItem("port") != undefined && localStorage.getItem("port") != "") {
            this.port = localStorage.getItem("port");
        }
        if (localStorage.getItem("name") != undefined && localStorage.getItem("name") != "") {
            this.username = localStorage.getItem("name");
        }
        var idIcon = 0;
        if (localStorage.getItem("icon") != undefined && localStorage.getItem("icon") != "") {
            idIcon = parseInt(localStorage.getItem("icon"));
        }
        CDNService.load().then(() => {
            return StaticService.populate();
        }).then(() => {
            this.icon = StaticService.icons[idIcon];
        });
    }

    data() {
        return {
            isLoading: false,
            previousInvalid: false,
            username: this.username,
            host: this.host,
            path: this.path,
            port: this.port,
            icon: this.icon
        };
    }
    
    login() {
        if (!this.username || !this.host || this.isLoading) return;
        
        localStorage.setItem("host", this.host);
        localStorage.setItem("path", this.path);
        localStorage.setItem("name", this.username);
        localStorage.setItem("port", this.port);
        localStorage.setItem("icon", this.indexByIdIcon(this.icon.id).toString());

        this.isLoading = true;
        this.previousInvalid = false;
        NetworkService.connectToCentral("http://" + this.host + ":" + this.port, this.username, this.icon.id).then(() => {
            this.$router.go("/lobbies");
        });
    }

    openIconPicker() {
        ModalComponent.present("select-icon", this.icon).then(c => {
            this.icon = c;
        });
    }

    indexByIdIcon(id: number): number {
        return StaticService.icons.indexOf(StaticService.icons.filter(x => x.id === id)[0]);
    }
}