const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

// fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
// Gøt at Kategorierne virker, men billederne fra produktliste forsvinder!!!
fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
  .then((res) => res.json())
  .then(showProduts);

function showProduts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  // console.log(product)
  //Fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en Kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
    
  }

  const discountAmount = product.price * (product.discount / 100);
  const newPrice = product.price - discountAmount;

  copy
    .querySelector(".read_more")
    .setAttribute("href", `product.html?id=${product.id}`);

  copy.querySelector(".brandname").textContent = product.brandname;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".discount-procent").textContent = product.discount;
 copy.querySelector(".foto").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
 copy.querySelector("a").href = `produkt.html?id=${product.id}`;

 copy.querySelector(".discount-price").textContent = `${newPrice.toFixed(2)}`;  //appende
  document.querySelector("main").appendChild(copy);
}

/*
     <template id="smallProductTemplate">
        <article class="smallProduct">
            <img src="#" alt="her skal være et billede">
            <h3>Sahara Team India Fanwear</h3>
            <p class="subtle">Tshirt | Nike</p>
            <p class="price"><span>Prev</span>DKK 1595</p>
            <div class="discounted">
                <p>Now DKK 1560</p>
                <p>-34%</p>
            </div>
            <a href="produkt.html">Read More</a>
        </article>
     </template>*/

/* {
  "id": 1165,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2013,
  "usagetype": "Sports",
  "productdisplayname": "Mean Team India Cricket Jersey",
  "price": 2495,
  "discount": 45,
  "brandname": "Nike",
  "soldout": 0
}*/
