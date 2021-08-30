$(function(){
    let scrollBlock = false;
    //마우스휠 이벤트
    $("section").on("scroll mousewheel DOMMouseScroll",function(e,delta){
        delta = e.originalEvent.wheelDelta;
        if(!scrollBlock){
            if(delta<0){
                //아래로
                $("body,html").stop().animate({scrollTop:$(this).next().offset().top},500);
            }else{
                //위로
                try{
                    $("body,html").stop().animate({scrollTop:$(this).prev().offset().top},500);
                }catch(error){
                    console.log("위쪽으로 콘텐츠가 없음")
                }
            }
            e.preventDefault();
        }
    })
    
    //artwork 이미지 채우기
    for(let i=0;i<$(".swiper-slide").length;i++){
        $(".swiper-slide").eq(i).css("background","url(img/video"+(i+1)+".jpg) no-repeat center center").css("background-size","cover");
    }

    //artwork 각 썸네일 클릭 시 모달 창 띄우기
        //비디오 id
    const videoIdArr=["c9RzZpV460k",
                     "rthppvDJ2fA",
                     "RmuL-BPFi2Q",
                     "lNvBbh5jDcA",
                     "sQg4VCB3bYw",
                     "4TWR90KJl84",
                     "PSYRbJjIT6U",
                     "KUvOQlkLNhE",
                     "hFQL7BS6lrs",
                     "Ujb-gvqsoi0"];
    let swiperIdx;
    //비디오 클릭 시 url주소 변경 & 스크롤 막기
    $(".swiper-slide").on("click",function(){
        $(".artwork-modal").show();
        swiperIdx = $(this).data().swiperSlideIndex;
        $("#player").attr("src","https://www.youtube.com/embed/"+videoIdArr[swiperIdx]);
        
        //스크롤막기
        scrollBlock = true;
        $("html").css("overflow","hidden");
        
    })
    //artwork 닫기 버튼
    $(".modal-close").on("click",function(){
        $(".artwork-modal").hide();
        $("#player").attr("src","https://www.youtube.com/embed/"+swiperIdx);
        //스크롤 복원
        scrollBlock = false;
        $("html").css("overflow","visible");
        
    })
    //뉴스 호버 이벤트
    $(".news-box ul li").mouseenter(function(){
        let idx = $(this).index();
        //해당 li background color 변경
        $(".news-box ul li").removeClass();
        $(this).addClass("selected-news");
        
        //이미지 변화
        $(".news-img").css("background","url(img/newsimg"+(idx+1)+".jpg) no-repeat center center").css("background-size","cover")
    });
})
