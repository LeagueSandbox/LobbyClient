///<reference path="../../_app.ts" />
'use strict';

import NetworkService from "../../services/networkService.ts";
import StaticService from "../../services/staticService.ts";
import ModalService from "../../services/modal/modalService.ts";
import SettingService, { ChampionSelectSetting, SummonerSpellSelectSetting } from "../../services/settingService.ts";

export default class LobbySettingsCtrl {
    static $inject = ["$scope", "networkService", "staticService", "modalService", "settingService"];

    settings: SettingService;
    statics: StaticService;
    $scope: ng.IScope;
    modal: ModalService;

    constructor($scope: ng.IScope, network: NetworkService, statics: StaticService, modal: ModalService, settings: SettingService) {
        const redraw = () => {
            if (!$scope.$$phase) $scope.$apply();
        };

        this.statics = statics;
        this.modal = modal;
        this.$scope = $scope;

        this.settings = settings;
        this.settings.on("update", redraw);
    }

    openChampionPicker(setting: ChampionSelectSetting) {
        const champs = setting.options;
        const current = setting.value;

        this.modal.present<lobby.Champion>(require("../selectChampion/selectChampionView.html"), champs, current).then(c => {
            this.$scope.$apply(() => {
                if (c) setting.value = c;
            });
        });
    }

    openSpellPicker(setting: SummonerSpellSelectSetting, index: number) {
        this.modal.present<lobby.SummonerSpell>(
            require("../selectSummonerSpell/selectSummonerSpellView.html"),
            setting.options,
            setting.value[index],
            setting.value[(index + 1) % 2]
        ).then(c => {
            this.$scope.$apply(() => {
                // Update only the spell we changed.
                setting.value = [index == 0 ? c : setting.value[0], index == 1 ? c : setting.value[1]];
            });
        });
    }
    
    toggleMembership<A>(list: A[], obj: A) {
        if (list.indexOf(obj) !== -1) {
            list.splice(list.indexOf(obj), 1);
        } else {
            list.push(obj);
        }
    }
}