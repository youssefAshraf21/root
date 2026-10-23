let rowData = document.querySelector("#rowData");
let input = document.querySelector("input");



function getRecipe(recipe) {
    
    var myReq = new XMLHttpRequest();
    myReq.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=${recipe}`);
    myReq.send();

    myReq.addEventListener("load" , function() {
        if(myReq.status == 200) {
            let data = JSON.parse(myReq.response)
            finalData = data.data.recipes
            console.log(finalData);
            displayRecipe(finalData)
        }
    })

}

function displayRecipe(arr) {
    let html = "";
    for (var i = 0; i < arr.length; i++) {
        html += `<div class="col-md-3">
                <div class="inner">
                    <img src="${arr[i].image_url}" class="w-100" alt="">
                    <h2 class="text-danger">${arr[i].title.split(" ").slice(0, 2).join(" ")}</h2>
                </div>
            </div>`
        rowData.innerHTML = html
    }
}


input.addEventListener("input", function() {
    getRecipe(input.value)
})

