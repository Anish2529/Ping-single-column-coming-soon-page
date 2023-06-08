const button = document.querySelector(".btn")
const invalid = document.querySelector(".invalid")
const display = "Plese provide a valid email address"
const input = document.querySelector(".input")

button.addEventListener("click",() =>{

    const inputvalue = document.querySelector(".input").value

    localStorage.setItem('email', input);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputvalue))
    {
      return(true)

    }
    else{
      invalid.innerHTML = display
      input.style.border = "1px solid hsl(354, 100%, 66%)"
    }



})