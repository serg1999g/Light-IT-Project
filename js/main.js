jQuery(document).ready(function ($) {

    /* ------------------- Open Search Block ------------------- */
    let $toggleBtn = $('.toggle-btn-search');
    let $blockOpenField = $('.open-search-field');


    $toggleBtn.on('click', function () {
        $(this).closest('.wrapper-header-search').find('.open-search-field').stop().fadeToggle();
    });



    /* ------------------- Close BLOCK, when click outside the BLOCK ------------------- */
    $(document).mouseup(function (e) {
        if (!$blockOpenField.is(e.target) && !$toggleBtn.is(e.target) && !$('.toggle-btn-search img').is(e.target) && $blockOpenField.has(e.target).length === 0) {
            $blockOpenField.stop().fadeOut(180);
        }
    });


    /*------------------------ Slider section-natural-power-slider------------------*/

    $(document).ready(function () {
        $('.section-natural-power-slider').slick({
            arrows: true,
            prevArrow: '<div class="prev-arrow"><img src="images/slider-natural-power/arrow-prev.png" alt=""></div>',
            nextArrow: '<div class="next-arrow"><img src="images/slider-natural-power/arrow-next.png" alt=""></div>'
        });

    });


    /* ---------------------Slider section-slider-projects-------------------- */
    $(document).ready(function () {
        $('.section-slider-projects').slick({
            centerMode: true,
            variableWidth: true,
            arrows: false

        });
    });


    /* ------------- slider section-slider-projects-link/search */

    $(document).ready(function () {
        $('.slider-projects').on("mouseover", function () {
            $(this).find('.wrapper-slider-projects').stop().fadeIn(200);
        });
        $('.slider-projects').on("mouseout", function () {
            $(this).find('.wrapper-slider-projects').stop().fadeOut(200);
        });
    });







    /* --------------------Slider-people-say--------------------- */
    $(document).ready(function () {
        $('.slider-people-say').slick({
            arrows: false,
            autoplay: true
        });
    });

    /*------------------------ Slider section-twitter-slider---------------------*/

    $(document).ready(function () {
        $('.wrapper-twit-slider').slick({
            arrows: true,
            prevArrow: '<div class="prev-arrow"><img src="images/section-twitter-slider/prev-arrow-twit.png" alt=""></div>',
            nextArrow: '<div class="next-arrow"><img src="images/section-twitter-slider/next-arrow-twit.png" alt=""></div>'
        });
    });

    /*------------------------ Section-get-in-touch clear form items ---------------------*/

    let $clearItemsBtn = $('.clear-button');
    let $formItems = $('.input-get-in-touch-name');


    $clearItemsBtn.on('click', function (event) {
        event.preventDefault();
        $formItems.val('');
    });

});