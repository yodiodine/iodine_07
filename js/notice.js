$(function(){
    //뉴스 및 공지사항을 객체배열로
    const noticeArr = [
        {
            "title":"title1",
            "date" :"2021.01.01",
            "content" : "notice1.txt"
        },
        {
            "title":"title2",
            "date" :"2021.02.01",
            "content" : "notice2.txt"
        },
        {
            "title":"title3",
            "date" :"2021.03.01",
            "content" : "notice3.txt"
        },
        {
            "title":"title4",
            "date" :"2021.04.01",
            "content" : "notice4.txt"
        },
        {
            "title":"title5",
            "date" :"2021.05.01",
            "content" : "notice5.txt"
        },
        {
            "title":"title6",
            "date" :"2021.06.01",
            "content" : "notice6.txt"
        },
        {
            "title":"title7",
            "date" :"2021.01.01",
            "content" : "notice7.txt"
        },
        {
            "title":"title8",
            "date" :"2021.08.01",
            "content" : "notice8.txt"
        }
    ];

    //처음 화면 등장 시 페이지 수 만들기
    let pageNum = parseInt(noticeArr.length / 5)+1;
    for(let i=0;i<pageNum;i++){
        $(".page").append("<li><span>");
        $(".page li span").eq(i).text(i+1);
    }
    $(".page li").first().addClass("selected-num");
    
    //처음 화면에서 1페이지에 맞는 게시글 5개씩 배치
    for(let i=0;i<5;i++){
        $(".board").append(`<li>
        <span class="board-num">${noticeArr.length-i}</span>
        <span class="title">${noticeArr[noticeArr.length-1-i].title}</span>
        <span class="date">${noticeArr[noticeArr.length-1-i].date}</span>
    </li>`)
    }

    //페이지를 클릭할 때 마다 게시판 변화 이벤트
    $(".page li").click(function(){
        $(".page li").removeClass();
        $(this).addClass("selected-num")

        let currentNewsIdx = noticeArr.length-$(this).index()*5-1;
        $(".board li").remove();

        for(let i=currentNewsIdx;i>currentNewsIdx-5;i--){
            $(".board").append(`<li>
            <span class="board-num">${i+1}</span>
            <span class="title">${noticeArr[i].title}</span>
            <span class="date">${noticeArr[i].date}</span>
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
            url:"../txt/"+noticeArr[modalNum-1].content,success: function(e){
                $(".modal-wrap").html(e);
            }
        })
    }
    //모달 닫기
    $(".modal-bg").click(function(){
        $(".modal").hide();
    })

})