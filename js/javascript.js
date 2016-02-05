$(document).ready(function() {

  $('div#header').hide();
  $('#fullpage').fullpage(
    {
      controlArrows: false,
      css3: false,
      easing: 'easeOutElastic',
      easingcss3: 'ease',
      onLeave: function(index, nextIndex, direction) {
        if (nextIndex == 1) { $('div#header').fadeOut() }
        if (index == 1) { $('div#header').fadeIn() }
        if (nextIndex == 6) { $('div#footer').fadeOut() }
        if (index == 6) { $('div#footer').fadeIn() }
      },
      easing:'easeOutBack'
    });
  $('#fullpage').fullpage.setAllowScrolling(false);

  $('div#footer').click( function() {
      $('#fullpage').fullpage.moveSectionDown();
    }
  );
  $('div#header').click( function() {
      $('#fullpage').fullpage.moveSectionUp();
    }
  );
});
