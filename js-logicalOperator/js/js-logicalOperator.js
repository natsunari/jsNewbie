//一、基礎練習：
// 宣告 a、b 變數，並賦予數字型別， 
// console.log 印出是否滿足以下條件：

// a 是否為 3~7 之間(含3、7)的數字
// b 是否為小於 5 或者大於 10 的數字

let A = 6;
console.log(A>=3 && A<=7);

let B = 7;
console.log(B<5 || B>10);



//二、應用題練習
//大雄的分數
let englishScroe = 81;
let mathScroe = 29;

//達標條件
let bothStandard = englishScroe >= 80 && mathScroe >=80; //兩科都80以上
let oneStandard = englishScroe >= 80 || mathScroe >=80;  //一科80以上

document.getElementById('bothStandardId').textContent = bothStandard +'，吼！哆啦A夢我好想出國玩喔！（躺地上耍賴）';
document.getElementById('oneStandardId').textContent = oneStandard + '，太棒了，最喜歡哆啦A夢了！';
