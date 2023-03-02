const price = document.querySelector('.price');
/* const discount = document.querySelector('.discount'); */
/* const discounts = document.querySelectorAll('.discounts') */
const coupon = document.querySelector('.coupon');
const result = document.querySelector('.result');
const btn = document.querySelector('.btnCal')


btn.addEventListener('click', calcPriceWithDiscount);

/* function getDiscounts() {
  var getSelectedValue = document.querySelector( 'input[class="discounts"]:checked');
  if(getSelectedValue != null) {   
    return getSelectedValue.value; 
  }
} */

/* const couponObj = {
  'Estrella_30': 30,
  'Estrella_20': 20,
  'Estrella_15': 15,
} */

const couponArray = [];

couponArray.push({
  name: 'Estrella_30',
  discount: 30,
})
couponArray.push({
  name: 'Estrella_20',
  discount: 20,
})
couponArray.push({
  name: 'Estrella_15',
  discount: 15,
})
function isCouponInArray(couponElement){
  return couponElement.name == couponInput;
}

function calcPriceWithDiscount(){
  let priceInput = parseInt(price.value);
  //let discountInput = parseInt(discount.value);
  /* let discountInput = getDiscounts();
  console.log(discountInput) */
  let couponInput = coupon.value;
  let discountInput;
  
  const couponInArray = couponArray.find(isCouponInArray);

  if(couponInArray){
    discountInput = couponInArray.discount
  }else{
    result.innerText = `El cupon no es valido`;
    return;
  }

  console.log({
    couponInput,
    couponArray,
    couponInArray,
    discountInput
  })

  /* if(couponObj[couponInput]){
    discountInput = couponObj[couponInput]
  }else{
    result.innerText = `El cupon no es valido`;
    return;
  } */

  
  if( !priceInput || !discountInput){
    result.innerText = `Llena el formulario`;
    return;
  }

  /* if(discountInput > 100){
    result.innerText = `No existe`;
    return;
  }
  if(priceInput < 0 || !discountInput < 0){
    result.innerText = `No acepta numero negativos`;
    return;
  } */

  let newPrice = priceInput * (100 - discountInput) / 100;
  result.innerText = `El porcentaje de descuento es $${newPrice}`;
}


