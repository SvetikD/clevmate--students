$(document).ready(function() {

  var deskCheck = $('.desktop-check').is(':visible') ? true : false;

  // тултипы
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  $('[data-toggle="tooltip"]').tooltip({
    html: true
  });

  // СКРОЛЛ ЧЕРЕЗ ЯКОРЬ -----------------------------

  $('.scroll-link').on('click', function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    
    if($(href).length) {
      $('html, body').animate({ scrollTop: $(href).offset().top}, 500);
    }

  });
    

});


