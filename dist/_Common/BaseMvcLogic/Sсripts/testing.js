$(document).ready(function() {

  
    // ----- toast example 
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
      toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)
  
        toast.show()
      })
    }

    $('.img-popup').magnificPopup({type:'image'});
  
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

  });
  
  
  