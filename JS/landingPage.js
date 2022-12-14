
//  ================================ slick ================================

// $(".shoes-list").slick({
//     dots: true,
//     arrows: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     centerPadding: "0px",
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//         {
//             breakpoint: 1600,    //1600
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 1100,  //1100
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 900,  //900
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 410,  //410
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false
//             }
//         },

//     ]
// });



// ==================================== 導覽列鞋款列表點擊效果 ===================================

let faBars = document.querySelector(".fa-bars")
let intro = document.querySelector(".intro")
faBars.addEventListener("click", function () {
    intro.classList.toggle("show")
})


let navShoesList = document.querySelector(".nav-shoes-list")
let shoesType = document.querySelector(".shoes-type")
navShoesList.addEventListener("click", function () {
    shoesType.classList.toggle("active")
})
shoesType.addEventListener("click", function () {
    shoesType.classList.toggle("active")
})


// navShoesList.addEventListener("clcik", function () {
//     shoesType.classList.toggle("active")
// })


// var windowWidth = document.body.clientWidth;
// var windowHeight = document.body.clientHeight;
// console.log(windowWidth, windowHeight);


// ==================== 導覽列滾動顏色變化 ===============================

let navbar = document.querySelector(".navbar")
let titleName = document.querySelector(".title-name")
let navList = document.querySelectorAll(".nav-list")
let faChevronDown = document.querySelector(".fa-chevron-down")
let faSolid = document.querySelectorAll(".fa-solid")
let faStar = document.querySelectorAll(".fa-star")
let faStarHalf = document.querySelectorAll(".fa-star-half")

window.addEventListener("scroll", function () {
    if (window.scrollY >= 133) {
        navbar.classList.add("navbar-box-shadow")
        // navShoesList.style.color = "black";
        // titleName.style.color = "black";
        // faChevronDown.style.color = "black";
        // faBars.style.color = "white";
        // for (i = 0; i < faSolid.length; i++) {
        //     faSolid[i].style.color = "black";
        // }
        for (i = 0; i < faStar.length; i++) {
            faStar[i].style.color = "rgb(280, 150, 81)";
        }
        for (i = 0; i < faStarHalf.length; i++) {
            faStarHalf[i].style.color = "rgb(280, 150, 81)";
        }
        // for (i = 0; i < navList.length; i++) {
        //     navList[i].style.color = "black";
        // }
    }
    else if (window.scrollY < 133) {
        navbar.classList.remove("navbar-box-shadow")
        // navShoesList.style.color = "white";
        // titleName.style.color = "white";
        // faChevronDown.style.color = "white";
        // faBars.style.color = "white";
        // for (i = 0; i < faSolid.length; i++) {
        //     faSolid[i].style.color = "white";
        // }
        for (i = 0; i < faStar.length; i++) {
            faStar[i].style.color = "rgb(232, 232, 81)";
        }
        for (i = 0; i < faStarHalf.length; i++) {
            faStarHalf[i].style.color = "rgb(280, 150, 81)";
        }
        // for (i = 0; i < navList.length; i++) {
        //     navList[i].style.color = "white";
        // }
    }
})


// =================================================================================

// const api = "https://json-server-vercel-lake-zeta.vercel.app/";
// const api = "http://localhost:3000/";
// const api = "https://json-server-vercel-ismelee.vercel.app/";
const api = "https://demo-mgjx.onrender.com/";


// shoesType.addEventListener("click", function (e) {
//     if (e.target.value == "") {
//         return
//     }

// })


// 搜尋欄navbar
let searchInput = document.querySelector(".search-input");
let searchInput2 = document.querySelector(".search-input2");
let faMagnifyingGlass = document.querySelector("#glass");
let faMagnifyingGlass2 = document.querySelector("#glass2");
// enter觸發搜尋
searchInput.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        faMagnifyingGlass.click();
    }
})
searchInput2.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        faMagnifyingGlass2.click();
    }
})
// 點及觸發搜尋
faMagnifyingGlass.addEventListener("click", function (e) {
    if (searchInput.value == "") {
        return;
    }
    else if (searchInput.value == "休閒鞋款" || searchInput.value == "休閒") {
        location.href = "series_casual.html";
    }
    else if (searchInput.value == "運動鞋款" || searchInput.value == "運動") {
        location.href = "series_sport.html";
    }
    else if (searchInput.value == "皮鞋鞋款" || searchInput.value == "皮鞋") {
        location.href = "series_leather.html";
    }
    else if (searchInput.value == "拖鞋涼鞋鞋款" || searchInput.value == "拖鞋涼鞋" || searchInput.value == "拖鞋" || searchInput.value == "涼鞋") {
        location.href = "series_sandal.html";
    }
    else if (searchInput.value == "登山鞋款" || searchInput.value == "登山") {
        location.href = "series_mountain.html";
    }
    searchInput.value == "";
})
// ---------------
faMagnifyingGlass2.addEventListener("click", function (e) {
    if (searchInput2.value == "") {
        return;
    }
    else if (searchInput2.value == "休閒鞋款" || searchInput2.value == "休閒") {
        location.href = "series_casual.html";
    }
    else if (searchInput2.value == "運動鞋款" || searchInput2.value == "運動") {
        location.href = "series_sport.html";
    }
    else if (searchInput2.value == "皮鞋鞋款" || searchInput2.value == "皮鞋") {
        location.href = "series_leather.html";
    }
    else if (searchInput2.value == "拖鞋涼鞋鞋款" || searchInput2.value == "拖鞋涼鞋" || searchInput2.value == "拖鞋" || searchInput2.value == "涼鞋") {
        location.href = "series_sandal.html";
    }
    else if (searchInput2.value == "登山鞋款" || searchInput2.value == "登山") {
        location.href = "series_mountain.html";
    }
    searchInput2.value == "";
})

// 購物車連結
let shop = document.querySelector("#shop");
let large = document.querySelector("#large");
let shop2 = document.querySelector("#shop2");
let large2 = document.querySelector("#large2");
let cartIcon = document.querySelector(".intro-img>div");
let cartIcon2 = document.querySelector(".intro-img-rwd>div");
shop.addEventListener("click", function (e) {
    if (uId == "" && tokeN == "") {
        swal({
            title: "請先登入或註冊帳號唷(,,・ω・,,)",
            text: "需要登入才可以瀏覽個人的購物車唷 ~",
            icon: "info",
            button: "確認"
        });
        return;
    } else if (uId !== "" && tokeN !== "") {
        location.href = "shoppingcart.html";
    }
})
shop2.addEventListener("click", function (e) {
    if (uId == "" && tokeN == "") {
        swal({
            title: "請先登入或註冊帳號唷(,,・ω・,,)",
            text: "需要登入才可以瀏覽個人的購物車唷 ~",
            icon: "info",
            button: "確認"
        });
        return;
    } else if (uId !== "" && tokeN !== "") {
        location.href = "shoppingcart.html";
    }
})
cartIcon.addEventListener("click", function (e) {
    if (uId == "" && tokeN == "") {
        swal({
            title: "請先登入或註冊帳號唷(,,・ω・,,)",
            text: "需要登入才可以瀏覽個人的購物車唷 ~",
            icon: "info",
            button: "確認"
        });
        return;
    } else if (uId !== "" && tokeN !== "") {
        location.href = "shoppingcart.html";
    }
})
cartIcon2.addEventListener("click", function (e) {
    if (uId == "" && tokeN == "") {
        swal({
            title: "請先登入或註冊帳號唷(,,・ω・,,)",
            text: "需要登入才可以瀏覽個人的購物車唷 ~",
            icon: "info",
            button: "確認"
        });
        return;
    } else if (uId !== "" && tokeN !== "") {
        location.href = "shoppingcart.html";
    }
})
large.addEventListener("click", function (e) {
    if (uId == "" && tokeN == "") {
        swal({
            title: "請先登入或註冊帳號唷(,,・ω・,,)",
            text: "需要登入才可以修改會員資料哦 ~",
            icon: "info",
            button: "確認"
        });
        return;
    } else if (uId !== "" && tokeN !== "") {
        location.href = "revise.html";
    }
})
large2.addEventListener("click", function (e) {
    if (uId == "" && tokeN == "") {
        swal({
            title: "請先登入或註冊帳號唷(,,・ω・,,)",
            text: "需要登入才可以修改會員資料哦 ~",
            icon: "info",
            button: "確認"
        });
        return;
    } else if (uId !== "" && tokeN !== "") {
        location.href = "revise.html";
    }
})

// 人氣鞋款連結
let no1 = document.querySelector("#no1"),
    no2 = document.querySelector("#no2"),
    no3 = document.querySelector("#no3"),
    no4 = document.querySelector("#no4"),
    no5 = document.querySelector("#no5"),
    no6 = document.querySelector("#no6"),
    no7 = document.querySelector("#no7"),
    no8 = document.querySelector("#no8");
no1.addEventListener("click", function (e) {
    location.href = "shoes-information.html?id=1";
});
no2.addEventListener("click", function (e) {
    location.href = "shoes-information.html?id=2";
});
no3.addEventListener("click", function (e) {
    location.href = "shoes-information.html?id=11";
});
no4.addEventListener("click", function (e) {
    location.href = "shoes-information.html?id=21";
});
no5.addEventListener("click", function (e) {
    location.href = "shoes-information.html?id=31";
});
no6.addEventListener("click", function (e) {
    location.href = "shoes-information.html?id=39";
});
no7.addEventListener("click", function (e) {
    location.href = "shoes-information.html?id=30";
});
no8.addEventListener("click", function (e) {
    location.href = "shoes-information.html?id=3";
});


// 導覽列登入登出替換變更
let uId = localStorage.getItem("userId");
let tokeN = localStorage.getItem("token");

let login = document.querySelector("#login");
let signOut = document.querySelector("#signout");
signOut.addEventListener("click", function (e) {
    localStorage.setItem("token", "");
    localStorage.setItem("userId", "");
    swal({
        title: "您已登出囉 !",
        text: "要購買商品需要再次登入哦 ~",
        icon: "success",
        button: "確認"
    });
    setTimeout(() => {
        location.href = "landingPage.html";
    }, 2000);
})
if (uId == "" && tokeN == "") {
    login.style.display = "block";
    signOut.style.display = "none";
} else if (uId !== "" && tokeN !== "") {
    login.style.display = "none";
    signOut.style.display = "block";
}

// 登入後才可使用功能連結
let like = document.querySelector("#like"),
    option = document.querySelector("#option");

like.addEventListener("click", function (e) {
    if (uId == "" && tokeN == "") {
        swal({
            title: "請先登入或註冊帳號唷(,,・ω・,,)",
            text: "需要登入才可以瀏覽個人我的最愛唷 ~",
            icon: "info",
            button: "確認"
        });
        return;
    } else if (uId !== "" && tokeN !== "") {
        location.href = "favorite.html";
    }
})

option.addEventListener("click", function (e) {
    if (uId == "" && tokeN == "") {
        swal({
            title: "請先登入或註冊帳號唷(,,・ω・,,)",
            text: "需要登入才可以給予顧客回饋唷 ~",
            icon: "info",
            button: "確認"
        });
        return;
    } else if (uId !== "" && tokeN !== "") {
        location.href = "option.html";
    }
})

axios.get(`${api}600/users/${localStorage.getItem("userId")}/carts?_expand=user&_expand=product`, {
    headers: {
        "authorization": `Bearer ${localStorage.getItem("token")}`
    }
}).then(res => {
    let str = "";
    let str2 = ": ";
    str = res.data.length;
    str2 = res.data.length;
    cartIcon.innerHTML = str;
    cartIcon2.innerHTML = str2;
})


