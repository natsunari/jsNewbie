//連鎖平價旅館Star Hotel

let starHotels = [

    //選取陣列內容時使用[]中括號
    //選取物件內容時使用. 點點

    //第一間旅館
    {
        hotelName:'Star Hotel台北本館',
        phone:'2222-1111',
        floor:5,
        totalRooms:30,
        booking:20,
        managerName:['Jeff'],
        restaurant:['懷石料理','下午茶','居酒屋'],
        guard:5,
    
        //計算空房
        vacantRooms: function () {
            let vancantRoomNum = starHotels[0].totalRooms - starHotels[0].booking;
            return vancantRoomNum; //有input output時使用
        }
    },

    //第二間旅館
    {
        hotelName:'Star Hotel台中分館',
        phone:'3333-2222',
        floor:8,
        totalRooms:48,
        booking:25,
        managerName:['Alice'],
        restaurant:['下午茶','親子餐廳'],
        guard:8,
    
        //計算台中空房
        vacantRooms: function () {
            let vancantRoomNum = starHotels[1].totalRooms - starHotels[1].booking;
            return vancantRoomNum;//有input output時使用
        }
    },
];

//兩間飯店空房數加總
let total_vacantRooms = starHotels[0].vacantRooms() + starHotels[1].vacantRooms();

//顯示第一間旅館的狀態
// console.log(starHotels[0]);

//顯示第二間旅館的狀態
// console.log(starHotels[1]);
console.log('現在兩間飯店的空房總共有' + total_vacantRooms + '間');
console.log(starHotels[1].hotelName + '的電話是' + starHotels[1].phone);
console.log(starHotels[0].hotelName + '剩'+ (starHotels[0].totalRooms-starHotels[0].booking)+'間空房');
console.log('統一預約取消請致電'+ starHotels[0].hotelName +'的經理'+starHotels[0].managerName + '，電話是' + starHotels[0].phone)
console.log(starHotels[1].hotelName + '有' + starHotels[1].restaurant[1]+'提供享用餐點');



