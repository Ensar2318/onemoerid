/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow-icon-next': '&#xe90b;',
		'icon-arrow-icon-prev': '&#xe90c;',
		'icon-close': '&#xe90a;',
		'icon-hamburger': '&#xe909;',
		'icon-seeds': '&#xe900;',
		'icon-milk': '&#xe901;',
		'icon-fish': '&#xe902;',
		'icon-snail': '&#xe903;',
		'icon-wheat': '&#xe904;',
		'icon-lobster': '&#xe905;',
		'icon-egg': '&#xe906;',
		'icon-pea': '&#xe907;',
		'icon-milk-cheese': '&#xe913;',
		'icon-Path-161': '&#xe916;',
		'icon-new-brand': '&#xe908;',
		'icon-insta': '&#xe90d;',
		'icon-telephone': '&#xe90e;',
		'icon-twitter': '&#xe90f;',
		'icon-facebook': '&#xe910;',
		'icon-youtube': '&#xe911;',
		'icon-search': '&#xe912;',
		'icon-letter': '&#xe914;',
		'icon-map-pin': '&#xe915;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
