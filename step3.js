// *******  global variables******
const monthyear = document.querySelectorAll('#mo-yr')
const price = document.querySelectorAll('#price')
const checkbox = document.querySelectorAll('#checkbox')
const addbox = document.querySelectorAll('.step-info')
// ***** go back and next button ****
const gobackbtn = document.querySelector('.goback')
const nextbutton = document.querySelector('.nextbtn')

gobackbtn.addEventListener("click",()=>{
    window.location.href ="step2.html"
    localStorage.setItem('item','mo')
    localStorage.setItem('price','$9/mo')
    localStorage.setItem('plan','arcade')
})
nextbutton.addEventListener("click",()=>{
    window.location.href ="step4.html"
    
})

// **** for checkbox****


addbox.forEach(item=>item.addEventListener('click',(e)=>{
   e.currentTarget.classList.toggle('step--active')
   if(!e.currentTarget.classList.contains('step--active')){
    e.currentTarget.querySelector('input').checked = false
    if(e.currentTarget === addbox[0]){
        localStorage.setItem("online","false")
        localStorage.setItem("online-number",0)
       }
    if(e.currentTarget === addbox[1]){
        localStorage.setItem("larger","false")
        localStorage.setItem("larger-number",0)
       }
    if(e.currentTarget === addbox[2]){
        localStorage.setItem("customizable","false")
        localStorage.setItem("custom-number",0)
       }
   }
  else{
    e.currentTarget.querySelector('input').checked = true
    if(e.currentTarget === addbox[0]){
     localStorage.setItem("online","true")
     localStorage.setItem("online-number",price[0].textContent)
    }
    if(e.currentTarget === addbox[1]){
     localStorage.setItem("larger","true")
     localStorage.setItem("larger-number",price[1].textContent)
    }
    if(e.currentTarget === addbox[2]){
     localStorage.setItem("customizable","true")
     localStorage.setItem("custom-number",price[2].textContent)
    }
  }
}))

// ******* get the year or month from step2********


monthyear.forEach(item=>item.textContent = localStorage.getItem('item'))
 if(monthyear[0].textContent === "yr"){
    price[0].textContent = 10
    price[1].textContent = 20
    price[2].textContent = 20
 }
else{
    price[0].textContent = 1
    price[1].textContent = 2
    price[2].textContent = 2
}
