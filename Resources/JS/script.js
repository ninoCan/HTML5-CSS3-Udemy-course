$(document).ready(function() {
 
    // $('h1').click(function() {
    //     $(this).css('background-color', '#ff0000')   
    // })

    // sticky navigation
    $('.js--section-features').waypoints(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px'
    })

    // Scroll buttons
    $('js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });
    $('js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    // Navigation scroll  
    $(function() {
        $('a[href*=#]').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&location.hostname == this.hostname) {
                var target = ($this.path);
                target = target.lenght ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.lenght) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Animations on scroll
    $('.js--wp-1').waypoints(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoints(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoints(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoints(function(direction) {
        $('.js--wp-4').addClass('animated pulse')
    }, {
        offset: '50%'
    });
});

// MOBILE NAVIGATION

$('.js--nav-icon').click(function() {
    const nav = $('.js--main-nav');
    const icon =$('js--nav-icon i')

    nav.slideToggle(200);

    if (icon.hasClass('ion-ios-menu')) {
        icon.addClass('ion-close-round')
        icon.removeClass('ion-ios-round')
    } else {
        icon.addClass('ion-ios-round')
        icon.removeClass('ion-close-round')
    } 
});