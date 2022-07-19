//步驟拆解
//點擊(onclick)按鈕(countButtonId)
document.getElementById('countButtonId').onclick = 
//設計函式
    function () {
        //1-商品單價
        var chickenSteakPrice = 65;
        var friedChickenPrice = 50;
        var tempuraPrice = 30;
        var blackTeaPrice = 15;
        var greenTeaPrice = 15;
        var tapiocaTeaPrice = 35;

        //2-撈取數量input裡面的數值(可在html內預設數值)
        //3-parseInt 將字串改為數字
        var chickenSteakQuantity = parseInt(document.getElementById('chickenSteakQuantityId').value)*chickenSteakPrice;
        var friedChickenQuantity = parseInt(document.getElementById('friedChickenQuantityId').value)*friedChickenPrice;
        var tempuraQuantity = parseInt(document.getElementById('tempuraQuantityId').value)*tempuraPrice;
        var blackTeaQuantity = parseInt(document.getElementById('blackTeaQuantityId').value)*blackTeaPrice;
        var greenTeaQuantity = parseInt(document.getElementById('greenTeaQuantityId').value)*greenTeaPrice;
        var tapiocaTeaQuantity = parseInt(document.getElementById('tapiocaTeaQuantityId').value)*tapiocaTeaPrice;

        // typeof是用來檢查型別
        // console.log(typeof(chickenSteakQuantity));

        //4-總金額
        document.getElementById('totalID').textContent = chickenSteakQuantity + friedChickenQuantity + tempuraQuantity + blackTeaQuantity + greenTeaQuantity + tapiocaTeaQuantity;
}
