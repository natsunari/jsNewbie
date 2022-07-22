//文字
let inputWord = document.querySelector(".input-word");
//送出執行按鈕
let submitBtn = document.querySelector(".submit-btn-style");
//清單
let todoList = document.querySelector(".todoList");

//設定一個空的陣列，將todolist push進去
let todoArray = JSON.parse(localStorage.getItem("todoData")) || [];

//資料新增
function updateTodoList() {
  let todoListInner = ""; //設定一個空的字串放入for迴圈中的li
  for (let i = 0; i < todoArray.length; i++) {
    // todoListInner +=  "<li class='m-32 m-1rem todolist-inner-style'>" + "<a class='dele-btn-style m-8' data-listNum = " + i + " href ='#'>刪除事項</a>" + "第" + [i + 1] + "項：" + todoArray[i] + "</li>";
    //使用JavaScript Template String 樣板
    todoListInner += `<li class='m-32 m-1rem todolist-inner-style'>
        <a class='dele-btn-style m-8' data-listNum =${i} href ='#'>刪除事項</a>
        第${[i + 1]}項：${todoArray[i]}</li>`;
  }
  todoList.innerHTML = todoListInner;
}

//新增todo的function
function addNewList(e) {
  if (inputWord.value === "") {
    inputWord.value = "";
    alert("請輸入代辦事項");
    return;
  }
  todoArray.push(inputWord.value); //取出inputWord的value後，push到todoArray
  inputWord.value = ""; //執行完後清空input
  updateTodoList(); //重新渲染資料的function
  localStorage.setItem("todoData", JSON.stringify(todoArray)); //將資料設定入 html內 localStorage內
}

//刪除的function
function deleList(e) {
  let deleListItem = e.target.dataset.listnum; //檢查自己設定的標籤
  let nodeName = e.target.nodeName; //設定元素物件名
  if (nodeName !== "A") {
    return;
  } //此處的a為<a>標籤，若不為<a>則中斷

  todoArray.splice(deleListItem, 1); // 語法解釋： (變數名稱 , 刪除往後之數量)
  updateTodoList(); //重新渲染資料的function

  localStorage.setItem("todoData", JSON.stringify(todoArray)); //將資料設定入 html內 localStorage內
}

submitBtn.addEventListener("click", addNewList, false);
todoList.addEventListener("click", deleList, false);
