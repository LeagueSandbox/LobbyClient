namespace lobby {    
    /** TODO */
    class Champion {
        // Name, id, title, portrait, splash, list of skins
    }
        
    /** TODO */
    class Skin {
        // Name, owning champion, splash
    }
    
    /** TODO */
    class SummonerSpell {
        // Name, id, description, icon, picture
    }
    
    /** Represents a gamemode. */
    class Gamemode {
        /** Simple name of this gamemode. Dev for example. */ 
        simpleName: string;
        
        /** Absolute "path" of this gamemode. LeagueSandbox-Default/Dev for example. */
        path: string;
    }
    
    /** Represents a player in a lobby. */
    class Player {
        /** The name of the player. */
        name: string;
        /** The unique id for this player. */
        id: number;
        
        /* TODO
        selectedChampion: Champion;
        selectedSkin: Skin OR skinIndex: number;
        spellOne: SummonerSpell;
        spellTwo: SummonerSpell;*/
    }
    
    /**
     * Represents a lobby item in the list of lobbies.
     */
    class LobbyListItem {
        /** Unique lobby id. */
        id: number;
        
        /** The name of the lobby. */
        name: string;
        /** The name of the lobby creator. */
        creator: string;
        /** The maximum amount of players. */
        playerLimit: number;
        /** The current amount of players. */
        playerCount: number;
        /** The gamemode of this lobby. */
        gamemode: Gamemode;
        /** If this lobby has a password. */
        hasPassword: boolean;
        
        /** Address for the server hosting this lobby. */
        address: string;
        /** Port for the server hosting this lobby. */
        port: number;
    }
    
    /** TODO. */
    class Team {
        // name, color, max amount of players, list of players. 
    }
    
    type LobbySettingFieldType =
        ( "summonerSpellSelect"
        | "championSelect"
        | "spellSelectMulti"
        | "championSelectMulti"
        | "mapSelect"
        | "select"
        | "text"
        | "checkbox" );
    
    type LobbySettingType =
        ( "float"
        | "integer"
        | "boolean" );    
    
    /** Represents a lobby setting. */
    class LobbySetting {
        /** Name of the setting. */
        name: string;
        /** Short help about what the setting does. */
        help: string;
        /** Type of the field. */
        field: LobbySettingFieldType;
        /** Value type of the field. */
        type: LobbySettingType;
        /** Default value for this setting. */
        default: any;
        /** Binding. Basically unique id for setting which can be referenced later. */
        binding: string;
        /** If applicable: Options. Either an object of options if `select`, otherwise a string. */
        options: (string | { [display: string]: string });
    }
    
    /**
     * Represents an actual lobby.
     */
    class Lobby {
        /** Unique lobby id. */
        id: number;
        
        /** Name of the lobby. */
        name: string;
        /** Creator of the lobby. */
        creator: Player;
        /** The gamemode in this lobby. */
        gamemode: Gamemode;
        /** List of teams in this lobby. */
        teams: Team[];
        
        /** Administrator settings. */
        adminSettings: LobbySetting[];
        /** Player settings. */
        playerSettings: LobbySetting[];
    }
}