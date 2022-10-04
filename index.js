// Draw for Element1
let productsForElement1 = window.products
  .filter(
    (item) => item.is_in_stock !== "0" && item.product_types.includes("top")
  )
  .sort(() => Math.random() - Math.random())
  .slice(0, 4);
let element1 = "";
productsForElement1.map((item) => {
  element1 += `<div class="product">
  <a href=${item.product_url}>
      <img src=${item.image} alt=${item.prod_name}>
      <div class="title">${item.prod_name}</div>
      <div class="title">${item.short_description}</div>
      <div class="price">${item.currency_symbol}${item.price}</div>    
  </a>
</div>`;
});

document
  .getElementById("XgenElement1")
  .insertAdjacentHTML("beforeend", element1);

// Draw for Element2
let productsForElement2 = window.products
  .filter(
    (item) => item.is_in_stock !== "0" && !item.product_types.includes("top")
  )
  .sort(() => Math.random() - Math.random())
  .slice(0, 4);
let element2 = "";
productsForElement2.map((item) => {
  element2 += `<div class="product">
  <a href=${item.product_url}>
      <img src=${item.image} alt=${item.prod_name}>
      <div class="title">${item.prod_name} - ${item.manufacturer}</div>
      <div class="price">${item.currency_symbol}${item.price}</div>    
  </a>
</div>`;
});

document
  .getElementById("XgenElement2")
  .insertAdjacentHTML("beforeend", element2);
