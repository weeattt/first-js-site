//이해하기위해 최대한 큰그림으로 레벨링을 해보자.

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

//그냥 html 소스를 js에 불러오기위한 작업들을 한것이다. 일단 세줄은 ㅇㅇ

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    greeting.innerText = "Hello" + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//자 그냥 스트레스 받지말고, 이 함수는 먼저 event 객체에 대하여 프리벤트디폴트를 실행하고
//그다음 로그인폼 클리스리스트에 히든이라는 변수를 더해줄꺼고
//그다음 로그인인풋의 프로퍼티 밸류에 사용자이름을 적어줄꺼야
// 그다음 그리팅태그에 이너텍스트로 유저에게 인사를해주고
// 그리팅태그에 클래스리스트에서 히든클레스내임을 지울꺼야
// 이게 뭔지 정확히 알려고 함으로써 시간을 낭비하지마. 그냥 이렇게 알고 넘어가. 어짜피 지금 다 이해못해.
    

loginForm.addEventListener("submit", onLoginSubmit);
// 16번줄은 태그에 메소드르르 붙여서  submit 이벤트가 발생했을때  onlonginsubmit 함수를 실행시키는 코드.

console.log(localStorage.setItem("username", "nico"));
