const input_fields = document.querySelectorAll(".input-field")
const submit_btn=document.querySelector(".submit-btn")
const cardregex= /^[0-9]{16}$/;


const thanks_con = document.querySelector(".thankyou-container")
const input_container = document.querySelector(".input-container")

//card holder name variables
let card_holder_name = document.getElementById("name")
let card_holder_name_text = document.querySelector(".card-name")

//card numbers variables
let card_number = document.getElementById("card-number")
let card_number_text = document.querySelector(".cardnumber-text")
// card dates variables
let exp_month = document.getElementById("exp-month-in")
let exp_month_text = document.querySelector(".exp-month")

let exp_year = document.getElementById("exp-year-in")
let exp_year_text = document.querySelector(".exp-year")
//cvc variables
let cvc = document.getElementById("cvc-in")
let cvc_text = document.querySelector(".cvc-text")


//validate wether data is entered
function validate () {
    var valid_count =0;
//card holder name check
    if(card_holder_name.value.trim()===''){
        let error=input_fields[0].getElementsByClassName("error")
        if(error[0].classList.contains("hidden")){
            error[0].classList.remove("hidden")
        }
       
    }else{
        let error=input_fields[0].getElementsByClassName("error")
        if(!error[0].classList.contains("hidden")){
            error[0].classList.add("hidden")
        }
      valid_count++
    }
//number entered check
   if(card_number.value.trim()===''){
        let error=input_fields[1].getElementsByClassName("error")
        error[0].innerText="Can't be blank"
        if(error[0].classList.contains("hidden")){
            error[0].classList.remove("hidden")
        }
       
        
    }
    else if(!cardregex.test(card_number.value.trim())){
        let error=input_fields[1].getElementsByClassName("error")
        error[0].innerText="Wrong format,numbers only"
        if(error[0].classList.contains("hidden")){
            error[0].classList.remove("hidden")
        }
        
    }
    else{
        let error=input_fields[1].getElementsByClassName("error")
        if(!error[0].classList.contains("hidden")){
            error[0].classList.add("hidden")
        }
        valid_count++
    }
 //Expiry date enterd check

    if((exp_year.value.trim() === "") || (exp_month.value.trim() === '' )){

       let dates_err_con=document.querySelector(".dates")
       let date_err=dates_err_con.querySelector("#date-err")

        if(date_err.classList.contains("hidden")){
            date_err.classList.remove("hidden")
        }
      
        
    }

    else
    {

        let dates_err_con=document.querySelector(".dates")
        let date_err=dates_err_con.querySelector("#date-err")
        if(!date_err.classList.contains("hidden")){
            date_err.classList.add("hidden")
        }    
        valid_count++
    }
    if((cvc.value.trim() === "")){

        let dates_err_con=document.querySelector(".dates")
        let cvc_err=dates_err_con.querySelector("#cvc-err")
        cvc_err.innerText="Can't be blank"
         if(cvc_err.classList.contains("hidden")){
            cvc_err.classList.remove("hidden")
       }
    
       
     }
     else if((cvc.value.trim().length != 3)){
        let dates_err_con=document.querySelector(".dates")
        let cvc_err=dates_err_con.querySelector("#cvc-err")
        cvc_err.innerText="Can't contain less than 3 numbers"
    
  
        
         if(cvc_err.classList.contains("hidden")){
            cvc_err.classList.remove("hidden")
       }

     }
     else{
         let dates_err_con=document.querySelector(".dates")
         let cvc_err=dates_err_con.querySelector("#cvc-err")
         if(!cvc_err.classList.contains("hidden")){
            cvc_err.classList.add("hidden")
         }
         
         valid_count++
    }
    return valid_count
}   


// change name on card  while it is entered
card_holder_name.addEventListener('keyup',(e)=>{
    card_holder_name_text.innerText=card_holder_name.value
})

// add spaces and change card number while it is entered
card_number.addEventListener('keyup',(e)=>{
    let number_string = card_number.value.toString().replace(/(.{4})/g,"$1 ")
    card_number_text.innerHTML=number_string
})


//same thing as above for expiry month
exp_month.addEventListener('keyup',(e)=>{   
    let exp_month_text_temp = exp_month.value
    if(parseInt(exp_month_text_temp) <=9 && !(/^[0][0-9]$/.test(exp_month.value)) ) {       
        exp_month_text_temp="0" + exp_month.value.toString()
        exp_month_text.innerText = exp_month_text_temp
    }
    else if(/^[0][0-9]$/.test(exp_month.value)){
        exp_month_text.innerText = exp_month.value
    }
    else{
        exp_month_text_temp = exp_month.value
        exp_month_text.innerText = exp_month_text_temp
    }
    
})

// same thing for expiry year
exp_year.addEventListener('keyup',(e)=>{   
    let exp_year_text_temp = exp_year.value
    if(parseInt(exp_year_text_temp) <=9 && !(/^[0][0-9]$/.test(exp_year.value))) {       
        exp_year_text_temp="0" + exp_year.value.toString()
        exp_year_text.innerText = exp_year_text_temp
    }
    else if(/^[0][0-9]$/.test(exp_year.value)){
        exp_year_text.innerText = exp_year.value
    }
    else{
        exp_year_text_temp = exp_year.value
        exp_year_text.innerText = exp_year_text_temp
    }
    
})

cvc.addEventListener('keyup',(e)=>{
    cvc_text.innerText=cvc.value
})


submit_btn.addEventListener('click' ,(e)=>{
    e.preventDefault();
    validate();
    if(validate() >= 4){
        input_container.classList.add("not-active")
        thanks_con.classList.remove("not-active")
    }
    
})
