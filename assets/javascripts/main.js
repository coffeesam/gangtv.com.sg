$(document).ready(function() {
  // bindScrollSpy();
  // bindNavBarMenu();
});

var lastScrollTop = 0;

function bindScrollSpy() {
  $(window).scroll($.debounce(30, function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
       // downscroll code
       $('.navbar').addClass('minibar')
     } else {
      // upscroll code
      $('.navbar').removeClass('minibar')
     }
     lastScrollTop = st;
  }));
}

function bindNavBarMenu() {
  $('.navbar').on('show.bs.collapse hide.bs.collapse' , function () {
    $('.navbar').removeClass('minibar')
  });
}
