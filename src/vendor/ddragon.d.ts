declare namespace ddragon {
    // data/locale/champion.json
    interface Champion {
        // 5.21.1
        version: string;
        // MonkeyKing
        id: string;
        // 266
        key: string;
        // Wukong
        name: string;
        // the Darkin Blade
        title: string;
        // Aatrox is a legendary warrior, etc...
        blurb: string;
        // Resource type.
        partype: string;
        
        info: ChampionInfo;
        image: ChampionImage;
        tags: string[];
        stats: ChampionStats;
    }
    
    interface ChampionInfo {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    }
    
    interface ChampionImage {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    }
    
    interface ChampionStats {
        hp: number;
        hpperlevel: number;
        mp: number;
        mpperlevel: number;
        armor: number;
        armorperlevel: number;
        spellblock: number;
        spellblockperlevel: number;
        attackrange: number;
        hpregen: number;
        hpregenperlevel: number;
        mpregen: number;
        mpregenperlevel: number;
        crit: number;
        critperlevel: number;
        attackdamage: number;
        attackdamageperlevel: number;
        attackspeedoffset: number;
        attackspeedperlevel: number;
    }
}

// ddragon can also be referenced using dd.
import dd = ddragon;

declare module 'ddragon' {
    export = dd;
}