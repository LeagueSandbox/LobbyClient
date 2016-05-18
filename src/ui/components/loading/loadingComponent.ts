///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

import "../../css/loading.less";

import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";
import NetworkService from "../../services/networkService.ts";
import SettingService from "../../services/settingService.ts";

@Component({
    template: require("./loadingView.html")
})
export default class LoadingComponent extends Vue {
    private state: string;
    
    data() {
        return {
            state: "Loading assets..."
        };
    }
    
    ready() {
        CDNService.load().then(() => {
            this.state = "Populating data...";
            return StaticService.populate();
        }).then(() => {
            this.state = "Connecting to server...";
            return NetworkService.connectToCentral("http://localhost:8082");
        }).then(() => {
            this.state = "Done!"; 
            this.$router.go("/login");
        });
    }
}