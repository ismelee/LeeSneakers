let series = document.querySelector(".series");
let brand = document.querySelector(".brand");
let shoesDown = document.querySelector(".shoes-down");
let brandDown = document.querySelector(".brand-down");
series.addEventListener("click", function () {
    shoesDown.classList.toggle("down");
})
brand.addEventListener("click", function () {
    brandDown.classList.toggle("down");
})

// =======================================================================
// 篩選邏輯

axios.get(`${api}products`)
    .then(res => {
        let dropDown = document.querySelectorAll(".drop-down p");
        let dropDown2 = document.querySelectorAll(".drop-down2 p");
        let rightTop_h3 = document.querySelector(".right-top h3");
        let inside = document.querySelector(".inside");
        // console.log(dropDown2);
        // type篩選
        dropDown.forEach(function (drop) {
            drop.addEventListener("click", function (e) {
                let str = "";
                res.data.forEach(function (item) {
                    if (item.type == drop.textContent) {
                        rightTop_h3.innerHTML = item.type
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
        })
        // brand篩選
        dropDown2.forEach(function (drop2) {
            drop2.addEventListener("click", function (e) {
                let str2 = "";
                res.data.forEach(function (item2) {
                    if (item2.brand == drop2.textContent) {
                        rightTop_h3.innerHTML = (item2.brand).toUpperCase()
                        str2 += `
                        <a href="shoes-information.html?id=${item2.id}" class="href" data-id=${item2.id}>
                        <div class="item">
                           <div class="shoes-img">
                               <img src="${item2.imgSrc}" alt="">
                            </div>
                            <div class="shoes-infor">
                                <p class="shoes-name">${item2.name}</p>
                               <p class="type">${item2.type}</p>
                                <p>NT$ ${item2.price}</p>
                               <s>NT$ ${item2.originalPrice}</s>
                           </div>
                    </div>
                   </a>
                 `
                    }
                })
                inside.innerHTML = str2;
            })
        })
    })

// axios.get("http://localhost:3000/products")
//     .then(res => {
//         // console.log(res.data);
//         let dropDown = document.querySelectorAll(".drop-down");
//         let rightTop_h3 = document.querySelector(".right-top h3");
//         let inside = document.querySelector(".inside");
//         dropDown[0].addEventListener("click", function (e) {
//             let str = "";  // 一定要寫在fn裡，不然點第二次不會變化
//             res.data.forEach(function (item) {
//                 if (e.target.textContent == item.type) {
//                     rightTop_h3.innerHTML = item.type
//                     str += `
//                     <div class="item">
//                         <div class="shoes-img">
//                             <img src="${item.imgSrc}" alt="">
//                         </div>
//                         <div class="shoes-infor">
//                             <p class="shoes-name">${item.name}</p>
//                             <p class="type">${item.type}</p>
//                             <p>NT$ ${item.price}</p>
//                             <s>NT$ ${item.originalPrice}</s>
//                         </div>
//                 </div>
//                 `
//                 }

//             })
//             inside.innerHTML = str;

//         })
//     })


