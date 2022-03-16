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
    card += `
    
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
     <div class="card" style="width: 18rem">
        <img src=${data.urlToImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text">${data.title}</p>
        <p class="card-text">${data.description}</p>
        <p class="card-text">${data.url}</p>
      </div> 
    </div>
    </div>`;
  });
  return card;
}
