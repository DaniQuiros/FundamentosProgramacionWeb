const btnLogin = document.getElementById('btn-login');

// TODO: manejar errores internos
if (!btnLogin) {
  console.error('Error: no existe el boton de login')
}

const validationAlert = (text) => {
  Swal.fire({
    title: "Verificar la entrada de datos",
    text: text,
    confirmButtonText: "Intentar de nuevo",
    confirmButtonColor: "#109210",
    html: '<iframe src="https://lottie.host/embed/967c572b-6f57-42bf-84ed-a479ca351823/ZrgIHWgQQ6.json"></iframe> <br><p>' + text + '</p>',
  });
};

const login = (event) => {
  event.preventDefault();

  const userInput = document.getElementById('user');
  const pwdInput = document.getElementById('password');

  // TODO: manejar errores internos
  if (!userInput || !pwdInput) {
    console.error('Error: no existen los inputs correspondientes');
    return;
  }

  // declaracion de los datos usuario y password respectivamente
  const username = 'cenfo'
  const password = '123';

  const inputs = [userInput, pwdInput];
  let errorCount = 0;
  let text = "";

  inputs.forEach(input => {
    input.classList.remove('error');
    //si estan vacios los campos de entrada 
    if (!input.value) {
      //aparece el texto que llevar el parametro de la funcion validación_alert
      text = "Los campos requeridos NO pueden estar vacíos. Por favor intente nuevamente.";
      validationAlert(text);
      input.classList.add('error');
      errorCount++;
    }
  });

  if (!errorCount) {
    if (userInput.value === username && pwdInput.value === password) {
      Swal.fire({
        title: "Credenciales correctas",
        showConfirmButton: false,
        timer: 5000,
        html: '<iframe width= "320 height="240" src="https://lottie.host/embed/686eb8b3-9905-456a-8039-127d4c642f19/LhbOOUtRF9.json"></iframe> <br><br><p>Un momento!</p>',
      }).then(() => {
        window.location.href = "/landing.html", "blank";
      });
    } else {
      text = 'Usuario o contraseña incorrecta.';
      validationAlert(text);
    }
  }
};

btnLogin.addEventListener('click', login);