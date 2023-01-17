"use strict";
const apiKeys = "4aeb63983e194023a4e694205173d98d";
const news = async function (keys) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2022-12-16&sortBy=publishedAt&apiKey=${keys}`
  );

  const data = await res.json();
  console.log(data);

  let { articles } = data;
  console.log(articles);
  try {
  } catch (err) {
    console.error(err);
  }
};
news(apiKeys);

//const render articles
const renderNew = function () {
  let html = ``;
  articles.map((article) => {
    html += `
            <div class="card flex-row flex-wrap">
            <div class="card mb-3" style="">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${article.urlToImage}"
                            class="card-img"
                            alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.content}</p>
                            <a href="${article.url}"
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
