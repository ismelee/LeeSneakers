
let favorite = document.querySelector(".favorite");
let total = document.querySelector(".total span");
let totalBtn = document.querySelector(".total>button");
let cartList = [];
// 初始渲染
function init() {
    getCart();
}
init();

// 取得購物車渲染網頁
function getCart() {
    axios.get(`${api}600/users/${localStorage.getItem("userId")}/carts?_expand=user&_expand=product`, {
        headers: {
            "authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then(res => {
            cartList = res.data;
            // console.log(cartList);
            let str = "";
            let totalPrice = 0;
            if (cartList.length == 0) {
                favorite.innerHTML = `
                <div class="item">
                    <div class="notice">
                        <h2>您目前的購物車是空的╮(╯_╰)╭</h2>
                        <h3>趕快去商城購買心目中的鞋款吧(ﾉ>ω<)ﾉ</h3>
                    </div>
                </div>
                `
                total.innerHTML = totalPrice;
                totalBtn.addEventListener("click", function (e) {
                    // console.log(cartList);
                    if (cartList.length == 0) {
                        swal({
                            title: "購物車目前沒有商品(┛`д´)┛",
                            text: "您的購物車是空的，無法結帳 !!",
                            icon: "error",
                            button: "知道了"
                        });
                    }
                })
                return;
            }
            cartList.forEach(function (item) {
                str += `
            <div class="item">
                    <div class="img">
                        <img src=${item.product.imgSrc} alt="">
                    </div>
                    <div class="infor">
                        <div class="shoe-name">
                            <p>${item.product.name}</p>
                        </div>
                        <div class="type">
                            <p>${item.product.type}</p>
                        </div>
                        <div class="size">
                            <p>SIZE : ${item.product.size}</p>
                        </div>
                        <div class="price">
                            <p>NT$ ${item.product.price}</p>
                        </div>
                        <div class="recommend">
                            <button data-id=${item.id}>移除購物車<i class="fa-solid fa-cart-arrow-down"></i></button>
                        </div>
                    </div>
                </div>
            `;
                totalPrice += parseInt(item.product.price);
            })
            favorite.innerHTML = str;
            total.innerHTML = totalPrice;

            // // 購物車結帳
            totalBtn.addEventListener("click", function (e) {
                // console.log(cartList);
                if (cartList.length == 0) {
                    swal({
                        title: "購物車目前沒有商品(┛`д´)┛",
                        text: "您的購物車是空的，無法結帳 !!",
                        icon: "error",
                        button: "知道了"
                    });
                } else {
                    location.href = "order-information.html";
                }
            })
        })

}

// 刪除單一購物車
favorite.addEventListener("click", function (e) {
    e.preventDefault();
    let cartId = e.target.getAttribute("data-id");
    if (cartId == null) {
        return;
    }
    console.log(cartId);
    axios.delete(`${api}600/carts/${cartId}`, {
        headers: {
            "authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then(res => {
            swal({
                title: "已移除購物車(╥﹏╥)",
                text: "您已刪除此項購物車 ><",
                icon: "success",
                button: "確認",
            });
            getCart();   //渲染購物車

            // 購物車數量更新
            axios.get(`${api}600/users/${localStorage.getItem("userId")}/carts?_expand=user&_expand=product`, {
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res => {
                let str = "";
                str = res.data.length;
                cartIcon.innerHTML = str;
                cartIcon2.innerHTML = str;
            })
        })
})







