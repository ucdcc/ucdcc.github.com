//minimum width of page so picture and text don't overlap
var w_min = 1050;
//sets image width
var w_img = $('#mainimg').width();
//aligns image text relative to lower container
var imagetext_padding = -130;

//Set width of page according to size of window
$(document).ready(function () {
  if ($(window).width() > w_min) {
    var offset = $(window).width() - w_img;
    var imagetext_offset = ($(window).width() - w_box)/2 + imagetext_padding;
    
    offset = offset + 'px';
    imagetext_offset = imagetext_offset + 'px';
    
    $('#mainimg').css('left', offset);
    $('.imagetext').css('left', imagetext_offset);
    $('.bottom').css('width', $(window).width());
  } else {
    var offset = w_min - w_img;
    var imagetext_offset = (w_min - w_box)/2 + imagetext_padding;
    
    offset = offset + 'px';
    imagetext_offset = imagetext_offset + 'px';
    
    $('#mainimg').css('left', offset);
    $('.imagetext').css('left', imagetext_offset);
    $('.bottom').css('width', w_min);
  }
});

//rescales page after resize
$(window).resize(function () {
  if ($(window).width() > w_min) {
    var offset = $(window).width() - w_img;
    var imagetext_offset = ($(window).width() - w_box)/2 + imagetext_padding;
    
    offset = offset + 'px';
    imagetext_offset = imagetext_offset + 'px';
    
    $('#mainimg').css('left', offset);
    $('.imagetext').css('left', imagetext_offset);
    $('.bottom').css('width', $(window).width());
  } else {
    var offset = w_min - w_img;
    var imagetext_offset = (w_min - w_box)/2 + imagetext_padding;
    
    offset = offset + 'px';
    imagetext_offset = imagetext_offset + 'px';
    
    $('#mainimg').css('left', offset);
    $('.imagetext').css('left', imagetext_offset);
    $('.bottom').css('width', w_min);
  }
});
