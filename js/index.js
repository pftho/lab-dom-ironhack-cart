// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = Number(price.innerHTML);
  const quantityValue = Number(quantity.value);
  const subTotalCalcul = priceValue * quantityValue;
  const subTotal = subTotalCalcul.toString();
  const subTotalElement = product.getElementsByClassName('subtotal')[0];
  subTotalElement.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');

  let productsArray = [];
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    productsArray.push(product);
  }

  let totalAmount = 0;

  productsArray.forEach((product) => {
    updateSubtotal(product);
    return (totalAmount += Number(updateSubtotal(product)));
  });

  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = totalAmount;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parentNode = document.getElementsByClassName('action');
  parentNode.removeChild(target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});
