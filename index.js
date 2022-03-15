let data = document.getElementById("data");
axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=a047eeeab97a479496714dd0da8d145f").then((res) => {
  console.log(res.data);
  console.log(res.data.articles);
  data.innerHTML = render(res.data.articles);
});

let getSearch = () => {
  let inputVal = document.getElementById("search").value;
  axios.get(`https://newsapi.org/v2/everything?q=${inputVal}&shortBy=popularity&language=id&apiKey=a047eeeab97a479496714dd0da8d145f`).then((res) => {
    data.innerHTML = render(res.data.articles);
  });
};

function render(result) {
  let card = "";
  result.forEach((data) => {
    card += ` <div>
                  <img src=${data.urlToImage} />
                  <p>${data.title}</p>
                  <p>${data.description}</p>
                  <p>${data.url}</p>
              <div>`;
  });
  return card;
}
