const count = document.querySelector('.count')
const generate = document.querySelector('.generate')
const container = document.querySelector(".wideContainer")

generate.addEventListener('click', () => {
    
    const hex = Math.random().toString(16).substring(2, 8)
    count.innerHTML = "#" + hex
    container.style.backgroundColor = "#" + hex
})


