//抓取input數值
const personHeight = document.querySelector(".person-height");
const personWeight = document.querySelector(".person-weight");

//按下按鈕開始運算
const BMIoutput = document.querySelector('.output-result-btn');
BMIoutput.addEventListener("click", addBodyBMI, false);

//紀錄項目的位置
const BMIrecordList = document.querySelector('.data-list');

//一個空的BMI紀錄，將紀錄list push 到localstorage
const BMIRecord = JSON.parse(localStorage.getItem('BMIrecord')) || [];

//BMI紀錄列表更新


//新增一筆紀錄BMI的資料
function addBodyBMI(e) {
  e.preventDefault();//瀏覽預設行為做清除

  //沒輸入任何數值時直接中斷function
  if (personHeightData === "" || personWeightData === "") {
    alert("請輸入相關數值");
    return; //中斷function
  }

  //開始計算
  const personHeightData = 0.01 * personHeight.value;//公分轉換成公尺
  const personWeightData = personWeight.value;

  //BMI運算結果
  const BMIresult = (personWeightData / (personHeightData * personHeightData)).toFixed(2); //.toFixed(2) => 指僅顯示到小數點後2位
  console.log(BMIresult);

  //將運算結果儲存
  //localstorage.setItem('項目名稱',變數名稱)
  
  localStorage.setItem('BMIresult', BMIresult);

  //for迴圈將li樣式push到指定位置


  //最後：清空input
  personHeight.value = "";
  personWeight.value = "";
}
