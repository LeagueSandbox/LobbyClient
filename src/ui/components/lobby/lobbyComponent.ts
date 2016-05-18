///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby.less";

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

import ModalComponent from "../modal/modalComponent.ts";
import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";
import NetworkServiceStatic, { NetworkService } from "../../services/networkService.ts";
import SettingServiceStatic, { SettingService } from "../../services/settingService.ts";

interface ChatMessages {
    timestamp: Date;
    sender: string;
    messages: string[];
}

Vue.partial("lobby-settings", require("./partials/settings.html"));
Vue.partial("lobby-chat", require("./partials/chat.html"));
Vue.partial("lobby-player-list", require("./partials/playerList.html"));

@Component({
    template: require("./lobbyView.html")
})
export default class LobbyComponent extends Vue {
    private message: string;
    private messages: ChatMessages[];
    
    private settings: SettingService;
    private lobby: lobby.Lobby;
      
    data() {
        return {
            message: "",
            messages: [],
            lobby: NetworkServiceStatic.currentLobby,
            
            // The settings property is not needed, but
            // adding it forces Vue to observe it. This
            // way we get notified of changes and update.
            settings: SettingServiceStatic,
        };
    }
    
    created() {        
        // Mainly for debugging. Redirects if there's no connection.
        if (!NetworkServiceStatic.currentConnection) {
            this.$router.go("/loading");
        }
        
        NetworkServiceStatic.on("chat", (timestamp, sender, message) => {
            if (this.messages.length && this.messages[this.messages.length - 1].sender === sender) {
                this.messages[this.messages.length - 1].messages.push(message);
            } else {
                this.messages.push({ timestamp, sender, messages: [message] });
            }            
        });
    }
    
    playersInTeam(team: lobby.Team) {
        return this.lobby.players.filter(x => x.team === team);
    }
    
    getOrNone(url = CDNService.getPath("assets/storeImages/layout/g-background_generic.jpg")) {
        return url;
    }
    
    sendChat() {
        NetworkServiceStatic.sendMessage(this.message);
        this.message = "";
    }
    
    joinTeam(team: lobby.Team) {
        NetworkServiceStatic.joinTeam(team);
    }
    
    get playerSettings() {
        return this.settings.playerSettings;
    }
    
    get hostSettings() {
        return this.settings.hostSettings;
    }
}