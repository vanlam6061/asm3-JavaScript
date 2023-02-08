"use strict";

const KEY2 = "CR-USER";
const currentUser = JSON.parse(getFromStorage(KEY2));

//
const previousButton = document.querySelector("#btn-prev");
const nextButton = document.querySelector("#btn-next");
const newsContainer = document.querySelector("#news-container");
const numberPage = document.querySelector("#page-num");

////////////////////////////////

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
////

function prevnextDisplay(prevBtn, nextBtn, maxPage) {
  //Điều chỉnh nút previous và nút next
  if (curPage == 1) {
    //Nếu trang hiện tại là 1
    prevBtn.classList.add("toast"); //Ẩn nút previous đi
    prevBtn.classList.add("disabled"); //Hủy luôn cả hiệu ứng khi rê chuột vào
  }
  if (curPage == maxPage) {
    //Nếu trang hiện tại là lớn nhất
    nextBtn.classList.add("toast"); //Ẩn nút next đi
    nextBtn.classList.add("disabled"); //Hủy luôn cả hiệu ứng khi rê chuột vào
  }
  if (curPage > 1 && curPage < maxPage) {
    //Nếu trang hiện tại nằm giữa 1 và lớn nhất  thì hiện cả 2 nút previous và next lên cũng như khôi hiệu ứng cho chúng
    nextBtn.classList.remove("toast");
    nextBtn.classList.remove("disabled");
    prevBtn.classList.remove("disabled");
    prevBtn.classList.remove("toast");
  }
}

const news = async function (key) {
  //country, category, pageSize, page,
  try {
    let totalPages = 0;
    let arts = [];
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
    updatePage(numberNewsPerPage);
  } catch (err) {
    console.error(err);
  }
};

const con = "un";
const cata = "";
const size = 50;
const pages = 5;
const apiKeys = "4aeb63983e194023a4e694205173d98d";
// gọi hàm news

let currentPage = 1;
let numberNewsPerPage = 5;

//con, cata, size, pages,

previousButton.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    news(apiKeys);
  }
});

nextButton.addEventListener("click", function () {
  if (currentPage * numberNewsPerPage < 20) {
    currentPage++;
    news(apiKeys);
  }
});

const paginate = (data) => {
  const itemsPerPage = 5;
  const numberOffPages = Math.ceil(numberNewsPerPage / itemsPerPage);
  const paginatedData = Array.from({ length: numberOffPages }, (...index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
};
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
