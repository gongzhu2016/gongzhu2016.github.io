$(document).ready(function() {

  $('div#header').hide();
  $('#fullpage').fullpage(
    {
      controlArrows: false,
      onLeave: function(index, nextIndex, direction) {
        if (nextIndex == 1) { $('div#header').fadeOut() }
        if (index == 1) { $('div#header').fadeIn() }
        if (nextIndex == 5) { $('div#footer').fadeOut() }
        if (index == 5) { $('div#footer').fadeIn() }
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
