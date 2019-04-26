function search() {
  document.getElementById("furnitureShow").innerHTML = "";
  let searchString = document.getElementById("searchTerm").value.toLowerCase();

  let furnitureSearch = new FurnitureSearch();

  let promise = furnitureSearch.getInfo();

  promise.then(function(response) {
    let body = JSON.parse(response);
    let contentToSearch = body.body.data;
    var results = [];

    for (let i = 0; i < contentToSearch.length; i++) {
      if (
        contentToSearch[i].name.toLowerCase().includes(searchString) ||
        contentToSearch[i].description.includes(searchString) ||
        contentToSearch[i].type.includes(searchString)
      ) {
        results.push(contentToSearch[i]);
        document.getElementById(
          "furnitureShow"
        ).innerHTML += `<div class="productContainter">
                                                  <div class="imageContainer">

                                                  <img src="${
                                                    contentToSearch[i].imageUrl
                                                  }" alt="">
                                                  </div>
                                                  <br>
                                                  <h3>${
                                                    contentToSearch[i].name
                                                  }</h3><br>
                                                  <p>${
                                                    contentToSearch[i].cost
                                                  }</p><br>
                                                  <p>${
                                                    contentToSearch[i]
                                                      .description
                                                  }</p></div>`;
      } else if (results.length < 1) {
        document.getElementById("noResults").innerHTML =
          "Sorry, that search doesn't match anything in our inventory";
      }
    }

    document.getElementById("searchTerm").value = "";
    document.getElementById("noResults").value = "";
  });
}
