console.log(api);

let nameInput = document.querySelector("#name-input"),
    passwordInput = document.querySelector("#password-input"),
    reviseButton = document.querySelector(".revise-button>button");

// 購物車數量渲染
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

// 點擊按鈕更改資料
reviseButton.addEventListener("click", function () {
    if (nameInput.value == "" || passwordInput.value == "") {
        swal({
            title: "修改資料未填寫完成 !",
            text: "務必檢查每項資料填寫正確 ~",
            icon: "error",
            button: "確認"
        });
        return;
    }
    updatePassword2()
})

// 送出更改密碼要求
function updatePassword2() {
    axios.patch(`${api}600/users/${localStorage.getItem("userId")}`, {
        "nickName": `${nameInput.value}`,
        "password": `${passwordInput.value}`
    }, {
        headers: {
            "authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then(res => {
            console.log(res.data);
            swal({
                title: "修改密碼成功 !!!",
                text: "請重新登入，別再忘記密碼啦 ~~",
                icon: "success",
                button: false
            });
            nameInput.value = "";
            passwordInput.value = "";
            setTimeout(() => {
                location.href = "landingPage.html";
            }, 2000)
        }).catch(err => {
            // console.log(err.response);
            swal({
                title: "請先登入再修改密碼 !",
                text: "您必須登入後才可以修改權限 ~",
                icon: "error",
                button: "確認"
            });
        })
}

