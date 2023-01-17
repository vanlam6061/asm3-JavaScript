"use strict";
class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
}

const KEY = "USER_ARRAY";
const userArr = JSON.parse(getFromStorage(KEY)) || [];

const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener("click", () => {
  const userData = {
    firstName: inputFirstNames.value,
    lastName: inputLastNames.value,
    username: inputUsername.value,
    password: inputPassword.value,
    confirm: inputPasswordConfirm.value,
  };
  let validate = true;
  if (
    !data.firstName ||
    !data.lastName ||
    !data.username ||
    !data.password ||
    !data.confirm
  ) {
    alert("Please fill all fields");
    validate = false;
  } else {
    for (let i = 0; i < useArr.length; i++) {
      if (data.username == useArr[i].username) {
        alert("Username must unique!");
        validate = false;
      }
    }
    if (!data.password.match(/[a-zA-Z0-9]{8,}/)) {
      alert("Password must be at least 8 characters long");
      validate = false;
    }
    if (data.password != data.confirm) {
      alert("Password and confirm password do not match");
      validate = false;
    }
  }
  if (validate) {
    let user = new User(
      data.firstName,
      data.lastName,
      data.email,
      data.password,
      data.password,
      data.confirm
    );
    const data = parseUsers(user);
    userArr.push(data);
    saveToStorage(KEY, JSON.stringify(userArr));
    window.location.href = "../pages/login.html";
  }
});
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password
  );

  return user;
}
