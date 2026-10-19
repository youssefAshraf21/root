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
var totalFavContacts = document.getElementById("totalFavContacts");
var noFavorits = document.getElementById("noFavorits");
var emptyStateEmergency = document.getElementById("emptyStateEmergency");
var totalEmergContacts = document.getElementById("totalEmergContacts");
var noEmergncy = document.getElementById("noEmergncy");
var updateModalBtn = document.getElementById("updateModalBtn");
var heartIconOnImg = document.getElementById("heartIconOnImg");
var starIconOnImg = document.getElementById("starIconOnImg");
var searchInput = document.getElementById("searchInput");
var contactName = document.getElementById("contactName");
var contactNameError = document.getElementById("contactNameError");
var contactPhone = document.getElementById("contactPhone");
var contactPhoneError = document.getElementById("contactPhoneError");
var contactEmail = document.getElementById("contactEmail");
var contactEmailError = document.getElementById("contactEmailError");
var contactList = [];
var favList = [];
var emergancyList = [];
var upadeIndex;
var contactDeleted;




if(localStorage.getItem("contactList") != null) {
    contactList = JSON.parse(localStorage.getItem("contactList"));
    displayContact(contactList);
}



if (localStorage.getItem("favList") != null) {
    favList = JSON.parse(localStorage.getItem("favList"));
    displayFavContact(favList);
}

if (localStorage.getItem("emergancyList") != null) {
    emergancyList = JSON.parse(localStorage.getItem("emergancyList"));
}

displayEmergancyContact(emergancyList);

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
        if (contactName.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the name input"
        });

        return;
    }


        if (contactPhone.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the phone input"
        });

        return;
    }


        if (contactEmail.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the email input"
        });

        return;
    }

        if (contactAddress.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the address input"
        });

        return;
    }

    if (contactName.classList.contains("is-invalid") || contactPhone.classList.contains("is-invalid") || contactEmail.classList.contains("is-invalid") || contactAddress.classList.contains("is-invalid")) {
    return;
}

    for(var i = 0; i < contactList.length; i++) {
        if(contactList[i].phone == contactPhone.value || contactList[i].email == contactEmail.value) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "This phone number or Email already exists"
            });
            return;
        }
    }


    contactList.push(contact);
    if (contactFavorite.checked) {
        favList.push(contact);
        localStorage.setItem("favList", JSON.stringify(favList));
        displayFavContact(favList);
    }
    if (contactEmergency.checked) {
        emergancyList.push(contact);
        localStorage.setItem("emergancyList", JSON.stringify(emergancyList));
        displayEmergancyContact(emergancyList);
    }
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

function addEmergancyContact(index) {
    var EmergancyContact = contactList[index];

    if (emergancyList.includes(EmergancyContact)) {
        emergancyList.splice(emergancyList.indexOf(EmergancyContact), 1);
    } else {
        emergancyList.push(EmergancyContact);
    }

    localStorage.setItem("emergancyList", JSON.stringify(emergancyList));
    displayEmergancyContact(emergancyList);
    displayContact(contactList);
}


function displayEmergancyContact(emergArr) {
    var emergBox = "";
    totalEmergContacts.innerHTML = emergArr.length;
    if (emergArr.length === 0) {
    noEmergncy.classList.remove("d-none");
    } else {
        noEmergncy.classList.add("d-none");
    }
    for(var i = 0; i < emergArr.length; i++) {
        emergBox += `<div class="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 mb-2 fav-card">
                                            <div class="d-flex align-items-center justify-content-start gap-3">
                                                <img src="img/avatar-3.jpg" width="40px" height="40px" class="rounded-3" alt="">
                                                <div class="d-flex flex-column justify-content-start align-items-start">
                                                    <p class="fw-bold text-dark mb-0">${emergArr[i].name}</p>
                                                    <p class="text-muted small mb-0">${emergArr[i].phone}</p>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-phone text-danger px-3 py-2 bg-danger-subtle rounded-3 d-flex align-items-center justify-content-center" ></i>
                                        </div>`
    }
    emptyStateEmergency.innerHTML = emergBox;
}




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
    totalFavContacts.innerHTML = favArr.length;
    if(favArr.length === 0) {
        noFavorits.classList.remove("d-none");
    }else {
        noFavorits.classList.add("d-none");
    }
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
                                                id="heartIconOnImg"
                                                class="badge-icon badge-heart d-flex justify-content-center align-items-center rounded-circle d-none">
                                                <i class="fas fa-heart-pulse" ></i>
                                            </div>
                                            <div
                                                id="starIconOnImg"
                                                class="badge-icon badge-star d-flex justify-content-center align-items-center rounded-circle d-none">
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
                                        <button class="action-button emergency"id="emergncyBtn" title="Emergency" onclick="addEmergancyContact(${i})">
                                            <i class="${emergancyList.includes(arr[i]) ? 'fas' : 'far'} fa-heart"></i>
                                        </button>
                                        <button class="action-button edit" id="editBtn" title="Edit" onclick="getDataFromCard(${i})">
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
    contactFavorite.checked = false;
    contactEmergency.checked = false;
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
            for(var i = 0; i < favList.length; i++) {
                if(favList[i].phone == contactList[index].phone) {
                    favList.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("favList", JSON.stringify(favList));
            displayFavContact(favList);
            for(var i = 0; i < emergancyList.length; i++){
                if(emergancyList[i].phone == contactList[index].phone) {
                    emergancyList.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("emergancyList", JSON.stringify(emergancyList));
            displayEmergancyContact(emergancyList);
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



// edite function 

function getDataFromCard(index) {
    upadeIndex = index;
    contactName.value = contactList[index].name;
    contactPhone.value = contactList[index].phone;
    contactEmail.value = contactList[index].email;
    contactAddress.value = contactList[index].address;
    contactGroup.value = contactList[index].category;
    contactModal.classList.remove("d-none");
    updateModalBtn.classList.remove("d-none");
    submitModalBtn.classList.add("d-none");


}

function updateContact() {
    var oldPhone = contactList[upadeIndex].phone; 

    contactList[upadeIndex].name = contactName.value;
    contactList[upadeIndex].phone = contactPhone.value;
    contactList[upadeIndex].email = contactEmail.value;
    contactList[upadeIndex].address = contactAddress.value;
    contactList[upadeIndex].category = contactGroup.value;
    localStorage.setItem("contactList", JSON.stringify(contactList));

    for(var i = 0; i < favList.length; i++) {
        if(favList[i].phone == oldPhone) {
            favList[i].phone = contactPhone.value;
            localStorage.setItem("favList", JSON.stringify(favList));
            break;
        }
    }
    for(var i = 0; i < emergancyList.length; i++){
        if(emergancyList[i].phone == oldPhone) {
            emergancyList[i].phone = contactPhone.value;
            localStorage.setItem("emergancyList", JSON.stringify(emergancyList));
            break;
        }
    }
    localStorage.setItem("favList", JSON.stringify(favList));
    localStorage.setItem("emergancyList", JSON.stringify(emergancyList));
    displayFavContact(favList);
    displayEmergancyContact(emergancyList);

    displayContact(contactList);
    contactModal.classList.add("d-none");
    updateModalBtn.classList.add("d-none");
    submitModalBtn.classList.remove("d-none");
    Swal.fire({
    title: "Updated Successfully",
    icon: "success",
    draggable: true
    });
}


// search function


function searchContact() {
    var searchResult = searchInput.value.toLowerCase();
    var searchResultArr = [];

    for(var i = 0; i < contactList.length ; i++) {
        if(contactList[i].name.trim().toLowerCase().includes(searchResult) || contactList[i].phone.trim().toLowerCase().includes(searchResult) || contactList[i].email.trim().toLowerCase().includes(searchResult)) {
            searchResultArr.push(contactList[i]);
        }
    }
    displayContact(searchResultArr);
}


// validation 

function validatName() {

    var nameRegex = /^[A-Za-z\u0600-\u06FF ]{2,50}$/;

    if (nameRegex.test(contactName.value.trim())) {
        contactName.classList.add("is-valid");
        contactName.classList.remove("is-invalid");

        contactNameError.classList.add("d-none");
    } else {
        contactName.classList.add("is-invalid");
        contactName.classList.remove("is-valid");

        contactNameError.classList.remove("d-none");
    }
}
contactName.addEventListener("input", validatName);


function validatePhone() {
    var phoneRegex = /^01[0125][0-9]{8}$/;

    if(phoneRegex.test(contactPhone.value.trim())) {
        contactPhone.classList.add("is-valid");
        contactPhone.classList.remove("is-invalid");

        contactPhoneError.classList.add("d-none")
    }else {
        contactPhone.classList.add("is-invalid");
        contactPhone.classList.remove("is-valid");

        contactPhoneError.classList.remove("d-none");
    }
}

contactPhone.addEventListener("input", validatePhone);


function validateEmail() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(contactEmail.value.trim())) {
        contactEmail.classList.add("is-valid");
        contactEmail.classList.remove("is-invalid");

        contactEmailError.classList.add("d-none");
    }else {
        contactEmail.classList.add("is-invalid");
        contactEmail.classList.remove("is-valid");

        contactEmailError.classList.remove("d-none");
    }
}

contactEmail.addEventListener("input", validateEmail);



