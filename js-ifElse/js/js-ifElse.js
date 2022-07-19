//設計 點數換禮物兌換程式

document.getElementById('exchangeGiftId').onclick = //1-點擊按鈕exchangeGiftId後開始執行
function exchangeGift(giftContent){ //2- 設定函式和命名函式exchangeGift(giftContent)

    let giftPoint = parseInt(document.getElementById('giftPointId').value); //3-抓出input內輸入的持有點數
    document.getElementById('giftContentId').textContent = '我現在'+ giftContent ; //4-兌換商品文字替換

    //判斷兌換商品的規則
    if (giftPoint == 0){
        exchangeGift('沒有任何的點數');
    } else if (giftPoint >0 && giftPoint <=9){
        exchangeGift('點數還不夠換贈品');
    } else if (giftPoint >=10 && giftPoint <20){
        exchangeGift('可以兌換2020東京奧運環保提袋')
    } else if (giftPoint >=20 && giftPoint <30){
        exchangeGift('可以兌換2020東京奧運紀念馬克杯');
    } else if (giftPoint >=30 && giftPoint <40){
        exchangeGift('可以兌換2020東京奧運隨身保溫瓶350ml')
    } else if (giftPoint >=40 && giftPoint <=50){
        exchangeGift('可以抽2020東京奧運來回機票一張');
    } else{
        exchangeGift('想換什麼都可以換了');
    };  
};


