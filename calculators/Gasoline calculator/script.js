// function calculate() {
//   let price = +getElementById("price");
//   let money = +getElementById("money");
//   if(money/price>10){
//     console.log(
//       `" could get about"${money / price} "liters\, good\, now ypu can escape"`
//     ); 

//   } else {

//   }

//   console.log()
// }
const calculate = () => {
  const price=Number(document.getElementById("price").value);
  const money=+document.querySelector("#money").value;
  const answer=document.querySelector('#answer');
  //console.log('price', price,'money', money);
  const amount=Math.floor(money/price);
  //console.log('amount', amount);
  let text;
  if(amount>10) {
    text=`You could get about ${amount} liters, good, now you van escape`;

} else{
  text=`You could get about ${amount} liters, sorry, you have to stay`;
}
  answer.textContent=amount;

};