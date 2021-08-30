window.onload=function(){
    let test;
    
    $(window).width()<=768 ? test=1 : test=3;
    
    let swiper = new Swiper(".swiper-container", {
        slidesPerView: test,
        spaceBetween: 30,
        loop:true,
    });
    $(window).on("resize",function(){
        
        $(window).width()<=768 ? test=1 : test=3;

        swiper = new Swiper(".swiper-container", {
            slidesPerView: test,
            spaceBetween: 30,
            loop:true,
        });
    })

}
