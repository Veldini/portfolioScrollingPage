$(document).ready(function () {

    $('#image').hide();

    $('#toggle-button').click(function () {
        var toggleWidth = $("#toggle").width() == 1180 ? "440" : "1180px";
        $('#toggle').animate({ width: toggleWidth });
        $('#image').toggle();
        $('#sliderNav').toggle();

    });








});















