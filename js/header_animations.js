	$(window).scroll(function() {
		$('#animatedElement').each(function(){
		var imagePos = $(this).offset().top;
		});
	});

  var nav = $('nav');
  var line = $('<div />').addClass('line');

  line.appendTo(nav);

  var active = nav.find('.active');
  var pos = 0;
  var wid = 0;

  if(active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
      left: pos,
      width: wid
    });
  }
