'use strict';
//Calling elements from the DOM
let itemsQty = document.querySelector('.items-quantity');
let incrementBtn = document.querySelectorAll('.increment');
let decrementBtn = document.querySelectorAll('.decrement');
let merchTotal = document.querySelector('.merch-total');
let orderTotal = document.querySelector('.order-total');
let prices = document.querySelectorAll('.price');
let productQty = document.querySelectorAll('.adding');
let product = document.querySelectorAll('.add-remove');
let removeBtn = document.querySelectorAll('.RemoveItm');

//-----------------variables---------------
// No need for these defintions 

/*Number(merchTotal.innerHTML);
Number(prices.innerHTML);
Number(productQty.innerHTML);
let priceTotal;
Number(priceTotal);
*/

// --------------------/*EventListeners & Functions */
let merchCalc = (idx) => {
 
 // inner text not Inner HTML 
 // [idx] to select an item of the selector list 
 
  // since you call the merch calc once with every button click this will result in adding the full price again and you basicaly added one item only 
//  priceTotal = Number(prices[idx].innerText) * Number(productQty[idx].innerHTML);

 
  merchTotal.innerText = Number(  merchTotal.innerText)+ Number(prices[idx].innerText);
  console.log("Total is "+merchTotal.innerText);
};

//------------------------------increment btn -----------
incrementBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    productQty[idx].innerHTML++;
	// passing the product index to merch calc to define whice product has been incremented 
    merchCalc(idx);
  });
});

//----------------------------decrement btn-------------

decrementBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    if (productQty[idx].innerHTML <= 1) {
      del(product, idx);
    } else {
      productQty[idx].innerHTML--;
    }
  });
});

//--------------------DELETE FUNCTION---------------

function del(arr, idx) {
  arr[idx].remove();
}

//--------------------REMOVE BTN --------------------
removeBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    del(product, idx);
    itemsQty.innerHTML--;
  });
});
let productCalc = () => {
  itemsQty.innerHTML = product.length;
};
