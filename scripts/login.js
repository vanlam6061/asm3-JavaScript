"use strict";
const keyRegisterUser = "USER_REGISTER";
const userArr = JSON.parse(getFromStorage(keyRegisterUser)) || [];
const keyLoginUser = "USER_LOGIN";
const userLogin = JSON.parse(getFromStorage(keyLoginUser)) || [];
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
    for (let i = 0; i < userArr.length; i++) {
      if (
        loginData.username != userArr[i].username ||
        loginData.password != userArr[i].password
      ) {
        alert("Username or password is not corrected");
        loginValidate = false;
      } else {
        alert("Logged in successful !");

        userLogin.push(userArr[i]);
        saveToStorage(keyLoginUser, JSON.stringify(userLogin));
      }
    }
  }
});
