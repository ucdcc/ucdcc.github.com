//min width before resizing doesn't effect position of text
var w_min = 1050;
var w_box = $('.announcmentbox').width();

//Alligns elements on page
$(document).ready(function() {
		if (w_min < $(window).width()){
				var offset = ($(window).width() - w_box)/2;
				offset = offset + 'px';
				$('.announcmentbox').css('left', offset);
		}else{
		  var offset = (w_min - w_box)/2;
		  offset = offset + 'px';
				$('.announcmentbox').css('left', offset);
		}
});

//rescales page after resize
$(window).resize(function () {
		if (w_min < $(window).width()){
				var offset = ($(window).width() - w_box)/2;
				offset = offset + 'px';
				$('.announcmentbox').css('left', offset);
		}else{
		  var offset = (w_min - w_box)/2;
		  offset = offset + 'px';
				$('.announcmentbox').css('left', offset);
		}
});
