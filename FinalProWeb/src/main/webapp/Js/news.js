const apiKey = 'bc51162017a3456ba650a03ba73b37d2';
const apiUrl = `https://newsapi.org/v2/everything?q=羽球&apiKey=${apiKey}`;
const articlesDiv = document.getElementById('articles');


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.articles.forEach(article => {
            const {title, description, url, urlToImage} = article;

            if (urlToImage === null || urlToImage === "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png") {
                return; // Skip所有 null 跟 yahoo default圖
            }
            const keyword = "羽球";
            if (!article.title.toLowerCase().includes(keyword) && !article.description.toLowerCase().includes(keyword)) {
                return; // skip掉所有標題或內容沒羽球關鍵字的文章
            }
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('card');
            articleDiv.style.width = '18rem';

            articleDiv.innerHTML = `
        <img src="${urlToImage}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="${url}" class="btn btn-primary" target="_blank">Read more</a>
        </div>
      `;

            articlesDiv.appendChild(articleDiv);
        });
    })
    .catch(error => console.error(error));

