///<reference path="../../_app.ts" />
'use strict';

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

export default class ModalService {
    activeModal: Modal<any>;
    pendingModals: Modal<any>[];
    
    constructor() {
        this.activeModal = null;
        this.pendingModals = [];
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
    
    private presentIfNecessary() {
        if (!this.activeModal && this.pendingModals.length) {
            // The modal directive will pick up this change.
            this.activeModal = this.pendingModals.pop();
        }
    }
}