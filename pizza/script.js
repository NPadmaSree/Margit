const btn = document.querySelector("#btn");
const radioButtons = document.querySelectorAll('input[name="size"]');
btn.addEventListener("click", () => {
  let selectedSize;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      break;
    }
  }
  // show the output:
  output.innerText = selectedSize
    ? `You selected ${selectedSize}`
    : `You haven't selected any size`;
});
function checkbox() {
  const price_of_toppings = document.querySelectorAll('input[name="toppings"]');
  let count=0;
  let topprice;
  for (const prive_of_toppings=checked){
    count=count+1 ;
    if(count<=4){
        
       topprice=0;
    }
    else{
        topprice=topprice+0.5;
    }
  }
  return topprice;
}
