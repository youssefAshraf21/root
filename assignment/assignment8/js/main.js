var contactName = document.getElementById("contactName");
var contactPhone = document.getElementById("contactPhone");
var contactEmail = document.getElementById("contactEmail");
var contactAddress = document.getElementById("contactAddress");
var contactGroup = document.getElementById("contactGroup");
var addContactBtn = document.getElementById("addContactBtn");
var favBtn = document.getElementById("favBtn");
var editBtn = document.getElementById("editBtn");
var emergncyBtn = document.getElementById("emergncyBtn");
var deleteBtn = document.getElementById("deleteBtn");
var contactModal = document.getElementById("contactModal");
var closeModalBtn = document.getElementById("closeModalBtn");
var submitModalBtn = document.getElementById("submitModalBtn");

var contactList = [];




// open the menu when click on add contact btn 

addContactBtn.addEventListener("click", function(){
    if(contactModal.classList.contains("d-none")) {
        contactModal.classList.remove("d-none");
    }else {
        contactModal.classList.add("d-none");
    }
})

// close the menu 

closeModalBtn.addEventListener("click", function(){
    contactModal.classList.add("d-none");
})







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
}
submitModalBtn.addEventListener("click", addContact);





function clearInputs() {
    contactName.value = "";
    contactPhone.value = "";
    contactEmail.value = "";
    contactAddress.value = "";
    contactGroup.value = "";
}