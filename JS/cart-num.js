// 即時顯示購物車數量
function cartNum() {
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
}
cartNum()