$('.my-row').css("height", "93px");
$(window).resize(function () {
    var MyWidth = $(window).width();
    
    if (MyWidth < 1001) {
        if (MyWidth < 792) {
            $('.international-img').css("display", "none");
            
                if (MyWidth < 564) {

                    $('.dropdown-menu-menu').removeClass('dropdown-menu-menu').addClass('dropdown-menu-menu1');
                    $('.dropdown-menu-3').mouseover(function () {
                        $(this).children('div.dropdown-menu-menu1').show();
                    });
                    $('.dropdown-menu-3').mouseout(function () {
                        $(this).children('div.dropdown-menu-menu1').hide();
                    });

                
            }
        }



        if (MyWidth > 564) {
            $('.dropdown-menu-menu1').removeClass('dropdown-menu-menu1').addClass('dropdown-menu-menu');
            $('.dropdown-menu-3').mouseover(function () {
                $(this).children('div.dropdown-menu-menu').show();
            });
            $('.dropdown-menu-3').mouseout(function () {
                $(this).children('div.dropdown-menu-menu').hide();
            });


           
                if (MyWidth > 792) {
                    $('.international-img').css("display", "block");

                }
            
            $('.main-center').removeClass('main-center').addClass('main-center1');
            $('.my-body').removeClass('my-body').addClass('my-body1');
            $('.my-row').css("height", "10px");
            $('.car').addClass("car1");

        }


    }
    if (MyWidth > 1001) {
        $('.my-row').css("height", "93px");
        $('.my-body1').removeClass('my-body1').addClass('my-body');
        $('.main-center1').removeClass('main-center1').addClass('main-center');
        $('.car').removeClass("car1");
        $('.dropdown').mouseover(function () {
            $(this).children('div.dropdown-menu').show();
        });
        $('.dropdown').mouseout(function () {
            $(this).children('div.dropdown-menu').hide();
        });
        $('.dropdown-menu-3').mouseover(function () {
            $(this).children('div.dropdown-menu-menu').show();
        });
        $('.dropdown-menu-3').mouseout(function () {
            $(this).children('div.dropdown-menu-menu').hide();
        });



    }
});