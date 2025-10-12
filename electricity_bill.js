let unitInput = document.getElementById("unit");
let button = document.getElementById("btn");
let bill = document.getElementById("amount");



function billcalculater(){
    let amt = 0;
    let unit = Number((unitInput).value);

     if(unit > 1200){
        amt += (unit - 1200) * 8 ;
        unit = 1200;
     }

     if(unit >800 && unit<= 1200){
       amt += (unit - 800) * 7 ;
       unit = 800;
     }    

     if(unit > 400 && unit<=800){
      amt += (unit - 400) * 6.5;
      unit = 400;
     }

      if(unit > 200 && unit<=400){
      amt +=((unit - 200) * 5)/2;
      unit = 200;
      }
      if(unit <= 200){
        amt += 0;
      }

     bill.innerText = ` ₹${amt.toFixed(2)} `;
}

button.addEventListener('click', billcalculater);

