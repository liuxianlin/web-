$(window).resize(function () {
    var MyWidth = $(window).width();
    if(MyWidth < 1224){
        $('.bottom-min').css("display","none");
    }
    if(MyWidth > 1224){
        $('.bottom-min').css("display","block");
    }
    if(MyWidth < 1211){
        $('.banner-son-main').removeClass('banner-son-main').addClass('banner-son-main1');
       
    }
    if(MyWidth > 1211){
        $('.banner-son-main1').removeClass('banner-son-main1').addClass('banner-son-main')

    }
});