let product_variants = document.querySelectorAll(".product_variants img");
let img_product = document.querySelectorAll(".product__render img");
let p_product = document.querySelectorAll(".product__buy p");
selectCollectionId = document.getElementById("selectCollectionId");
const sizeImg_product = img_product.length;
let data = null;
let variante = null;
let sizeData = null;

const collectionData = (collection) => {
  data = collection;
  sizeData = data.length;
};

const collectionVariants = (dataVariante) => {
  variante = dataVariante;
  console.log(variante);
};

const changeCollection = (e) => {
  console.log(e.target.value);
  if (e.target.value == "all") {
    for (let i = 0; i < sizeData; i++) {
      document.querySelector(`.${data[i].handle}`).style.display = "block";
    }
  } else {
    for (let i = 0; i < sizeData; i++) {
      if (data[i].id != e.target.value) {
        document.querySelector(`.${data[i].handle}`).style.display = "none";
      } else {
        document.querySelector(`.${data[i].handle}`).style.display = "block";
      }
    }
  }
  valueRange()
};

selectCollectionId.addEventListener("change", changeCollection);

const changeSrcProduct = (e) => {
  for (let i = 0; i < sizeImg_product; i++) {
    if (e.target.name === img_product[i].id) {
      img_product[i].setAttribute("src", `${e.srcElement.src}`);
      p_product[i].setAttribute("id", `${e.target.id}`);
    }
  }
};

product_variants.forEach((product_variant) => {
  product_variant.addEventListener("mouseover", (e) => {
    changeSrcProduct(e);
  });
});

let rangeLimit = document.getElementById("rangeLimit");
let seeRange = document.getElementById("seeRange");

const valueRange = (e) => {
  //  for (let i = 0; i < data.length; i++) {
  //     document.querySelectorAll(`.${data[i].handle} .lisproduct__grid--render .products`).setAttribute("class",`${data[i].handle}__products`)
  //  } 
  
  // const valueSelect = parseInt(selectCollectionId.value) 
  // const findSameCollec = data.find(collection => collection.id == valueSelect);

  // rangeLimit.setAttribute("max", `${findSameCollec.length}`)
  // rangeLimit.setAttribute("value", `${findSameCollec.length}`)
  // seeRange.innerHTML=`${findSameCollec.length} Products`

  if(e){
  seeRange.textContent = `${e.target.value} Products`;
  let limitRender = parseInt(e.target.value) 
  let productsRender = document.querySelectorAll(".products")

  
  for (let j = 0; j < dataProducts.length; j++) {
    productsRender[j].style.display = "none"
  }
  for (let i = 0; i < limitRender; i++) {
    productsRender[i].style.display = "block"
  }
  }

};

rangeLimit.addEventListener("keyup", (e) => {
  valueRange(e);
});
rangeLimit.addEventListener("mouseup", (e) => {
  valueRange(e);
});
