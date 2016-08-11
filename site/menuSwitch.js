$(document).ready(function () {

    var a = ["imgs/eva-02.svg", "imgs/visit-01.svg", "imgs/peanut-03.svg", "imgs/gem-04.svg", "imgs/me-05.svg", "imgs/contact-07.svg"];
    var b = ["imgs/a_eva-02.svg", "imgs/a_visit-01.svg", "imgs/a_peanut-03.svg", "imgs/a_gem-04.svg", "imgs/a_me-05.svg","imgs/a_contact-07.svg"];


    $(".a").click(function () {
        $(".a").each(function (index) {
            $("#id" + (index + 1) + " a img").attr('src', a[index]);
        });
        var x = $(this).attr('id');
        var y = x.split('id')[1];
        $("#id" + (y) + " a img").attr('src', b[y - 1]);
    });



});





