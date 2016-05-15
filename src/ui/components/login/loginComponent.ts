///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

import "../../css/login.less";

@Component({
    template: require("./loginView.html")
})
export default class LoginComponent extends Vue {
    private isLoading: boolean;
    private previousInvalid: boolean;
    
    private username: string;
    private password: string;
    
    data() {
        return {
            isLoading: false,
            previousInvalid: false,
            username: "",
            password: ""
        };
    }
    
    login() {
        if (!this.username || !this.password) return;
        
        this.isLoading = true;
        this.previousInvalid = false;
        setTimeout(() => {
            this.$router.go("/lobbies");
        }, 1000);
    }
}