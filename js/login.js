function checkValue(){
    let alert = document.querySelector(".alert");
    let id = document.querySelector("#id").value;
    let password = document.querySelector("#password").value;
    
    if(!id){
        alert.innerText = "아이디를 입력하세요.";
        return false;
    }else if(!password){
        alert.innerText = "비밀번호를 입력하세요.";
        return false;
    }else{
        location.href = "../index.html"
    }
}
