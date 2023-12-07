$(document).ready(function(){
    var owl = $('.banner-slied');
owl.owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },            
        960:{
            items:1
        },
        1200:{
            items:1
        }
    }
});
    var owl = $('.project-today');
owl.owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },            
        960:{
            items:4
        },
        1200:{
            items:4
        }
    }
});

var owl = $('.blog-carosel');
owl.owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },            
        960:{
            items:1
        },
        1200:{
            items:1
        }
    }
});

// magnificPopup
$('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
  });

})








 

