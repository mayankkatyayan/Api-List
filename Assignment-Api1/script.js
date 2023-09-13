let currentUser = null;
const form = document.getElementById('customerForm');
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const Email = document.getElementById("email");

let data;

form.addEventListener("submit", function(event){
  event.preventDefault();
  data={
    firstName:firstName.value,
    lastName:lastName.value,
    email:Email.value
  }
  console.log(data);
});



function loginUser() {
    
    
    



    showDashboardSlide();
    return false; // Prevent form submission
}

function logoutUser() {
    currentUser = null;
    showLoginSlide();
}

function showLoginSlide() {
    hideAllSlides();
    document.getElementById('loginSlide').style.display = 'block';
}

function showDashboardSlide() {
    hideAllSlides();
    document.getElementById('dashboardSlide').style.display = 'block';
    // Load and display the list of customers here
}

function showCreateSlide() {

    hideAllSlides();
    document.getElementById('createSlide').style.display = 'block';
}

async function createCustomer() {
  const body = {"first_name": "Jane", "last_name": "Doe", "street": "Elvnu Street", "address": "H no 2 ", "city": "Delhi", "state": "Delhi", "email": "sam@gmail.com", "phone": "12345678" };
  const data = await fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create", {
    method:"POST",
    headers:{
      "Content-type":"application/json",
      headers: {
        Authentication: 'Bearer dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=',
        "Access-Control-Allow-Origin": "http://localhost:5500",
        "Access-Control-Allow-Credentials": 'true',
      }
    },
    body:JSON.stringify(body)
  });
  if(data.ok) console.log(data);
  
    
}

function updateCustomer() {
    // Add code to update an existing customer
    // Update the customer list on success
}

function deleteCustomer() {
    // Add code to delete an existing customer
    // Update the customer list on success
}

function hideAllSlides() {
    const slides = document.getElementsByClassName('slide');
    for (const slide of slides) {
        slide.style.display = 'none';
    }
}

// Initially, show the login slide
showLoginSlide();
