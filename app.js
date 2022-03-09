const displayLocalStorageCart = () => {
  const cart = getProductCart();
  for (const product in cart) {
    displayProducts(product);
  }
};

const addProduct = () => {
  const addProductName = document.getElementById("addProductName");

  const addProduct = addProductName.value;

  if (!addProduct) {
    return;
  }
  displayProducts(addProduct);
  addProductToCart(addProduct);

  addProductName.value = "";
};

const displayProducts = (productName) => {
  const productDisplayContainer = document.getElementById(
    "displayProductsContainer"
  );
  const p = document.createElement("p");
  p.className = "productItem";
  p.innerText = productName;

  productDisplayContainer.appendChild(p);
};

const getProductCart = () => {
  const cart = localStorage.getItem("cart");
  let productCartObj;
  if (cart) {
    productCartObj = JSON.parse(cart);
  } else {
    productCartObj = {};
  }
  return productCartObj;
};

const addProductToCart = (name) => {
  const cart = getProductCart();
  cart[name] = 1;

  const stringifiedCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifiedCart);
  //   console.log(setCart);
};
displayLocalStorageCart();
