$(document).ready(function () {   
    $('#flower').click(function () {
      $('.text').toggle();
    });
    
     $('#plants').click(function () {
//        $('.infopanel').toggle(2000);     
        $(this).toggleClass("bigger");
    });
    
     $(function () {
        $("#flower").draggable();
    });
    
});
