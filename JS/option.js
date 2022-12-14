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

// 提交意見
let summitBtn = document.querySelector(".summit>button");
let textarea = document.querySelector(".text>textarea");

summitBtn.addEventListener("click", function (e) {
    if (textarea.value.length < 10) {
        swal({
            title: "意見內容不可以小於10個字哦 ~",
            text: "輸入內容必須大於10個字以上 !",
            icon: "info",
            button: "知道了"
        });
    }
    else {
        axios.post(`${api}600/users/${localStorage.getItem("userId")}/options`, {
            "userId": `${localStorage.getItem("userId")}`,
            "option": `${textarea.value}`
        }, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            swal({
                title: "成功提交意見 ~",
                text: "已收到您寶貴的回覆，我們會繼續努力 !!",
                icon: "success",
                button: "確認"
            });
            textarea.value = "";
        })

    }
})
