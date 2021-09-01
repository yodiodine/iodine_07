$(function(){
    //뉴스 및 공지사항을 객체배열로
    const newsArr = [
        {
            "title":"title1",
            "date" :"2021.01.01",
            "content" : "news1.txt"
        },
        {
            "title":"title2",
            "date" :"2021.02.01",
            "content" : "news2.txt"
        },
        {
            "title":"title3",
            "date" :"2021.03.01",
            "content" : "news3.txt"
        },
        {
            "title":"title4",
            "date" :"2021.04.01",
            "content" : "news4.txt"
        },
        {
            "title":"title5",
            "date" :"2021.05.01",
            "content" : "news5.txt"
        },
        {
            "title":"title6",
            "date" :"2021.06.01",
            "content" : "news6.txt"
        },
        {
            "title":"title7",
            "date" :"2021.01.01",
            "content" : "news7.txt"
        },
        {
            "title":"title1",
            "date" :"2021.08.01",
            "content" : "news8.txt"
        },
        {
            "title":"title9",
            "date" :"2021.01.01",
            "content" : "news9.txt"
        },
        {
            "title":"title10",
            "date" :"2021.01.01",
            "content" : "news10.txt"
        },
        {
            "title":"title11",
            "date" :"2021.01.01",
            "content" : "news11.txt"
        },
        {
            "title":"title12",
            "date" :"2012.01.01",
            "content" : "news12.txt"
        },
        {
            "title":"title13",
            "date" :"2013.01.01",
            "content" : "news13.txt"
        },
        {
            "title":"title14",
            "date" :"2014.01.01",
            "content" : "news14.txt"
        },
        {
            "title":"title15",
            "date" :"2015.01.01",
            "content" : "news15.txt"
        },
        {
            "title":"title16",
            "date" :"2016.01.01",
            "content" : "news16.txt"
        }
    ];
    const noticeArr = 0;

    //처음 화면 등장 시 페이지 수 만들기
    let pageNum = parseInt(newsArr.length / 5)+1;
    for(let i=0;i<pageNum;i++){
        $(".page").append("<li><span>");
        $(".page li span").eq(i).text(i+1);
    }
    $(".page li").first().addClass("selected-num");
    
    //처음 화면에서 1페이지에 맞는 게시글 5개씩 배치
    for(let i=0;i<5;i++){
        $(".board").append(`<li>
        <span class="board-num">${newsArr.length-i}</span>
        <span class="title">${newsArr[newsArr.length-1-i].title}</span>
        <span class="date">${newsArr[newsArr.length-1-i].date}</span>
    </li>`)
    }

    //페이지를 클릭할 때 마다 게시판 변화 이벤트
    $(".page li").click(function(){
        $(".page li").removeClass();
        $(this).addClass("selected-num")

        let currentNewsIdx = newsArr.length-$(this).index()*5-1;
        $(".board li").remove();

        for(let i=currentNewsIdx;i>currentNewsIdx-5;i--){
            $(".board").append(`<li>
            <span class="board-num">${i+1}</span>
            <span class="title">${newsArr[i].title}</span>
            <span class="date">${newsArr[i].date}</span>
        </li>`)
        }
    })
    
    //게시글 클릭 시 모달 띄우기 
    $(".title").click(function(){
        $(".modal").show();
        modalShow($(this));
    })
    function modalShow(num){
        let modalNum = (num.siblings(".board-num").text());
        $.ajax({
            url:"../txt/"+newsArr[modalNum-1].content,success: function(e){
                $(".modal-wrap").html(e)
            }
        })
    }
    //모달 닫기
    $(".modal-bg").click(function(){
        $(".modal").hide();
    })

})