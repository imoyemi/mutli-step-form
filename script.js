// **** for personal info page 1****
const nextbtn = document.querySelector(".next-btn");
const form = document.querySelector("form");
const input = document.querySelectorAll(".info-input");
const emptyerror = document.querySelectorAll(".errormessage")

nextbtn.addEventListener("click", (e) => {
e.preventDefault()
if(input[0].value !== "" && input[1].value !== "" && input[2].value !== "" 
&& isValidEmail(input[1].value) && isValidNumber(input[2].value)){
  window.location.href ='step2.html'
  localStorage.setItem('plan',"Arcade")
  localStorage.setItem("online-number",1)
  localStorage.setItem("larger-number",2)
  localStorage.setItem("custom-number",0)
 localStorage.setItem('price',9)
}
else{
  validate()
}
});


function validate(){
  
  if(input[0].value ===""){
    emptyerror[0].style.display = "block"
  }else{
    emptyerror[0].style.display = "none"
  }
  if(input[1].value ===""){
    emptyerror[1].style.display = "block"
  }
  else if(input[1].value !=="" && !isValidEmail(input[1].value)){
    emptyerror[1].style.display = "block"
    emptyerror[1].textContent = "must be valid email"
  }
  else{
    emptyerror[1].style.display = "none"
  }
  if(input[2].value ===""){
    emptyerror[2].style.display = "block"
  }
  else if(input[1].value !=="" && !isValidNumber(input[2].value)){
    emptyerror[2].style.display = "block"
    emptyerror[2].textContent = "must be valid number"
  }
  else{
    emptyerror[2].style.display = "none"
  }
}

function isValidEmail(email) {
  // Regular expression to match valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test if the email matches the regular expression
  return emailRegex.test(email);
}
function isValidNumber(input) {
  // Regular expression to match valid numbers
  const numberRegex = /^[0-9]+$/;
  
  // Test if the input matches the regular expression
  return numberRegex.test(input);
}
