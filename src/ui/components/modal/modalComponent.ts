///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

const TEMPLATE = `
<div class="modal-container fade-in" :class="{ 'fade-out-remove': !activeModal }">
    <div class="modal-backdrop"></div>
    <div class="modal-content" v-if="activeModal"><component :is="activeModal.content"></component></div>
</div>
`;

class Modal<T> {
    resolve: (thenableOrResult?: T | PromiseLike<T>) => void;
    params: any[];
    content: string;
    
    constructor(res: (thenableOrResult?: T | PromiseLike<T>) => void, content: string, params: any[]) {
        this.resolve = res;
        this.content = content;
        this.params = params;
    }
}

@Component({
    template: TEMPLATE
})
class ModalComponent extends Vue {
    private activeModal: Modal<any>;
    private pendingModals: Modal<any>[];
    
    data() {
        return {
            activeModal: null,
            pendingModals: []
        };
    }
    
    // Returns a promise that resolves when the view invokes the finish(res) method.
    present<T>(contents: string, ...params: any[]): Promise<T> {
        return new Promise<T>(res => {
            this.pendingModals.push(new Modal(res, contents, params));
            this.presentIfNecessary();
        });
    }
    
    // Closes the active modal with the specified result.
    finish<T>(result: T) {
        if (!this.activeModal) throw new Error("No modal active.");
        
        this.activeModal.resolve(result);
        this.activeModal = null;
        this.presentIfNecessary();
    }
    
    presentIfNecessary() {
        if (!this.activeModal && this.pendingModals.length) {
            // Vue will pick up the change.
            this.activeModal = this.pendingModals.pop();
        }
    }
    
    get params() {
        return this.activeModal.params;
    }
}

const instance = new ModalComponent({
    el: "#modal"
});
export default instance;