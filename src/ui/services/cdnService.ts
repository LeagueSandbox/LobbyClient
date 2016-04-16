///<reference path="../_app.ts" />
'use strict';

export default class CDNService {
    static RELEASELISTING_URL = "http://l3cdn.riotgames.com/releases/live/projects/lol_air_client/releases/releaselisting_EUW";
    static PACKAGEMANIFEST_URL = "http://l3cdn.riotgames.com/releases/live/projects/lol_air_client/releases/%VER%/packages/files/packagemanifest";
    static BASE_PATH = "http://l3cdn.riotgames.com/releases/live";
    
    paths: { [key: string]: string };
    version: string;
    
    constructor() {
        this.load();
    }
    
    load() {        
        // Step 1: Load list of releases.
        window.fetch(CDNService.RELEASELISTING_URL).then(res => res.text()).then(releases => {
            const versions = releases.split("\n");
            const mostRecent = versions[0];
            this.version = mostRecent;
            
            // If we have this version cached locally, abort.
            if (localStorage.getItem("cdn-" + mostRecent) !== null) {
                this.paths = JSON.parse(localStorage.getItem("cdn-" + mostRecent));
                
                // We need this hack to break the promise chain.
                throw new Error("Done.");
            }
            
            const url = CDNService.PACKAGEMANIFEST_URL.replace("%VER%", mostRecent);
            
            // Step 2: Load packagemanifest.
            return window.fetch(url);
        }).then(res => res.text()).then(manifest => {
            // Step 3: Extract packagemanifest.
            
            // Strip off leading PKG1.
            const lines = manifest.split("\n").slice(1);
            this.paths = {};
            
            lines.forEach(line => {
                const parts = line.split(",");
                const localPath = parts[0].replace(/\/projects\/lol_air_client\/releases\/\d+\.\d+\.\d+\.\d+\/files\//, "");
                
                this.paths[localPath.toLowerCase()] = CDNService.BASE_PATH + parts[0];
            });
            
            localStorage.setItem("cdn-" + this.version, JSON.stringify(this.paths));
        }).catch(e => {});
    }
    
    getPath(relative: string) {
        if (!this.paths) throw new Error("Not loaded.");
        return this.paths[relative.toLowerCase()];
    }
}