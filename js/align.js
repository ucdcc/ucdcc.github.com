//Alligns elements on page
$(document).ready(function() {
		var m = $('.announcmentbox').width();
		var w = $(window).width();
		
		if (m < w){
				var offset = (w - m)/2;
				offset = offset + 'px';
				$('.announcmentbox').css('left', offset);
		}
  
});
