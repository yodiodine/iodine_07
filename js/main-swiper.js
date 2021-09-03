window.onload=function(){
    let count=3;
    
    //$(window).width()<=768 ? count=1 : count=3;
    
    let swiper = new Swiper(".swiper-container", {
        slidesPerView: count,
        spaceBetween: 30,
        loop:true
    });
    
//    $(window).on("resize",function(){
//        
//        $(window).width()<=768 ? count=1 : count=3;
//
//        swiper = new Swiper(".swiper-container", {
//            slidesPerView: count,
//            spaceBetween: 10,
//            loop:true
//        });
//    })

}
