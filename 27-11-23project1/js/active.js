$(document).ready(function(){

    // meanmenu
    jQuery('#mobile-manu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mean-togol',
        meanRevealPosition: "<span></span> <span></span> <span></span>"

    });

// owlCarousel

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
        576:{
            items:1
        },            
        768:{
            items:1
        },
        992:{
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
        576:{
            items:1
        },            
        767:{
            items:2
        },
        992:{
            items:3
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
        576:{
            items:1
        },            
        768:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
});
var owl = $('.ads');
owl.owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },            
        768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

// magnificPopup
$('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
  });

})








 

