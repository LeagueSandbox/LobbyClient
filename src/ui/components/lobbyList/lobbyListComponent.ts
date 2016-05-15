///<reference path="../../_app.ts" />
'use strict';

import Component from "vue-class-component";
const Vue = <vuejs.VueStatic>require("vue");

import "../../css/lobby-list.less";
import NetworkService from "../../services/networkService.ts";

@Component({
    template: require("./lobbyListView.html")
})
export default class LobbyListComponent extends Vue {
    private username: string;
    
    created() {
        // Mainly for debugging. Redirects if theres no connection.
        if (!NetworkService.currentConnection) {
            this.$router.go("/loading");
        }
    }
    
    data() {
        return {
            username: "Player",
            network: NetworkService
        };
    }
    
    join(lobby: lobby.LobbyListItem) {
        NetworkService.joinLobby(lobby, this.username).then(() => {
            console.log("Connected to lobby.");
            this.$router.go("/lobby");
        }, err => {
            console.log("Couldn't connect to lobby.");
            console.log(err.stack);
        });
    }
}