"use strict";
const KEY = "USER_ARRAY";
const loginArr = JSON.parse(getFromStorage(KEY)) || [];
const loginUsername = document.getElementById("input-username");
const loginPassword = document.getElementById("input-password");
const loginBtn = document.getElementById("btn-submit");

loginBtn.addEventListener("click", () => {
  const loginData = {
    username: loginUsername.value,
    password: loginPassword.value,
  };
  let loginValidate = true;
  if (!loginData.username || !loginData.password) {
    alert("Please fill all fields");
    loginValidate = false;
  } else {
    loginArr.forEach((arr) => {
      if (
        loginData.username != arr.username ||
        loginData.password != arr.password
      ) {
        alert("Username or password is not corrected");
        loginValidate = false;
      }
    });
  }
});
