///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

@Component({
    template: require("./checkboxView.html"),
    props: {
        value: {
            default: true,
            type: Boolean,
            twoWay: true
        }
    }
})
export default class CheckboxComponent extends Vue {
    private value: boolean;
    
    toggle() {
        this.value = !this.value;
    }
}