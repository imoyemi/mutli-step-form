// ***** for choose plan ****
const plan = document.querySelectorAll(".card");

plan.forEach((item) => {
  item.addEventListener("click", (e) => {
    plan.forEach((items) => {
      if (items !== e.currentTarget) {
        items.classList.remove("card--active");
      }
    });
    e.currentTarget.classList.add("card--active"); 
    const choose = e.currentTarget.querySelector('.plan')
    const price = e.currentTarget.querySelector('.price')
    localStorage.setItem('plan',choose.textContent)
  localStorage.setItem('price',price.textContent)
  });
 
  
});

// ***** change to monthly ****

const togglebtn = document.querySelector(".toggle");
const price = document.querySelectorAll(".price");
const free = document.querySelectorAll(".free");

togglebtn.addEventListener("click", () => {
  if (togglebtn.style.transform === "rotate(0deg)") {
    price[0].innerHTML = "&#36;9/mo";
    price[1].innerHTML = "&#36;12/mo";
    price[2].innerHTML = "&#36;15/mo";
    free.forEach((item) => (item.style.display = "none"));
    togglebtn.style.transform = "rotate(180deg)";
    togglebtn.style.transition = "transform 300ms";
    localStorage.setItem("item", "mo");
    const prePrice = document.querySelector('.card--active')
    const pPrice = prePrice.querySelector('.price').textContent
    localStorage.setItem('price',pPrice)
    localStorage.setItem("online-number",1)
    localStorage.setItem("larger-number",2)
    localStorage.setItem("custom-number",0)
  } else {
    price[0].innerHTML = "&#36;90/yr";
    price[1].innerHTML = "&#36;120/yr";
    price[2].innerHTML = "&#36;150/yr";
    free.forEach((item) => (item.style.display = "block"));
    togglebtn.style.transform = "rotate(0deg)";
    togglebtn.style.transition = "transform 300ms";
    localStorage.setItem("item", "yr");

    const prePrice = document.querySelector('.card--active')
    const pPrice = prePrice.querySelector('.price').textContent
    localStorage.setItem('price',pPrice)
    localStorage.setItem("online-number",10)
    localStorage.setItem("larger-number",20)
    localStorage.setItem("custom-number",0)
  }
});

// ***** go back and next button ****
const gobackbtn = document.querySelector(".goback");
const nextbutton = document.querySelector(".nextbtn");

gobackbtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
nextbutton.addEventListener("click", () => {
  window.location.href = "step3.html";
  localStorage.setItem("online","true")
  localStorage.setItem("larger","true")
  localStorage.setItem("customizable","false")

});
