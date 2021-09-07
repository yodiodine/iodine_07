$(function(){
    //뉴스 및 공지사항을 객체배열로
    const newsArr = [
        {
            "title":"뉴이스트, 정규 2집 ‘Romanticize’로 음반 차트 1위→음원 차트 최상위권",
            "date" :"2021.04.20",
            "content" : "news1.txt"
        },
        {
            "title":"나나, 반환점 돈 ‘오! 주인님’ 2막 기대 포인트…#캐릭터 #감정 #만능 엔터테이너",
            "date" :"2021.04.20",
            "content" : "news2.txt"
        },
        {
            "title":"NX 엔터테인먼트 1회 공채 오디션 소식",
            "date" :"2020.09.20",
            "content" : "news3.txt"
        },
        {
            "title":"세븐틴, 자체 콘텐츠 ‘고잉 세븐틴’ 첫 에피소드 공개…예능감+리액션 포텐",
            "date" :"2021.04.15",
            "content" : "news4.txt"
        },
        {
            "title":"방탄소년단 ‘Dynamite’, 美 빌보드 ‘핫 100’ 26위로 또 다시 역주행! 한국 가수 최다 기록 눈앞!",
            "date" :"2021.03.31",
            "content" : "news5.txt"
        },
        {
            "title":"'연애혁명’ 박지훈, 랜선 집들이? 공주영 자취방 브이로그 공개",
            "date" :"2020.09.03",
            "content" : "news6.txt"
        },
        {
            "title":"키이스트, ‘2021 제작 드라마 1차 라인업 공개’",
            "date" :"2021.01.20",
            "content" : "news7.txt"
        },
        {
            "title":"NX 엔터테인먼트 2회 공채 오디션 소식",
            "date" :"2021.03.20",
            "content" : "news8.txt"
        },
        {
            "title":"키이스트와 와이낫미디어 손잡다.",
            "date" :"2021.03.30",
            "content" : "news9.txt"
        },
        {
            "title":"노라조, 보는 맛 더한 ‘백파더’ 속 ‘의상 맛집’…장인 정신 빛났다",
            "date" :"2021.03.11",
            "content" : "news10.txt"
        },
        {
            "title":"윤종신-제아-민서-루시, 프라이빗 메시지 서비스 ‘디어유 버블’ 오늘(13일) 오픈!",
            "date" :"2021.05.13",
            "content" : "news11.txt"
        },
        {
            "title":"민서, 영화 ‘화평반점’ 캐스팅 확정…첫 스크린 데뷔",
            "date" :"2021. 08. 13",
            "content" : "news12.txt"
        },
        {
            "title":"‘컴백 D-3’ 레드벨벳, 신곡 ‘Queendom’ MV 티저 13일 공개!",
            "date" :"2021.08.13",
            "content" : "news13.txt"
        },
        {
            "title":"박지훈 컴백, 오늘 새 미니앨범 ‘My Collection’ 발표 [공식]",
            "date" :"2021.08.13",
            "content" : "news14.txt"
        },
        {
            "title":"ENHYPEN, 일상 담은 브이로그 콘텐츠 예고! ‘EN-loG’(엔로그) 타임테이블 공개!",
            "date" :"2021.08.06",
            "content" : "news15.txt"
        },
        {
            "title":"키이스트X와이낫미디어, '2021 드라마 극본 공모전' 개최",
            "date" :"2021. 05. 24",
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
    $(".page li").on("click",function(){
        //현재 페이지 표시
        $(".page li").removeClass();
        $(this).addClass("selected-num");
        //게시판 li지운 후 새로 생성
        let currentNewsIdx = newsArr.length-$(this).index()*5-1;
        $(".board li").remove();
        for(let i=currentNewsIdx;i>currentNewsIdx-5;i--){
            $(".board").append(`<li>
            <span class="board-num">${i+1}</span>
            <span class="title">${newsArr[i].title}</span>
            <span class="date">${newsArr[i].date}</span>
        </li>`);
        }
    })
    
    //게시글 클릭 시 모달 띄우기 
    $(".board").on("click",".title",function(){
        $(".modal").show();
        modalShow($(this));
    })
    function modalShow(num){
        let modalNum = (num.siblings(".board-num").text());
        $.ajax({
            url:"txt/"+newsArr[modalNum-1].content,
            success: function(e){
                $(".modal-date").html(newsArr[modalNum-1].date);
                $(".modal-wrap h1").html(newsArr[modalNum-1].title);
                $(".modal-content").html(e);
            }
        })
    }
    //모달 닫기
    $(".modal-bg").click(function(){
        $(".modal").hide();
    })
    $(".modal-close").click(function(){
        $(".modal").hide();
    })
})
