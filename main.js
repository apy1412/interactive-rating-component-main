

const btns = Array.from(document.querySelectorAll(".btn"))
const button = document.querySelector(".submit")
const rating = document.querySelector(".jsRating")
const body = document.body


btns.forEach(b =>{
   b.addEventListener("click", ()=>{
        btns.forEach(bt => bt.classList.remove("selection"))
        b.classList.add("selection")
        const selection = b.innerText
        const textData = `You selected ${selection} out of 5` 
        rating.innerHTML = textData
        button.addEventListener("click", ()=>{
            body.classList.add("is-submitted")
         })
   })
   
})





