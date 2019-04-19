  class FurnitureSearch {

  getInfo() {

    let url = "https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture";

    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);

        } else {
          $('.nameApiError').text("There was an error with your request. Status code: " + this.status);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}