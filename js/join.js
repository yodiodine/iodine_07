function checkValue(){
    let alert = document.querySelector(".alert");
    
    let name = document.querySelector("#name").value;
    let birth = document.querySelector("#birth").value;
    let id = document.querySelector("#id").value;
    let password = document.querySelector("#password").value;
    let passwordCheck = document.querySelector("#password-check").value;
    let agree = document.querySelector("#agree").checked;
    
    if(!name){
        alert.innerText = "이름을 입력하세요.";
        return false;
    }else if(!birth){
        alert.innerText = "생일을 입력하세요.";
        return false;
    }else if(!id){
        alert.innerText = "아이디를 입력하세요.";
        return false;
    }else if(!password){
        alert.innerText = "비밀번호를 입력하세요.";
        return false;
    }else if(!passwordCheck){
        alert.innerText = "비밀번호 확인을 하세요.";
        return false;
    }else if(!agree){
        alert.innerText = "개인정보 수집 이용 동의를 않을 경우 가입을 할 수 없습니다.";
        return false;
    }else if(password!=passwordCheck){
        alert.innerText = "비밀번호가 일치하지 않습니다.";
        return false;
    }else{
        location.href = "../index.html"
    }
}
