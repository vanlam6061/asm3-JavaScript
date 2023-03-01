"use strict";

const KEY = "USER_SETTING";
const settingUser = JSON.parse(getFromStorage(KEY));

//
const previousBtn = document.querySelector("#btn-prev");
const nextBtn = document.querySelector("#btn-next");
const newsContainer = document.querySelector("#news-container");
const numberPage = document.querySelector("#page-num");
let newss = [];

////////////////////////////////

const news = async function (country, category, pageSize, currentPage) {
  // try {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${currentPage}&apiKey=4aeb63983e194023a4e694205173d98d`
  );

  const data = await res.json();
  console.log(data);
  let arts = data.articles;
  let totalPages = data.totalResults;
  console.log(arts);
  console.log(totalPages);
  let maxPage;
  if (totalPages >= 100) {
    maxPage = 100 / pageSize;
  } else {
    maxPage = totalPages / pageSize;
  }
  //children function
  console.log(arts);
  renderPage();
  paginatedVisual();
  // } catch (error) {
  //   console.error(error);
  // }
};

const renderPage = function () {
  let html = ``;
  // console.log(arts);
  newss.map((art) => {
    html += `
            <div class="card flex-row flex-wrap">
            <div class="card mb-3" style="">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${art.urlToImage}"
                            class="card-img"
                            alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${art.title}</h5>
                            <p class="card-text">${art.content}</p>
                            <a href="${art.url}"
                            class="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
  });
  newsContainer.innerHTML = html;
};

//1.  pagination Pages

function paginatedVisual(previousBtn, nextBtn, maxPage) {
  if (currentPage == 1) {
    previousBtn.classList.add("toast");
    previousBtn.classList.add("disabled");
  }
  if (currentPage == maxPage) {
    nextBtn.classList.add("toast");
    nextBtn.classList.add("disabled");
  }
  if (currentPage > 1 && currentPage < maxPage) {
    nextBtn.classList.remove("toast");
    nextBtn.classList.remove("disabled");
    previousBtn.classList.remove("disabled");
    previousBtn.classList.remove("toast");
  }
}
//default pages
let currentPage = 1;
news("us", settingUser[1].category, settingUser[1].pageSize, currentPage);
// Next button
nextBtn.addEventListener("click", () => {
  currentPage += 1;
  news("us", settingUser[1].category, settingUser[1].pageSize, currentPage);
  numberPage.text = currentPage;
});
// Previous button
previousBtn.addEventListener("click", () => {
  currentPage -= 1;
  news("us", settingUser[1].category, settingUser[1].pageSize, currentPage);
  numberPage.text = currentPage;
});
