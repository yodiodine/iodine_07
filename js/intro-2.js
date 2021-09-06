$(function(){
    
    const activityArr =[];
    for(let i=0; i<$(".activity").length;i++){
        activityArr[i] = $(".activity").eq(i);
            
            
        //Math.round($(".activity").eq(i).offset().top);
    }
    
    $(window).on("scroll",function(){
        let scrollBottom = $(window).scrollTop() + $(window).height();
        
        activityArr.forEach(function(v,i){
            if(scrollBottom > v.offset().top){
                v.css("opacity",1);
            }else{
                v.css("opacity",0);
            }
        })
        
        
    })
    
    
})