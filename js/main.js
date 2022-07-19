//  slider js

$(document).ready(function(){
    $('.slider_items').bxSlider({
        auto: 'true',
        speed: '800',
        autoStart: 'true',
        pause: '3000',
    });
  });

//   mean menu

$(document).ready(function () {
	$('#main_menu').meanmenu({
        meanMenuContainer: '#mobile_menu',
        meanScreenWidth: 991,
    });
    $(function(){
		$('#menu').slicknav();
	});
});
