const aside = document.querySelector('main aside')
const contact = document.querySelectorAll('.my-contact')

contact.forEach(btn => {
    btn.addEventListener('click', () => {
       aside.classList.toggle('active') 
    })
})
