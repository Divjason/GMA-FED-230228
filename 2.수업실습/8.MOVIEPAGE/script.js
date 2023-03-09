$(document).ready(function() {
  $('#main_navigation a').click(function() {
    let target = $(this).attr('data-target');
    $(':not([data-name=' + target + '])').removeClass('active');
    $('[data-name=' + target + ']').addClass('active');
  });
  
    let currentPosition = 1;
  $('#character > a:nth-child(1)').click(function() {
    currentPosition -= 1;
    if (currentPosition < 1) {
      currentPosition = 3;
    }
    $('article').removeClass('show');
    $('article:nth-of-type(' + currentPosition + ')').addClass('show');
  });
  $('#character > a:nth-child(2)').click(function() {
    currentPosition += 1;
    if (currentPosition > 3) {
      currentPosition = 1;
    }
    $('article').removeClass('show');
    $('article:nth-of-type(' + currentPosition + ')').addClass('show');
  });
});

