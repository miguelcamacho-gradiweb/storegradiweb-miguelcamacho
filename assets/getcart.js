let getBuy_car = document.querySelectorAll(".buy_car");
let minicartI = document.querySelector(".minicart__header i");
let minicart = document.querySelector(".minicart");
let minicartShade = document.querySelector(".minicartShade");
let deleteProductCar = [];

const popUpCar = () => {
  minicartShade.style.display = "none";
};

minicartI.addEventListener("click", popUpCar);

const deleteProduct = async (nameId) => {
  const id_NUmber = parseInt(nameId);
  console.log(id_NUmber);
  const updates = {
    updates:
      { 
        [id_NUmber]:0
      }
    }

  const promiseEditCar = await fetch("/cart/update.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    getCarProduct(promiseEditCar.items)
};

const editProduct = async (nameId,value ) => {
  const id_NUmber = parseInt(nameId);
  console.log(id_NUmber);
  const updates = {
    updates:
      { 
        [id_NUmber]:value
      }
    }

  const promiseEditCar = await fetch("/cart/update.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    getCarProduct(promiseEditCar.items)
};

const setEventButtonDelete = () => {
  let deleteProductCarProof = document.querySelectorAll(".minicart__list--delete");
  let editProductCarProof = document.querySelectorAll(".minicart__select--edit");

  let deleteProductCar = Array.from(deleteProductCarProof);
  let editProductCar = Array.from(editProductCarProof);

  deleteProductCar.forEach((deleteproduct) => {
    deleteproduct.addEventListener("click", (e) => {
      deleteProduct(e.target.id);
    });
  });

  editProductCar.forEach((editproduct) => {
    editproduct.addEventListener("change", (e) => {
      editProduct(e.target.name, e.target.value);
    });
  });
};

const getCarProduct = async (items) => {
  let minicartList = document.querySelector(".minicart__list");

  if (items.length >= 0) {
    const promiseGetCar = await fetch("/cart.js", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    let divMinicartList = document.createElement("div");
    divMinicartList.setAttribute("class", "minicart__list");

    console.log(promiseGetCar)

    let b =document.createElement("b")
    b.innerHTML= `Total: ${Math.trunc(promiseGetCar.original_total_price)} $`;

    for (let i = 0; i < promiseGetCar.items.length; i++) {
      let div = document.createElement("div");
      let divI = document.createElement("div");
      let h3 = document.createElement("h3");
      let img = document.createElement("img");
      let p = document.createElement("p");
      let iElement = document.createElement("i");
      let divSelect = document.createElement("div");
      let select = document.createElement("select");
      let label = document.createElement("label");
      let optionDefault = document.createElement("option");

      divSelect.setAttribute("class", "minicart__list--select");
      select.setAttribute("id",`minicart__select--${promiseGetCar.items[i].id}`);
      select.setAttribute("class",`minicart__select--edit`);
      select.setAttribute("name",`${promiseGetCar.items[i].id}`);
      label.setAttribute("for",`minicart__select--${promiseGetCar.items[i].id}`);
      optionDefault.setAttribute("selected", "selected");
      optionDefault.setAttribute("disabled", "disabled");
      optionDefault.setAttribute("hidden", "hidden");
      optionDefault.setAttribute("value", `${promiseGetCar.items[i].quantity}`);


      for (let j = 0; j < 5; j++) {
        let option = document.createElement("option");
        option.setAttribute("value", `${j}`);
        option.innerHTML = `${j}`;
        select.appendChild(option);
      }

      img.setAttribute("src", `${promiseGetCar.items[i].image}`);
      div.setAttribute("class", `minicart__list--render`);
      divI.setAttribute("class", `minicart__list--delete`);
      iElement.setAttribute("id", `${promiseGetCar.items[i].id}`);
      iElement.setAttribute("class",`fas fa-trash-alt delete__${promiseGetCar.items[i].id}`);

      optionDefault.innerHTML = promiseGetCar.items[i].quantity;
      h3.innerHTML = `${promiseGetCar.items[i].title}`;
      label.innerHTML = "change the amount";
      p.innerHTML = `${Math.trunc(promiseGetCar.items[i].final_line_price)} $`;

      select.appendChild(optionDefault);
      divSelect.appendChild(label);
      divSelect.appendChild(select);
      div.appendChild(h3);
      div.appendChild(img);
      divI.appendChild(iElement);
      div.appendChild(divI);
      div.appendChild(p);
      div.appendChild(divSelect);
      divMinicartList.appendChild(div);
    }
    minicart.replaceChild(divMinicartList, minicartList);
    divMinicartList.appendChild(b)

    minicartShade.style.display = "block";

    if(promiseGetCar.items.length == 0){
      divMinicartList.innerHTML = "You have no items in your cart"
    }
    setEventButtonDelete();
  }
};

