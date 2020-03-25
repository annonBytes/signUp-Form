const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const fname = form["firstname"].value;
  const lname = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (fname === "") {
    addErrorTo("firstname", "First Name cannot be empty");
  } else {
    removeError("firstname");
  }

  if (lname === "") {
    addErrorTo("lastname", "Last Name cannot be empty");
  } else {
    removeError("lastname");
  }

  if (email === "") {
    addErrorTo("email", "Looks like this is an empty email");
  } else if (!isValid(email)) {
    addErrorTo("email", "Looks like this is not an email");
  } else {
    removeError("email");
  }

  if (password === "") {
    addErrorTo("password", "Password cannot be empty");
  } else {
    removeError("password");
  }
});

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = form[field].parentNode.querySelector("small");
  small.innerText = message;
}

function isValid(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function removeError(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");

  const small = form[field].parentNode.querySelector("small");
}
