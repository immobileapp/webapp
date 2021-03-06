import $ from 'jquery';
import Hammer from '../extra_modules/hammer.js';

var menuIsVisible = false;

$('.menu-icon').click(function () {
	if(menuIsVisible){
		closeMenu();
	}else{
		openMenu();
	}
});

var wrapper = document.getElementById('wrapper');

var mc = new Hammer(wrapper);
mc.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});

//Open on Swipe
mc.on("swiperight", function (ev) {
	openMenu();
});

//Close on Swipe
mc.on("swipeleft tap", function (ev) {
	closeMenu();
});

function closeMenu() {
	$('#wrapper').css('background', 'rgba(0,0,0,0)');
	$('#wrapper').css('marginLeft', '-80vw');
	$('#wrapper .content').css('boxShadow', '5px 0 50px rgba(0,0,0,0)');
	menuIsVisible = false;
}

function openMenu() {
	$('#wrapper').css('background', 'rgba(0,0,0,0.65)');
	$('#wrapper').css('marginLeft', 0);
	$('#wrapper .content').css('boxShadow', '5px 0 50px rgba(0,0,0,0.65)');
	menuIsVisible = true;
}