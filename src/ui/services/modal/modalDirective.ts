///<reference path="../../_app.ts" />
'use strict';

import ModalService from "./modalService.ts";

export class ModalCtrl {
    static $inject = ["$scope", "modalService"];
    
    modalService: ModalService;

    constructor($scope, modalService: ModalService) {
        this.modalService = modalService;
    }
    
    finish<T>(res: T) {
        this.modalService.finish(res);
    }
}

const TEMPLATE = `
<div class="modal-container fade-in" ng-show="modal.modalService.activeModal">
    <div class="modal-backdrop"></div>
    <div class="modal-content" compile="modal.modalService.activeModal.content"></div>
</div>
`;

export const directive: ng.IDirectiveFactory = () => ({
    restrict: "E",
    template: TEMPLATE,
    controller: "modalCtrl",
    controllerAs: "modal"
});