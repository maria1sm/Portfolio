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

//2

function filter(c) {
    let x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all-btn") {
            c = "";
    }
    for (i = 0; i < x.length; i++) {
      AddClass(x[i], "hide");
      if (x[i].className.indexOf(c) > -1) RemoveClass(x[i], "hide");
    }
  }

function AddClass(element, name) {
let i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
if (arr1.indexOf(arr2[i]) == -1) {
  element.className += " " + arr2[i];
}
}
}      

function RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

const btnContainer = document.querySelector('.boton__container');
const btns = document.querySelectorAll('.boton');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.toggle('color', b === btn));
    });
  });
