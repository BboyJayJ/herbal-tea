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
    });
    $(window).scroll();
});