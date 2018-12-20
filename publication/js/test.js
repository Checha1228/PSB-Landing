'use strict';

//Keywords
var demo = 'variable';
var fijo = 'const';

//arrow functions

demo = function demo() {

	for (var x = 0; x < 5; x++) {
		console.log(x);
	}
};

function functionMenu() {
	var x = document.getElementById("menu-psb-landing");
	if (x.className === "menu-landing-psb") {
		x.className += " responsive-menu";
	} else {
		x.className = "menu-landing-psb";
	}
	$('.icon-hamburger').toggleClass('active');
}
//# sourceMappingURL=../maps/test.js.map
