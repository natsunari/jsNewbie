//註冊-點擊後執行function
const signUpBtn = document.querySelector(".signup-btn");
signUpBtn.addEventListener("click", newAccountAdd, false);

//註冊-執行function
function newAccountAdd(e) {
  //清除預設行為
  e.preventDefault();

  const userEmail = document.querySelector(".user-email");
  const userPassword = document.querySelector(".user-password");
  //選取input內的資料
  const userEmailText = userEmail.value;
  const userPasswordText = userPassword.value;

  //if else判定
  //if 任一input為空值
  if (userEmailText === "" || userPasswordText === "") {
    alert("請輸入帳號密碼");
    return; //中斷function
  }

  const xhr = new XMLHttpRequest();
  //六角提供的AJAX位置：https://github.com/hexschool/nodejs_ajax_tutorial
  //post是傳送資料(將註冊資料傳至後端)
  xhr.open("post", "https://hexschool-tutorial.herokuapp.com/api/signup", true);
  
  //設定後端要求的傳送格式，只有使用 post 時才須設定。
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    //返回系統訊息(註冊成功或失敗)
    //.parse轉換JSON格式
    const checkMessage = JSON.parse(xhr.responseText);
    if (checkMessage.success === true) {
      alert("恭喜你已完成註冊！");
    } else {
      alert("該帳號已被註冊");
    }
  };
  
  
  //注意寫法
  xhr.send(`email=${userEmailText}&password=${userPasswordText}`);

  
  //清空輸入欄位資訊
  userEmail.value = "";
  userPassword.value = "";
}
