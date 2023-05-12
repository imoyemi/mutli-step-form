// *******  global variables******
const service =  document.querySelector(".payment-service")
const storage =  document.querySelector(".payment-storage")
const customizable =  document.querySelector(".payment-custom")
const gobackbtn = document.querySelector('.goback')
const nextbutton = document.querySelector('.nextbtn')
const planname = document.querySelector('.planname')
const planprice = document.querySelector(".planprice")
const monthYearPlan = document.querySelector('.mo-yr')
const monthYeartotal = document.querySelector('#total-mo')
const numbertotal = document.querySelector('.number-mo')
const totalnumber = document.querySelector('.total-number')
const main = document.querySelector('main')
// ******* for check the plan thats choose******

 planname.textContent = localStorage.getItem('plan').charAt()
 .toUpperCase() + localStorage.getItem('plan').slice(1)

planprice.textContent = localStorage.getItem('price')

if(localStorage.getItem("item")==="yr"){
monthYearPlan.textContent ="(Yearly)"
monthYeartotal.textContent = "(per year)"
numbertotal.textContent ="yr"
service.querySelector('span').textContent = "+$10/yr"
storage.querySelector('span').textContent = "+$20/yr"
customizable.querySelector('span').textContent = "+$20/yr"
}

// *******for changing plan******
const change = document.querySelector(".change")
change.addEventListener('click',()=>{
    window.location.href = 'step2.html'
    localStorage.setItem('price',"$9/mo")
    localStorage.setItem('plan',"arcade")
    localStorage.setItem('item',"mo")
    localStorage.setItem("online-number",1)
    localStorage.setItem("larger-number",2)
    localStorage.setItem("custom-number",0)
})

// ****** total *****
totalnumber.textContent = Number(localStorage.getItem('larger-number')) + Number(localStorage.getItem('online-number')) + Number(localStorage.getItem('custom-number')) + Number(planprice.textContent.replace(/\D/g, ''))


function custom(){
    if(localStorage.getItem("customizable") === "false"){
        customizable.classList.add('hidden')
    }
    else{
        customizable.classList.remove('hidden')
        
    }
}
function online(){
    if(localStorage.getItem("online") === "false"){
       service.classList.add('hidden')
    }
    else{
        service.classList.remove('hidden')
    }
}
function larger(){
    if(localStorage.getItem("larger") === "false"){
        storage.classList.add('hidden')
    }
    else{
        storage.classList.remove('hidden')
    }
}

custom()
online()
larger()


// ***** go back and next button ****
gobackbtn.addEventListener("click",()=>{
    window.location.href ="step3.html"
    localStorage.setItem("online","true")
    localStorage.setItem("larger","true")
    localStorage.setItem("customizable","false")
    localStorage.setItem("online-number",1)
    localStorage.setItem("larger-number",2)
    localStorage.setItem("custom-number",0)
    window.location.href ="step3.html"
})
nextbutton.addEventListener("click",()=>{
    main.innerHTML = `      <div class="thank-container">
    <img src="/img/icon-thank-you.svg" alt="icon-thank-you">
    <h1 class="thank-head">Thank you!</h1>
    <p class="thank-text">
      Thanks for confirming your subscription! We hope you have 
      fun using our platform. if you ever need support,please feel free to email us at support@loremgaming.com.
    </p>
  </div>`
})


