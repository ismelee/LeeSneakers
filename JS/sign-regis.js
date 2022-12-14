
// axios.post(`${api}/users`, {
//     "email": "hua@gmail.com",
//     "password": "asd777",
//     "nickName": "曉華"
// }).then(res => {
//     console.log(res.data);
// }).catch(err => {
//     console.log(err.response);
// })

let token = "";
let userId = "";
let nickName = "";
// 註冊功能
let nameInput = document.querySelector("#name-input"),
    accountInput = document.querySelector("#account-input"),
    passwordInput = document.querySelector("#password-input"),
    registerBtn = document.querySelector(".register>button");

registerBtn.addEventListener("click", function (e) {
    if (accountInput.value == "" || passwordInput.value == "" || nameInput.value == "") {
        swal({
            title: "註冊資訊請務必填寫 !",
            text: "請正確填寫每個會員資料 !",
            icon: "warning",
            button: "確認"
        });
        return;
    }
    if (passwordInput.value.length < 4) {
        swal({
            title: "密碼必須在4位數以上唷 ~~",
            text: "個人密碼需要4位數才可註冊 !",
            icon: "warning",
            button: "確認"
        });
        return;
    }
    if (accountInput.value.includes("@") == false) {
        swal({
            title: "註冊帳號格式錯誤 !!",
            text: "必須要有@才是正確的格式 !",
            icon: "warning",
            button: "確認"
        });
        return;
    }
    axios.post(`${api}signup`, {
        "email": `${accountInput.value}`,
        "password": `${passwordInput.value}`,
        "nickName": `${nameInput.value}`
    }).then(res => {
        console.log(res.data);
        swal({
            title: "恭喜您註冊成功ヽ(✿ﾟ▽ﾟ)ノ",
            text: "準備前往商城找尋喜愛的鞋款囉 ~",
            icon: "success",
            button: "確認"
        });
        accountInput.value = "";
        passwordInput.value = "";
        nameInput.value = "";
    }).catch(err => {
        console.log(err.response);
    })
})

// 登入功能
let loginAccount = document.querySelector("#login-account"),
    loginPassword = document.querySelector("#login-password"),
    signinBtn = document.querySelector(".signin>button");

signinBtn.addEventListener("click", function (e) {
    if (loginAccount.value == "" || loginPassword.value == "") {
        swal({
            title: "登入資訊請務必填寫 !",
            text: "請正確填寫每個登入資料 !",
            icon: "warning",
            button: "確認"
        });
        return;
    }
    axios.post(`${api}login`, {
        "email": `${loginAccount.value}`,
        "password": `${loginPassword.value}`
    }).then(res => {
        console.log(res.data);
        token = res.data.accessToken;
        userId = res.data.user.id;
        nickName = res.data.user.nickName;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("nickName", nickName);
        console.log(localStorage.getItem("token"));
        console.log(localStorage.getItem("userId"));
        console.log(localStorage.getItem("nickName"));
        swal({
            title: "恭喜您已成功登入ヽ(✿ﾟ▽ﾟ)ノ",
            text: "準備前往商城找尋喜愛的鞋款囉 ~",
            icon: "success",
            button: "確認"
        });
        loginAccount.value = "";
        loginPassword.value = "";
        setTimeout(() => {
            location.href = "landingPage.html";
        }, 2000);
    }).catch(err => {
        console.log(err.response);
        swal({
            title: "無效的帳號 !!",
            text: "請檢查帳號密碼是否輸入正確，或是否已註冊帳號 ~",
            icon: "error",
            button: "確認"
        });
    })
})


// 修改密碼(無權限)
function updatePassword() {
    axios.patch(`${api}users/10`, {
        "password": "0000"
    })
        .then(res => {
            console.log(res.data);

        }).catch(err => {
            console.log(err.response);

        })
}

// 修改密碼(有權限)
function updatePassword2() {
    axios.patch(`${api}600/users/11`, {
        "password": "1111"
    }, {
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
        .then(res => {
            console.log(res.data);
            swal({
                title: "修改密碼成功 !!!",
                text: "別再忘記密碼啦 ~~",
                icon: "success",
                button: "確認"
            });
        }).catch(err => {
            console.log(err.response);
            swal({
                title: "請先登入再修改密碼 !",
                text: "您必須登入後才可以有修改權限 ~",
                icon: "error",
                button: "確認"
            });
        })
}

// 點擊demo將該會員帳號密碼顯示畫面
// let demo1 = document.querySelector(".demo-1");
// let demo2 = document.querySelector(".demo-2");
// demo1.addEventListener("click", function (e) {
//     loginAccount.value = "q@gmail.com";
//     loginPassword.value = "qqqq";
// })
// demo2.addEventListener("click", function (e) {
//     loginAccount.value = "jason@gmail.com";
//     loginPassword.value = "jason";
// })

