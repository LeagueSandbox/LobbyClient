///<reference path="../../_app.ts" />
'use strict';

import "../../css/selectSummonerSpell.less";
import ModalService from "../../services/modal/modalService.ts";
import CDNService from "../../services/cdnService.ts";

interface SelectSummonerSpellScope extends ng.IScope {
    options: lobby.SummonerSpell[];
    selected: lobby.SummonerSpell;
    other: lobby.SummonerSpell;
    
    finish: (spell?: lobby.SummonerSpell) => void;
    select: (SummonerSpell) => void;
}

export default class SelectSummonerSpellController {
    static $inject = ["$scope", "modalService", "cdnService"];

    constructor($scope: SelectSummonerSpellScope, modal: ModalService, cdn: CDNService) {
        if (!modal.activeModal) return;
        
        $scope.options = modal.activeModal.params[0];
        $scope.selected = modal.activeModal.params[1];
        $scope.other = modal.activeModal.params[2];
        
        const listener = (evnt: KeyboardEvent) => {
            if (evnt.keyCode !== 27) return;
            $scope.$apply(() => $scope.finish(modal.activeModal.params[1]));
        };
        document.addEventListener("keyup", listener);
        
        $scope.finish = (spell = $scope.selected) => {
            document.removeEventListener("keyup", listener);
            modal.finish($scope.selected);
        };
        
        $scope.select = opt => {
            if (opt === $scope.other) return;
            $scope.selected = opt;
        };
    }
}