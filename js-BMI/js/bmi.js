//設定變數
const bodyheight = document.querySelector(".person-height");
const bodyweight = document.querySelector(".person-weight");

//按下按鈕開始運算
const BMIresultBtnChange = document.querySelector(".output-result-btn");
BMIresultBtnChange.addEventListener("click", addBodyBMIData, false);

//清除數值按鈕
const clearBtn = document.querySelector(".clear-icon");
clearBtn.addEventListener("click",clearInputData,false);

//紀錄項目的位置
const BMIrecordList = document.querySelector(".data-list");

//一個空的BMI紀錄，將紀錄list push 到localstorage
const BMIRecord = JSON.parse(localStorage.getItem("BMIrecord")) || [];

//新增一筆紀錄BMI的資料
function addBodyBMIData(e) {
  e.preventDefault(); //瀏覽預設行為做清除

  //取出input值
  const heightData = 0.01 * bodyheight.value; //公分轉換成公尺
  const weightData = bodyweight.value;

  //沒輸入任何數值時直接中斷function
  if (heightData === "" || weightData === "") {
    alert("請輸入相關數值");
    return; //中斷function
  }

  //BMI運算結果
  const BMIresult = (weightData / (heightData * heightData)).toFixed(2); //.toFixed(2) => 指僅顯示到小數點後2位
  console.log("BMI值為" + BMIresult);

  //按鈕樣式隨BMI動態變化
  const resultInnerWord = document.querySelector(".result-word");
  const titleBMI = document.querySelector(".title-BMI");
  titleBMI.innerHTML = "BMI"; //出現下面BMI小字
  titleBMI.style.display="block";
  
  if (BMIresult >= 40) {
    BMIresultBtnChange.classList.add("result-over-l-weight-btn");
    resultInnerWord.innerHTML = BMIresult;
    clearBtn.style.display = "block";
    clearBtn.classList.add("over-l-weight-bg");
  } else if (40 > BMIresult && BMIresult >= 35) {
    BMIresultBtnChange.classList.add("result-over-m-weight-btn");
    resultInnerWord.innerHTML = BMIresult;
    clearBtn.style.display = "block";
    clearBtn.classList.add("over-m-weight-bg");
  } else if (35 > BMIresult && BMIresult >= 30) {
    BMIresultBtnChange.classList.add("result-over-s-weight-btn");
    resultInnerWord.innerHTML = BMIresult;
    clearBtn.style.display = "block";
    clearBtn.classList.add("over-s-weight-bg");
  } else if (30 > BMIresult && BMIresult >= 25) {
    BMIresultBtnChange.classList.add("result-over-weight-btn");
    resultInnerWord.innerHTML = BMIresult;
    clearBtn.style.display = "block";
    clearBtn.classList.add("over-weight-bg");
  } else if (25 > BMIresult && BMIresult >= 18.5) {
    //理想
    BMIresultBtnChange.classList.add("result-perfect-body-btn");
    resultInnerWord.innerHTML = BMIresult;
    clearBtn.style.display = "block";
    clearBtn.classList.add("perfect-body-bg");
  } else {
    // 過瘦
    BMIresultBtnChange.classList.add("result-over-thin-btn");
    resultInnerWord.innerHTML = BMIresult;
    clearBtn.style.display = "block";
    clearBtn.classList.add("over-thin-bg");
  }

  //將運算結果儲存
  //localstorage.setItem('項目名稱',變數名稱)
  localStorage.setItem("BMIdata", BMIresult);
}

function clearInputData(e) {
  //最後：清空input
  bodyheight.value = "";
  bodyweight.value = "";
  clearBtn.style.display = "none";
  BMIresultBtnChange.classList.remove("result-over-l-weight-btn","result-over-m-weight-btn","result-over-s-weight-btn","result-over-weight-btn","result-perfect-body-btn","result-over-thin-btn");
  
  //恢復原本樣式
  const resultInnerWord = document.querySelector(".result-word");
  resultInnerWord.innerHTML="看結果";
  const titleBMI = document.querySelector(".title-BMI");
  titleBMI.style.display="none"; //出現下面BMI小字

}
