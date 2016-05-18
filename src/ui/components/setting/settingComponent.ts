///<reference path="../../_app.ts" />
'use strict';

import { Setting } from "../../services/settingService.ts";
import CDNService from "../../services/cdnService.ts";
import ModalComponent from "../modal/modalComponent.ts";
import Component from "vue-class-component";

const Vue = <vuejs.VueStatic>require("vue");

@Component({
    template: require("./settingView.html"),
    props: {
        setting: {
            type: Object,
            required: true
        }
    }
})
export default class SettingComponent extends Vue {
    private setting: Setting<any, any>;
    
    /** This field here is not actually used by anything. */
    /** However, having it here and binding it to our setting property */
    /** will somehow teach Vue that it needs to observe our setting. */
    /** If this is removed, Vue will not observe when the property value */
    /** changes, and as such will not update the view. */
    private _setting: Setting<any, any>;
    
    data() {
        return {
            // Read the above note about this property.
            _setting: this.setting
        };
    }
    
    getOrNone(url = CDNService.getPath("assets/storeImages/layout/g-background_generic.jpg")) {
        return url;
    }
    
    openChampionPicker() {
        ModalComponent.present("select-champion", this.setting.options, this.setting.value).then(c => {
            this.setting.value = c; 
        });
    }
    
    openSpellPicker(index: number) {
        // TODO
    }
    
    toggleMembership(obj: any) {
        const list = <any[]>this.setting.value;
        
        if (list.indexOf(obj) !== -1) {
            list.$remove(obj);
        } else {
            list.push(obj);
        }
        
        // Notify the server of this change.
        // Because we change the contents of the value
        // not the actual value reference itself,
        // the custom setter will not pick it up automatically.
        // We do it manually here.
        this.setting.notifyChange();
    }
}