"use strict";
const KEY = "USER_SETTING";
const settingArr = JSON.parse(getFromStorage(KEY)) || [];
//get DOM element
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const settingBtn = document.getElementById("btn-submit");
settingBtn.addEventListener("click", () => {
  //make input data
  const settingData = {
    pageSize: inputPageSize.value,
    category: inputCategory.value,
  };
  //validate input data
  let validate = true;
  if (settingData.pageSize === "") {
    alert("Please enter a page size");
    validate = false;
  }
  if (settingData.pageSize < 1) {
    alert("page size must be greater than zero");
    validate = false;
  }
  if (validate) {
    settingArr.push(settingData);
    saveToStorage(KEY, JSON.stringify(settingArr));
    window.location.href = "../pages/news.html";
  }
});
