$(document).ready(function (){
   $(".tab-content div:not(:first)").hide();
   $(".tab li").click(function (){
      let indis=$(this).index();
     //1.yol... index yoluyla
      /*$(".tab-content div").hide();
      $(".tab-content div:eq("+indis+")").show();
      $(".tab li").removeClass("active");
      $(".tab li:eq("+indis+")").addClass("active");
      */
      //2.yol attiribute
      let tab_content=$(this).attr("rel");
      $(".tab-content div").hide();
      $(tab_content).fadeIn();
      $(".tab li").removeClass("active");
      $(".tab li:eq("+indis+")").addClass("active");
   })
});