///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby.less";

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

import ModalComponent from "../modal/modalComponent";
import CDNService from "../../services/cdnService";
import StaticService from "../../services/staticService";
import NetworkServiceStatic, { NetworkService } from "../../services/networkService";
import SettingServiceStatic, { SettingService } from "../../services/settingService";

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
    private isHost: boolean;

    ready() {
        // Mainly for debugging. Redirects if there's no connection.
        if (!NetworkServiceStatic.currentConnection) {
            this.$router.go("/login");
        }

        NetworkServiceStatic.on("host", isHost => {
            this.isHost = isHost;
        });

        NetworkServiceStatic.on("start-championselect", () => {
            this.$router.go("/championSelect");
        });
        NetworkServiceStatic.on("chat", (timestamp, sender, message) => {
            if (this.messages.length && this.messages[this.messages.length - 1].sender === sender) {
                this.messages[this.messages.length - 1].messages.push(message);
            } else {
                this.messages.push({ timestamp, sender, messages: [message] });
            }

            // Scroll down on the next tick if we aren't scrolled yet.
            // We scroll down next tick because by then the contents of the
            // chat will have been updated with the newly added message.
            const el = document.getElementById("chat-container");
            const isAttached = el.scrollTop + el.clientHeight + 1 >= el.scrollHeight;

            this.$nextTick(() => {
                // If we were attached before the element got bigger, scroll down.
                // This effectively reattaches the scroll.
                if (isAttached) {
                    el.scrollTop = el.scrollHeight;
                }
            });
        });

        NetworkServiceStatic.currentLobbyConnection.emit("host");
    }
    data() {
        return {
            message: "",
            messages: [],
            lobby: NetworkServiceStatic.currentLobby,
            network: NetworkService,
            isHost: this.isHost,

            // The settings property is not needed, but
            // adding it forces Vue to observe it. This
            // way we get notified of changes and update.
            settings: SettingServiceStatic,
        };
    }

    created() {
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

    startChampionSelect() {
        NetworkServiceStatic.startChampionSelect();
    }

    leave() {
        NetworkServiceStatic.leaveLobby();
        this.$router.go("/lobbies");
    }

    iconByUser(user: Object) {
        return StaticService.iconById(NetworkServiceStatic.userById(user.idServer).idIcon).iconURL;
    }

    get hostSettings() {
        return this.settings.hostSettings;
    }

    openLobbySettings() {
        ModalComponent.present("lobby-settings", this.settings);
    }
}
