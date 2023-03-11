//1
const body = document.querySelector('body');

document.getElementById('btnswitch').addEventListener('click',()=>{
        document.documentElement.setAttribute('data-bs-theme','dark')
        body.setAttribute('class','theme-dark');
})
document.getElementById('btnswitch2').addEventListener('click',()=>{
        document.documentElement.setAttribute('data-bs-theme','light')
        body.setAttribute('class','theme-light');
})

document.getElementById('btnswitch3').addEventListener('click',()=>{
        document.documentElement.setAttribute('data-bs-theme','light')
        body.className = 'gris';
})
