//3
const asunto = document.querySelector('#subject');
const correo = document.querySelector('#cc');
const mensaje = document.querySelector('#body');


asunto.addEventListener('blur', () => {
  if (asunto.value.trim() === '') {
    asunto.style.border = '2px solid red';

    let errorText = asunto.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      asunto.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Este campo no puede estar vacío';
  } else {
    asunto.style.border = '2px solid green';
    const errorText = asunto.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});

correo.addEventListener('blur', () => {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (correo.value.trim() === '' || !pattern.test(correo.value.trim())) {
    correo.style.border = '2px solid red';

    let errorText = correo.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      correo.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Introduce un correo electrónico válido';
  } else {
    correo.style.border = '2px solid green';

    const errorText = correo.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});

mensaje.addEventListener('blur', () => {
  if (mensaje.value.trim() === '') {
    mensaje.style.border = '2px solid red';

    let errorText = mensaje.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      mensaje.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Este campo no puede estar vacío';
  } else {
    mensaje.style.border = '';
    const errorText = mensaje.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});