// JavaScript Document
/*jshint esversion: 6 */



$(document).ready(function () {



    "use strict";

    window.FontAwesomeConfig = {
        searchPseudoElements: true
    };


    //navbar	
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 57
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


    //Kubus	

    $(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $(window).mousedown(function () {
                $(window).mousemove(function (e) {
                    $('.cube').css('transform', 'rotateX(' + -e.pageY / 10 + 'deg)' + 'rotateY(' + e.pageX / 15 + 'deg)');
                });

                $(window).mouseup(function () {
                    $(this).off("mousemove");
                });

            });

        } else {
            $(window).mousemove(function (e) {
                $('.cube').css('transform', 'rotateX(' + -e.pageY / 10 + 'deg)' + 'rotateY(' + e.pageX / 15 + 'deg)');
            });
        }

    });


    //mask
    var currentMousePos = {
        x: -1,
        y: -1
    };
    $('.flesh').mousemove(function (e) {
        currentMousePos.x = e.pageX;
        currentMousePos.y = e.pageY - $(this).offset().top;

        $('.bone').css('-webkit-mask-position-x', currentMousePos.x - 500);
        $('.bone').css('-webkit-mask-position-y', currentMousePos.y - 250)
    });


    //noise

    const noise = () => {
        let canvas, ctx;

        let wWidth, wHeight;

        let noiseData = [];
        let frame = 0;

        let loopTimeout;


        // Create Noise
        const createNoise = () => {
            const idata = ctx.createImageData(wWidth, wHeight);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;

            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    buffer32[i] = 0xff000000;
                }
            }

            noiseData.push(idata);
        };


        // Play Noise
        const paintNoise = () => {
            if (frame === 9) {
                frame = 0;
            } else {
                frame++;
            }

            ctx.putImageData(noiseData[frame], 0, 0);
        };


        // Loop
        const loop = () => {
            paintNoise(frame);

            loopTimeout = window.setTimeout(() => {
                window.requestAnimationFrame(loop);
            }, (1000 / 25));
        };


        // Setup
        const setup = () => {
            wWidth = window.innerWidth;
            wHeight = window.innerHeight;

            canvas.width = wWidth;
            canvas.height = wHeight;

            for (let i = 0; i < 10; i++) {
                createNoise();
            }

            loop();
        };


        // Reset
        let resizeThrottle;
        const reset = () => {
            window.addEventListener('resize', () => {
                window.clearTimeout(resizeThrottle);

                resizeThrottle = window.setTimeout(() => {
                    window.clearTimeout(loopTimeout);
                    setup();
                }, 200);
            }, false);
        };


        // Init
        const init = (() => {
            canvas = document.getElementById('noise');
            ctx = canvas.getContext('2d');

            setup();
        })();
    };

    noise();


    //services
    if ($(window).width() > 991) {

        $('#collapse1').addClass('show');
        $('#collapse2').addClass('show');
    } else {

        $('#coding').click(function () {

            $('#collapse2').removeClass('show');
            $('#designcol').slideToggle('fast');

        });

        $('#design').click(function () {

            $('#collapse1').removeClass('show');
            $('#codecol').slideToggle('fast');

        });

    }



    //contact

    //Hide the labeltext on smaller screens
    if ($(window).width() < 768) {
        $(".form-group").hover(
            function () {
                $(this).find('span').fadeOut('fast');
            },
            function () {
                $(this).find('span').fadeIn('fast');
            }
        );
    }

    //Leave open filled fields
    $('.form-control').blur(function () {
        if ($(this).val().length !== 0) {
            $(this).next().addClass("filled");
        } else {
            $(this).next().removeClass("filled");
        }
    });

    //Expand textarea when focused & keep expanded when has text
    $('textarea').focus(function () {
        $(this).animate({
            rows: 4
        }, 300).css("max-height", "100%");
    });

    $('textarea').blur(function () {
        if ($(this).val().length !== 0) {
            $(this).animate({
                rows: 4
            }, 300).css("max-height", "100%");
        } else {
            $(this).animate({
                rows: 1
            }, 300).css("max-height", "78px");
        }
    });

    //close keyboard

    $('#closekb').click(function () {
        $(':focus').blur()
    });


    //Box
    
 
    
 





}); //use strict
