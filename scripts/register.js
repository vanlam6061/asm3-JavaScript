"use strict";
//
const KEY_USERS = "USER-ARRAY";
const userArr = JSON.parse(getFromStorage(KEY_USERS)) || [];

class User {
  constructor(firstName, lastName, userName, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
  }
}
//DOM Object
const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const submitBtn = document.getElementById("btn-submit");
//Submit button
submitBtn.addEventListener("click", () => {
  const dataUser = {
    firstName: inputFirstName.value,
    lastName: inputLastName.value,
    userName: inputUserName.value,
    password: inputPassword.value,
    confirm: inputPasswordConfirm.value,
  };
  let validate = true;
  if (
    !dataUser.firstName ||
    !dataUser.lastName ||
    !dataUser.userName ||
    !dataUser.password ||
    !dataUser.confirm
  ) {
    alert("Please fill all fields");
    validate = false;
  } else {
    for (let i = 0; i < userArr.length; i++) {
      if (dataUser.userName == userArr[i].userName) {
        alert("Username must unique!");
        validate = false;
      }
    }
    if (!dataUser.password.match(/[a-zA-Z0-9]{8,}/)) {
      alert("Password must be at least 8 characters long");
      validate = false;
    }

    if (dataUser.password != dataUser.confirm) {
      alert("Password and confirm password do not match");
      validate = false;
    }
  }

  if (validate) {
    const userObject = parseUser(dataUser);
    userArr.push(userObject);
    saveToStorage(KEY_USERS, JSON.stringify(userArr));
    window.location.href = "../pages/login.html";
  }
});
function parseUser(dataUser) {
  const user = new User(
    dataUser.firstName,
    dataUser.lastName,
    dataUser.userName,
    dataUser.password
  );

  return user;
}
