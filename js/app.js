/*============================================= Data-Background =============================================*/
$("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})






$('#client-logo .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayspeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('.banner-area .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('select').niceSelect();
$('.counter').counterUp({
    delay: 10,
    time: 1000
});




// gellary-area

$('.gallery-item').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });


$('.student-review .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



