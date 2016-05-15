///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

interface SelectOption {
    value: string;
    content: string;
}

@Component({
    template: require("./selectOptionView.html"),
    props: {
        placeholder: String,
        value: {
            type: String,
            twoWay: true
        },
        options: Array,
        disabled: {
            type: Boolean,
            default: false
        }
    }
})
export default class SelectOptionComponent extends Vue {
    private placeholder: string;
    private value: string;
    private disabled: boolean;
    private options: SelectOption[];
    private expanded: boolean;
    private placeholderText: string;
    
    private selected: SelectOption;

    data() {
        let placeholderText = this.placeholder || "...";
        if (this.value) {
            placeholderText = this.options.filter(x => x.value === this.value)[0].content;
        }
        
        return {
            expanded: false,
            placeholderText: placeholderText,
            selected: null
        };
    }
    
    toggle() {
        if (this.disabled) return;
        
        this.placeholderText = this.expanded && this.selected ? this.selected.content : this.placeholder;
        this.expanded = !this.expanded;
    }
    
    select(option: SelectOption) {
        this.selected = option;
        
        this.value = option.value;
        this.placeholderText = option.content;
        this.expanded = false;
    }
}