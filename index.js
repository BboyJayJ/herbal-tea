$(document).ready(function () {
    $(window).scroll(function () {
        let hyperlink = $(".hyperlink");

        let scrollPos = $(window).scrollTop();

        let scrollThreshold = 600;

        if (scrollPos > scrollThreshold) {
            hyperlink.fadeIn(1500);
        } else {
            hyperlink.fadeOut(1500);
        }

        /*fly-in EF1*/
        var $element = $('.content');
        var positionFromTop = $element.offset().top;
        var windowHeight = $(window).height();
        var triggerPoint = positionFromTop - windowHeight + 200; // 觸發動畫滾動位置

        if ($(window).scrollTop() > triggerPoint) {
            $element.addClass('active');
        }

        /*fly-in EF2*/
        var $element = $('.img-EF');
        var positionFromTop = $element.offset().top;
        var windowHeight = $(window).height();
        var triggerPoint = positionFromTop - windowHeight + 200; // 觸發動畫滾動位置


        if ($(window).scrollTop() > triggerPoint) {
            $element.addClass('active1');
        }

        /*fly-in EF3*/
        var $element = $('.blogimg');
        var positionFromTop = $element.offset().top;
        var windowHeight = $(window).height();
        var triggerPoint = positionFromTop - windowHeight + 200; // 觸發動畫滾動位置


        if ($(window).scrollTop() > triggerPoint) {
            $element.addClass('active2');
        }

        $(document).ready(function () {
            $('.text').css('left', '0');
        });
    });
    $(window).scroll();

    /*slogan ef*/
    anime.timeline({ loop: true })
        .add({
            targets: '.ml15 .word',
            scale: [14, 1],
            opacity: [0, 1],
            easing: "easeOutCirc",
            duration: 800,
            delay: (el, i) => 800 * i
        }).add({
            targets: '.ml15',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
});