var elForm = document.querySelector(".form")
var elTicket = document.querySelector("#ticket");
var elCost = document.querySelector("#cost");
var elRefuse = document.querySelector("#refuse");


var elBtn = document.querySelector(".btn");
var elOutput = document.querySelector(".output");

console.log(elTicket)
console.log(elCost)
console.log(elRefuse)

elForm.addEventListener("submit",function(evt) {
   evt.preventDefault();

   var tickets = elTicket.checked;
   var costs = elCost.checked;
   var refuses = elRefuse.checked;

   
   if (tickets && costs && !refuses) {
      elOutput.textContent = "Oq yo'l"
   }  
   else{
      elOutput.textContent = "Siz bora olmaysiz";

   }

})
