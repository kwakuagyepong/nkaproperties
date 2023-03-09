/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT HOMELAND            ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
1. RevolutionSliderActiver
2. GalleryFilter
3. FancyboxInit
4. Accordion
5. TestimonialCarosule
6. ProcessCarosule
7. Brand Carousel
8. Contact Form Validation
9. CounterNumberChanger
10. Features Carosell
11. progressBarConfig

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/
"use strict";
// 1 revolutionSliderActiver
function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper #slider1').length) {
        $("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            hideTimerBar: "off",
            onHoverStop: "off",
            navigation: {
                arrows: {
                    enable: true
                }
            },
            gridwidth: 1170,
            gridheight: 750
        });
    };
}
//Mixitup Gallery
if ($('.mixitup-gallery').length) {
    $('.mixitup-gallery').mixItUp({});
}


//Sortable Masonary with Filters
function enableMasonry() {
    if ($('.sortable-masonry').length) {

        var winDow = $(window);
        // Needed variables
        var $container = $('.sortable-masonry .items-container');
        var $filter = $('.filter-btns');

        $container.isotope({
            filter: '*',
            masonry: {
                columnWidth: 0
            },
            animationOptions: {
                duration: 500,
                easing: 'linear'
            }
        });


        // Isotope Filter 
        $filter.find('li').on('click', function () {
            var selector = $(this).attr('data-filter');

            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
            } catch (err) {

            }
            return false;
        });


        winDow.bind('resize', function () {
            var selector = $filter.find('li.active').attr('data-filter');

            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
        });


        var filterItemA = $('.filter-btns li');

        filterItemA.on('click', function () {
            var $this = $(this);
            if (!$this.hasClass('active')) {
                filterItemA.removeClass('active');
                $this.addClass('active');
            }
        });
    }
}

enableMasonry();

// 3. fancyboxInit
function fancyboxInit() {
    var galleryFcb = $('.fancybox');
    if (galleryFcb.length) {
        galleryFcb.fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                media: {}
            }
        });
    }
}
//Accordion Box
if ($('.accordion-box').length) {
    $('.accordion-box .acc-btn').on('click', function () {
        if ($(this).hasClass('active') !== true) {
            $('.accordion-box .acc-btn').removeClass('active');
        }

        if ($(this).next('.acc-content').is(':visible')) {
            $(this).removeClass('active');
            $(this).next('.acc-content').slideUp(500);
        } else {
            $(this).addClass('active');
            $('.accordion-box .acc-content').slideUp(500);
            $(this).next('.acc-content').slideDown(500);
        }
    });
}

//5. Testimonials Slider
if ($('#testimonials-one').length) {

    var slider = new MasterSlider();
    slider.control('bullets');
    slider.control('bullets', {
        autohide: false
    });
    slider.setup('testimonials-one', {
        autoplay: true,
        loop: true,
        width: 120,
        height: 120,
        speed: 20,
        view: 'wave',
        preload: 0,
        space: 100,
        autoHeight: true,
        wheel: true,
        filters: {
            grayscale: 1
        },
        viewOptions: {
            centerSpace: 1.6
        }
    });
    slider.control('slideinfo', {
        insertTo: '#staff-info'
    });

}


//Jquery Tabs Box
if ($('.tabs-box').length) {
    //Tabs
    $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {

        e.preventDefault();
        var target = $($(this).attr('href'));

        target.parents('.tabs-box').children('.tab-buttons').children('.tab-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        target.parents('.tabs-box').children('.tab-content').children('.tab').fadeOut(0);
        target.parents('.tabs-box').children('.tab-content').children('.tab').removeClass('active-tab');
        $(target).fadeIn(300);
        $(target).addClass('active-tab');
    });

}
//  Main menu
function mainmenu() {
    //Submenu Dropdown Toggle
    if ($('.main-menu li.dropdown ul').length) {
        $('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });
    }

}


// Dom Ready Function
jQuery(document).on('ready', function () {
    (function ($) {
        // add your functions

        revolutionSliderActiver();
        fancyboxInit();
        enableMasonry();
        mainmenu();

    })(jQuery);
});








(function ($) {

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }


    //Update Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            if (windowpos >= 200) {
                $('.main-header').addClass('fixed-header');
                $('.scroll-to-top').fadeIn(300);
            } else {
                $('.main-header').removeClass('fixed-header');
                $('.scroll-to-top').fadeOut(300);
            }
        }
    }

    headerStyle();



    //Search Box Toggle
    if ($('.main-header .seach-toggle').length) {
        //Dropdown Button
        $('.main-header .seach-toggle').on('click', function () {
            $(this).next('.search-box').toggleClass('now-visible');
        });
    }






    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                lastname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }
    //Contact Form Validation
    if ($('#contact-form2').length) {
        $('#contact-form2').validate({
            rules: {
                username: {
                    required: true
                },
                lastname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }
    //Contact Form Validation
    if ($(".contact-form").length) {
        $(".contact-form").validate({
            submitHandler: function (form) {
                var form_btn = $(form).find('button[type="submit"]');
                var form_result_div = '#form-result';
                $(form_result_div).remove();
                form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
                var form_btn_old_msg = form_btn.html();
                form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
                $(form).ajaxSubmit({
                    dataType: 'json',
                    success: function (data) {
                        if (data.status == 'true') {
                            $(form).find('.form-control').val('');
                        }
                        form_btn.prop('disabled', false).html(form_btn_old_msg);
                        $(form_result_div).html(data.message).fadeIn('slow');
                        setTimeout(function () {
                            $(form_result_div).fadeOut('slow')
                        }, 6000);
                    }
                });
            }
        });
    }
    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }


    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */
    $(window).on('scroll', function () {
        headerStyle();

    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function () {
        handlePreloader();

    });



})(window.jQuery);