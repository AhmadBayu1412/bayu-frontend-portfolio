const socialMedia = document.querySelector('.social-media')
const contact = document.querySelectorAll('.my-contact')

contact.forEach(btn => {
    btn.addEventListener('click', () => {
       socialMedia.classList.toggle('active') 
    })
})
