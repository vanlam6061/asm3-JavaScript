"use strict";

const news = async function (key) {
  //country, category, pageSize, page,
  let totalPages = 0;
  let arts;
  let totalResults = 0;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`
  );

  const data = await res.json();
  console.log(data);
  arts = await data.articles;
  totalPages = data.totalResults;
  console.log(arts);
  console.log(totalPages);
  totalResults = arts.length;
  try {
  } catch (err) {
    console.error(err);
  }
};
const previousButton = document.querySelector("#btn-prev");
const nextButton = document.querySelector("#btn-next");
const newsContainer = document.querySelector("#news-container");
const con = "un";
const cata = "";
const size = 50;
const pages = 5;
const apiKeys = "4aeb63983e194023a4e694205173d98d";
// gọi hàm news

let currentPage = 1;
let numberNewsPerPage = 5;

//con, cata, size, pages,

//const render articles
const updatePage = function (numberNews) {
  news(apiKeys);
  console.log(arts);
  let startNews = numberNews * (currentPage - 1);
  let endNews = numberNews * currentPage;
  let html = ``;
  for (let i = startNews; i < endNews; i++) {
    html += `
            <div class="card flex-row flex-wrap">
            <div class="card mb-3" style="">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${arts[i].urlToImage}"
                            class="card-img"
                            alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${arts[i].title}</h5>
                            <p class="card-text">${arts[i].content}</p>
                            <a href="${arts[i].url}"
                            class="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
  }
  newsContainer.innerHTML = html;
};

previousButton.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    updatePage(numberNewsPerPage);
  }
});

nextButton.addEventListener("click", function () {
  if (currentPage * numberNewsPerPage < 20) {
    currentPage++;
    updatePage(numberNewsPerPage);
  }
});

// tối cần làm cái gì đây nhỉ:

/* 
   đầu tiên tôi cần tạo tham số newsInPage,để quy định số news sẽ hiển thị trên một trang,
   - sau sẽ truyền giá trị đầu và giá trị đầu và giá trị cuối vào hàm render
  
  
  
  */
// Update the value of the "page" parameter for the API call
// ...

// Fetch the data for the new page
// ...

// Update the UI with the new data
// ...

// Show or hide the "Previous" and "Next" buttons based on the current page and total results
// if (currentPage === 1) {
//   previousButton.style.display = "none";
// } else {
//   previousButton.style.display = "block";
// }

// if (currentPage * pageSize >= totalResults) {
//   nextButton.style.display = "none";
// } else {
//   nextButton.style.display = "block";
// }
