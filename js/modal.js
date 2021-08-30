$(function(){
    //모달 닫기 클릭
    $(".modal-close").click(function(){
        $(".artist-modal").hide();
    })
    $(".modal-bg").click(function(){
        $(".artist-modal").hide();
    })
    
    //뮤지션과 배우의 정보를 객체 배열로
    const musician = [
        {
            "name":"레드벨벳",
            "debut":"2014.08.01",
            "jacket":"jacket1",
            "activity":["2021년 제10회 가온차트 뮤직 어워즈 디지털음원부문 올해의 가수상 12월","2021년 제35회 골든디스크 어워즈 디지털음원부문 본상","2020년 제4회 소리바다 베스트 케이뮤직 어워즈 올해의 뮤직상","2020년 제4회 소리바다 베스트 케이뮤직 어워즈 본상"],
            "album":[
                "Happiness","BeNatural","IceCreamCake","TheRed","WinterGarden","TheVelVet","RussianRoulette","Rookie","WouldU","TheRedSummer","Rebirth","PerfectVelvet","ThePerfectRedVelvet","SummerMagic","RBB","TheReVeFestivalDay1","TheReVeFestivalDay2","TheReVeFestivalFinale","Monster","Naughty","OurBelovedBoa4","Queendom"
            ]
        },
        {
            "name":"태민",
            "debut":"2008.05.23",
            "jacket":"jacket2",
            "activity":["2017년 제31회 골든디스크 어워즈 음반부문 본상","2016년 Mnet 아시안 뮤직 어워드 베스트 댄스 퍼포먼스 솔로"],
            "album":[
                "ACE","PressIt","GoodBye","Move","Thirsty","Want","NeverGonnaDanceAgainPrologue","NeverGonnaDanceAgainAct1","NeverGonnaDanceAgainAct2","Advice"
            ]
        },
        {
            "name":"태연",
            "debut":"2007.08.05",
            "jacket":"jacket3",
            "activity":["2020년 제29회 하이원 서울가요대상 음원부문 대상","2020년 제29회 하이원 서울가요대상 본상","2020년 제29회 하이원 서울가요대상 OST상"],
            "album":[
                "별처럼","달라","I","Rain","Why","11-11","MyVoice","SomethingNew","Page0","사계","Purpose","Happy","WhatDoICallYou","Weekend"
            ]
        },
        {
            "name":"샤이니",
            "debut":"2008.05.23",
            "jacket":"jacket4",
            "activity":["2008년 EP 앨범 [누난 너무 예뻐 (Replay)]","2017년 제6회 가온차트 뮤직 어워즈 월드 한류스타상","2017년 제26회 하이원 서울가요대상 인기상","2017년 제31회 골든디스크 어워즈 음반부문 본상"],
            "album":[
                "누난너무예뻐","TheSHINeeWorld","AMIGO","Romeo","2009'YearOfUs","인연","Lucifer","Hello","TheFirst","Sherlock","DreamGirl","WhySoSerious","TheMisconceptionsOfUs","Everybody","ImYourBoy","Odd","MarriedToTheMusic","1of1","1and1","TheStoryOfLightEP1","TheStoryOfLightEP2","TheStoryOfLightEP3","TheStoryOfLightEpilogue","Don'tCallMe","Atlantis"
            ]
        }
    ]
    const actor = [
        {
            "name":"김서형",
            "debut":"1994년 KBS 16기 공채 탤런트",
            "jacket":"jacket1",
            "activity":["2019년 제10회 대한민국 대중문화예술상 국무총리 표창","2019년 제12회 코리아드라마어워즈 핫스타 차이나상","2015년 KBS 연기대상 여자 조연상","2014년 마드리드국제영화제 외국어영화 부문 최우수 여우주연상"],
            "album":[
            ]
        },{
            "name":"강한나",
            "debut":"2013년 영화 '롤러코스터'",
            "jacket":"jacket1",
            "activity":[],
            "album":[
            ]
        },{
            "name":"채정안",
            "debut":"1995년 존슨즈 깨끗한 얼굴선발 대회",
            "jacket":"jacket1",
            "activity":["2018년 코리아 드라마 어워즈 여자 우수연기상","2010년 MBC 연기대상 연기자 부문 PD상"],
            "album":[
            ]
        },{
            "name":"민서",
            "debut":"2017년 11월 '좋아'",
            "jacket":"jacket1",
            "activity":[],
            "album":[
            ]
        }
    ]
    
    let artistIdx;
    //아티스트 클릭
    $(".prof-img").click(function(){
        //스크롤을 맨 위로
        window.scrollTo(0,0);
        $(".artist-modal").show();
        
        artistIdx = $(this).parent().index();
        
        //가수와 배우를 구분하여 배열 선택
        let artistArr;
        $(this).hasClass("musician") ? artistArr = musician : artistArr = actor;
        
        //모달 내용 변경하기
        $(".modal-jacket img").attr("src","img/"+artistArr[artistIdx].jacket+".jpg");
        $(".modal-wrap h1").text(artistArr[artistIdx].name);
        $(".debut-date").text(artistArr[artistIdx].debut);

        $(".activity").children().remove();
        $(".pic").children().remove();
        for(let i=0;i<artistArr[artistIdx].activity.length;i++){
            $(".activity").append("<li>");
            $(".activity li").eq(i).text(artistArr[artistIdx].activity[i]);
        }
        for(let i=0;i<artistArr[artistIdx].album.length;i++){
            $(".pic").append("<li><img>");
            $(".pic li").eq(i).find("img").attr("src","img/pic/"+artistArr[artistIdx].album[i]+".jpg");
        }
    })
    
    
    
    
})