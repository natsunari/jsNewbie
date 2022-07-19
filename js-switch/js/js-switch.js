//促銷用語
document.getElementById('sale').textContent =
 '夏天推薦芒果冰淇淋喔！當季水果好吃又消暑喔！目前買一送一中！';


//switch
let choseWord;
let icecream = '';

switch(icecream){
    default:
        choseWord ='口味太多了，我有選擇困難，讓我想一下。';
        break;

    case '芒果':
        choseWord = '買一送一的芒果冰淇淋不錯欸！';
        break;
    case '抹茶':
        choseWord = '好久沒吃抹茶冰淇淋了，麻煩給我一份！';
        break;
    case '草莓':
        choseWord = '這季節有草莓欸，請給我一份草莓冰淇淋！';
        break;
    case '巧克力':
        choseWord ='這滿滿流出來的巧克力好好吃的感覺，請給我這個！';
        break;
}
let customerAnswer = document.getElementById('answerId').textContent = choseWord;