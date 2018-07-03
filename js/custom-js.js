function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() < 1025) {
        $('nav').removeClass('custom-nav');
    }
    else {
        if (!init) {
            $('nav').addClass('custom-nav');
        }
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});



$(document).ready(function(){

	var checkScrollBar = function(){
		$('.custom-nav').css({
			backgroundColor: $(this).scrollTop() > 1 ?
			'rgb(255, 255, 255)' : 'transparent'
		})
	}
	$(window).on('load resize scroll', checkScrollBar)
});