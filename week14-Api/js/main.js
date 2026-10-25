let rowData = document.querySelector("#rowData");
let input = document.querySelector("input");
let loadingScreen = document.querySelector(".loadingScreen");


// function getRecipe(recipe) {
    
//     var myReq = new XMLHttpRequest();
//     myReq.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=${recipe}`);
//     myReq.send();

//     myReq.addEventListener("load" , function() {
//         if(myReq.status == 200) {
//             let data = JSON.parse(myReq.response)
//             finalData = data.data.recipes
//             console.log(finalData);
//             displayRecipe(finalData)
//         }
//     })

// }

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


input.addEventListener("blur", function() {
    getRecipe(input.value)
})

// **********************************************************************************************************

// call back function : it takes function as an argument

// example

// function one(fn) {
//     console.log("one")
//     fn()
// }

// function two(fn) {
//     console.log("two")
//     fn()
// }

// function three(fn) {
//     console.log("three")
//     fn()
// }
// function four(fn) {
//     console.log("four")
//     fn()
// }
// function finished() {
//     console.log("finished")
// }

// one(function(){
//     two(function(){
//         three(function(){
//             four(function(){
//                 finished()
//             })
//         })
//     })
// })


// !!!!!! Call Back Hell !!!!!!!!!!!

// **********************************************************************************************************

// ******************************************* promise ***********************************************************************************************




// function one() {
//     return new Promise(function(resolve, reject) {
//         console.log("one from async code")
//         var error = true;
//         if(error == false) {
//             resolve()
//         }else {
//             reject()
//         }
//     })    
// }

// function two() {
//     return new Promise(function(resolve, reject) {
//             console.log("two from async code")
//             var error = false;
//             if(error == false) {
//                 resolve()
//             }else {
//                 reject()
//             }
//         })      
// }

// function three() {
//     return new Promise(function(resolve, reject) {
//         console.log("three from async code")
//         var error = false;
//         if(error == false) {
//             resolve()
//         }else {
//             reject()
//         }
//     })  
    
// }
// function four() {
//     return new Promise(function(resolve, reject) {
//         console.log("four from async code")
//         var error = false;
//         if(error == false) {
//             resolve()
//         }else {
//             reject()
//         }
//     })  
    
// }

// function errorFun() {
//     console.log("error")
// }

// function finished() {
//     console.log("finished")
// }

// one().then(two).then(three).then(four).catch(errorFun).finally(finished)

// !!!!!!!  Then Chaining !!!!!!!!!!!

// **********************************************************************************************************


// fetch API ************

async function getRecipe(recipe) {
    try {
            loadingScreen.classList.remove("d-none")
            var response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${recipe}`,
            {
                method: "GET"
            }
        );
        var finaleData = await response.json();
        console.log(finaleData.data.recipes);
        displayRecipe(finaleData.data.recipes)
    } catch (error) {
        console.log(error);
    }finally {
        loadingScreen.classList.add("d-none")
    }
}
getRecipe("pizza")