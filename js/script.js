$(document).ready(function() {
		var m = $('#main').width();
		var w = $(window).width();
		$('#announcmentbox').append(w+' '+m);
		
		if (m < w){
				var offset = (w - m)/2;
				offset = offset + 'px';
				$('#main').css('left', offset);
		}
  
});
