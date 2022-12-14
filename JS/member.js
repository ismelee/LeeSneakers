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