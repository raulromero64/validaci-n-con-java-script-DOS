const form = document.querySelector(".container__content__form");
const inputEmail = document.querySelector(".container__content__form__email");
const error = document.querySelector(".container__content__form__email--error");

/*cuando suene el click se trae asi*/
form.addEventListener("submit", (event) => {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (regExp.test(inputEmail.value) == true) {
    inputEmail.style.border = "1px solid hsl(0, 36%, 70%)";
    inputEmail.style.background = 'url("")';
    error.innerHTML = ""; //desaparece el texto de error error de abajo
  } else {
    event.preventDefault(); //refresca la pagina
    inputEmail.style.border = "1px solid red";
    inputEmail.style.backgroundImage = 'url("./images/icon-error.svg")';
    error.innerHTML = "Please provide a valid email"; //cuando hay error
  }
});

//  console.log(regExp.test(inputEmail.value));
