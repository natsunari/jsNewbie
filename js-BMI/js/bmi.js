//抓取input數值
const personHeight = document.querySelector(".person-height");
const personWeight = document.querySelector(".person-weight");

//按下按鈕開始運算
const BMIoutput = document.querySelector(".output-result-btn");
BMIoutput.addEventListener("click", operationBMI, false);

//運算function
function operationBMI(e) {
  //瀏覽預設行為做清除
  e.preventDefault();

  //公分轉換成公尺
  const personHeightData = 0.01 * personHeight.value;
  const personWeightData = personWeight.value;

  //沒輸入任何數值時直接中斷function
  if (personHeightData === "" || personWeightData === "") {
    alert("請輸入相關數值");
    return; //中斷function
  }

  //BMI運算結果
  const BMIresult = personWeightData / (personHeightData * personHeightData); //體重除以身高公尺的二次方
//   console.log(BMIresult);

  //for迴圈將li樣式塞入指定位置


  //最後：清空input
  personHeight.value = "";
  personWeight.value = "";
}
