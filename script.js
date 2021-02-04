$(document).ready(function(){

    var wrapperWidth = $("#wrapper").css("width");
    var contentBoxWidth = (55+"%");
    $(".btn1").on("click", function(){
        $(".contentBoxes").css("width", wrapperWidth);
        $("#contentBoxContainer").css("justify-content", "space-evenly")
        $(".btn1").hide();
        $(".btn1A").show();
    })

    $(".btn1A").on("click", function(){
        $(".contentBoxes").css("width", contentBoxWidth);
        $(".btn1A").hide();
        $(".btn1").show();
    })

});