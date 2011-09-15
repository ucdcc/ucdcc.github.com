//minimum width of page so picture and text don't overlap
var w_min = 1050;
//sets image width
var w_img = $('#mainimg').width();

//Set width of page according to size of window
$(document).ready(function () {
  if ($(window).width() > w_min) {
    var offset = $(window).width() - w_img;
    offset = offset + 'px';
    $('#mainimg').css('left', offset);
  } else {
    var offset = w_min - w_img;
    offset = offset + 'px';
    $('#mainimg').css('left', offset);
  }
});

//rescales page after resize
$(window).resize(function () {
  if ($(window).width() > w_min) {
    var offset = $(window).width() - w_img;
    offset = offset + 'px';
    $('#mainimg').css('left', offset);
  } else {
    var offset = w_min - w_img;
    offset = offset + 'px';
    $('#mainimg').css('left', offset);
  }
});
