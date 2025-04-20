$(".sidebarButton").click(function(){
    $(".sidebar").css({"min-width": "100%", "display": "flex"})
    $(".main").hide();
})

$(".sidebarHide").click(function(){
    $(".sidebar").removeAttr('style');
    $(".main").removeAttr('style');
})