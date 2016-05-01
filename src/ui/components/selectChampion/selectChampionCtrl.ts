///<reference path="../../_app.ts" />
'use strict';

import "../../css/select-champion.less";
import ModalService from "../../services/modal/modalService.ts";
import CDNService from "../../services/cdnService.ts";

interface SelectChampionScope extends ng.IScope {
    options: lobby.Champion[];
    currentChampion: lobby.Champion;
    getOptions: () => lobby.Champion[];
    
    top: boolean;
    jungle: boolean;
    mid: boolean;
    bot: boolean;
    support: boolean;
    
    searchTerm: string;
    
    isSelected: (champ: lobby.Champion) => boolean;
    getSelectedPortrait: () => string;
    select: (champ: lobby.Champion) => void;
    
    finish: (champ?: lobby.Champion) => void;
    closeEsc: (event: KeyboardEvent) => void;
}

export default class SelectChampionController {
    static $inject = ["$scope", "modalService", "cdnService"];

    constructor($scope: SelectChampionScope, modal: ModalService, cdn: CDNService) {
        if (!modal.activeModal) return;
        
        $scope.options = modal.activeModal.params[0];
        $scope.currentChampion = modal.activeModal.params[1];
        
        $scope.select = c => {
            $scope.currentChampion = c;
        };
        
        $scope.isSelected = c => {
            return $scope.currentChampion === c;
        };
        
        const listener = (evnt: KeyboardEvent) => {
            if (evnt.keyCode !== 27) return;
            $scope.$apply(() => $scope.finish(modal.activeModal.params[1]));
        };
        document.addEventListener("keyup", listener);
        
        $scope.finish = (tgt = $scope.currentChampion) => {
            document.removeEventListener("keyup", listener);
            modal.finish(tgt);  
        };
        
        // FIXME: Role filtering.
        $scope.getOptions = () => {
            if ($scope.searchTerm) {
                return $scope.options.filter(opt => opt.name.toLowerCase().match(new RegExp($scope.searchTerm)) !== null);
            }
            
            return $scope.options;
        };
    }
}