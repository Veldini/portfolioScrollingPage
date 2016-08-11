$(document).ready(function () {

    $('#container').hide();
    $('#container1').hide();
    $('#container2').hide();
    $('#container3').hide();
    $('#container4').hide();

    $('#sliderNav').hide();
    $('#sliderNav1').hide();
    $('#sliderNav2').hide();
    $('#sliderNav3').hide();
    $('#sliderNav4').hide();




    $('#toggle-button').click(function () {
        var toggleWidth = $("#toggle").width() == 1150 ? "470" : "1150px";
        $('#toggle').animate({ width: toggleWidth });
        $('#container').toggle();
        $('#sliderNav').toggle();
    });
    $('#toggle-button1').click(function () {
        var toggleWidth = $("#toggle1").width() == 1150 ? "470" : "1150px";
        $('#toggle1').animate({ width: toggleWidth });
        $('#container1').toggle();
        $('#sliderNav1').toggle();
    });
    $('#toggle-button2').click(function () {
        var toggleWidth = $("#toggle2").width() == 1150 ? "470" : "1150px";
        $('#toggle2').animate({ width: toggleWidth });
        $('#container2').toggle();
        $('#sliderNav2').toggle();
    });
    $('#toggle-button3').click(function () {
        var toggleWidth = $("#toggle3").width() == 1150 ? "470" : "1150px";
        $('#toggle3').animate({ width: toggleWidth });
        $('#container3').toggle();
        $('#sliderNav3').toggle();
    });
    $('#toggle-button4').click(function () {
        var toggleWidth = $("#toggle4").width() == 1150 ? "470" : "1150px";
        $('#toggle4').animate({ width: toggleWidth });
        $('#container4').toggle();
        $('#sliderNav4').toggle();
    });
});
