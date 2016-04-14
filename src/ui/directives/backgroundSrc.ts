///<reference path="../_app.ts" />
'use strict';

function backgroundSrc(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {
    attrs.$observe('backgroundSrc', value => {
        element.css({
            'background-image': 'url(' + value + ')',
            'background-size': 'cover'
        });
    });
}

const directive: ng.IDirectiveFactory = () => backgroundSrc;
export default directive;