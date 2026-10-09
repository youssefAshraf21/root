var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productImage = document.getElementById("productImage");
var addProductBtn = document.getElementById("addProductBtn");
var updateProductBtn = document.getElementById("updateProductBtn");
var productsAmount = document.getElementById("productsAmount");
var categoriesAmount = document.getElementById("categoriesAmount");
var favoriteIcon = document.getElementById("favoriteIcon");
var getIndex;


var productsArray = [];


if(localStorage.getItem("products") != null) {
    productsArray = JSON.parse(localStorage.getItem("products"));
    displayProduct(productsArray);   
}


function addProduct() {

    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value,
        id: productsArray.length + 1,
    }
    productsArray.push(product);
    localStorage.setItem("products", JSON.stringify(productsArray));
    deleteInputs(productsArray);
    displayProduct(productsArray);
    console.log(productsArray);
    console.log(product.id);
}

function displayProduct(productList) {
    var box = "";
    for(var i = 0; i < productsArray.length; i++) {
        box += `<div class="col-lg-4 g-3">
                                    <div class="card">
                                        <img src="img/3867702.jpg" class="card-img-top position-relative" alt="...">
                                        <i onclick="addToFavorites(${i}, this)" class="fa-regular fa-heart p-2 rounded-circle position-absolute favorite_item"></i>                                        <div class="card-body"> 
                                            <div class="d-flex flex-column justify-content-center align-items-center">
                                                <span class="text-white fw-bold px-3 py-1 rounded-4 id_of_product">ID: ${productList[i].id}</span>
                                                <h4 class=" m-0 fw-bold text-white mt-3 mb-4">${productList[i].name}</h4>
                                                <span class="purble_color fw-bold fs-6">${productList[i].price}</span>
                                                <span class="purble_color fw-bold fs-6">${productList[i].category}</span>
                                                <span class="text-secondary">${productList[i].description}</span>
                                                <div class="buttons mt-2">
                                                    <div class="d-flex align-items-center mt-4 gap-4">
                                                        <button onclick="deleteProduct(${i})"class="btn btn-outline-danger me-3 "><i class="fa-regular fa-trash-can"></i></button>
                                                        <button onclick="getDataToInputs(${i})" class="btn btn-outline-warning"><i class="fa-solid fa-pencil"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
    }
    document.getElementById("productCards").innerHTML = box
    document.getElementById("productsAmount").innerHTML = productsArray.length
    document.getElementById("categoriesAmount").innerHTML = productsArray.length
}

function deleteInputs() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
    productImage.value = "";
}


function deleteProduct(index) {
    productsArray.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(productsArray));
    displayProduct(productsArray);
}


function getDataToInputs(index) {
    getIndex = index;
    productName.value = productsArray[index].name;
    productPrice.value = productsArray[index].price;
    productCategory.value = productsArray[index].category;
    productDescription.value = productsArray[index].description; 
    addProductBtn.classList.add("d-none");
    updateProductBtn.classList.remove("d-none");
}


function updateProduct() {
        productsArray[getIndex].name = productName.value;
        productsArray[getIndex].price = productPrice.value;
        productsArray[getIndex].category = productCategory.value;
        productsArray[getIndex].description = productDescription.value;
        localStorage.setItem("products", JSON.stringify(productsArray));
        displayProduct(productsArray);
        deleteInputs();
        addProductBtn.classList.remove("d-none");
        updateProductBtn.classList.add("d-none");
}