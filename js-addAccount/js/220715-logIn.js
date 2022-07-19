//登入-點擊後執行function
const logInBtn = document.querySelector(".log-in-btn");
logInBtn.addEventListener("click", userLogIn, false);

//執行function
function userLogIn(e) {
  //清除預設行為
  e.preventDefault();

  const logInEmail = document.querySelector(".log-in-email");
  const logInPassword = document.querySelector(".log-in-password");
  //撈取input value
  const logInEmailText = logInEmail.value;
  const logInPasswordText = logInPassword.value;

  //1-用if else 判定input是否有內容
  if (logInEmailText === "" || logInPasswordText === "") {
    alert("請輸入帳號密碼");
    return; //中斷function
  }

  //2-post input的value到後端
  //首先宣告一個變數，讓他等於 XMLHttpRequest
  const xhr = new XMLHttpRequest();

  //變數打開建立連線，並選擇打開的方式，設定是否同步
  xhr.open("post", "https://hexschool-tutorial.herokuapp.com/api/signin", true);

  //設定後端要求的傳送格式，只有使用 post 時才須設定。
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  //確認連線完之後，才觸發某些函式
  xhr.onload = function () {
    const logInBackMessage = JSON.parse(xhr.responseText);
    if (logInBackMessage.success === true) {
      alert("登入成功");
    } else {
      alert("登入失敗，請檢查帳號密碼是否輸入正確");
    }
  };

  //最後送出連線.send。
  xhr.send(`email=${logInEmailText}&password=${logInPasswordText}`);

  //清空欄位
  logInEmail.value = "";
  logInPassword.value = "";
}

// https://codepen.io/D_HLC/pen/yLPXNbQ?editors=0010
