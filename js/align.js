//minimum width of page so picture and text don't overlap
var width = 1000;
//sets image width
var w_img = $('#mainimg').width();
var p_img = 500;
//aligns image text relative to lower container
var imagetext_padding = 10;
//padding for menu from center div
var ul_padding = 200;

//Set width of page according to size of window
$(document).ready(function () {
  var ul_menu;
  if ($(window).width() > width) {
    var l_center = ($(window).width() - width)/2;
    ul_menu = l_center + ul_padding;
  } else {
    var l_center = 0;
    //temp top menu fix
    if($(window).width() < 800){
      ul_menu = 0;
    }else{
      ul_menu = ul_padding;
    }
  }
  
  ul_menu = ul_menu + 'px';
  l_center = l_center + 'px';
  
  $('.center').css('left', l_center);
  $('.headerul').css('left', ul_menu);
});

//rescales page after resize
$(window).resize(function () {
  var ul_menu;
  if ($(window).width() > width) {
    var l_center = ($(window).width() - width)/2;
    ul_menu = l_center + ul_padding;
  } else {
    var l_center = 0;
    //temp top menu fix
    if($(window).width() < 800){
      ul_menu = 0;
    }else{
      ul_menu = ul_padding;
    }
  }
  
  ul_menu = ul_menu + 'px';
  l_center = l_center + 'px';
  
  $('.center').css('left', l_center);
  $('.headerul').css('left', ul_menu);
});
