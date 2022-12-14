// 將當前網址後面的id數值取出來
const id = location.href.split("=")[1];

let cartList = [];
let likeList = [];
// 取得購物車列表
function getCartList() {
    axios.get(`${api}carts?_expand=product&_expand=user`)
        .then(res => {
            cartList = res.data;
        })
}
getCartList();

// 取得個別商品資訊
axios.get(`${api}products/${id}`)
    .then(function (response) {
        // console.log(response.data);
        let imgInfor = document.querySelector(".img-infor");
        let str = "";
        imgInfor.innerHTML = `
        <div class="img">
                <div>
                    <img src=${response.data.imgSrc} alt="">
                </div>
                <div>
                    <img src=${response.data.imgSrc2} alt="">
                </div>
                <div>
                    <img src=${response.data.imgSrc3} alt="">
                </div>
            </div>
          
            <div class="infor">
                <div class="top">
                    <div class="name">
                        <p>鞋名 : ${response.data.name}</p>
                    </div>
                    <div class="type">
                        <p>${response.data.type}</p>
                    </div>
                    <div class="size">
                        <span>鞋款尺寸 : </span>
                        <p>${response.data.size}</p>
                    </div>
                    <div class="price">
                        <p>NT$ ${response.data.price}</p>
                    </div>
                    <div class="original">
                        <s>NT$ ${response.data.originalPrice}</s>
                    </div>
                    <button class="cart" data-cart=${response.data.id}>加入購物車<i class="fa-solid fa-cart-shopping" id="love"></i></button>
                    <br>
                    <button class="like" data-id=${response.data.id}>加入最愛<i class="fa-solid fa-heart"></i></button>
                </div>
                <div class="down">
                    <div class="text">
                        <p>商品描述</p>
                    </div>
                    <div class="discribe">
                        <p>${response.data.describe}
                        </p>
                    </div>
                    <div class="notice">
                        <p>注意事項</p>
                    </div>
                    <div class="things">
                        <p>${response.data.notice}</p>
                    </div>
                    <div class="score">
                        <p>推薦指數</p>
                    </div>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half"></i>
                    </div>
                </div>
            </div>
        `
        likes()
        addCart()
    })

// 加入我的最愛
function likes() {
    let infor = document.querySelector(".infor");
    infor.addEventListener("click", function (e) {
        let likeClass = e.target.getAttribute("class");
        if (likeClass !== "like") {
            return;
        }
        axios.get(`${api}600/users/${localStorage.getItem("userId")}/likes?_expand=user&_expand=product`, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                likeList = res.data;
                let likeId = e.target.getAttribute("data-id");
                for (i = 0; i < likeList.length; i++) {
                    if (likeList.length == 0) {
                        break;
                    }
                    if (likeList[i].product.id == likeId) {
                        swal({
                            title: "我的最愛中已有此商品(｡í _ ì｡)",
                            text: "請勿重複加入商品至我的最愛!",
                            icon: "warning",
                            button: "確認",
                        });
                        return 0;
                    }
                }
                axios.post(`${api}600/products/${id}/likes`, {
                    "userId": `${localStorage.getItem("userId")}`
                }, {
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                    .then(res => {
                        swal({
                            title: "成功加入最愛(*´∀`)~♥",
                            text: "您已將此商品加入我的最愛",
                            icon: "success",
                            button: "確認"
                        });
                        return;
                    }).catch(err => {
                        // console.log(err.response);
                    })
            }).catch(err => {
                swal({
                    title: "加入最愛要先登入或註冊帳號唷 ~",
                    text: "請先登入或註冊帳號 !",
                    icon: "info",
                    button: "確認"
                });
            })
    })
}


// 加入購物車
function addCart() {
    let infor = document.querySelector(".infor");
    infor.addEventListener("click", function (e) {
        let cartClass = e.target.getAttribute("class");
        if (cartClass !== "cart") {
            return;
        }
        axios.get(`${api}600/users/${localStorage.getItem("userId")}/carts?_expand=user&_expand=product`, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            cartList = res.data;
            let cartId = e.target.getAttribute("data-cart");
            for (i = 0; i < cartList.length; i++) {
                if (cartList.length == 0) {
                    break;
                }
                if (cartList[i].product.id == cartId) {
                    swal({
                        title: "購物車內已有此商品╮(╯∀╰)╭",
                        text: "每人限購同款鞋款數目為一雙唷~",
                        icon: "warning",
                        button: "確認"
                    });
                    return 0;
                }
            }
            axios.post(`${api}600/products/${id}/carts`, {
                "userId": `${localStorage.getItem("userId")}`
            }, {
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res => {
                swal({
                    title: "成功加入購物車＼(●´ϖ`●)／",
                    text: "您已將此商品加入購物車",
                    icon: "success",
                    button: "確認"
                });
                cartNum()
            })
        }).catch(err => {
            swal({
                title: "加入購物車要先登入或註冊帳號唷 ~",
                text: "請先登入或註冊帳號 !",
                icon: "info",
                button: "確認"
            });
        })
    })


}




    // function addCart() {
    //     let cart = document.querySelector(".cart");
    //     cart.addEventListener("click", function (e) {
    //         let dataCart = e.target.getAttribute("data-cart");
    //         axios.get(`${api}/carts?_expand=user&_expand=product`)
    //             .then(res => {

    //                 res.data.forEach(function (item) {
    //                     console.log(item, item.productId, dataCart);
                        // if (item.productId === dataCart) {
                        //     swal({
                        //         title: "購物車已有此商品╮(╯∀╰)╭",
                        //         text: "每人限購同款鞋款數目為一雙唷~",
                        //         icon: "warning",
                        //         button: "確認"
                        //     });
                        //     return;
                        // }
    //                 })
    //             })
    //         axios.post(`${api}/products/${id}/carts`, { userId: `${1}` })
    //             .then(res => {
    //                 swal({
    //                     title: "成功加入購物車＼(●´ϖ`●)／",
    //                     text: "您已將此商品加入購物車",
    //                     icon: "success",
    //                     button: "確認"
    //                 });
    //             })
    //     })
    // }















    // 加入我的最愛
    // function likes() {
    // let like = document.querySelector(".like");
    // like.addEventListener("click", function (e) {
    // axios.get(`${api}/likes?_expand=user&_expand=product`)
    // .then(res => {
    // let dataId = e.target.getAttribute("data-id");
    // res.data.forEach(function (item) {
    //     if (item.id == dataId) {
            // swal({
            //     title: "重複加入",
            //     text: "我的最愛中已有此商品",
            //     icon: "warning",
            //     button: "確認",
            // });

    //     }
    // })
    // console.log(res.data);

    // 加入!!!!!!!
    // if (res.data[res.data.length - 1].productId == dataId) {
    //     swal({
    //         title: "重複加入",
    //         text: "我的最愛中已有此商品",
    //         icon: "warning",
    //         button: "確認",
    //     });
    //     return;
    // } else {
    // axios.post(`${api}/products/${id}/likes`, { userId: `${1}` })
    //     .then(res => {
    //         swal({
    //             title: "成功加入最愛(*´∀`)~♥",
    //             text: "您已將此商品加入我的最愛",
    //             icon: "success",
    //             button: "確認"
    //         });
    //     })

    // }

    // })

    // axios.post(`${api}/products/${id}/likes`, { userId: `${1}` })
    //     .then(res => {
    //         swal({
    //             title: "加入成功(*´∀`)~♥",
    //             text: "您已將此商品加入最愛",
    //             icon: "success",
    //             button: "確認",
    //         });
    //     })

// })
// }

// 加入購物車

// function addCart() {
//     let cart = document.querySelector(".cart");
//     axios.get(`${api}/carts?_expand=user&_expand=product`)
//         .then(res => {
//             cartList = res.data;
//             console.log(cartList);
//         })
//     cart.addEventListener("click", function (e) {
//         let dataCart = e.target.getAttribute("data-cart");
//         cartList.forEach(function (item) {
//             console.log(item, item.product.id, dataCart);
//             if (item.product.id == dataCart) {
//                 swal({
//                     title: "購物車已有此商品╮(╯∀╰)╭",
//                     text: "每人限購同款鞋款數目為一雙唷~",
//                     icon: "warning",
//                     button: "確認"
//                 });

//             } else {
//                 axios.post(`${api}/products/${dataCart}/carts`, { userId: `${1}` })
//                     .then(res => {
//                         swal({
//                             title: "成功加入購物車＼(●´ϖ`●)／",
//                             text: "您已將此商品加入購物車",
//                             icon: "success",
//                             button: "確認"
//                         });
//                     })
//                 return;
//             }
//         })
//     })


// }



// function addCart() {
//     let cart = document.querySelector(".cart");
//     cart.addEventListener("click", function (e) {
//         let dataCart = e.target.getAttribute("data-cart");
//         axios.get(`${api}/carts?_expand=user&_expand=product`)
//             .then(res => {

//                 res.data.forEach(function (item) {
//                     console.log(item, item.productId, dataCart);
//                     if (item.productId === dataCart) {
//                         swal({
//                             title: "購物車已有此商品╮(╯∀╰)╭",
//                             text: "每人限購同款鞋款數目為一雙唷~",
//                             icon: "warning",
//                             button: "確認"
//                         });
//                         return;
//                     }
//                 })
//             })
//         axios.post(`${api}/products/${id}/carts`, { userId: `${1}` })
//             .then(res => {
//                 swal({
//                     title: "成功加入購物車＼(●´ϖ`●)／",
//                     text: "您已將此商品加入購物車",
//                     icon: "success",
//                     button: "確認"
//                 });
//             })
//     })

