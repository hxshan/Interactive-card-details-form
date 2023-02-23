const input_fields = document.querySelectorAll(".input-field")
const submit_btn=document.querySelector(".submit-btn")

 
function validate () {
    let card_holder_name = document.getElementById("name")
    let car_number = document.getElementById("card-number")
    let exp_month = document.getElementById("exp-month-in")
    let exp_year = document.getElementById("exp-year-in")
    let cvv = document.getElementById("cvv-in")
   
    if(card_holder_name.value.trim()===''){
        let error=input_fields[0].getElementsByClassName("error")
        if(error[0].classList.contains("hidden")){
            error[0].classList.remove("hidden")
        }
        else{
            error[0].classList.add("hidden")
        }
    }else{
        let error=input_fields[0].getElementsByClassName("error")
        if(!error[0].classList.contains("hidden")){
            error[0].classList.add("hidden")
        }
      
    }

   /* if(car_number.value.trim()===''){
        let error=input_fields[1].getElementsByClassName("error")
        if(error[0].classList.contains("hidden")){
            error[0].classList.remove("hidden")
        }
        else{
            error[0].classList.add("hidden")
        }
    }
    else if(){
        
    }
    else{
        let error=input_fields[1].getElementsByClassName("error")
        if(!error[0].classList.contains("hidden")){
            error[0].classList.add("hidden")
        }
      
    }*/
  
    
}


submit_btn.addEventListener('click' ,(e)=>{
    e.preventDefault();
    validate();
})
