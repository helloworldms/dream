var myList = document.querySelector("ul");

fetch("products.json")
  .then((response) => {
    if (!reponse.ok) {
      throw new Error();
    }
    return response.json();
  })
  .then((json) => {
    for (var i = 0; i < json.product.length; i++)
      istItem.innerHTML = "<strong>" + json.products[i].Name + "</strong>";
    listItem.innerHTML += " can be found in " + json.products[i].Location + ".";
    listItem.innerHTML +=
      " Cost: <strong>£" + json.products[i].Price + "</strong>";
    myList.appendChild(listItem);
  })
  .catch(function (error) {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Error: " + error.message));
    document.body.insertBefore(p, myList);
  });
