var contactName = document.getElementById("contactName");
var contactPhone = document.getElementById("contactPhone");
var contactEmail = document.getElementById("contactEmail");
var contactAddress = document.getElementById("contactAddress");
var contactGroup = document.getElementById("contactGroup");
var addContactBtn = document.getElementById("addContactBtn");
var contactFavorite = document.getElementById("contactFavorite");
var contactFavorite = document.getElementById("contactFavorite");
var contactEmergency = document.getElementById("contactEmergency");
var editBtn = document.getElementById("editBtn");
var emergncyBtn = document.getElementById("emergncyBtn");
var deleteBtn = document.getElementById("deleteBtn");
var contactModal = document.getElementById("contactModal");
var closeModalBtn = document.getElementById("closeModalBtn");
var submitModalBtn = document.getElementById("submitModalBtn");
var totalContacts = document.getElementById("totalContacts");
var cancelModalBtn = document.getElementById("cancelModalBtn");
var starIcon = document.getElementById("starIcon");
var contactList = [];
var favList = [];



if(localStorage.getItem("contactList") != null) {
    contactList = JSON.parse(localStorage.getItem("contactList"));
    displayContact(contactList);
}



if (localStorage.getItem("favList") != null) {
    favList = JSON.parse(localStorage.getItem("favList"));
    displayFavContact(favList);
}

// open the menu when click on add contact btn 

addContactBtn.addEventListener("click", function(){
    if(contactModal.classList.contains("d-none")) {
        contactModal.classList.remove("d-none");
    }else {
        contactModal.classList.add("d-none");
    }
})


// cancel button 

cancelModalBtn.addEventListener("click", function(){
    contactModal.classList.add("d-none");
})


// close the menu 

closeModalBtn.addEventListener("click", function(){
    contactModal.classList.add("d-none");
})




// add contact function 

function addContact() {
    var contact = {
        name: contactName.value,
        phone: contactPhone.value,
        email: contactEmail.value,
        address: contactAddress.value,
        category: contactGroup.value
    }
    contactList.push(contact);
    localStorage.setItem("contactList", JSON.stringify(contactList));
    contactModal.classList.add("d-none");
    Swal.fire({
    title: "Added Successfully",
    icon: "success",
    draggable: true
    });
    clearInputs();
    displayContact(contactList);
}
submitModalBtn.addEventListener("click", addContact);


// addFavCONTACT function


function addFavContact(index) {
    var favContact = contactList[index];

    if (favList.includes(favContact)) {
        favList.splice(favList.indexOf(favContact), 1);
    } else {
        favList.push(favContact);
    }

    localStorage.setItem("favList", JSON.stringify(favList));
    displayFavContact(favList);
    displayContact(contactList);
}








// display the favorites contacts


function displayFavContact(favArr) {
    var favBox = "";
    for(var i = 0; i < favArr.length; i++) {
        favBox += `<div class="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 mb-2 fav-card">
                                            <div class="d-flex align-items-center justify-content-start gap-3">
                                                <img src="img/avatar-2.jpg" width="40px" height="40px" class="rounded-3" alt="">
                                                <div class="d-flex flex-column justify-content-start align-items-start">
                                                    <p class="fw-bold text-dark mb-0">${favArr[i].name}</p>
                                                    <p class="text-muted small mb-0">${favArr[i].phone}</p>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-phone text-success px-3 py-2 bg-success-subtle rounded-3 d-flex align-items-center justify-content-center" ></i>
                                        </div>`
    }

    document.getElementById("emptyStateFav").innerHTML = favBox;
}





// display contact to show the contact 

function displayContact(arr) {
    var cartona = "";

    if (totalContacts) totalContacts.innerHTML = arr.length;

    if (arr.length === 0) {
        document.getElementById("contactCardContainer").innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="d-flex align-items-center justify-content-center mx-auto mb-4 bg-secondary-subtle rounded-4" style="width: 80px; height: 80px;">
                    <i class="fas fa-address-book text-secondary fs-4"></i>
                </div>
                <p class="text-muted fw-semibold mb-1">No contacts found</p>
                <p class="text-secondary small">Click <strong>"Add Contact"</strong> to get started</p>
            </div>`;
        return;
    }else {

    for (var i = 0; i < arr.length; i++) {
        
        cartona += `<div  class="col-md-6 col-lg-12 col-xl-6 mb-4">
                            <div class="contact-card">
                            
                                <div class="contact-card-header">
                                    <div class="d-flex align-items-start justify-content-start gap-3">
                                        <div class="position-relative flex-shrink-0  ">
                                            <img src="./img/avatar-1.jpg" alt="sssss"
                                                class="contact-card-avatar object-fit-cover">
                                            <div
                                                class="badge-icon badge-heart d-flex justify-content-center align-items-center rounded-circle">
                                                <i class="fas fa-heart-pulse"></i>
                                            </div>
                                            <div
                                                class="badge-icon badge-star d-flex justify-content-center align-items-center rounded-circle">
                                                <i class="fas fa-star" id="starIcon"></i>
                                            </div>
                                        </div>
                                        <div class="flex-1 min-w-0 pt-1">
                                            <h3  class="contact-card-name truncate m-0 ">${arr[i].name}</h3>
                                            <div class="d-flex align-items-center gap-2 mt-1">
                                                <span class="contact-card-phone truncate">${arr[i].phone}</span>
                                            </div>
                                        </div>
                                    </div>

                                
                                    <div class="contact-details">
                                        <div class="contact-detail-item">
                                            <div
                                                class="contact-detail-icon-container d-flex align-items-center justify-content-center violet">
                                                <i class="contact-detail-icon violet fas fa-envelope"></i>
                                            </div>
                                            <span class="contact-detail-text contact-email truncate">${arr[i].email}</span>
                                        </div>

                                        <div class="contact-detail-item">
                                            <div
                                                class="contact-detail-icon-container d-flex align-items-center justify-content-center emerald">
                                                <i class="contact-detail-icon emerald fas fa-location-dot"></i>
                                            </div>
                                            <span class="contact-detail-text contact-location truncate">${arr[i].address}</span>
                                        </div>
                                    </div>

                            
                                    <div class="contact-tags">
                                        <span class="contact-tag contact-tag-category d-inline-flex align-items-center">${arr[i].category}</span>
                                    </div>
                                </div>

                            
                                <div class="contact-card-actions">
                                    <div class="action-buttons-left">
                                        <a href="tel:01161615618" id="callBtn" class="action-button call" title="Call">
                                            <i class="fas fa-phone"></i>
                                        </a>

                                        <a class="action-button email" id="emailBtn" title="Email">
                                            <i class="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                    <div class="action-buttons-right">
                                        <button class="action-button favorite" id="favBtn" title="Favorite"  onclick="addFavContact(${i})">
                                            <i class="${favList.includes(arr[i]) ? 'fas' : 'far'} fa-star"></i>
                                        </button>
                                        <button class="action-button emergency"id="emergncyBtn" title="Emergency">
                                            <i class="far fa-heart"></i>
                                        </button>
                                        <button class="action-button edit" id="editBtn" title="Edit">
                                            <i class="fas fa-pen"></i>
                                        </button>
                                        <button onclick="deleteContact(${i})" class="action-button delete"id="deleteBtn" title="Delete">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        `
        }
    }
    document.getElementById("contactCardContainer").innerHTML = cartona;
}





// clear the inputs 
function clearInputs() {
    contactName.value = "";
    contactPhone.value = "";
    contactEmail.value = "";
    contactAddress.value = "";
    contactGroup.value = "";
}


// delete the contact 
function deleteContact(index) {
    Swal.fire({
    title: "Delete Contact?",
    text: "Are you sure you want to delete youssef ashraf? This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
    }).then((result) => {
    if (result.isConfirmed) {
            contactList.splice(index, 1);
            localStorage.setItem("contactList", JSON.stringify(contactList));
            displayContact(contactList);
            Swal.fire({
                title: "Deleted!",
                text: "The contact has been deleted.",
                icon: "success"
            });
        }
    });
}

