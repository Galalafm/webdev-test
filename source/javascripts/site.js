$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 50) {
        $(".header").addClass("header-scrolled");
    }
});
