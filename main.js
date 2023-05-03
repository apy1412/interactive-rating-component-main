
const btns = Array.from(document.querySelectorAll(".btn"))
const button = document.querySelector(".submit")
const rating = document.querySelector(".jsRating")
const body = document.body

btns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("selection")
        const selection = btn.innerText
        const textData = `You selected ${selection} out of 5` 
        rating.innerHTML = textData
        button.addEventListener("click", ()=>{
            body.classList.add("is-submitted")
        })
    })
    
})





