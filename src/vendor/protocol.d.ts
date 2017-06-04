declare namespace lobby {    
    /** Represents a champion a player can pick. */
    interface Champion {
        /** Name of the champion, as shown in the client. */
        name: string;
        /** Unique id for this champion, used for identification. */
        id: number;
        /** Link to a 64x64 (or bigger) square champion head icon. */
        portraitIconURL: string;
        /** A list of all skins this champion has. */
        skins: Skin[];
    }
        
    /** Represents a skin owned by a champion, */
    interface Skin {
        /** Name of this skin. _Should_ include champion name, e.g. "Challenger Ahri" */
        name: string;
        /** Link to a 380x380 (or bigger) square cutout of the splash that displays the champions face. */
        /** Example: http://l3cdn.riotgames.com/releases/live/projects/lol_air_client/releases/0.0.1.186/files/assets/images/champions/Ahri_Splash_Tile_0.jpg. */
        splashCutoutURL: string;
    }
    
    /** Represents a SummonerSpell that one can pick. */
    interface SummonerSpell {
        /** Unique id used to identify the spell. */
        id: number;
        /** The name of this summoner spell. */
        name: string;
        /** A short text describing the spell. */
        description: string;
        /** A square (64x64 or bigger) image of the summoner icon. */
        icon: string;
        /** A bigger image (around 450x280) showing the summoner spell in use. */
        image: string;
    }
    
    /** Represents a gamemode. */
    interface Gamemode {
        /** Simple name of this gamemode. Dev for example. */ 
        simpleName: string;
        
        /** Absolute "path" of this gamemode. LeagueSandbox-Default/Dev for example. */
        path: string;
    }
    
    /** Represents a map. */
    interface Map {
        /** Unique id for this map. */
        id: number;
        /** Simple name for this map. */
        name: string;
        /** Image for this map. Used in selecting GUI. */
        image: string;
    }
    
    /** Represents a player in a lobby. */
    interface Player {
        /** The name of the player. */
        name: string;
        /** The unique id for this player. */
        id: number;
        /** The unique id for the team this player is on. */
        team: Team;
        /** The currently selected champion. null if not applicable. */
        champion: Champion;
        /** The currently selected skin. null if no champion is selected, non-null otherwise. */
        skinIndex: number;
        /** First selected summoner spell. Never null. */
        spellOne: SummonerSpell;
        /** Second selected summoner spell. Never null. */
        spellTwo: SummonerSpell;
    }
    
    /**
     * Represents a lobby item in the list of lobbies.
     */
    interface LobbyListItem {
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
        gamemodeName: string;
        /** If this lobby has a password. */
        hasPassword: boolean;
        
        /** Address for the server hosting this lobby. */
        address: string;
        /** Port for the server hosting this lobby. */
        port: number;
    }
    
    /** Represents a singular team in the lobby. */
    interface Team {
        /** Unique id of this team. */
        id: number;
        /** The name of this team. */
        name: string; 
        /** Display color used in the lobby interface. Needs to be valid css. */
        color: string;
        /** The maximum amount of players on this team. */
        playerLimit: number;
    }
    
    type LobbySettingFieldType =
        ( "summonerSpellSelect"
        | "championSelect"
        | "summonerSpellSelectMulti"
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
    interface LobbySetting {
        /** Name of the setting. */
        name: string;
        /** Short help about what the setting does. */
        help: string;
        /** Type of the field. */
        field: LobbySettingFieldType;
        /** Value type of the field. */
        type: LobbySettingType;
        /** Default value for this setting. */
        default?: any;
        /** Binding. Basically unique id for setting which can be referenced later. */
        binding: string;
        /** If applicable: Options. Either an object of options if `select`, otherwise a string. */
        options?: (string | { [display: string]: string });
        /** If applicable: Value set by the server. */
        value?: any;
        /** If this is a setting only for the host. */
        host: boolean;
    }
    
    /**
     * Represents an actual lobby.
     */
    interface Lobby {        
        /** Name of the lobby. */
        name: string;
        /** Creator of the lobby. */
        owner: string;
        /** The gamemode in this lobby. */
        gamemodeName: string;
        /** List of teams in this lobby. */
        teams: Team[];
        /** List of players in this lobby. */
        players: Player[];
        
        /** Settings. */
        settings: LobbySetting[];
    }
}

declare namespace user {
    /**
     * Represents an user
     */
    interface User {
        /** ID of the user */
        id: number;
        /** Name of the user */
        username: string;
        /** ID of the icon */
        iconId: number;
    }

    interface Icon {
        id: number;

        iconURL: string;
    }
}