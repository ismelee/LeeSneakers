axios.get(`${api}products`)
    .then(res => {
        let dropDown = document.querySelectorAll(".drop-down p");
        let dropDown2 = document.querySelectorAll(".drop-down2 p");
        let rightTop_h3 = document.querySelector(".right-top h3");
        let inside = document.querySelector(".inside");
        // 預設載入
        let str = "";
        res.data.forEach(function (item) {
            if (item.type == "登山鞋款") {
                rightTop_h3.innerHTML = item.type;
                str += `
                <a href="shoes-information.html?id=${item.id}" class="href" data-id=${item.id}>
                <div class="item">
                   <div class="shoes-img">
                       <img src="${item.imgSrc}" alt="">
                    </div>
                    <div class="shoes-infor">
                        <p class="shoes-name">${item.name}</p>
                       <p class="type">${item.type}</p>
                        <p>NT$ ${item.price}</p>
                       <s>NT$ ${item.originalPrice}</s>
                   </div>
            </div>
           </a>
                 `
            }
        })
        inside.innerHTML = str;
    })
