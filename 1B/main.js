let fetchData = () => {
  let dummyData = [
    { name: "Product 1", date: "2024-04-28", quantity: 10, price: 50 },
    { name: "Product 2", date: "2024-04-27", quantity: 15, price: 60 },
    { name: "Product 3", date: "2024-04-26", quantity: 8, price: 40 }
  ];

  localStorage.setItem("products", JSON.stringify(dummyData));
  displayData();
};

let displayData = () => {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  let storedProducts = JSON.parse(localStorage.getItem("products"));
  storedProducts.forEach((product, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.date}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
      </tr>`;
  });
};

// Initial Data
fetchData();

document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = parseFloat(document.getElementById("price").value);

  let postObject = {
    name, date, quantity, price
  };

  let storedProducts = JSON.parse(localStorage.getItem("products"));
  storedProducts.push(postObject); // Push to the end of the array
  localStorage.setItem("products", JSON.stringify(storedProducts));
  displayData();

  document.getElementById("name").value = "";
  document.getElementById("date").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";

        // Hide the modal
  $('#addNewProduct').modal('hide');
});
