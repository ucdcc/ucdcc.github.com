//min width before resizing doesn't effect position of text
var w_min = 1050;
var w_box = $('.announcmentbox').width();
var h_title = $('.headertitle').width();

//adds padding to the right of the paddler+ucdcc logo
var menu_padding = 12;

//Alligns elements on page
$(document).ready(function() {
  if (w_min < $(window).width()){
    var offset = ($(window).width() - w_box)/2;
    var menu_offset = offset + $('.headericon').width();
    var ul_offset = menu_offset + h_title + menu_padding;
		  
    offset = offset + 'px';
    menu_offset = menu_offset + 'px';
    ul_offset = ul_offset + 'px';
		  
    $('.announcmentbox').css('left', offset);
    $('.headericon').css('left', offset);
    $('.headertitle').css('left', menu_offset);
    $('.headerul').css('left', ul_offset);
		  
    //$('.b_shadow').css('width', $(window).width());
    //$('.header').css('width', $(window).width());
  }else{
    var offset = (w_min - w_box)/2;
    var menu_offset = offset + $('.headericon').width();
    var ul_offset = menu_offset + h_title + menu_padding;
				    
    offset = offset + 'px';
    menu_offset = menu_offset + 'px';
    ul_offset = ul_offset + 'px';
				    
    $('.announcmentbox').css('left', offset);
    $('.headericon').css('left', offset);
    $('.headertitle').css('left', menu_offset);
    $('.headerul').css('left', ul_offset);
				    
    //$('.header').css('width', w_min);
  }
});

//rescales page after resize
$(window).resize(function () {
  if (w_min < $(window).width()){
    var offset = ($(window).width() - w_box)/2;
    var menu_offset = offset + $('.headericon').width();
    var ul_offset = menu_offset + h_title + menu_padding;
    var imagetext_offset = offset + imagetext_padding;
				    
    offset = offset + 'px';
    menu_offset = menu_offset + 'px';
    ul_offset = ul_offset + 'px';
	
    $('.announcmentbox').css('left', offset);
    $('.headericon').css('left', offset);
    $('.headertitle').css('left', menu_offset);
    $('.headerul').css('left', ul_offset);
	
    //$('.header').css('width', $(window).width());
  }else{
    var offset = (w_min - w_box)/2;
    var menu_offset = offset + $('.headericon').width();
    var ul_offset = menu_offset + h_title + menu_padding;
    var imagetext_offset = offset + imagetext_padding;
				    
    offset = offset + 'px';
    menu_offset = menu_offset + 'px';
    ul_offset = ul_offset + 'px';
    $('.announcmentbox').css('left', offset);
    $('.headericon').css('left', offset);
    $('.headertitle').css('left', menu_offset);
    
    //$('.headerul').css('left', w_min);
  }
});
