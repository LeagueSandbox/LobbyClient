///<reference path="../_app.ts" />
'use strict';

interface AugmentedAttributes extends ng.IAttributes {
    overlayColor?: string;
}

function backgroundSrc(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: AugmentedAttributes) {
    let color = "";
    if (attrs.overlayColor && attrs.overlayColor.indexOf(";") !== -1) {
        color = "linear-gradient(" + attrs.overlayColor.replace(/;/g, ",") + "), ";
    } else if (attrs.overlayColor) {
        color = `linear-gradient(${attrs.overlayColor}, ${attrs.overlayColor}), `;
    }
   
    attrs.$observe('backgroundSrc', value => {
        element.css({
            'background-image': color + 'url(' + value + ')',
            'background-size': 'cover'
        });
    });
}

const directive: ng.IDirectiveFactory = () => backgroundSrc;
export default directive;