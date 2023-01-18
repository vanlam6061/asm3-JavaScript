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

const submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener("click", () => {
  const inputFirstName = document.getElementById("input-firstname").value;
  const inputLastName = document.getElementById("input-lastname").value;
  const inputUserName = document.getElementById("input-username").value;
  const inputPassword = document.getElementById("input-password").value;
  const inputPasswordConfirm = document.getElementById(
    "input-password-confirm"
  ).value;

  let validate = true;
  if (
    !inputFirstName ||
    !inputLastName ||
    !inputUserName ||
    !inputPassword ||
    !inputPasswordConfirm
  ) {
    alert("Please fill all fields");
    validate = false;
  } else {
    for (let i = 0; i < useArr.length; i++) {
      if (inputUserName == useArr[i].username) {
        alert("Username must unique!");
        validate = false;
      }
    }
    if (!inputPassword.length < 8) {
      alert("Password must be at least 8 characters long");
      validate = false;
    }
    if (inputPassword != inputPasswordConfirm) {
      alert("Password and confirm password do not match");
      validate = false;
    }
  }
  if (validate) {
    let user = new User(
      inputFirstName,
      inputLastName,
      inputUserName,
      inputPassword,
      inputPasswordConfirm
    );
    // const data = parseUsers(user);
    userArr.push(user);
    saveToStorage(KEY, JSON.stringify(userArr));
    window.location.href = "../pages/login.html";
  }
});
// function parseUser(userData) {
//   const user = new User(
//     userData.firstname,
//     userData.lastname,
//     userData.username,
//     userData.password
//   );

//   return user;
// }
