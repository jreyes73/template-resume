// alert("Welcome to my page.");    

let contactInfoBox = document.getElementById("contact-info-box");
let contactInfoDetails = document.getElementById("contact-info-details");

contactInfoBox.addEventListener("click", () => {
    if (contactInfoDetails.style.display === "none") {
        contactInfoDetails.style.display = "flex"; 
    } else {
        contactInfoDetails.style.display = "none";
    }
}
)   
