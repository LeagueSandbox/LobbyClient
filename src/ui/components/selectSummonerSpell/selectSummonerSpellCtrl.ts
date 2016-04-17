///<reference path="../../_app.ts" />
'use strict';

import "../../css/selectSummonerSpell.less";
import ModalService from "../../services/modal/modalService.ts";
import CDNService from "../../services/cdnService.ts";

// TODO: Move over to protocol.
export interface SummonerSpell {
    name: string;
    description: string;
    
    icon: string;
    image: string;
}

interface SelectSummonerSpellScope extends ng.IScope {
    options: SummonerSpell[];
    selected: SummonerSpell;
    
    finish: () => void;
    select: (SummonerSpell) => void;
}

export default class SelectSummonerSpellController {
    static $inject = ["$scope", "modalService", "cdnService"];

    constructor($scope: SelectSummonerSpellScope, modal: ModalService, cdn: CDNService) {
        if (!modal.activeModal) return;
        
        $scope.options = [
            { name: "Flash", image: "http://imgur.com/oUKm1In.png", description: "Flashes. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerFlash.png" },
            { name: "Barrier", image: "http://imgur.com/QAb85Zw.png", description: "Barriers. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerBarrier.png" },
            { name: "Ignite", image: "http://imgur.com/g3nEJlU.png", description: "Ignites. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerDot.png" },
            { name: "Teleport", image: "http://imgur.com/Fo14rr9.png", description: "Teleports. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerTeleport.png" },
            { name: "Smite", image: "http://imgur.com/zbcZd4W.png", description: "Smites. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerSmite.png" },
            { name: "Heal", image: "http://imgur.com/Mxvky5Z.png", description: "Heals. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerHeal.png" },
            { name: "Exhaust", image: "http://imgur.com/RSkI9Oq.png", description: "Exhausts. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerExhaust.png" },
            { name: "Clairvoyance", image: "http://imgur.com/C7nw61A.png", description: "Clairvoyances. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerClairvoyance.png" },
            { name: "Clarity", image: "http://imgur.com/UIj98zK.png", description: "Clarities. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerMana.png" },
            { name: "Ghost", image: "http://imgur.com/XT9wS4u.png", description: "Ghosts. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerHaste.png" }
        ]
        
        $scope.selected = modal.activeModal.params[0];
        $scope.finish = () => {
            modal.finish($scope.selected);
        };
        
        $scope.select = opt => {
            $scope.selected = opt;
        };
    }
}