//設定dom
const bodyHeight = document.querySelector(".person-height");
const bodyWeight = document.querySelector(".person-weight");

const BMIresultBtnChange = document.querySelector(".output-result-btn");

//按鈕：清除數值按鈕
const resetBtn = document.querySelector(".reset-data");

//文字
const titleBMI = document.querySelector(".title-BMI");

//結果
const resultInnerWord = document.querySelector(".result-word");


//紀錄項目的位置
const BMIrecordList = document.querySelector(".data-list");

//一個空的BMI紀錄，將紀錄list push 到localstorage
const BMIRecord = JSON.parse(localStorage.getItem("BMIrecord")) || [];


//監聽事件
//開始計算BMI
BMIresultBtnChange.addEventListener("click", addBodyBMIData, false);

//清除input
resetBtn.addEventListener("click", resetData, false);


//function：計算BMI
function addBodyBMIData(e) {
  e.preventDefault(); //瀏覽預設行為做清除

  //取出input值
  const heightData = 0.01 * bodyHeight.value; //公分轉換成公尺
  const weightData = bodyWeight.value;

  //沒輸入任何數值時直接中斷function
  if (heightData === "" || weightData === "") {
    alert("請輸入相關數值");
    return; //中斷function
  }

  //BMI運算結果
  const BMIresult = (weightData / (heightData * heightData)).toFixed(2); //.toFixed(2) => 指僅顯示到小數點後2位
  console.log("BMI值為" + BMIresult);

  //按鈕樣式隨BMI動態變化
  titleBMI.style.display = "block";//讓BMI小字出現(預設none)

  if (BMIresult >= 40) {
    //重度肥胖
    BMIresultBtnChange.classList.add("result-over-l-weight-btn");
    resultInnerWord.innerHTML = BMIresult;
    resetBtn.style.display = "block";
    resetBtn.classList.add("over-l-weight-bg");
  } else if (40 > BMIresult && BMIresult >= 35) {
    // 中度肥胖
    BMIresultBtnChange.classList.add("result-over-m-weight-btn");
    resultInnerWord.innerHTML = BMIresult;
    resetBtn.style.display = "block";
    resetBtn.classList.add("over-m-weigh-bg");
  } else if (35 > BMIresult && BMIresult >= 30) {
    //輕度肥胖
    BMIresultBtnChange.classList.add("result-over-s-weight-btn");
    resultInnerWord.innerHTML = BMIresult;
    resetBtn.style.display = "block";
    resetBtn.classList.add("over-s-weight-bg");
  } else if (30 > BMIresult && BMIresult >= 25) {
    //過重
    BMIresultBtnChange.classList.add("result-over-weight-btn");
    resultInnerWord.innerHTML = BMIresult;
    resetBtn.style.display = "block";
    resetBtn.classList.add("over-weight-bg");
  } else if (25 > BMIresult && BMIresult >= 18.5) {
    //理想
    BMIresultBtnChange.classList.add("result-perfect-body-btn");
    resultInnerWord.innerHTML = BMIresult;
    resetBtn.style.display = "block";
    resetBtn.classList.add("perfect-body-bg");
  } else {
    // 過瘦
    BMIresultBtnChange.classList.add("result-over-thin-btn");
    resultInnerWord.innerHTML = BMIresult;
    resetBtn.style.display = "block";
    resetBtn.classList.add("over-thin-bg");
  }

  stopPropagation(e);
  //將運算結果儲存
  //localstorage.setItem('項目名稱',變數名稱)
  // localStorage.setItem("BMIdata", BMIresult);
}

//重置數值
function resetData(e) {
  bodyHeight.value = "";
  bodyWeight.value = "";
  resetBtn.style.display = "none";
  resetBtn.setAttribute("class", "material-symbols-outlined reset-data");
  titleBMI.style.display = "none";
  BMIresultBtnChange.setAttribute("class", "output-result-btn primary-color-bg flex flex-jcc flex-aic flex-col fs-18px");
  resultInnerWord.innerHTML = "看結果";
}

// 參考
// https://github.com/s9220140/BMI---homework/blob/main/js/all.js