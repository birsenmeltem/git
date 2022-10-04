$(document).ready(function(){
    let img_total=$(".slider li").length,
        active_img=0;
    $(".slider li:not(:first)").hide();
    //otomatik slide geçiş
    setInterval(SlideAuto,4000);
    function SlideAuto(){
        $(".navigation .nav-button").removeClass("active");
        $(".slider li").hide();
        if(active_img<img_total-1){
            active_img++;
            $(".navigation .nav-button:eq("+active_img+")").addClass("active");
            $(".slider li:eq("+active_img+")").fadeIn(500);
        }
        else {
            $(".navigation .nav-button:eq(0)").addClass("active");
            $(".slider li:eq(0)").fadeIn(500);
            active_img = 0;
        }
    }

    //otomatik sıranumarası
    for(let i=1;i<=img_total;i++){
        if(i==1){
            $(".navigation").append("<button class='nav-button active'>"+i+"</button>");
        }
        else{
            $(".navigation").append("<button class='nav-button'>"+i+"</button>");
        }
    }



    //next ve prev butonları
    $("#next").click(function (){
        active_img=$(".navigation .active").index()+1;

        $(".slider li").hide();
        $(".navigation .nav-button").removeClass("active");
        if(active_img<img_total){
            $(".navigation .nav-button:eq("+active_img+")").addClass("active")
            $(".slider li:eq("+active_img+")").fadeIn(500);
        }
        else{
            $(".navigation button:eq(0)").addClass("active")
            $(".slider li:eq(0)").fadeIn(500);
        }
    });
    $("#prev").click(function (){
        active_img=$(".navigation .active").index()-1;
        $(".slider li").hide();
        $(".navigation .nav-button").removeClass("active");
        if(active_img<img_total){
            $(".navigation .nav-button:eq("+active_img+")").addClass("active")
            $(".slider li:eq("+active_img+")").fadeIn(500);
        }
        else{
            $(".navigation .nav-button:eq(img_total)").addClass("active")
            $(".slider li:eq(img_total)").fadeIn(500);
        }
    });


    // tıklayınca çalışsın
    // $(".navigation .nav-button").click(function (){
    //     let indis=$(this).index();
    //     $(".navigation .nav-button").removeClass("active")
    //     $(this).addClass("active");
    //     $(".slider li").hide();
    //     $(".slider li:eq("+indis+")").fadeIn(500);
    // });


    //üstüne gelince çalışsın
    $(".navigation .nav-button").hover(function (){
        let indis=$(this).index();

        $(".slider li").hide();
        $(".slider li:eq("+indis+")").fadeIn(500);

        $(".navigation .nav-button").removeClass("active")
        $(this).addClass("active");
    },function (){});

});
