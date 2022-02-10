let buy_car = document.querySelectorAll(".buy_car");

const buyProduct = async (id, url) => {
  const id_NUmber = parseInt(id);
  console.log(id_NUmber);
  let formData = {
    items: [
      {
        id: id_NUmber,
        quantity: 1,
      },
    ],
  };

  const promiseBuyCar = await fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      // window.location.assign("https://miguelcamacho-gradi-store.myshopify.com/cart");
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  if (promiseBuyCar.items.length > 0) {
    getCarProduct(promiseBuyCar.items);
  }
};

buy_car.forEach((product) => {
  product.addEventListener("click", (e) => {
    buyProduct(e.target.id);
  });
});
