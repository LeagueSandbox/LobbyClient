///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

import "../../css/lobby-list.less";
import NetworkService from "../../services/networkService.ts";
import StaticService from "../../services/staticService.ts";

@Component({
    template: require("./lobbyListView.html")
})
export default class LobbyListComponent extends Vue {
    private lobbySelected: lobby.LobbyListItem;
    private canCreateLobby: boolean;
    
    created() {
        this.canCreateLobby = true;
        // Mainly for debugging. Redirects if theres no connection.
        if (!NetworkService.currentConnection) {
            this.$router.go("/login");
        }
    }
    
    data() {
        return {
            network: NetworkService,
            staticService: StaticService,
            lobbySelected: undefined,
            canCreateLobby: this.canCreateLobby
        };
    }
    
    select(lobby: lobby.LobbyListItem) {
        this.lobbySelected = lobby;
    }

    join(lobby: lobby.LobbyListItem) {
        NetworkService.joinLobby(lobby).then(() => {
            console.log("Connected to lobby.");
            this.$router.go("/lobby");
        }, err => {
            console.log("Couldn't connect to lobby.");
            console.log(err.stack);
        });
    }

    //TODO: limit lobby creation when clicked
    create() {
        if (!this.canCreateLobby) return;

        this.canCreateLobby = false;
        NetworkService.createLobby().then(() => {
            console.log("Created lobby.");
            this.$router.go("/lobby");
        }, err => {
            console.log("Couldn't create a lobby.");
            console.log(err.stack);
        });
    }
}