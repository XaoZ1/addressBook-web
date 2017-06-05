$(function () {
    var menu = $("#menu");
    $("#menu-btn").click(function () {
       var cl =  menu.attr('class');
       if(cl.indexOf('hidden-xs') == -1){
            menu.attr('class','hidden-xs');
        }else{
            menu.removeClass('hidden-xs');
       }
    })
    $("#menu li").click(function () {
        $(this).attr('class','active').siblings().removeClass('active');
    })
    $("#left-side .sidebar li").click(function () {
        $(this).attr('class','active').siblings().removeClass('active');
    })
})

