var A = 10;
function changeNumber(){
    let A = 2;
    console.log(A);
}
console.log(A);//會出現的是var A = 10
changeNumber();//會出現的是 function內的 let A = 2 

const listLen = document.querySelectorAll('.list li').length;
for(let i = 0; listLen>i;i++){
    document.querySelectorAll('.list li')[i].addEventListener('click',function(){
        alert(i+1);
    },false)
}

const obj ={
    url:'https://tw.yahoo.com/'
};
Object.freeze(obj);//凍結資料，無法修改
obj.url='yahoo'
console.log(obj);
