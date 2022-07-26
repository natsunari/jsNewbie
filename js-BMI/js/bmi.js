//設定dom
const bodyHeight = document.querySelector(".person-height");
const bodyWeight = document.querySelector(".person-weight");
const BMIresultBtnChange = document.querySelector(".output-result-btn");

//按鈕：清除數值按鈕
const resetBtn = document.querySelector(".reset-data");

//文字
const titleBMI = document.querySelector(".title-BMI");
// const noData = document.querySelector(".noData");

//結果
const resultInnerWord = document.querySelector(".result-word");

//取出localStorage的值，並轉換型別為陣列
let BMIlocalStorageData = JSON.parse(localStorage.getItem('bmiItem')) || [];

//下方紀錄清單
let BMIrecordList = document.querySelector(".BMIRecordList"); 


//監聽事件
//開始計算BMI
BMIresultBtnChange.addEventListener("click", addBodyBMIData, false);

//清除input
resetBtn.addEventListener("click", resetData, false);

//function：計算BMI+儲存localStorage
function addBodyBMIData(e) {
  e.preventDefault(); //瀏覽預設行為做清除

  //取出input值
  const heightData = bodyHeight.value;
  const weightData = bodyWeight.value;
  let bodyState = "";//標註身體BMI狀態

  //BMI運算結果
  const BMIresult = (weightData /(heightData * 0.01 * heightData * 0.01)).toFixed(2); //.toFixed(2) => 僅顯示到小數點後2位
  console.log("BMI值為" + BMIresult);

  //沒輸入任何數值時直接中斷function
  if (heightData === "" || weightData === "") {
    alert("請輸入相關數值");
    return; //中斷function
  }

  //按鈕樣式隨BMI動態變化
  titleBMI.style.display = "block"; //讓BMI小字出現(預設none)
  resetBtn.style.display = "block"; //讓重製按鈕出現(預設none)
  // noData.style.display="none";
  resultInnerWord.innerHTML = BMIresult;

  if (BMIresult >= 40) {
    //重度肥胖
    bodyState = "重度肥胖";
    BMIresultBtnChange.classList.add("result-over-l-weight-btn");
    resetBtn.classList.add("over-l-weight-bg");
  } else if (40 > BMIresult && BMIresult >= 35) {
    // 中度肥胖
    bodyState = "中度肥胖";
    BMIresultBtnChange.classList.add("result-over-m-weight-btn");
    resetBtn.classList.add("over-m-weigh-bg");
  } else if (35 > BMIresult && BMIresult >= 30) {
    //輕度肥胖
    bodyState = "輕度肥胖";
    BMIresultBtnChange.classList.add("result-over-s-weight-btn");
    resetBtn.classList.add("over-s-weight-bg");
  } else if (30 > BMIresult && BMIresult >= 25) {
    //過重
    bodyState = "過重";
    BMIresultBtnChange.classList.add("result-over-weight-btn");
    resetBtn.classList.add("over-weight-bg");
  } else if (25 > BMIresult && BMIresult >= 18.5) {
    //理想
    bodyState = "理想";
    BMIresultBtnChange.classList.add("result-perfect-body-btn");
    resetBtn.classList.add("perfect-body-bg");
  } else {
    // 過瘦
    bodyState = "過瘦";
    BMIresultBtnChange.classList.add("result-over-thin-btn");
    resetBtn.classList.add("over-thin-bg");
  }

  // 儲存到localStorage
  //先設計localstorge的資料格式
  const bmiDetailData = {
    height: heightData,
    weight: weightData,
    BMI: BMIresult,
    state: bodyState,
  };

  BMIlocalStorageData.push(bmiDetailData);//將對應的bmiDetailData數值push到BMIlocalStorageData內
  const BMIlocalStorageDataStr = JSON.stringify(BMIlocalStorageData);//getItem轉換型別為字串
  localStorage.setItem('bmiItem', BMIlocalStorageDataStr);//localStorage只能儲存字串

  update();

}

//update Record List 新增資料在下方

function update(){
  let bmiDateRecordList = "";//先設定空的字串，預計放入for迴圈的li
  for(let i=0; i < BMIlocalStorageData.length ; i++){
    // console.log('update');
    bmiDateRecordList +=`<li class="flex flex-aic bmi-record-card mb-16">
    <span class="bmi-mark bmi-perfect"></span>
    <p class="ptb-20px mr-40px fs-20px">${BMIlocalStorageData[i].state}</p>
    <span class="fs-12px ml-30px mr-8px">BMI</span>
    <p class="fs-20px mr-42px">${BMIlocalStorageData[i].BMI}</p>
    <span class="fs-12px mr-8px">height</span>
    <p class="fs-20px mr-42px">${BMIlocalStorageData[i].height+"cm"}</p>
    <span class="fs-12px mr-8px">weight</span>
    <p class="fs-20px mr-42px">${BMIlocalStorageData[i].weight+"kg"}</p>
    <span class="fs-12px mr-8px">06-19-2017</span>
    <a href="#" class="mr-8px p-8px">
        <span class="material-symbols-outlined">
            delete
        </span>
    </a>
</li>`;
  }
  BMIrecordList.innerHTML = bmiDateRecordList;
}



//清除與重置數值
function resetData(e) {
  bodyHeight.value = "";
  bodyWeight.value = "";
  resetBtn.style.display = "none";
  resetBtn.setAttribute("class", "material-symbols-outlined reset-data");
  // titleBMI.style.display = "none";
  noData.style.display="block";
  BMIresultBtnChange.setAttribute(
    "class",
    "output-result-btn primary-color-bg flex flex-jcc flex-aic flex-col fs-18px"
  );
  resultInnerWord.innerHTML = "看結果";
}

// 參考
// https://github.com/s9220140/BMI---homework/blob/main/js/all.js
