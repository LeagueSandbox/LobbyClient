"use strict";

function directive(scope, element, attrs) {
	attrs.$observe('backgroundSrc', function(value) {
		element.css({
			'background-image': 'url(' + value +')',
			'background-size' : 'cover'
		});
	});
}

export default directive;