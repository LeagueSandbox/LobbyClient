///<reference path="../_app.ts" />
'use strict';

import CDNService from "./cdnService.ts";

class StaticService {
    champions: lobby.Champion[];
    summonerSpells: lobby.SummonerSpell[];
    maps: lobby.Map[];

    // This method assumes that the CDNService is already loaded.
    populate() {
        this.champions = [
            {
                id: 266, name: "Aatrox", portraitIconURL: CDNService.getPath("assets/images/champions/Aatrox_Square_0.png"), skins: [
                    { name: "Classic Aatrox", splashCutoutURL: CDNService.getPath("assets/images/champions/Aatrox_Splash_Tile_0.jpg") },
                    { name: "Justicar Aatrox", splashCutoutURL: CDNService.getPath("assets/images/champions/Aatrox_Splash_Tile_1.jpg") },
                    { name: "Mecha Aatrox", splashCutoutURL: CDNService.getPath("assets/images/champions/Aatrox_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 103, name: "Ahri", portraitIconURL: CDNService.getPath("assets/images/champions/Ahri_Square_0.png"), skins: [
                    { name: "Classic Ahri", splashCutoutURL: CDNService.getPath("assets/images/champions/Ahri_Splash_Tile_0.jpg") },
                    { name: "Dynasty Ahri", splashCutoutURL: CDNService.getPath("assets/images/champions/Ahri_Splash_Tile_1.jpg") },
                    { name: "Midnight Ahri", splashCutoutURL: CDNService.getPath("assets/images/champions/Ahri_Splash_Tile_2.jpg") },
                    { name: "Foxfire Ahri", splashCutoutURL: CDNService.getPath("assets/images/champions/Ahri_Splash_Tile_3.jpg") },
                    { name: "Popstar Ahri", splashCutoutURL: CDNService.getPath("assets/images/champions/Ahri_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 84, name: "Akali", portraitIconURL: CDNService.getPath("assets/images/champions/Akali_Square_0.png"), skins: [
                    { name: "Classic Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_Tile_0.jpg") },
                    { name: "Stinger Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_Tile_1.jpg") },
                    { name: "Crimson Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_Tile_2.jpg") },
                    { name: "All-star Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_Tile_3.jpg") },
                    { name: "Nurse Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_Tile_4.jpg") },
                    { name: "Blood Moon Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_Tile_5.jpg") },
                    { name: "Silverfang Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 12, name: "Alistar", portraitIconURL: CDNService.getPath("assets/images/champions/Alistar_Square_0.png"), skins: [
                    { name: "Classic Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_Tile_0.jpg") },
                    { name: "Black Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_Tile_1.jpg") },
                    { name: "Golden Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_Tile_2.jpg") },
                    { name: "Matador Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_Tile_3.jpg") },
                    { name: "Longhorn Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_Tile_4.jpg") },
                    { name: "Unchained Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_Tile_5.jpg") },
                    { name: "Infernal Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_Tile_6.jpg") },
                    { name: "Sweeper Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 32, name: "Amumu", portraitIconURL: CDNService.getPath("assets/images/champions/Amumu_Square_0.png"), skins: [
                    { name: "Classic Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_Tile_0.jpg") },
                    { name: "Pharaoh Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_Tile_1.jpg") },
                    { name: "Vancouver Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_Tile_2.jpg") },
                    { name: "Emumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_Tile_3.jpg") },
                    { name: "Re-Gifted Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_Tile_4.jpg") },
                    { name: "Almost-Prom King Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_Tile_5.jpg") },
                    { name: "Little Knight Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_Tile_6.jpg") },
                    { name: "Sad Robot Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 34, name: "Anivia", portraitIconURL: CDNService.getPath("assets/images/champions/Anivia_Square_0.png"), skins: [
                    { name: "Classic Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_Tile_0.jpg") },
                    { name: "Team Spirit Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_Tile_1.jpg") },
                    { name: "Bird of Prey Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_Tile_2.jpg") },
                    { name: "Noxus Hunter Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_Tile_3.jpg") },
                    { name: "Hextech Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_Tile_4.jpg") },
                    { name: "Blackfrost Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 1, name: "Annie", portraitIconURL: CDNService.getPath("assets/images/champions/Annie_Square_0.png"), skins: [
                    { name: "Classic Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_Tile_0.jpg") },
                    { name: "Goth Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_Tile_1.jpg") },
                    { name: "Red Riding Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_Tile_2.jpg") },
                    { name: "Annie in Wonderland", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_Tile_3.jpg") },
                    { name: "Prom Queen Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_Tile_4.jpg") },
                    { name: "Frostfire Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_Tile_5.jpg") },
                    { name: "Reverse Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_Tile_6.jpg") },
                    { name: "FrankenTibbers Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_Tile_7.jpg") },
                    { name: "Panda Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_Tile_8.jpg") }
                ]
            },
            {
                id: 22, name: "Ashe", portraitIconURL: CDNService.getPath("assets/images/champions/Ashe_Square_0.png"), skins: [
                    { name: "Classic Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_Tile_0.jpg") },
                    { name: "Freljord Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_Tile_1.jpg") },
                    { name: "Sherwood Forest Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_Tile_2.jpg") },
                    { name: "Woad Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_Tile_3.jpg") },
                    { name: "Queen Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_Tile_4.jpg") },
                    { name: "Amethyst Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_Tile_5.jpg") },
                    { name: "Heartseeker Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 268, name: "Azir", portraitIconURL: CDNService.getPath("assets/images/champions/Azir_Square_0.png"), skins: [
                    { name: "Classic Azir", splashCutoutURL: CDNService.getPath("assets/images/champions/Azir_Splash_Tile_0.jpg") },
                    { name: "Galactic Azir", splashCutoutURL: CDNService.getPath("assets/images/champions/Azir_Splash_Tile_1.jpg") }
                ]
            },
            {
                id: 53, name: "Blitzcrank", portraitIconURL: CDNService.getPath("assets/images/champions/Blitzcrank_Square_0.png"), skins: [
                    { name: "Classic Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_Tile_0.jpg") },
                    { name: "Rusty Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_Tile_1.jpg") },
                    { name: "Goalkeeper Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_Tile_2.jpg") },
                    { name: "Boom Boom Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_Tile_3.jpg") },
                    { name: "Piltover Customs Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_Tile_4.jpg") },
                    { name: "Definitely Not Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_Tile_5.jpg") },
                    { name: "iBlitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_Tile_6.jpg") },
                    { name: "Riot Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 63, name: "Brand", portraitIconURL: CDNService.getPath("assets/images/champions/Brand_Square_0.png"), skins: [
                    { name: "Classic Brand", splashCutoutURL: CDNService.getPath("assets/images/champions/Brand_Splash_Tile_0.jpg") },
                    { name: "Apocalyptic Brand", splashCutoutURL: CDNService.getPath("assets/images/champions/Brand_Splash_Tile_1.jpg") },
                    { name: "Vandal Brand", splashCutoutURL: CDNService.getPath("assets/images/champions/Brand_Splash_Tile_2.jpg") },
                    { name: "Cryocore Brand", splashCutoutURL: CDNService.getPath("assets/images/champions/Brand_Splash_Tile_3.jpg") },
                    { name: "Zombie Brand", splashCutoutURL: CDNService.getPath("assets/images/champions/Brand_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 201, name: "Braum", portraitIconURL: CDNService.getPath("assets/images/champions/Braum_Square_0.png"), skins: [
                    { name: "Classic Braum", splashCutoutURL: CDNService.getPath("assets/images/champions/Braum_Splash_Tile_0.jpg") },
                    { name: "Dragonslayer Braum", splashCutoutURL: CDNService.getPath("assets/images/champions/Braum_Splash_Tile_1.jpg") }
                ]
            },
            {
                id: 51, name: "Caitlyn", portraitIconURL: CDNService.getPath("assets/images/champions/Caitlyn_Square_0.png"), skins: [
                    { name: "Classic Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_Tile_0.jpg") },
                    { name: "Resistance Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_Tile_1.jpg") },
                    { name: "Sheriff Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_Tile_2.jpg") },
                    { name: "Safari Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_Tile_3.jpg") },
                    { name: "Arctic Warfare Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_Tile_4.jpg") },
                    { name: "Officer Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_Tile_5.jpg") },
                    { name: "Headhunter Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 69, name: "Cassiopeia", portraitIconURL: CDNService.getPath("assets/images/champions/Cassiopeia_Square_0.png"), skins: [
                    { name: "Classic Cassiopeia", splashCutoutURL: CDNService.getPath("assets/images/champions/Cassiopeia_Splash_Tile_0.jpg") },
                    { name: "Desperada Cassiopeia", splashCutoutURL: CDNService.getPath("assets/images/champions/Cassiopeia_Splash_Tile_1.jpg") },
                    { name: "Siren Cassiopeia", splashCutoutURL: CDNService.getPath("assets/images/champions/Cassiopeia_Splash_Tile_2.jpg") },
                    { name: "Mythic Cassiopeia", splashCutoutURL: CDNService.getPath("assets/images/champions/Cassiopeia_Splash_Tile_3.jpg") },
                    { name: "Jade Fang Cassiopeia", splashCutoutURL: CDNService.getPath("assets/images/champions/Cassiopeia_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 31, name: "Cho'Gath", portraitIconURL: CDNService.getPath("assets/images/champions/Chogath_Square_0.png"), skins: [
                    { name: "Classic Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_Tile_0.jpg") },
                    { name: "Nightmare Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_Tile_1.jpg") },
                    { name: "Gentleman Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_Tile_2.jpg") },
                    { name: "Loch Ness Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_Tile_3.jpg") },
                    { name: "Jurassic Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_Tile_4.jpg") },
                    { name: "Battlecast Prime Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 42, name: "Corki", portraitIconURL: CDNService.getPath("assets/images/champions/Corki_Square_0.png"), skins: [
                    { name: "Classic Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_Tile_0.jpg") },
                    { name: "UFO Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_Tile_1.jpg") },
                    { name: "Ice Toboggan Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_Tile_2.jpg") },
                    { name: "Red Baron Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_Tile_3.jpg") },
                    { name: "Hot Rod Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_Tile_4.jpg") },
                    { name: "Urfrider Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_Tile_5.jpg") },
                    { name: "Dragonwing Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_Tile_6.jpg") },
                    { name: "Fnatic Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 122, name: "Darius", portraitIconURL: CDNService.getPath("assets/images/champions/Darius_Square_0.png"), skins: [
                    { name: "Classic Darius", splashCutoutURL: CDNService.getPath("assets/images/champions/Darius_Splash_Tile_0.jpg") },
                    { name: "Lord Darius", splashCutoutURL: CDNService.getPath("assets/images/champions/Darius_Splash_Tile_1.jpg") },
                    { name: "Bioforge Darius", splashCutoutURL: CDNService.getPath("assets/images/champions/Darius_Splash_Tile_2.jpg") },
                    { name: "Woad King Darius", splashCutoutURL: CDNService.getPath("assets/images/champions/Darius_Splash_Tile_3.jpg") },
                    { name: "Dunkmaster Darius", splashCutoutURL: CDNService.getPath("assets/images/champions/Darius_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 131, name: "Diana", portraitIconURL: CDNService.getPath("assets/images/champions/Diana_Square_0.png"), skins: [
                    { name: "Classic Diana", splashCutoutURL: CDNService.getPath("assets/images/champions/Diana_Splash_Tile_0.jpg") },
                    { name: "Dark Valkyrie Diana", splashCutoutURL: CDNService.getPath("assets/images/champions/Diana_Splash_Tile_1.jpg") },
                    { name: "Lunar Goddess Diana", splashCutoutURL: CDNService.getPath("assets/images/champions/Diana_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 119, name: "Draven", portraitIconURL: CDNService.getPath("assets/images/champions/Draven_Square_0.png"), skins: [
                    { name: "Classic Draven", splashCutoutURL: CDNService.getPath("assets/images/champions/Draven_Splash_Tile_0.jpg") },
                    { name: "Soul Reaver Draven", splashCutoutURL: CDNService.getPath("assets/images/champions/Draven_Splash_Tile_1.jpg") },
                    { name: "Gladiator Draven", splashCutoutURL: CDNService.getPath("assets/images/champions/Draven_Splash_Tile_2.jpg") },
                    { name: "Primetime Draven", splashCutoutURL: CDNService.getPath("assets/images/champions/Draven_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 36, name: "Dr. Mundo", portraitIconURL: CDNService.getPath("assets/images/champions/DrMundo_Square_0.png"), skins: [
                    { name: "Classic Dr. Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_Tile_0.jpg") },
                    { name: "Toxic Dr. Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_Tile_1.jpg") },
                    { name: "Mr. Mundoverse", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_Tile_2.jpg") },
                    { name: "Corporate Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_Tile_3.jpg") },
                    { name: "Mundo Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_Tile_4.jpg") },
                    { name: "Executioner Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_Tile_5.jpg") },
                    { name: "Rageborn Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_Tile_6.jpg") },
                    { name: "TPA Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 60, name: "Elise", portraitIconURL: CDNService.getPath("assets/images/champions/Elise_Square_0.png"), skins: [
                    { name: "Classic Elise", splashCutoutURL: CDNService.getPath("assets/images/champions/Elise_Splash_Tile_0.jpg") },
                    { name: "Death Blossom Elise", splashCutoutURL: CDNService.getPath("assets/images/champions/Elise_Splash_Tile_1.jpg") },
                    { name: "Victorious Elise", splashCutoutURL: CDNService.getPath("assets/images/champions/Elise_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 28, name: "Evelynn", portraitIconURL: CDNService.getPath("assets/images/champions/Evelynn_Square_0.png"), skins: [
                    { name: "Classic Evelynn", splashCutoutURL: CDNService.getPath("assets/images/champions/Evelynn_Splash_Tile_0.jpg") },
                    { name: "Shadow Evelynn", splashCutoutURL: CDNService.getPath("assets/images/champions/Evelynn_Splash_Tile_1.jpg") },
                    { name: "Masquerade Evelynn", splashCutoutURL: CDNService.getPath("assets/images/champions/Evelynn_Splash_Tile_2.jpg") },
                    { name: "Tango Evelynn", splashCutoutURL: CDNService.getPath("assets/images/champions/Evelynn_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 81, name: "Ezreal", portraitIconURL: CDNService.getPath("assets/images/champions/Ezreal_Square_0.png"), skins: [
                    { name: "Classic Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_Tile_0.jpg") },
                    { name: "Nottingham Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_Tile_1.jpg") },
                    { name: "Striker Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_Tile_2.jpg") },
                    { name: "Frosted Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_Tile_3.jpg") },
                    { name: "Explorer Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_Tile_4.jpg") },
                    { name: "Pulsefire Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_Tile_5.jpg") },
                    { name: "TPA Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_Tile_6.jpg") },
                    { name: "Debonair Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 9, name: "Fiddlesticks", portraitIconURL: CDNService.getPath("assets/images/champions/FiddleSticks_Square_0.png"), skins: [
                    { name: "Classic Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_Tile_0.jpg") },
                    { name: "Spectral Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_Tile_1.jpg") },
                    { name: "Union Jack Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_Tile_2.jpg") },
                    { name: "Bandito Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_Tile_3.jpg") },
                    { name: "Pumpkinhead Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_Tile_4.jpg") },
                    { name: "Fiddle Me Timbers", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_Tile_5.jpg") },
                    { name: "Surprise Party Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_Tile_6.jpg") },
                    { name: "Dark Candy Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 114, name: "Fiora", portraitIconURL: CDNService.getPath("assets/images/champions/Fiora_Square_0.png"), skins: [
                    { name: "Classic Fiora", splashCutoutURL: CDNService.getPath("assets/images/champions/Fiora_Splash_Tile_0.jpg") },
                    { name: "Royal Guard Fiora", splashCutoutURL: CDNService.getPath("assets/images/champions/Fiora_Splash_Tile_1.jpg") },
                    { name: "Nightraven Fiora", splashCutoutURL: CDNService.getPath("assets/images/champions/Fiora_Splash_Tile_2.jpg") },
                    { name: "Headmistress Fiora", splashCutoutURL: CDNService.getPath("assets/images/champions/Fiora_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 105, name: "Fizz", portraitIconURL: CDNService.getPath("assets/images/champions/Fizz_Square_0.png"), skins: [
                    { name: "Classic Fizz", splashCutoutURL: CDNService.getPath("assets/images/champions/Fizz_Splash_Tile_0.jpg") },
                    { name: "Atlantean Fizz", splashCutoutURL: CDNService.getPath("assets/images/champions/Fizz_Splash_Tile_1.jpg") },
                    { name: "Tundra Fizz", splashCutoutURL: CDNService.getPath("assets/images/champions/Fizz_Splash_Tile_2.jpg") },
                    { name: "Fisherman Fizz", splashCutoutURL: CDNService.getPath("assets/images/champions/Fizz_Splash_Tile_3.jpg") },
                    { name: "Void Fizz", splashCutoutURL: CDNService.getPath("assets/images/champions/Fizz_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 3, name: "Galio", portraitIconURL: CDNService.getPath("assets/images/champions/Galio_Square_0.png"), skins: [
                    { name: "Classic Galio", splashCutoutURL: CDNService.getPath("assets/images/champions/Galio_Splash_Tile_0.jpg") },
                    { name: "Enchanted Galio", splashCutoutURL: CDNService.getPath("assets/images/champions/Galio_Splash_Tile_1.jpg") },
                    { name: "Hextech Galio", splashCutoutURL: CDNService.getPath("assets/images/champions/Galio_Splash_Tile_2.jpg") },
                    { name: "Commando Galio", splashCutoutURL: CDNService.getPath("assets/images/champions/Galio_Splash_Tile_3.jpg") },
                    { name: "Gatekeeper Galio", splashCutoutURL: CDNService.getPath("assets/images/champions/Galio_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 41, name: "Gangplank", portraitIconURL: CDNService.getPath("assets/images/champions/Gangplank_Square_0.png"), skins: [
                    { name: "Classic Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_Tile_0.jpg") },
                    { name: "Spooky Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_Tile_1.jpg") },
                    { name: "Minuteman Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_Tile_2.jpg") },
                    { name: "Sailor Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_Tile_3.jpg") },
                    { name: "Toy Soldier Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_Tile_4.jpg") },
                    { name: "Special Forces Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_Tile_5.jpg") },
                    { name: "Sultan Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 86, name: "Garen", portraitIconURL: CDNService.getPath("assets/images/champions/Garen_Square_0.png"), skins: [
                    { name: "Classic Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_Tile_0.jpg") },
                    { name: "Sanguine Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_Tile_1.jpg") },
                    { name: "Desert Trooper Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_Tile_2.jpg") },
                    { name: "Commando Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_Tile_3.jpg") },
                    { name: "Dreadknight Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_Tile_4.jpg") },
                    { name: "Rugged Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_Tile_5.jpg") },
                    { name: "Steel Legion Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 150, name: "Gnar", portraitIconURL: CDNService.getPath("assets/images/champions/Gnar_Square_0.png"), skins: [
                    { name: "Classic Gnar", splashCutoutURL: CDNService.getPath("assets/images/champions/Gnar_Splash_Tile_0.jpg") },
                    { name: "Dino Gnar", splashCutoutURL: CDNService.getPath("assets/images/champions/Gnar_Splash_Tile_1.jpg") }
                ]
            },
            {
                id: 79, name: "Gragas", portraitIconURL: CDNService.getPath("assets/images/champions/Gragas_Square_0.png"), skins: [
                    { name: "Classic Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_Tile_0.jpg") },
                    { name: "Scuba Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_Tile_1.jpg") },
                    { name: "Hillbilly Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_Tile_2.jpg") },
                    { name: "Santa Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_Tile_3.jpg") },
                    { name: "Gragas, Esq.", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_Tile_4.jpg") },
                    { name: "Vandal Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_Tile_5.jpg") },
                    { name: "Oktoberfest Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_Tile_6.jpg") },
                    { name: "Superfan Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_Tile_7.jpg") },
                    { name: "Fnatic Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_Tile_8.jpg") }
                ]
            },
            {
                id: 104, name: "Graves", portraitIconURL: CDNService.getPath("assets/images/champions/Graves_Square_0.png"), skins: [
                    { name: "Classic Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_Tile_0.jpg") },
                    { name: "Hired Gun Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_Tile_1.jpg") },
                    { name: "Jailbreak Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_Tile_2.jpg") },
                    { name: "Mafia Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_Tile_3.jpg") },
                    { name: "Riot Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_Tile_4.jpg") },
                    { name: "Pool Party Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 120, name: "Hecarim", portraitIconURL: CDNService.getPath("assets/images/champions/Hecarim_Square_0.png"), skins: [
                    { name: "Classic Hecarim", splashCutoutURL: CDNService.getPath("assets/images/champions/Hecarim_Splash_Tile_0.jpg") },
                    { name: "Blood Knight Hecarim", splashCutoutURL: CDNService.getPath("assets/images/champions/Hecarim_Splash_Tile_1.jpg") },
                    { name: "Reaper Hecarim", splashCutoutURL: CDNService.getPath("assets/images/champions/Hecarim_Splash_Tile_2.jpg") },
                    { name: "Headless Hecarim", splashCutoutURL: CDNService.getPath("assets/images/champions/Hecarim_Splash_Tile_3.jpg") },
                    { name: "Arcade Hecarim", splashCutoutURL: CDNService.getPath("assets/images/champions/Hecarim_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 74, name: "Heimerdinger", portraitIconURL: CDNService.getPath("assets/images/champions/Heimerdinger_Square_0.png"), skins: [
                    { name: "Classic Heimerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_Tile_0.jpg") },
                    { name: "Alien Invader Heimerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_Tile_1.jpg") },
                    { name: "Blast Zone Heimerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_Tile_2.jpg") },
                    { name: "Piltover Customs Heimerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_Tile_3.jpg") },
                    { name: "Snowmerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_Tile_4.jpg") },
                    { name: "Hazmat Heimerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 39, name: "Irelia", portraitIconURL: CDNService.getPath("assets/images/champions/Irelia_Square_0.png"), skins: [
                    { name: "Classic Irelia", splashCutoutURL: CDNService.getPath("assets/images/champions/Irelia_Splash_Tile_0.jpg") },
                    { name: "Nightblade Irelia", splashCutoutURL: CDNService.getPath("assets/images/champions/Irelia_Splash_Tile_1.jpg") },
                    { name: "Aviator Irelia", splashCutoutURL: CDNService.getPath("assets/images/champions/Irelia_Splash_Tile_2.jpg") },
                    { name: "Infiltrator Irelia", splashCutoutURL: CDNService.getPath("assets/images/champions/Irelia_Splash_Tile_3.jpg") },
                    { name: "Frostblade Irelia", splashCutoutURL: CDNService.getPath("assets/images/champions/Irelia_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 40, name: "Janna", portraitIconURL: CDNService.getPath("assets/images/champions/Janna_Square_0.png"), skins: [
                    { name: "Classic Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_Tile_0.jpg") },
                    { name: "Tempest Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_Tile_1.jpg") },
                    { name: "Hextech Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_Tile_2.jpg") },
                    { name: "Frost Queen Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_Tile_3.jpg") },
                    { name: "Victorious Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_Tile_4.jpg") },
                    { name: "Forecast Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_Tile_5.jpg") },
                    { name: "Fnatic Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 59, name: "Jarvan IV", portraitIconURL: CDNService.getPath("assets/images/champions/JarvanIV_Square_0.png"), skins: [
                    { name: "Classic Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_Tile_0.jpg") },
                    { name: "Commando Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_Tile_1.jpg") },
                    { name: "Dragonslayer Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_Tile_2.jpg") },
                    { name: "Darkforge Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_Tile_3.jpg") },
                    { name: "Victorious Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_Tile_4.jpg") },
                    { name: "Warring Kingdoms Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_Tile_5.jpg") },
                    { name: "Fnatic Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 24, name: "Jax", portraitIconURL: CDNService.getPath("assets/images/champions/Jax_Square_0.png"), skins: [
                    { name: "Classic Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_Tile_0.jpg") },
                    { name: "The Mighty Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_Tile_1.jpg") },
                    { name: "Vandal Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_Tile_2.jpg") },
                    { name: "Angler Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_Tile_3.jpg") },
                    { name: "PAX Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_Tile_4.jpg") },
                    { name: "Jaximus", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_Tile_5.jpg") },
                    { name: "Temple Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_Tile_6.jpg") },
                    { name: "Nemesis Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_Tile_7.jpg") },
                    { name: "SKT T1 Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_Tile_8.jpg") }
                ]
            },
            {
                id: 126, name: "Jayce", portraitIconURL: CDNService.getPath("assets/images/champions/Jayce_Square_0.png"), skins: [
                    { name: "Classic Jayce", splashCutoutURL: CDNService.getPath("assets/images/champions/Jayce_Splash_Tile_0.jpg") },
                    { name: "Full Metal Jayce", splashCutoutURL: CDNService.getPath("assets/images/champions/Jayce_Splash_Tile_1.jpg") },
                    { name: "Debonair Jayce", splashCutoutURL: CDNService.getPath("assets/images/champions/Jayce_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 222, name: "Jinx", portraitIconURL: CDNService.getPath("assets/images/champions/Jinx_Square_0.png"), skins: [
                    { name: "Classic Jinx", splashCutoutURL: CDNService.getPath("assets/images/champions/Jinx_Splash_Tile_0.jpg") },
                    { name: "Mafia Jinx", splashCutoutURL: CDNService.getPath("assets/images/champions/Jinx_Splash_Tile_1.jpg") }
                ]
            },
            {
                id: 429, name: "Kalista", portraitIconURL: CDNService.getPath("assets/images/champions/Kalista_Square_0.png"), skins: [
                    { name: "Classic Kalista", splashCutoutURL: CDNService.getPath("assets/images/champions/Kalista_Splash_Tile_0.jpg") },
                    { name: "Blood Moon Kalista", splashCutoutURL: CDNService.getPath("assets/images/champions/Kalista_Splash_Tile_1.jpg") }
                ]
            },
            {
                id: 43, name: "Karma", portraitIconURL: CDNService.getPath("assets/images/champions/Karma_Square_0.png"), skins: [
                    { name: "Classic Karma", splashCutoutURL: CDNService.getPath("assets/images/champions/Karma_Splash_Tile_0.jpg") },
                    { name: "Sun Goddess Karma", splashCutoutURL: CDNService.getPath("assets/images/champions/Karma_Splash_Tile_1.jpg") },
                    { name: "Sakura Karma", splashCutoutURL: CDNService.getPath("assets/images/champions/Karma_Splash_Tile_2.jpg") },
                    { name: "Traditional Karma", splashCutoutURL: CDNService.getPath("assets/images/champions/Karma_Splash_Tile_3.jpg") },
                    { name: "Order of the Lotus Karma", splashCutoutURL: CDNService.getPath("assets/images/champions/Karma_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 30, name: "Karthus", portraitIconURL: CDNService.getPath("assets/images/champions/Karthus_Square_0.png"), skins: [
                    { name: "Classic Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_Tile_0.jpg") },
                    { name: "Phantom Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_Tile_1.jpg") },
                    { name: "Statue of Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_Tile_2.jpg") },
                    { name: "Grim Reaper Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_Tile_3.jpg") },
                    { name: "Pentakill Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_Tile_4.jpg") },
                    { name: "Fnatic Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 38, name: "Kassadin", portraitIconURL: CDNService.getPath("assets/images/champions/Kassadin_Square_0.png"), skins: [
                    { name: "Classic Kassadin", splashCutoutURL: CDNService.getPath("assets/images/champions/Kassadin_Splash_Tile_0.jpg") },
                    { name: "Festival Kassadin", splashCutoutURL: CDNService.getPath("assets/images/champions/Kassadin_Splash_Tile_1.jpg") },
                    { name: "Deep One Kassadin", splashCutoutURL: CDNService.getPath("assets/images/champions/Kassadin_Splash_Tile_2.jpg") },
                    { name: "Pre-Void Kassadin", splashCutoutURL: CDNService.getPath("assets/images/champions/Kassadin_Splash_Tile_3.jpg") },
                    { name: "Harbinger Kassadin", splashCutoutURL: CDNService.getPath("assets/images/champions/Kassadin_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 55, name: "Katarina", portraitIconURL: CDNService.getPath("assets/images/champions/Katarina_Square_0.png"), skins: [
                    { name: "Classic Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_Tile_0.jpg") },
                    { name: "Mercenary Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_Tile_1.jpg") },
                    { name: "Red Card Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_Tile_2.jpg") },
                    { name: "Bilgewater Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_Tile_3.jpg") },
                    { name: "Kitty Cat Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_Tile_4.jpg") },
                    { name: "High Command Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_Tile_5.jpg") },
                    { name: "Sandstorm Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_Tile_6.jpg") },
                    { name: "Slay Belle Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 10, name: "Kayle", portraitIconURL: CDNService.getPath("assets/images/champions/Kayle_Square_0.png"), skins: [
                    { name: "Classic Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_Tile_0.jpg") },
                    { name: "Silver Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_Tile_1.jpg") },
                    { name: "Viridian Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_Tile_2.jpg") },
                    { name: "Unmasked Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_Tile_3.jpg") },
                    { name: "Battleborn Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_Tile_4.jpg") },
                    { name: "Judgment Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_Tile_5.jpg") },
                    { name: "Aether Wing Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_Tile_6.jpg") },
                    { name: "Riot Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 85, name: "Kennen", portraitIconURL: CDNService.getPath("assets/images/champions/Kennen_Square_0.png"), skins: [
                    { name: "Classic Kennen", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_Tile_0.jpg") },
                    { name: "Deadly Kennen", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_Tile_1.jpg") },
                    { name: "Swamp Master Kennen", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_Tile_2.jpg") },
                    { name: "Karate Kennen", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_Tile_3.jpg") },
                    { name: "Kennen M.D.", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_Tile_4.jpg") },
                    { name: "Arctic Ops Kennen", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 121, name: "Kha'Zix", portraitIconURL: CDNService.getPath("assets/images/champions/Khazix_Square_0.png"), skins: [
                    { name: "Classic Kha'Zix", splashCutoutURL: CDNService.getPath("assets/images/champions/Khazix_Splash_Tile_0.jpg") },
                    { name: "Mecha Kha'Zix", splashCutoutURL: CDNService.getPath("assets/images/champions/Khazix_Splash_Tile_1.jpg") },
                    { name: "Guardian of the Sands Kha'Zix", splashCutoutURL: CDNService.getPath("assets/images/champions/Khazix_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 96, name: "Kog'Maw", portraitIconURL: CDNService.getPath("assets/images/champions/KogMaw_Square_0.png"), skins: [
                    { name: "Classic Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_Tile_0.jpg") },
                    { name: "Caterpillar Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_Tile_1.jpg") },
                    { name: "Sonoran Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_Tile_2.jpg") },
                    { name: "Monarch Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_Tile_3.jpg") },
                    { name: "Reindeer Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_Tile_4.jpg") },
                    { name: "Lion Dance Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_Tile_5.jpg") },
                    { name: "Deep Sea Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_Tile_6.jpg") },
                    { name: "Jurassic Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_Tile_7.jpg") },
                    { name: "Battlecast Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_Tile_8.jpg") }
                ]
            },
            {
                id: 7, name: "LeBlanc", portraitIconURL: CDNService.getPath("assets/images/champions/Leblanc_Square_0.png"), skins: [
                    { name: "Classic LeBlanc", splashCutoutURL: CDNService.getPath("assets/images/champions/Leblanc_Splash_Tile_0.jpg") },
                    { name: "Wicked LeBlanc", splashCutoutURL: CDNService.getPath("assets/images/champions/Leblanc_Splash_Tile_1.jpg") },
                    { name: "Prestigious LeBlanc", splashCutoutURL: CDNService.getPath("assets/images/champions/Leblanc_Splash_Tile_2.jpg") },
                    { name: "Mistletoe LeBlanc", splashCutoutURL: CDNService.getPath("assets/images/champions/Leblanc_Splash_Tile_3.jpg") },
                    { name: "Ravenborn LeBlanc", splashCutoutURL: CDNService.getPath("assets/images/champions/Leblanc_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 64, name: "Lee Sin", portraitIconURL: CDNService.getPath("assets/images/champions/LeeSin_Square_0.png"), skins: [
                    { name: "Classic Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_Tile_0.jpg") },
                    { name: "Traditional Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_Tile_1.jpg") },
                    { name: "Acolyte Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_Tile_2.jpg") },
                    { name: "Dragon Fist Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_Tile_3.jpg") },
                    { name: "Muay Thai Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_Tile_4.jpg") },
                    { name: "Pool Party Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_Tile_5.jpg") },
                    { name: "SKT T1 Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 89, name: "Leona", portraitIconURL: CDNService.getPath("assets/images/champions/Leona_Square_0.png"), skins: [
                    { name: "Classic Leona", splashCutoutURL: CDNService.getPath("assets/images/champions/Leona_Splash_Tile_0.jpg") },
                    { name: "Valkyrie Leona", splashCutoutURL: CDNService.getPath("assets/images/champions/Leona_Splash_Tile_1.jpg") },
                    { name: "Defender Leona", splashCutoutURL: CDNService.getPath("assets/images/champions/Leona_Splash_Tile_2.jpg") },
                    { name: "Iron Solari Leona", splashCutoutURL: CDNService.getPath("assets/images/champions/Leona_Splash_Tile_3.jpg") },
                    { name: "Pool Party Leona", splashCutoutURL: CDNService.getPath("assets/images/champions/Leona_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 127, name: "Lissandra", portraitIconURL: CDNService.getPath("assets/images/champions/Lissandra_Square_0.png"), skins: [
                    { name: "Classic Lissandra", splashCutoutURL: CDNService.getPath("assets/images/champions/Lissandra_Splash_Tile_0.jpg") },
                    { name: "Bloodstone Lissandra", splashCutoutURL: CDNService.getPath("assets/images/champions/Lissandra_Splash_Tile_1.jpg") },
                    { name: "Blade Queen Lissandra", splashCutoutURL: CDNService.getPath("assets/images/champions/Lissandra_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 236, name: "Lucian", portraitIconURL: CDNService.getPath("assets/images/champions/Lucian_Square_0.png"), skins: [
                    { name: "Classic Lucian", splashCutoutURL: CDNService.getPath("assets/images/champions/Lucian_Splash_Tile_0.jpg") },
                    { name: "Hired Gun Lucian", splashCutoutURL: CDNService.getPath("assets/images/champions/Lucian_Splash_Tile_1.jpg") },
                    { name: "Striker Lucian", splashCutoutURL: CDNService.getPath("assets/images/champions/Lucian_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 117, name: "Lulu", portraitIconURL: CDNService.getPath("assets/images/champions/Lulu_Square_0.png"), skins: [
                    { name: "Classic Lulu", splashCutoutURL: CDNService.getPath("assets/images/champions/Lulu_Splash_Tile_0.jpg") },
                    { name: "Bittersweet Lulu", splashCutoutURL: CDNService.getPath("assets/images/champions/Lulu_Splash_Tile_1.jpg") },
                    { name: "Wicked Lulu", splashCutoutURL: CDNService.getPath("assets/images/champions/Lulu_Splash_Tile_2.jpg") },
                    { name: "Dragon Trainer Lulu", splashCutoutURL: CDNService.getPath("assets/images/champions/Lulu_Splash_Tile_3.jpg") },
                    { name: "Winter Wonder Lulu", splashCutoutURL: CDNService.getPath("assets/images/champions/Lulu_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 99, name: "Lux", portraitIconURL: CDNService.getPath("assets/images/champions/Lux_Square_0.png"), skins: [
                    { name: "Classic Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_Tile_0.jpg") },
                    { name: "Sorceress Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_Tile_1.jpg") },
                    { name: "Spellthief Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_Tile_2.jpg") },
                    { name: "Commando Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_Tile_3.jpg") },
                    { name: "Imperial Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_Tile_4.jpg") },
                    { name: "Steel Legion Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 54, name: "Malphite", portraitIconURL: CDNService.getPath("assets/images/champions/Malphite_Square_0.png"), skins: [
                    { name: "Classic Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_Tile_0.jpg") },
                    { name: "Shamrock Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_Tile_1.jpg") },
                    { name: "Coral Reef Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_Tile_2.jpg") },
                    { name: "Marble Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_Tile_3.jpg") },
                    { name: "Obsidian Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_Tile_4.jpg") },
                    { name: "Glacial Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_Tile_5.jpg") },
                    { name: "Mecha Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 90, name: "Malzahar", portraitIconURL: CDNService.getPath("assets/images/champions/Malzahar_Square_0.png"), skins: [
                    { name: "Classic Malzahar", splashCutoutURL: CDNService.getPath("assets/images/champions/Malzahar_Splash_Tile_0.jpg") },
                    { name: "Vizier Malzahar", splashCutoutURL: CDNService.getPath("assets/images/champions/Malzahar_Splash_Tile_1.jpg") },
                    { name: "Shadow Prince Malzahar", splashCutoutURL: CDNService.getPath("assets/images/champions/Malzahar_Splash_Tile_2.jpg") },
                    { name: "Djinn Malzahar", splashCutoutURL: CDNService.getPath("assets/images/champions/Malzahar_Splash_Tile_3.jpg") },
                    { name: "Overlord Malzahar", splashCutoutURL: CDNService.getPath("assets/images/champions/Malzahar_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 57, name: "Maokai", portraitIconURL: CDNService.getPath("assets/images/champions/Maokai_Square_0.png"), skins: [
                    { name: "Classic Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_Tile_0.jpg") },
                    { name: "Charred Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_Tile_1.jpg") },
                    { name: "Totemic Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_Tile_2.jpg") },
                    { name: "Festive Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_Tile_3.jpg") },
                    { name: "Haunted Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_Tile_4.jpg") },
                    { name: "Goalkeeper Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 11, name: "Master Yi", portraitIconURL: CDNService.getPath("assets/images/champions/MasterYi_Square_0.png"), skins: [
                    { name: "Classic Master Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_Tile_0.jpg") },
                    { name: "Assassin Master Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_Tile_1.jpg") },
                    { name: "Chosen Master Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_Tile_2.jpg") },
                    { name: "Ionia Master Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_Tile_3.jpg") },
                    { name: "Samurai Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_Tile_4.jpg") },
                    { name: "Headhunter Master Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 21, name: "Miss Fortune", portraitIconURL: CDNService.getPath("assets/images/champions/MissFortune_Square_0.png"), skins: [
                    { name: "Classic Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_Tile_0.jpg") },
                    { name: "Cowgirl Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_Tile_1.jpg") },
                    { name: "Waterloo Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_Tile_2.jpg") },
                    { name: "Secret Agent Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_Tile_3.jpg") },
                    { name: "Candy Cane Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_Tile_4.jpg") },
                    { name: "Road Warrior Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_Tile_5.jpg") },
                    { name: "Mafia Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_Tile_6.jpg") },
                    { name: "Arcade Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 62, name: "Wukong", portraitIconURL: CDNService.getPath("assets/images/champions/MonkeyKing_Square_0.png"), skins: [
                    { name: "Classic Wukong", splashCutoutURL: CDNService.getPath("assets/images/champions/MonkeyKing_Splash_Tile_0.jpg") },
                    { name: "Volcanic Wukong", splashCutoutURL: CDNService.getPath("assets/images/champions/MonkeyKing_Splash_Tile_1.jpg") },
                    { name: "General Wukong", splashCutoutURL: CDNService.getPath("assets/images/champions/MonkeyKing_Splash_Tile_2.jpg") },
                    { name: "Jade Dragon Wukong", splashCutoutURL: CDNService.getPath("assets/images/champions/MonkeyKing_Splash_Tile_3.jpg") },
                    { name: "Underworld Wukong", splashCutoutURL: CDNService.getPath("assets/images/champions/MonkeyKing_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 82, name: "Mordekaiser", portraitIconURL: CDNService.getPath("assets/images/champions/Mordekaiser_Square_0.png"), skins: [
                    { name: "Classic Mordekaiser", splashCutoutURL: CDNService.getPath("assets/images/champions/Mordekaiser_Splash_Tile_0.jpg") },
                    { name: "Dragon Knight Mordekaiser", splashCutoutURL: CDNService.getPath("assets/images/champions/Mordekaiser_Splash_Tile_1.jpg") },
                    { name: "Infernal Mordekaiser", splashCutoutURL: CDNService.getPath("assets/images/champions/Mordekaiser_Splash_Tile_2.jpg") },
                    { name: "Pentakill Mordekaiser", splashCutoutURL: CDNService.getPath("assets/images/champions/Mordekaiser_Splash_Tile_3.jpg") },
                    { name: "Lord Mordekaiser", splashCutoutURL: CDNService.getPath("assets/images/champions/Mordekaiser_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 25, name: "Morgana", portraitIconURL: CDNService.getPath("assets/images/champions/Morgana_Square_0.png"), skins: [
                    { name: "Classic Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_Tile_0.jpg") },
                    { name: "Exiled Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_Tile_1.jpg") },
                    { name: "Sinful Succulence Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_Tile_2.jpg") },
                    { name: "Blade Mistress Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_Tile_3.jpg") },
                    { name: "Blackthorn Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_Tile_4.jpg") },
                    { name: "Ghost Bride Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_Tile_5.jpg") },
                    { name: "Victorious Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 267, name: "Nami", portraitIconURL: CDNService.getPath("assets/images/champions/Nami_Square_0.png"), skins: [
                    { name: "Classic Nami", splashCutoutURL: CDNService.getPath("assets/images/champions/Nami_Splash_Tile_0.jpg") },
                    { name: "Koi Nami", splashCutoutURL: CDNService.getPath("assets/images/champions/Nami_Splash_Tile_1.jpg") },
                    { name: "River Spirit Nami", splashCutoutURL: CDNService.getPath("assets/images/champions/Nami_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 75, name: "Nasus", portraitIconURL: CDNService.getPath("assets/images/champions/Nasus_Square_0.png"), skins: [
                    { name: "Classic Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_Tile_0.jpg") },
                    { name: "Galactic Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_Tile_1.jpg") },
                    { name: "Pharaoh Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_Tile_2.jpg") },
                    { name: "Dreadknight Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_Tile_3.jpg") },
                    { name: "Riot K-9 Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_Tile_4.jpg") },
                    { name: "Infernal Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 111, name: "Nautilus", portraitIconURL: CDNService.getPath("assets/images/champions/Nautilus_Square_0.png"), skins: [
                    { name: "Classic Nautilus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nautilus_Splash_Tile_0.jpg") },
                    { name: "Abyssal Nautilus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nautilus_Splash_Tile_1.jpg") },
                    { name: "Subterranean Nautilus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nautilus_Splash_Tile_2.jpg") },
                    { name: "AstroNautilus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nautilus_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 76, name: "Nidalee", portraitIconURL: CDNService.getPath("assets/images/champions/Nidalee_Square_0.png"), skins: [
                    { name: "Classic Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_Tile_0.jpg") },
                    { name: "Snow Bunny Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_Tile_1.jpg") },
                    { name: "Leopard Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_Tile_2.jpg") },
                    { name: "French Maid Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_Tile_3.jpg") },
                    { name: "Pharaoh Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_Tile_4.jpg") },
                    { name: "Bewitching Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_Tile_5.jpg") },
                    { name: "Headhunter Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 56, name: "Nocturne", portraitIconURL: CDNService.getPath("assets/images/champions/Nocturne_Square_0.png"), skins: [
                    { name: "Classic Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_Tile_0.jpg") },
                    { name: "Frozen Terror Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_Tile_1.jpg") },
                    { name: "Void Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_Tile_2.jpg") },
                    { name: "Ravager Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_Tile_3.jpg") },
                    { name: "Haunting Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_Tile_4.jpg") },
                    { name: "Eternum Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 20, name: "Nunu", portraitIconURL: CDNService.getPath("assets/images/champions/Nunu_Square_0.png"), skins: [
                    { name: "Classic Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_Tile_0.jpg") },
                    { name: "Sasquatch Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_Tile_1.jpg") },
                    { name: "Workshop Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_Tile_2.jpg") },
                    { name: "Grungy Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_Tile_3.jpg") },
                    { name: "Nunu Bot", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_Tile_4.jpg") },
                    { name: "Demolisher Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_Tile_5.jpg") },
                    { name: "TPA Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 2, name: "Olaf", portraitIconURL: CDNService.getPath("assets/images/champions/Olaf_Square_0.png"), skins: [
                    { name: "Classic Olaf", splashCutoutURL: CDNService.getPath("assets/images/champions/Olaf_Splash_Tile_0.jpg") },
                    { name: "Forsaken Olaf", splashCutoutURL: CDNService.getPath("assets/images/champions/Olaf_Splash_Tile_1.jpg") },
                    { name: "Glacial Olaf", splashCutoutURL: CDNService.getPath("assets/images/champions/Olaf_Splash_Tile_2.jpg") },
                    { name: "Brolaf", splashCutoutURL: CDNService.getPath("assets/images/champions/Olaf_Splash_Tile_3.jpg") },
                    { name: "Pentakill Olaf", splashCutoutURL: CDNService.getPath("assets/images/champions/Olaf_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 61, name: "Orianna", portraitIconURL: CDNService.getPath("assets/images/champions/Orianna_Square_0.png"), skins: [
                    { name: "Classic Orianna", splashCutoutURL: CDNService.getPath("assets/images/champions/Orianna_Splash_Tile_0.jpg") },
                    { name: "Gothic Orianna", splashCutoutURL: CDNService.getPath("assets/images/champions/Orianna_Splash_Tile_1.jpg") },
                    { name: "Sewn Chaos Orianna", splashCutoutURL: CDNService.getPath("assets/images/champions/Orianna_Splash_Tile_2.jpg") },
                    { name: "Bladecraft Orianna", splashCutoutURL: CDNService.getPath("assets/images/champions/Orianna_Splash_Tile_3.jpg") },
                    { name: "TPA Orianna", splashCutoutURL: CDNService.getPath("assets/images/champions/Orianna_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 80, name: "Pantheon", portraitIconURL: CDNService.getPath("assets/images/champions/Pantheon_Square_0.png"), skins: [
                    { name: "Classic Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_Tile_0.jpg") },
                    { name: "Myrmidon Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_Tile_1.jpg") },
                    { name: "Ruthless Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_Tile_2.jpg") },
                    { name: "Perseus Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_Tile_3.jpg") },
                    { name: "Full Metal Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_Tile_4.jpg") },
                    { name: "Glaive Warrior Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_Tile_5.jpg") },
                    { name: "Dragonslayer Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 78, name: "Poppy", portraitIconURL: CDNService.getPath("assets/images/champions/Poppy_Square_0.png"), skins: [
                    { name: "Classic Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_Tile_0.jpg") },
                    { name: "Noxus Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_Tile_1.jpg") },
                    { name: "Lollipoppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_Tile_2.jpg") },
                    { name: "Blacksmith Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_Tile_3.jpg") },
                    { name: "Ragdoll Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_Tile_4.jpg") },
                    { name: "Battle Regalia Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_Tile_5.jpg") },
                    { name: "Scarlet Hammer Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 133, name: "Quinn", portraitIconURL: CDNService.getPath("assets/images/champions/Quinn_Square_0.png"), skins: [
                    { name: "Classic Quinn", splashCutoutURL: CDNService.getPath("assets/images/champions/Quinn_Splash_Tile_0.jpg") },
                    { name: "Phoenix Quinn", splashCutoutURL: CDNService.getPath("assets/images/champions/Quinn_Splash_Tile_1.jpg") },
                    { name: "Woad Scout Quinn", splashCutoutURL: CDNService.getPath("assets/images/champions/Quinn_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 33, name: "Rammus", portraitIconURL: CDNService.getPath("assets/images/champions/Rammus_Square_0.png"), skins: [
                    { name: "Classic Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_Tile_0.jpg") },
                    { name: "King Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_Tile_1.jpg") },
                    { name: "Chrome Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_Tile_2.jpg") },
                    { name: "Molten Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_Tile_3.jpg") },
                    { name: "Freljord Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_Tile_4.jpg") },
                    { name: "Ninja Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_Tile_5.jpg") },
                    { name: "Full Metal Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 58, name: "Renekton", portraitIconURL: CDNService.getPath("assets/images/champions/Renekton_Square_0.png"), skins: [
                    { name: "Classic Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_Tile_0.jpg") },
                    { name: "Galactic Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_Tile_1.jpg") },
                    { name: "Outback Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_Tile_2.jpg") },
                    { name: "Bloodfury Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_Tile_3.jpg") },
                    { name: "Rune Wars Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_Tile_4.jpg") },
                    { name: "Scorched Earth Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_Tile_5.jpg") },
                    { name: "Pool Party Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 107, name: "Rengar", portraitIconURL: CDNService.getPath("assets/images/champions/Rengar_Square_0.png"), skins: [
                    { name: "Classic Rengar", splashCutoutURL: CDNService.getPath("assets/images/champions/Rengar_Splash_Tile_0.jpg") },
                    { name: "Headhunter Rengar", splashCutoutURL: CDNService.getPath("assets/images/champions/Rengar_Splash_Tile_1.jpg") },
                    { name: "Night Hunter Rengar", splashCutoutURL: CDNService.getPath("assets/images/champions/Rengar_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 92, name: "Riven", portraitIconURL: CDNService.getPath("assets/images/champions/Riven_Square_0.png"), skins: [
                    { name: "Classic Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_Tile_0.jpg") },
                    { name: "Redeemed Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_Tile_1.jpg") },
                    { name: "Crimson Elite Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_Tile_2.jpg") },
                    { name: "Battle Bunny Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_Tile_3.jpg") },
                    { name: "Championship Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_Tile_4.jpg") },
                    { name: "Dragonblade Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 68, name: "Rumble", portraitIconURL: CDNService.getPath("assets/images/champions/Rumble_Square_0.png"), skins: [
                    { name: "Classic Rumble", splashCutoutURL: CDNService.getPath("assets/images/champions/Rumble_Splash_Tile_0.jpg") },
                    { name: "Rumble in the Jungle", splashCutoutURL: CDNService.getPath("assets/images/champions/Rumble_Splash_Tile_1.jpg") },
                    { name: "Bilgerat Rumble", splashCutoutURL: CDNService.getPath("assets/images/champions/Rumble_Splash_Tile_2.jpg") },
                    { name: "Super Galaxy Rumble", splashCutoutURL: CDNService.getPath("assets/images/champions/Rumble_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 13, name: "Ryze", portraitIconURL: CDNService.getPath("assets/images/champions/Ryze_Square_0.png"), skins: [
                    { name: "Classic Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_Tile_0.jpg") },
                    { name: "Human Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_Tile_1.jpg") },
                    { name: "Tribal Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_Tile_2.jpg") },
                    { name: "Uncle Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_Tile_3.jpg") },
                    { name: "Triumphant Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_Tile_4.jpg") },
                    { name: "Professor Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_Tile_5.jpg") },
                    { name: "Zombie Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_Tile_6.jpg") },
                    { name: "Dark Crystal Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_Tile_7.jpg") },
                    { name: "Pirate Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_Tile_8.jpg") }
                ]
            },
            {
                id: 113, name: "Sejuani", portraitIconURL: CDNService.getPath("assets/images/champions/Sejuani_Square_0.png"), skins: [
                    { name: "Classic Sejuani", splashCutoutURL: CDNService.getPath("assets/images/champions/Sejuani_Splash_Tile_0.jpg") },
                    { name: "Sabretusk Sejuani", splashCutoutURL: CDNService.getPath("assets/images/champions/Sejuani_Splash_Tile_1.jpg") },
                    { name: "Darkrider Sejuani", splashCutoutURL: CDNService.getPath("assets/images/champions/Sejuani_Splash_Tile_2.jpg") },
                    { name: "Traditional Sejuani", splashCutoutURL: CDNService.getPath("assets/images/champions/Sejuani_Splash_Tile_3.jpg") },
                    { name: "Bear Cavalry Sejuani", splashCutoutURL: CDNService.getPath("assets/images/champions/Sejuani_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 35, name: "Shaco", portraitIconURL: CDNService.getPath("assets/images/champions/Shaco_Square_0.png"), skins: [
                    { name: "Classic Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_Tile_0.jpg") },
                    { name: "Mad Hatter Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_Tile_1.jpg") },
                    { name: "Royal Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_Tile_2.jpg") },
                    { name: "Nutcracko", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_Tile_3.jpg") },
                    { name: "Workshop Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_Tile_4.jpg") },
                    { name: "Asylum Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_Tile_5.jpg") },
                    { name: "Masked Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 98, name: "Shen", portraitIconURL: CDNService.getPath("assets/images/champions/Shen_Square_0.png"), skins: [
                    { name: "Classic Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_Tile_0.jpg") },
                    { name: "Frozen Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_Tile_1.jpg") },
                    { name: "Yellow Jacket Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_Tile_2.jpg") },
                    { name: "Surgeon Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_Tile_3.jpg") },
                    { name: "Blood Moon Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_Tile_4.jpg") },
                    { name: "Warlord Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_Tile_5.jpg") },
                    { name: "TPA Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 102, name: "Shyvana", portraitIconURL: CDNService.getPath("assets/images/champions/Shyvana_Square_0.png"), skins: [
                    { name: "Classic Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_Tile_0.jpg") },
                    { name: "Ironscale Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_Tile_1.jpg") },
                    { name: "Boneclaw Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_Tile_2.jpg") },
                    { name: "Darkflame Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_Tile_3.jpg") },
                    { name: "Ice Drake Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_Tile_4.jpg") },
                    { name: "Championship Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 27, name: "Singed", portraitIconURL: CDNService.getPath("assets/images/champions/Singed_Square_0.png"), skins: [
                    { name: "Classic Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_Tile_0.jpg") },
                    { name: "Riot Squad Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_Tile_1.jpg") },
                    { name: "Hextech Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_Tile_2.jpg") },
                    { name: "Surfer Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_Tile_3.jpg") },
                    { name: "Mad Scientist Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_Tile_4.jpg") },
                    { name: "Augmented Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_Tile_5.jpg") },
                    { name: "Snow Day Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 14, name: "Sion", portraitIconURL: CDNService.getPath("assets/images/champions/Sion_Square_0.png"), skins: [
                    { name: "Classic Sion", splashCutoutURL: CDNService.getPath("assets/images/champions/Sion_Splash_Tile_0.jpg") },
                    { name: "Hextech Sion", splashCutoutURL: CDNService.getPath("assets/images/champions/Sion_Splash_Tile_1.jpg") },
                    { name: "Barbarian Sion", splashCutoutURL: CDNService.getPath("assets/images/champions/Sion_Splash_Tile_2.jpg") },
                    { name: "Lumberjack Sion", splashCutoutURL: CDNService.getPath("assets/images/champions/Sion_Splash_Tile_3.jpg") },
                    { name: "Warmonger Sion", splashCutoutURL: CDNService.getPath("assets/images/champions/Sion_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 15, name: "Sivir", portraitIconURL: CDNService.getPath("assets/images/champions/Sivir_Square_0.png"), skins: [
                    { name: "Classic Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_Tile_0.jpg") },
                    { name: "Warrior Princess Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_Tile_1.jpg") },
                    { name: "Spectacular Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_Tile_2.jpg") },
                    { name: "Huntress Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_Tile_3.jpg") },
                    { name: "Bandit Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_Tile_4.jpg") },
                    { name: "PAX Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_Tile_5.jpg") },
                    { name: "Snowstorm Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 72, name: "Skarner", portraitIconURL: CDNService.getPath("assets/images/champions/Skarner_Square_0.png"), skins: [
                    { name: "Classic Skarner", splashCutoutURL: CDNService.getPath("assets/images/champions/Skarner_Splash_Tile_0.jpg") },
                    { name: "Sandscourge Skarner", splashCutoutURL: CDNService.getPath("assets/images/champions/Skarner_Splash_Tile_1.jpg") },
                    { name: "Earthrune Skarner", splashCutoutURL: CDNService.getPath("assets/images/champions/Skarner_Splash_Tile_2.jpg") },
                    { name: "Battlecast Alpha Skarner", splashCutoutURL: CDNService.getPath("assets/images/champions/Skarner_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 37, name: "Sona", portraitIconURL: CDNService.getPath("assets/images/champions/Sona_Square_0.png"), skins: [
                    { name: "Classic Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_Tile_0.jpg") },
                    { name: "Muse Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_Tile_1.jpg") },
                    { name: "Pentakill Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_Tile_2.jpg") },
                    { name: "Silent Night Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_Tile_3.jpg") },
                    { name: "Guqin Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_Tile_4.jpg") },
                    { name: "Arcade Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 16, name: "Soraka", portraitIconURL: CDNService.getPath("assets/images/champions/Soraka_Square_0.png"), skins: [
                    { name: "Classic Soraka", splashCutoutURL: CDNService.getPath("assets/images/champions/Soraka_Splash_Tile_0.jpg") },
                    { name: "Dryad Soraka", splashCutoutURL: CDNService.getPath("assets/images/champions/Soraka_Splash_Tile_1.jpg") },
                    { name: "Divine Soraka", splashCutoutURL: CDNService.getPath("assets/images/champions/Soraka_Splash_Tile_2.jpg") },
                    { name: "Celestine Soraka", splashCutoutURL: CDNService.getPath("assets/images/champions/Soraka_Splash_Tile_3.jpg") },
                    { name: "Reaper Soraka", splashCutoutURL: CDNService.getPath("assets/images/champions/Soraka_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 50, name: "Swain", portraitIconURL: CDNService.getPath("assets/images/champions/Swain_Square_0.png"), skins: [
                    { name: "Classic Swain", splashCutoutURL: CDNService.getPath("assets/images/champions/Swain_Splash_Tile_0.jpg") },
                    { name: "Northern Front Swain", splashCutoutURL: CDNService.getPath("assets/images/champions/Swain_Splash_Tile_1.jpg") },
                    { name: "Bilgewater Swain", splashCutoutURL: CDNService.getPath("assets/images/champions/Swain_Splash_Tile_2.jpg") },
                    { name: "Tyrant Swain", splashCutoutURL: CDNService.getPath("assets/images/champions/Swain_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 134, name: "Syndra", portraitIconURL: CDNService.getPath("assets/images/champions/Syndra_Square_0.png"), skins: [
                    { name: "Classic Syndra", splashCutoutURL: CDNService.getPath("assets/images/champions/Syndra_Splash_Tile_0.jpg") },
                    { name: "Justicar Syndra", splashCutoutURL: CDNService.getPath("assets/images/champions/Syndra_Splash_Tile_1.jpg") },
                    { name: "Atlantean Syndra", splashCutoutURL: CDNService.getPath("assets/images/champions/Syndra_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 91, name: "Talon", portraitIconURL: CDNService.getPath("assets/images/champions/Talon_Square_0.png"), skins: [
                    { name: "Classic Talon", splashCutoutURL: CDNService.getPath("assets/images/champions/Talon_Splash_Tile_0.jpg") },
                    { name: "Renegade Talon", splashCutoutURL: CDNService.getPath("assets/images/champions/Talon_Splash_Tile_1.jpg") },
                    { name: "Crimson Elite Talon", splashCutoutURL: CDNService.getPath("assets/images/champions/Talon_Splash_Tile_2.jpg") },
                    { name: "Dragonblade Talon", splashCutoutURL: CDNService.getPath("assets/images/champions/Talon_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 44, name: "Taric", portraitIconURL: CDNService.getPath("assets/images/champions/Taric_Square_0.png"), skins: [
                    { name: "Classic Taric", splashCutoutURL: CDNService.getPath("assets/images/champions/Taric_Splash_Tile_0.jpg") },
                    { name: "Emerald Taric", splashCutoutURL: CDNService.getPath("assets/images/champions/Taric_Splash_Tile_1.jpg") },
                    { name: "Armor of the Fifth Age Taric", splashCutoutURL: CDNService.getPath("assets/images/champions/Taric_Splash_Tile_2.jpg") },
                    { name: "Bloodstone Taric", splashCutoutURL: CDNService.getPath("assets/images/champions/Taric_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 17, name: "Teemo", portraitIconURL: CDNService.getPath("assets/images/champions/Teemo_Square_0.png"), skins: [
                    { name: "Classic Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_Tile_0.jpg") },
                    { name: "Happy Elf Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_Tile_1.jpg") },
                    { name: "Recon Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_Tile_2.jpg") },
                    { name: "Badger Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_Tile_3.jpg") },
                    { name: "Astronaut Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_Tile_4.jpg") },
                    { name: "Cottontail Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_Tile_5.jpg") },
                    { name: "Super Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_Tile_6.jpg") },
                    { name: "Panda Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 412, name: "Thresh", portraitIconURL: CDNService.getPath("assets/images/champions/Thresh_Square_0.png"), skins: [
                    { name: "Classic Thresh", splashCutoutURL: CDNService.getPath("assets/images/champions/Thresh_Splash_Tile_0.jpg") },
                    { name: "Deep Terror Thresh", splashCutoutURL: CDNService.getPath("assets/images/champions/Thresh_Splash_Tile_1.jpg") },
                    { name: "Championship Thresh", splashCutoutURL: CDNService.getPath("assets/images/champions/Thresh_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 18, name: "Tristana", portraitIconURL: CDNService.getPath("assets/images/champions/Tristana_Square_0.png"), skins: [
                    { name: "Classic Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_Tile_0.jpg") },
                    { name: "Riot Girl Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_Tile_1.jpg") },
                    { name: "Earnest Elf Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_Tile_2.jpg") },
                    { name: "Firefighter Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_Tile_3.jpg") },
                    { name: "Guerilla Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_Tile_4.jpg") },
                    { name: "Buccaneer Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_Tile_5.jpg") },
                    { name: "Rocket Girl Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 48, name: "Trundle", portraitIconURL: CDNService.getPath("assets/images/champions/Trundle_Square_0.png"), skins: [
                    { name: "Classic Trundle", splashCutoutURL: CDNService.getPath("assets/images/champions/Trundle_Splash_Tile_0.jpg") },
                    { name: "Lil' Slugger Trundle", splashCutoutURL: CDNService.getPath("assets/images/champions/Trundle_Splash_Tile_1.jpg") },
                    { name: "Junkyard Trundle", splashCutoutURL: CDNService.getPath("assets/images/champions/Trundle_Splash_Tile_2.jpg") },
                    { name: "Traditional Trundle", splashCutoutURL: CDNService.getPath("assets/images/champions/Trundle_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 23, name: "Tryndamere", portraitIconURL: CDNService.getPath("assets/images/champions/Tryndamere_Square_0.png"), skins: [
                    { name: "Classic Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_Tile_0.jpg") },
                    { name: "Highland Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_Tile_1.jpg") },
                    { name: "King Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_Tile_2.jpg") },
                    { name: "Viking Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_Tile_3.jpg") },
                    { name: "Demonblade Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_Tile_4.jpg") },
                    { name: "Sultan Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_Tile_5.jpg") },
                    { name: "Warring Kingdoms Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 4, name: "Twisted Fate", portraitIconURL: CDNService.getPath("assets/images/champions/TwistedFate_Square_0.png"), skins: [
                    { name: "Classic Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_Tile_0.jpg") },
                    { name: "PAX Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_Tile_1.jpg") },
                    { name: "Jack of Hearts Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_Tile_2.jpg") },
                    { name: "The Magnificent Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_Tile_3.jpg") },
                    { name: "Tango Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_Tile_4.jpg") },
                    { name: "High Noon Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_Tile_5.jpg") },
                    { name: "Musketeer Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_Tile_6.jpg") },
                    { name: "Underworld Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_Tile_7.jpg") },
                    { name: "Red Card Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_Tile_8.jpg") }
                ]
            },
            {
                id: 29, name: "Twitch", portraitIconURL: CDNService.getPath("assets/images/champions/Twitch_Square_0.png"), skins: [
                    { name: "Classic Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_Tile_0.jpg") },
                    { name: "Kingpin Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_Tile_1.jpg") },
                    { name: "Whistler Village Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_Tile_2.jpg") },
                    { name: "Medieval Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_Tile_3.jpg") },
                    { name: "Gangster Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_Tile_4.jpg") },
                    { name: "Vandal Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 77, name: "Udyr", portraitIconURL: CDNService.getPath("assets/images/champions/Udyr_Square_0.png"), skins: [
                    { name: "Classic Udyr", splashCutoutURL: CDNService.getPath("assets/images/champions/Udyr_Splash_Tile_0.jpg") },
                    { name: "Black Belt Udyr", splashCutoutURL: CDNService.getPath("assets/images/champions/Udyr_Splash_Tile_1.jpg") },
                    { name: "Primal Udyr", splashCutoutURL: CDNService.getPath("assets/images/champions/Udyr_Splash_Tile_2.jpg") },
                    { name: "Spirit Guard Udyr", splashCutoutURL: CDNService.getPath("assets/images/champions/Udyr_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 6, name: "Urgot", portraitIconURL: CDNService.getPath("assets/images/champions/Urgot_Square_0.png"), skins: [
                    { name: "Classic Urgot", splashCutoutURL: CDNService.getPath("assets/images/champions/Urgot_Splash_Tile_0.jpg") },
                    { name: "Giant Enemy Crabgot", splashCutoutURL: CDNService.getPath("assets/images/champions/Urgot_Splash_Tile_1.jpg") },
                    { name: "Butcher Urgot", splashCutoutURL: CDNService.getPath("assets/images/champions/Urgot_Splash_Tile_2.jpg") },
                    { name: "Battlecast Urgot", splashCutoutURL: CDNService.getPath("assets/images/champions/Urgot_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 110, name: "Varus", portraitIconURL: CDNService.getPath("assets/images/champions/Varus_Square_0.png"), skins: [
                    { name: "Classic Varus", splashCutoutURL: CDNService.getPath("assets/images/champions/Varus_Splash_Tile_0.jpg") },
                    { name: "Blight Crystal Varus", splashCutoutURL: CDNService.getPath("assets/images/champions/Varus_Splash_Tile_1.jpg") },
                    { name: "Arclight Varus", splashCutoutURL: CDNService.getPath("assets/images/champions/Varus_Splash_Tile_2.jpg") },
                    { name: "Arctic Ops Varus", splashCutoutURL: CDNService.getPath("assets/images/champions/Varus_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 67, name: "Vayne", portraitIconURL: CDNService.getPath("assets/images/champions/Vayne_Square_0.png"), skins: [
                    { name: "Classic Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_Tile_0.jpg") },
                    { name: "Vindicator Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_Tile_1.jpg") },
                    { name: "Aristocrat Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_Tile_2.jpg") },
                    { name: "Dragonslayer Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_Tile_3.jpg") },
                    { name: "Heartseeker Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_Tile_4.jpg") },
                    { name: "SKT T1 Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 45, name: "Veigar", portraitIconURL: CDNService.getPath("assets/images/champions/Veigar_Square_0.png"), skins: [
                    { name: "Classic Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_Tile_0.jpg") },
                    { name: "White Mage Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_Tile_1.jpg") },
                    { name: "Curling Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_Tile_2.jpg") },
                    { name: "Veigar Greybeard", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_Tile_3.jpg") },
                    { name: "Leprechaun Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_Tile_4.jpg") },
                    { name: "Baron Von Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_Tile_5.jpg") },
                    { name: "Superb Villain Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_Tile_6.jpg") },
                    { name: "Bad Santa Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_Tile_7.jpg") },
                    { name: "Final Boss Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_Tile_8.jpg") }
                ]
            },
            {
                id: 161, name: "Vel'Koz", portraitIconURL: CDNService.getPath("assets/images/champions/Velkoz_Square_0.png"), skins: [
                    { name: "Classic Vel'Koz", splashCutoutURL: CDNService.getPath("assets/images/champions/Velkoz_Splash_Tile_0.jpg") },
                    { name: "Battlecast Vel'Koz", splashCutoutURL: CDNService.getPath("assets/images/champions/Velkoz_Splash_Tile_1.jpg") }
                ]
            },
            {
                id: 254, name: "Vi", portraitIconURL: CDNService.getPath("assets/images/champions/Vi_Square_0.png"), skins: [
                    { name: "Classic Vi", splashCutoutURL: CDNService.getPath("assets/images/champions/Vi_Splash_Tile_0.jpg") },
                    { name: "Neon Strike Vi", splashCutoutURL: CDNService.getPath("assets/images/champions/Vi_Splash_Tile_1.jpg") },
                    { name: "Officer Vi", splashCutoutURL: CDNService.getPath("assets/images/champions/Vi_Splash_Tile_2.jpg") },
                    { name: "Debonair Vi", splashCutoutURL: CDNService.getPath("assets/images/champions/Vi_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 112, name: "Viktor", portraitIconURL: CDNService.getPath("assets/images/champions/Viktor_Square_0.png"), skins: [
                    { name: "Classic Viktor", splashCutoutURL: CDNService.getPath("assets/images/champions/Viktor_Splash_Tile_0.jpg") },
                    { name: "Full Machine Viktor", splashCutoutURL: CDNService.getPath("assets/images/champions/Viktor_Splash_Tile_1.jpg") },
                    { name: "Prototype Viktor", splashCutoutURL: CDNService.getPath("assets/images/champions/Viktor_Splash_Tile_2.jpg") },
                    { name: "Creator Viktor", splashCutoutURL: CDNService.getPath("assets/images/champions/Viktor_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 8, name: "Vladimir", portraitIconURL: CDNService.getPath("assets/images/champions/Vladimir_Square_0.png"), skins: [
                    { name: "Classic Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_Tile_0.jpg") },
                    { name: "Count Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_Tile_1.jpg") },
                    { name: "Marquis Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_Tile_2.jpg") },
                    { name: "Nosferatu Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_Tile_3.jpg") },
                    { name: "Vandal Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_Tile_4.jpg") },
                    { name: "Blood Lord Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_Tile_5.jpg") },
                    { name: "Soulstealer Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_Tile_6.jpg") }
                ]
            },
            {
                id: 106, name: "Volibear", portraitIconURL: CDNService.getPath("assets/images/champions/Volibear_Square_0.png"), skins: [
                    { name: "Classic Volibear", splashCutoutURL: CDNService.getPath("assets/images/champions/Volibear_Splash_Tile_0.jpg") },
                    { name: "Thunder Lord Volibear", splashCutoutURL: CDNService.getPath("assets/images/champions/Volibear_Splash_Tile_1.jpg") },
                    { name: "Northern Storm Volibear", splashCutoutURL: CDNService.getPath("assets/images/champions/Volibear_Splash_Tile_2.jpg") },
                    { name: "Runeguard Volibear", splashCutoutURL: CDNService.getPath("assets/images/champions/Volibear_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 19, name: "Warwick", portraitIconURL: CDNService.getPath("assets/images/champions/Warwick_Square_0.png"), skins: [
                    { name: "Classic Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_Tile_0.jpg") },
                    { name: "Grey Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_Tile_1.jpg") },
                    { name: "Urf the Manatee", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_Tile_2.jpg") },
                    { name: "Big Bad Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_Tile_3.jpg") },
                    { name: "Tundra Hunter Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_Tile_4.jpg") },
                    { name: "Feral Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_Tile_5.jpg") },
                    { name: "Firefang Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_Tile_6.jpg") },
                    { name: "Hyena Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_Tile_7.jpg") }
                ]
            },
            {
                id: 101, name: "Xerath", portraitIconURL: CDNService.getPath("assets/images/champions/Xerath_Square_0.png"), skins: [
                    { name: "Classic Xerath", splashCutoutURL: CDNService.getPath("assets/images/champions/Xerath_Splash_Tile_0.jpg") },
                    { name: "Runeborn Xerath", splashCutoutURL: CDNService.getPath("assets/images/champions/Xerath_Splash_Tile_1.jpg") },
                    { name: "Battlecast Xerath", splashCutoutURL: CDNService.getPath("assets/images/champions/Xerath_Splash_Tile_2.jpg") },
                    { name: "Scorched Earth Xerath", splashCutoutURL: CDNService.getPath("assets/images/champions/Xerath_Splash_Tile_3.jpg") }
                ]
            },
            {
                id: 5, name: "Xin Zhao", portraitIconURL: CDNService.getPath("assets/images/champions/XinZhao_Square_0.png"), skins: [
                    { name: "Classic Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_Tile_0.jpg") },
                    { name: "Commando Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_Tile_1.jpg") },
                    { name: "Imperial Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_Tile_2.jpg") },
                    { name: "Viscero Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_Tile_3.jpg") },
                    { name: "Winged Hussar Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_Tile_4.jpg") },
                    { name: "Warring Kingdoms Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_Tile_5.jpg") }
                ]
            },
            {
                id: 157, name: "Yasuo", portraitIconURL: CDNService.getPath("assets/images/champions/Yasuo_Square_0.png"), skins: [
                    { name: "Classic Yasuo", splashCutoutURL: CDNService.getPath("assets/images/champions/Yasuo_Splash_Tile_0.jpg") },
                    { name: "High Noon Yasuo", splashCutoutURL: CDNService.getPath("assets/images/champions/Yasuo_Splash_Tile_1.jpg") },
                    { name: "PROJECT: Yasuo", splashCutoutURL: CDNService.getPath("assets/images/champions/Yasuo_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 83, name: "Yorick", portraitIconURL: CDNService.getPath("assets/images/champions/Yorick_Square_0.png"), skins: [
                    { name: "Classic Yorick", splashCutoutURL: CDNService.getPath("assets/images/champions/Yorick_Splash_Tile_0.jpg") },
                    { name: "Undertaker Yorick", splashCutoutURL: CDNService.getPath("assets/images/champions/Yorick_Splash_Tile_1.jpg") },
                    { name: "Pentakill Yorick", splashCutoutURL: CDNService.getPath("assets/images/champions/Yorick_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 154, name: "Zac", portraitIconURL: CDNService.getPath("assets/images/champions/Zac_Square_0.png"), skins: [
                    { name: "Classic Zac", splashCutoutURL: CDNService.getPath("assets/images/champions/Zac_Splash_Tile_0.jpg") },
                    { name: "Special Weapon Zac", splashCutoutURL: CDNService.getPath("assets/images/champions/Zac_Splash_Tile_1.jpg") }
                ]
            },
            {
                id: 238, name: "Zed", portraitIconURL: CDNService.getPath("assets/images/champions/Zed_Square_0.png"), skins: [
                    { name: "Classic Zed", splashCutoutURL: CDNService.getPath("assets/images/champions/Zed_Splash_Tile_0.jpg") },
                    { name: "Shockblade Zed", splashCutoutURL: CDNService.getPath("assets/images/champions/Zed_Splash_Tile_1.jpg") },
                    { name: "SKT T1 Zed", splashCutoutURL: CDNService.getPath("assets/images/champions/Zed_Splash_Tile_2.jpg") }
                ]
            },
            {
                id: 115, name: "Ziggs", portraitIconURL: CDNService.getPath("assets/images/champions/Ziggs_Square_0.png"), skins: [
                    { name: "Classic Ziggs", splashCutoutURL: CDNService.getPath("assets/images/champions/Ziggs_Splash_Tile_0.jpg") },
                    { name: "Mad Scientist Ziggs", splashCutoutURL: CDNService.getPath("assets/images/champions/Ziggs_Splash_Tile_1.jpg") },
                    { name: "Major Ziggs", splashCutoutURL: CDNService.getPath("assets/images/champions/Ziggs_Splash_Tile_2.jpg") },
                    { name: "Pool Party Ziggs", splashCutoutURL: CDNService.getPath("assets/images/champions/Ziggs_Splash_Tile_3.jpg") },
                    { name: "Snow Day Ziggs", splashCutoutURL: CDNService.getPath("assets/images/champions/Ziggs_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 26, name: "Zilean", portraitIconURL: CDNService.getPath("assets/images/champions/Zilean_Square_0.png"), skins: [
                    { name: "Classic Zilean", splashCutoutURL: CDNService.getPath("assets/images/champions/Zilean_Splash_Tile_0.jpg") },
                    { name: "Old Saint Zilean", splashCutoutURL: CDNService.getPath("assets/images/champions/Zilean_Splash_Tile_1.jpg") },
                    { name: "Groovy Zilean", splashCutoutURL: CDNService.getPath("assets/images/champions/Zilean_Splash_Tile_2.jpg") },
                    { name: "Shurima Desert Zilean", splashCutoutURL: CDNService.getPath("assets/images/champions/Zilean_Splash_Tile_3.jpg") },
                    { name: "Time Machine Zilean", splashCutoutURL: CDNService.getPath("assets/images/champions/Zilean_Splash_Tile_4.jpg") }
                ]
            },
            {
                id: 143, name: "Zyra", portraitIconURL: CDNService.getPath("assets/images/champions/Zyra_Square_0.png"), skins: [
                    { name: "Classic Zyra", splashCutoutURL: CDNService.getPath("assets/images/champions/Zyra_Splash_Tile_0.jpg") },
                    { name: "Wildfire Zyra", splashCutoutURL: CDNService.getPath("assets/images/champions/Zyra_Splash_Tile_1.jpg") },
                    { name: "Haunted Zyra", splashCutoutURL: CDNService.getPath("assets/images/champions/Zyra_Splash_Tile_2.jpg") },
                    { name: "SKT T1 Zyra", splashCutoutURL: CDNService.getPath("assets/images/champions/Zyra_Splash_Tile_3.jpg") }
                ]
            }
        ];

        this.summonerSpells = [
            { id: 21, name: "Barrier", description: "Shields your champion for 115-455 (depending on champion level) for 2 seconds.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerBarrier.png", image: "http://i.imgur.com/QAb85Zw.png" },
            { id: 1, name: "Cleanse", description: "Removes all disables and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerBoost.png", image: "http://i.imgur.com/aaa.png" },
            { id: 2, name: "Clairvoyance", description: "Reveals a small area of the map for your team for 5 seconds.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerClairvoyance.png", image: "http://i.imgur.com/C7nw61A.png" },
            { id: 14, name: "Ignite", description: "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerDot.png", image: "http://i.imgur.com/g3nEJlU.png" },
            { id: 3, name: "Exhaust", description: "Exhausts target enemy champion, reducing their Movement Speed and Attack Speed by 30%, their Armor and Magic Resist by 10, and their damage dealt by 40% for 2.5 seconds.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerExhaust.png", image: "http://imgur.com/RSkI9Oq.png" },
            { id: 4, name: "Flash", description: "Teleports your champion a short distance toward your cursor's location.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerFlash.png", image: "http://i.imgur.com/oUKm1In.png" },
            { id: 6, name: "Ghost", description: "Your champion can move through units and has 27% increased Movement Speed for 10 seconds", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerHaste.png", image: "http://i.imgur.com/XT9wS4u.png" },
            { id: 7, name: "Heal", description: "Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerHeal.png", image: "http://i.imgur.com/Mxvky5Z.png" },
            { id: 13, name: "Clarity", description: "Restores 40% of your champion's maximum Mana. Also restores allies for 40% of their maximum Mana", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerMana.png", image: "http://i.imgur.com/UIj98zK.png" },
            { id: 17, name: "Garrison", description: "Allied Turret: Grants massive regeneration for 8 seconds. Enemy Turret: Reduces damage dealt by 80% for 8 seconds.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerOdinGarrison.png", image: "http://i.imgur.com/aaa.png" },
            { id: 10, name: "Revive", description: "Instantly revives your champion at your team's Summoner Platform and increases their Movement Speed for a short duration.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerRevive.png", image: "http://i.imgur.com/aaa.png" },
            { id: 11, name: "Smite", description: "Deals 390-1000 true damage (depending on champion level) to target epic or large monster or enemy minion.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerSmite.png", image: "http://i.imgur.com/zbcZd4W.png" },
            { id: 12, name: "Teleport", description: "After channeling for 3.5 seconds, teleports your champion to target allied structure, minion, or ward. Can target destroyed turrets.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerTeleport.png", image: "http://i.imgur.com/Fo14rr9.png" }
        ];
        
        this.maps = [
            { id: 1, name: "Summoners' Rift (Old)", image: "http://i.imgur.com/b10oWHv.jpg" },
            { id: 11, name: "Summoners' Rift (New)", image: "http://i.imgur.com/b10oWHv.jpg" },
            { id: 12, name: "Howling Abyss", image: "http://i.imgur.com/qvT3TI1.jpg" },
            { id: 10, name: "Twisted Treeline", image: "http://i.imgur.com/MXua547.jpg" },
            { id: 8, name: "Crystal Scar", image: "http://i.imgur.com/jnJTRkL.jpg" }
        ];
    }
    
    championById(id: number): lobby.Champion {
        return this.champions.filter(x => x.id === id)[0];
    }
    
    spellById(id: number): lobby.SummonerSpell {
        return this.summonerSpells.filter(x => x.id === id)[0];
    }
    
    mapById(id: number): lobby.Map {
        return this.maps.filter(x => x.id === id)[0];
    }
}

const instance = new StaticService();
export default instance;