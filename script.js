const btn = document.querySelector('.btns')
const intervalID = setInterval(()=>{
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const rgb = `rgb(${red},${green},${blue})`
    document.body.style.background = rgb
},1000)

btn.addEventListener("click",()=>{
    //For Stop execution of generateRandomColor
    clearInterval(intervalID)
    btn.textContent = document.body.style.background
})