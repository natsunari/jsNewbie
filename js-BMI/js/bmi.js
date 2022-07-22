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

//監聽事件
//開始計算BMI
BMIresultBtnChange.addEventListener("click", addBodyBMIData, false);

//清除input
resetBtn.addEventListener("click", resetData, false);

//function：計算BMI
function addBodyBMIData(e) {
  e.preventDefault(); //瀏覽預設行為做清除

  //取出input值
  const heightData = bodyHeight.value;
  const weightData = bodyWeight.value;

  //BMI運算結果
  const BMIresult = (
    weightData /
    (heightData * 0.01 * heightData * 0.01)
  ).toFixed(2); //.toFixed(2) => 指僅顯示到小數點後2位
  console.log("BMI值為" + BMIresult);

  //沒輸入任何數值時直接中斷function
  if (heightData === "" || weightData === "") {
    alert("請輸入相關數值");
    return; //中斷function
  }

  //按鈕樣式隨BMI動態變化
  titleBMI.style.display = "block"; //讓BMI小字出現(預設none)
  resetBtn.style.display = "block"; //讓重製按鈕出現(預設none)
  resultInnerWord.innerHTML = BMIresult;

  if (BMIresult >= 40) {
    //重度肥胖
    BMIresultBtnChange.classList.add("result-over-l-weight-btn");
    resetBtn.classList.add("over-l-weight-bg");
  } else if (40 > BMIresult && BMIresult >= 35) {
    // 中度肥胖
    BMIresultBtnChange.classList.add("result-over-m-weight-btn");
    resetBtn.classList.add("over-m-weigh-bg");
  } else if (35 > BMIresult && BMIresult >= 30) {
    //輕度肥胖
    BMIresultBtnChange.classList.add("result-over-s-weight-btn");
    resetBtn.classList.add("over-s-weight-bg");
  } else if (30 > BMIresult && BMIresult >= 25) {
    //過重
    BMIresultBtnChange.classList.add("result-over-weight-btn");
    resetBtn.classList.add("over-weight-bg");
  } else if (25 > BMIresult && BMIresult >= 18.5) {
    //理想
    BMIresultBtnChange.classList.add("result-perfect-body-btn");
    resetBtn.classList.add("perfect-body-bg");
  } else {
    // 過瘦
    BMIresultBtnChange.classList.add("result-over-thin-btn");
    resetBtn.classList.add("over-thin-bg");
  }

  //紀錄localStorage
  const allRecordData = [
    { height: heightData, 
      weight: weightData, 
      BMI: BMIresult 
    },
  ];
  console.log(allRecordData);
  const allRecordDataStr = JSON.stringify(allRecordData);//儲存在localStorage就必須先轉成字串
  localStorage.setItem('BMIdata',allRecordDataStr);//setItem儲存成功


  // const listSpace = JSON.parse(localStorage.getItem("BMIrecordData"));
  // const innerSpaceList = document.querySelector(".BMIRecordList");

  // function test000(){
  //   const allRecordData= [
  //     { height:heightData,
  //       weight:weightData,
  //       BMI:BMIresult,
  //     }
  //   ];

  //   let innerList = "";

  //   for (let i=0;i<allRecordData.length;i++){
  //     allRecordData[i].height = heightData;
  //     allRecordData[i].weight = weightData;
  //     allRecordData[i].BMI = BMIresult;

  //     innerList+=`<li>${allRecordData[i].height}</li>`;
  //   }
  //   innerSpaceList.innerHTML=innerList;

  //   const allRecordDataStr = JSON.stringify(allRecordData);//如需儲存在localStorage就必須先轉成字串
  //   localStorage.setItem("BMIrecordData",allRecordDataStr);//setItemg是將localStorage儲存

  // }
}

//紀錄localStorage
//設定一個空的陣列，將todolist push進去
// let nothingArray = JSON.parse(localStorage.getItem("BMIrecordData"))||[];
// let listSpace = document.querySelector(".BMIRecordList");

// function update() {
//   let listInner = ""; //設定一個空的字串放入for迴圈中的li
//   for (let i = 0; i < nothingArray.length; i++) {
//     listInner+=`<li></li>`;
//   }
//   listSpace.innerHTML = listInner;
// }

// const allRecordDataStr = JSON.stringify(allRecordData);//如需儲存在localStorage就必須先轉成字串
// localStorage.setItem("BMIrecordData",allRecordDataStr);//setItemg是將localStorage儲存

// const allRecordDataArray = JSON.parse(localStorage.getItem("BMIrecordData"));//從localStorage取出(getItem)則需要轉回陣列
// console.log(allRecordData);

//重置數值
function resetData(e) {
  bodyHeight.value = "";
  bodyWeight.value = "";
  resetBtn.style.display = "none";
  resetBtn.setAttribute("class", "material-symbols-outlined reset-data");
  titleBMI.style.display = "none";
  BMIresultBtnChange.setAttribute(
    "class",
    "output-result-btn primary-color-bg flex flex-jcc flex-aic flex-col fs-18px"
  );
  resultInnerWord.innerHTML = "看結果";
}

// 參考
// https://github.com/s9220140/BMI---homework/blob/main/js/all.js
