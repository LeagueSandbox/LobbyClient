///<reference path="../../_app.ts" />
'use strict';

import "../../css/selectChampion.less";
import ModalService from "../../services/modal/modalService.ts";
import CDNService from "../../services/cdnService.ts";

interface SelectChampionScope extends ng.IScope {
    options: dd.Champion[];
    currentChampion: dd.Champion;
    
    getPortraitPath: (champ: dd.Champion) => string;
    getOptions: () => dd.Champion[];
    
    top: boolean;
    jungle: boolean;
    mid: boolean;
    bot: boolean;
    support: boolean;
    
    searchTerm: string;
    
    isSelected: (champ: dd.Champion) => boolean;
    getSelectedPortrait: () => string;
    select: (champ: dd.Champion) => void;
    
    finish: (champ?: dd.Champion) => void;
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
        
        $scope.getPortraitPath = c => {
            return cdn.getPath("assets/images/champions/" + c.id + "_Splash_Tile_0.jpg");
        };
        
        // FIXME
        $scope.getOptions = () => {
            if ($scope.searchTerm) {
                return $scope.options.filter(opt => opt.name.toLowerCase().match(new RegExp($scope.searchTerm)) !== null);
            }
            
            return $scope.options.filter(opt => {
                if ($scope.top && (opt.tags.indexOf("Tank") !== -1 || opt.tags.indexOf("Fighter") !== -1)) {
                    return true;
                }
                
                if ($scope.jungle && (opt.tags.indexOf("Tank") !== -1 || opt.tags.indexOf("Fighter") !== -1)) {
                    return true;
                }
                
                if ($scope.mid && (opt.tags.indexOf("Mage") !== -1 || opt.tags.indexOf("Assassin") !== -1)) {
                    return true;
                }
                
                if ($scope.bot && opt.tags.indexOf("Marksman") !== -1) {
                    return true;
                }
                
                if ($scope.support && opt.tags.indexOf("Support") !== -1) {
                    return true;
                }
                
                return false;
            });
        };
        
        $scope.getSelectedPortrait = () => {
            if (!$scope.currentChampion) {
                return "";
            }
            return cdn.getPath("assets/images/champions/" + $scope.currentChampion.id + "_Square_0.png");  
        };
    }
}