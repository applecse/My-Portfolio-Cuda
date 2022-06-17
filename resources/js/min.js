$(document).ready(function(){

 $(".js-services-section").waypoint(function(direction){
    if (direction == "down"){
        $("nav").addClass("sticky");

    } else {
        $("nav").removeClass("sticky");
    }
 })


  //MIXIUP (PORTFOLIO SECTION)



    var mixer = mixitup('.container');
});

