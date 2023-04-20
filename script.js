const count = document.querySelector('.count')
const generate = document.querySelector('.generate')

generate.addEventListener('click', () => {
    
    const hex = Math.random().toString(16).substring(2, 8)
    count.innerHTML = "#" + hex
    document.body.style.backgroundColor = "#" + hex
})


