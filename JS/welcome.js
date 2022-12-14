// 歡迎會員渲染
let welcome = document.querySelector(".welcome");
let welcomeName = document.querySelector(".welcome>span");
console.log(localStorage.getItem("userId"), localStorage.getItem("token"));

if (localStorage.getItem("userId") == "" && localStorage.getItem("token") == "") {
    welcome.style.display = "none";
} else if (localStorage.getItem("userId") !== "" && localStorage.getItem("token") !== "") {
    welcomeName.innerHTML = `${localStorage.getItem("nickName")}`;
}