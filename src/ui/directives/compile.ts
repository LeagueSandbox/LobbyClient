///<reference path="../_app.ts" />
'use strict';

function compile($compile: ng.ICompileService) {
    return (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: any) => {
        scope.$watch(scope => scope.$eval(attrs.compile), value => {
		    element.html(value);
		    $compile(element.contents())(scope);
	    });
    };
}

export default ["$compile", compile];