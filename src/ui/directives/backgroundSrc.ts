///<reference path="../_app.ts" />
'use strict';

export default {
    params: ["overlayColor"],
    update(newValue, oldValue) {
        let color = "";
        if (this.params.overlayColor && this.params.overlayColor.indexOf(";") !== -1) {
            color = "linear-gradient(" + this.params.overlayColor.replace(/;/g, ",") + "), ";
        } else if (this.params.overlayColor) {
            color = `linear-gradient(${this.params.overlayColor}, ${this.params.overlayColor}), `;
        }
        
        this.el.style.backgroundImage = color + "url(" + newValue + ")";
        this.el.style.backgroundSize = "cover";
    }
}