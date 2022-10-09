$(document).ready(function() {

  var deskCheck = $('.desktop-check').is(':visible') ? true : false;


  $('.img-popup').magnificPopup({type:'image'});

  if($('#lk-article__nav').length) {
    $('#lk-article__nav').stickySidebar({
      topSpacing: 0,
      bottomSpacing: 10,
      resizeSensor: true,
    });


    $('.lk-article__nav .btn-open').on('click', function(){
      $('.lk-article__nav').addClass('opened');
    });

    $('.lk-article__nav .btn-close').on('click', function(){
      $('.lk-article__nav').removeClass('opened');
    });

  }


  // тултипы
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  $('[data-toggle="tooltip"]').tooltip({
    html: true
  });


  // всплывающие картинки
  $('.img-popup').magnificPopup({
    type: 'image',
    image: {
      markup: '<div class="mfp-figure">'+
                '<div class="mfp-close"></div>'+ '<div class="mfp-img-wrap"><div class="mfp-img-bg">' +
                '<div class="mfp-img"></div>'+ '</div></div>' +
                '<div class="mfp-bottom-bar">'+
                  '<div class="mfp-title"></div>'+
                  '<div class="mfp-counter"></div>'+
                '</div>'+
              '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
    
      cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
    
      titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
      // Or the function that should return the title. For example:
      // titleSrc: function(item) {
      //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      // }
    
      verticalFit: true, // Fits image in area vertically
    
      tError: '<a href="%url%">Произошла ошибка. Не можем загрузить картинку. Напишите, пожалуйста, об этом команде ClevMate.' // Error message
    }
  });


  // СКРОЛЛ ЧЕРЕЗ ЯКОРЬ -----------------------------

  $('.scroll-link').on('click', function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    
    if($(href).length) {
      $('html, body').animate({ scrollTop: $(href).offset().top}, 500);
    }

  });
    
//   // листалка на лендинге ----------------------------

//   if($('.lp-features__slider').length && !deskCheck) {
//     $('.lp-features__slider').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: false,
//       autoplaySpeed: 2000,
//       mobileFirst: true,
//       dots: true,
//       infinite: true,
//       arrows: false,
//       responsive: [
//          {
//             breakpoint: 992,
//             settings: "unslick"
//          }
//       ]    
//     });
//   }





  // var swiper = new Swiper(".program-swiper", {
  //   loop: false,
  //   slidesPerView: "auto",
  //   freeMode: true,
  //   mousewheel: {
  //     releaseOnEdges: true,
  //     forceToAxis: true
  //   },
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //     draggable: true,
  //   }
  // });

  // $('.cb-topic__titile .title').matchHeight({
  //     byRow: false,
  //     property: 'height',
  //     target: null,
  //     remove: false
  // });

  setTimeout(() => {
    // через переменную потом можно обращаться у слайдеру
    let swiper = new Swiper(".program-swiper", {
        loop: false,
        slidesPerView: "auto",
        freeMode: true,
        mousewheel: {
            releaseOnEdges: true,
            forceToAxis: true
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        }
    });
  }, 50);

  setTimeout(() => {
      $('.cb-topic__titile .title').matchHeight({
          byRow: false,
          property: 'height',
          target: null,
          remove: false
      });
  }, 50)




});


