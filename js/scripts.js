$(document).ready(function() {

// match box heights

$('.match-height').matchHeight();

// tooltip - below will effect ALL tooltips (that can be changed to a single class or id if needed)

// $('[data-toggle="tooltip"]').tooltip();


// popovers (http://getbootstrap.com/javascript/#popovers) - below will effect ALL popovers (that can be changed to a single class or id if needed)

// $('[data-toggle="popover"]').popover();


// backstretch image (http://srobbin.com/demos/jquery-backstretch/examples/basic.html)

 $(".backstretch").backstretch("./img/GE_IndustrialInternet_HiRes_01.jpg");


// owl carousel (banners)

 // $("#owl-demo").owlCarousel({
 //    navigation : false,
 //    items : 1,
 //    itemsDesktopSmall : [1024,1],
 //    itemsTablet : [1024,1],
 //    itemsMobile : [479,1],
 //    autoHeight : true,
 //    autoPlay : true

 //  });

 // back to top arrow 

$(function() {
	var offset = 500;
	$(window).scroll(function() {
		if($(this).scrollTop() > offset) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

// fix for when Navbar (navbar-fixed-top) hides initial content behind banner when jumping to in-page anchor

// var shiftWindow = function() { scrollBy(200, -200) ;};
// 	if (location.hash) shiftWindow();
// 	window.addEventListener("hashchange", shiftWindow);

}); //end document.ready