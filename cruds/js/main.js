var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productPadge = document.getElementById("productPadge");
var productCount = document.getElementById("productCount");
var productList = [];

if(localStorage.getItem("productArr") != null) {
    productList = JSON.parse(localStorage.getItem("productArr"));
    displayProduct(productList);   
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

    clearInputs()
    displayProduct(productList)
}


function clearInputs() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
}

function displayProduct(arr) {
    var cartona = "";
    for(var i = 0; i < arr.length; i++) {
        productCount.innerHTML = `${arr.length} product`
        cartona += `<div class="col-lg-4">
                        <div class="card">
                        <img src="img/iPhone18.png" class="card-img-top position-relative" alt="...">
                            <span class="badge ${getBadgeClass(arr[i].category)} position-absolute top-0 end-0 m-2 px-3 py-1 rounded-5">${arr[i].category}</span>
                            <div class="card-body">
                                <h5 class="card-title">${arr[i].name}</h5>
                                <p class="card-text">${arr[i].description}</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between p-3">
                                <h3 class="text-primary fw-bold m-0">${arr[i].price}</h3>
                                <div class="d-flex align-items-center ">
                                    <button onclick="deletProduct(${i})" id="deletProduct" class="btn btn-outline-danger rounded-end-0"><i class="fa-regular fa-trash-can"></i></button>
                                    <button class="btn btn-outline-warning rounded-start-0"><i class="fa-solid fa-pencil"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>`
    }
    document.getElementById("productCards").innerHTML = cartona
}


function deletProduct(index){
    productList.splice(index, 1);
    localStorage.setItem("productArr", JSON.stringify(productList));
    displayProduct(productList);
}


function getBadgeClass(category) {
    category = category.toLowerCase();

    if (category == "tv") {
        return "text-bg-success";
    } else if (category == "mobile") {
        return "text-bg-primary";
    } else if (category == "laptop") {
        return "text-bg-warning";
    } else {
        return "text-bg-secondary";
    }

}