let favorite = document.querySelector(".favorite");
// 初始化
function init() {
    getLikes();
}
init();


// 取得我的最愛渲染網頁
function getLikes() {
    axios.get(`${api}600/users/${localStorage.getItem("userId")}/likes?_expand=user&_expand=product`, {
        headers: {
            "authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then(res => {
            console.log(res.data);
            let str = "";
            if (res.data.length == 0) {
                favorite.innerHTML = `
                <div class="item">
                    <div class="notice">
                        <h2>目前尚未有最愛商品</h2>
                        <h3>趕緊去挑選喜歡的商品吧٩(๑•̀ω•́๑)۶</h3>
                    </div>
                </div>
                `
                return;
            }
            res.data.forEach(function (item) {
                // console.log(item);

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
                        <button class="button" data-id="${item.id}" >移除最愛<i class="fa-solid fa-heart"></i></button>
                    </div>
                </div>
            </div>
                `
            })
            favorite.innerHTML = str;
        })
}

// 刪除單一最愛
favorite.addEventListener("click", function (e) {
    e.preventDefault();
    const likeId = e.target.getAttribute("data-id")
    if (likeId == null) {
        return;
    }
    console.log(likeId);
    axios.delete(`${api}likes/${likeId}`, {
        "userId": `${localStorage.getItem("userId")}`
    }, {
        headers: {
            "authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then(res => {
            swal({
                title: "已移除最愛(〒︿〒)",
                text: "您已刪除此項最愛 ><",
                icon: "success",
                button: "確認",
            });
            getLikes();
        })
})


