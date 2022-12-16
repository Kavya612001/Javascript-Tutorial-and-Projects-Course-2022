document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', ()=> {
        alert('This is awesome, external js')
    })
})