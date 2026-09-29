var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productPadge = document.getElementById("productPadge");
var productList = [];

if(localStorage.getItem("productArr") != null) {
    productList = JSON.parse(localStorage.getItem("productArr"));
    displayProduct();   
}


function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value,
        padge: productCategory.value
    }
    productList.push(product);
    localStorage.setItem("productArr", JSON.stringify(productList));

    // clearInputs()
    displayProduct()
}


function clearInputs() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
}

function displayProduct() {
    var cartona = "";
    for(var i = 0; i < productList.length; i++) {
        cartona += `<div class="col-lg-4">
                        <div class="card">
                        <img src="img/iPhone18.png" class="card-img-top position-relative" alt="...">
                        <span id="productPadge" class="text-bg-primary padge position-absolute px-3 py-1 rounded-5">${productList[i].padge}</span>
                            <div class="card-body">
                                <h5 class="card-title">${productList[i].name}</h5>
                                <p class="card-text">${productList[i].description}</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between p-3">
                                <h3 class="text-primary fw-bold m-0">${productList[i].price}</h3>
                                <div class="d-flex align-items-center ">
                                    <button class="btn btn-outline-danger rounded-end-0"><i class="fa-regular fa-trash-can"></i></button>
                                    <button class="btn btn-outline-warning rounded-start-0"><i class="fa-solid fa-pencil"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>`
    }
    document.getElementById("productCards").innerHTML = cartona
    

}

// var cartona = `<div class="col-lg-4">
//                         <div class="card">
//                         <img src="img/iPhone18.png" class="card-img-top position-relative" alt="...">
//                         <span class="text-bg-primary padge position-absolute px-3 py-1 rounded-5">mobile</span>
//                             <div class="card-body">
//                                 <h5 class="card-title">iPhone 16</h5>
//                                 <p class="card-text">Latest iPhone with advanced features and improved camera system.</p>
//                             </div>
//                             <div class="d-flex align-items-center justify-content-between p-3">
//                                 <h3 class="text-primary fw-bold m-0">₹50,000</h3>
//                                 <div class="d-flex align-items-center ">
//                                     <button class="btn btn-outline-danger rounded-end-0"><i class="fa-regular fa-trash-can"></i></button>
//                                     <button class="btn btn-outline-warning rounded-start-0"><i class="fa-solid fa-pencil"></i></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`