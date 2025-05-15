import handleCar from './../../CarListings/JS/controller-instance.js';
import handleBook from "./bookingController-instance.js";
import { validateFirstName, validateLastName, validateEmail, validatePhone, validateLocation } from "./validation.js";
import { popupModal } from "./utils.js";

const carImage = document.getElementById('carImage');
const carBrandModel = document.getElementById('carBrandModel');
const carDetails = document.getElementById('carDetails');
const carPriceElement = document.getElementById('carPrice');
const totalPrice = document.getElementById('totalPrice');
const rentalDays = document.getElementById('rentalDays');


const bookedCarId = JSON.parse(sessionStorage.getItem("bookedCarId"));
const car = handleCar.findCarById(bookedCarId);

const CurrentUser = JSON.parse(sessionStorage.getItem("currentUser"));
console.log(CurrentUser);

// Update the total price when the number of rental days changes
rentalDays.addEventListener('input', () => {
    const carPrice = car.rental_price;
    const days = rentalDays.value;
    totalPrice.value = `${carPrice * days}`;
});

// Set the user details in the UI if user is logged in
if (CurrentUser) {
    document.getElementById('fname').value = CurrentUser.userName;
    document.getElementById('email').value = CurrentUser.email;
}

// Set the car details in the UI
if (car) {
    carImage.src = `../../AdminDashboard/Images/${car.url_img}`;
    carBrandModel.textContent = `${car.brand} ${car.model}`;
    carDetails.textContent = `${car.year} - ${car.description}`;
    carPriceElement.textContent = `$${car.rental_price} per day`;
}

// form validation and submission booking 
const btnConfirmBooking = document.getElementById("confirmBooking");
btnConfirmBooking.addEventListener("click", function (event) {
    // Check if all validations are successful
    const isFirstNameValid = validateFirstName("fname", "fname-error");
    const isLastNameValid = validateLastName("lname", "lname-error");
    const isEmailValid = validateEmail("email", "email-error");
    const isPhoneValid = validatePhone("phone", "phone-error");
    const isPickupLocationValid = validateLocation("pickupL", "pickupL-error");
    const isDropoffLocationValid = validateLocation("dropoffLocation", "dropoffLocation-error");

    const carPrice = car.rental_price;
    const days = rentalDays.value;
    const totalCost = parseFloat(carPrice * days);

    // Check if all validations are successful
    if (!(isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid &&
        isPickupLocationValid && isDropoffLocationValid && totalCost > 0)) {
        return;
    }



    // create a new booking and add it to the bookings array
    const newBooking = handleBook.createBooking(
        document.getElementById("pickupL").value,
        document.getElementById("dropoffLocation").value,
        document.getElementById("fname").value,
        document.getElementById("lname").value,
        document.getElementById("phone").value,
        document.getElementById("email").value, car.id, car.brand, car.model, totalCost, "Active");
    handleBook.addBooking(newBooking);
    // Update the car status to booked
    handleCar.markCarAsBooked(bookedCarId);
    // show the booking confirmation modal to user
    popupModal("pop", newBooking);


    // const toastEl = document.getElementById("successToast");
    // const toast = new bootstrap.Toast(toastEl);
    // toast.show();
    // setTimeout(() => {
    //     toast.hide();
    // }, 1000);

    // Clear the session storage on booked car id for the next booking
    sessionStorage.removeItem("bookedCarId");
});