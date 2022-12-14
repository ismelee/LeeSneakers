let nameInput = document.querySelector(".name>input"),
    addressInput = document.querySelector(".address>input"),
    numberInput = document.querySelector(".number>input")
buyerBtn = document.querySelector(".buyer>button");
buyerBtn.addEventListener("click", function (e) {
    if ((nameInput.value == "" && addressInput.value == "") || (nameInput.value == "" && numberInput.value == "") || (numberInput.value == "" && addressInput.value == "") || (nameInput.value == "" && addressInput.value == "" && numberInput.value == "")) {
        swal({
            title: "資料多處未正確填寫 !!",
            text: "務必檢查每項資料都必須正確填寫 ~ ",
            icon: "error",
            button: "了解",
        });
    }
    else if (nameInput.value == "") {
        swal({
            title: "訂貨人姓名尚未填寫 !!",
            text: "務必檢查每項資料都必須正確填寫 ~ ",
            icon: "error",
            button: "了解",
        });
    }
    else if (addressInput.value == "") {
        swal({
            title: "訂貨人地址尚未填寫 !!",
            text: "務必檢查每項資料都必須正確填寫 ~ ",
            icon: "error",
            button: "了解",
        });
    }
    else if (numberInput.value == "") {
        swal({
            title: "訂貨人手機號碼尚未填寫 !!",
            text: "務必檢查每項資料都必須正確填寫 ~ ",
            icon: "error",
            button: "了解",
        });
    } else {
        swal({
            title: "恭喜您已送出訂單(✪ω✪)",
            text: "商品會在7~14個工作天寄出，請耐心等候 ~",
            icon: "success",
            button: false
        });
        nameInput.value = "";
        addressInput.value = "";
        numberInput.value = "";
        // 送出訂單到json-server內

        // 送出訂單後清除購物車
        axios.get(`${api}600/users/${localStorage.getItem("userId")}/carts`, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                console.log(api);

                console.log(res.data);
                res.data.forEach(function (item) {
                    axios.delete(`${api}600/carts/${item.id}`, {
                        headers: {
                            "authorization": `Bearer ${localStorage.getItem("token")}`
                        }
                    })
                        .then(res => {
                            console.log("購物車已清空");
                            setTimeout(() => {
                                location.href = "landingPage.html";
                            }, 2500)
                        })
                })

            })
    }
})
