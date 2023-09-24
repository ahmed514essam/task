const minusBtn = document.querySelector(".minus-btn")
const proBtn = document.querySelector(".pro-btn")
const plusBtn = document.querySelector(".plus-btn")









let counts =1;
plusBtn.addEventListener("click" ,function()
{
    if (counts <9){
        counts++
    }


    proBtn.textContent=counts;



}
)

minusBtn.addEventListener("click" ,function()
{
    if (counts >0){
        counts--
    }


    proBtn.textContent=counts;



}
)

















