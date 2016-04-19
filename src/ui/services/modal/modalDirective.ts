///<reference path="../../_app.ts" />
'use strict';

import ModalService from "./modalService.ts";

export class ModalCtrl {
    static $inject = ["$scope", "modalService"];
    
    modalService: ModalService;

    constructor($scope, modalService: ModalService) {
        this.modalService = modalService;
    }
    
    get params() {
        return this.modalService.activeModal.params;
    }
    
    get active() {
        return this.modalService.activeModal;
    }
    
    finish<T>(res: T) {
        this.modalService.finish(res);
    }
}

const TEMPLATE = `
<div class="modal-container fade-in" ng-class="{ 'fade-out-remove': !modal.active }">
    <div class="modal-backdrop"></div>
    <div class="modal-content" compile="modal.active.content"></div>
</div>
`;

export const directive: ng.IDirectiveFactory = () => ({
    restrict: "E",
    template: TEMPLATE,
    controller: "modalCtrl",
    controllerAs: "modal"
});