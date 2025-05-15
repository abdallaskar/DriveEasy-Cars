export function popupModal(id, data) {

  let element = document.getElementById(id);
  element.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <div class="w-100 text-center">
          <i class="bi bi-check-circle-fill fs-1 mb-2"></i>
          <h2 class="modal-title fs-4 fw-bold" id="exampleModalLabel">Booking Confirmed!</h2>
          <p class="mb-0 small">Your reservation is successfully completed</p>
        </div>
        <button type="button" class="btn-close btn-close-white position-absolute end-0 me-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div class="modal-body p-4">
        <div class="booking-summary">
          <div class="row g-3 mb-4">
            <div class="col-md-6">
              <div class="summary-card bg-light p-3 rounded">
                <h3 class="fs-5 fw-bold text-primary mb-3">Customer Details</h3>
                <div class="d-flex mb-2">
                  <i class="bi bi-person-fill text-muted me-2"></i>
                  <span>${data.firstName} ${data.lastName}</span>
                </div>
                <div class="d-flex mb-2">
                  <i class="bi bi-telephone-fill text-muted me-2"></i>
                  <span>${data.phoneNumber}</span>
                </div>
                <div class="d-flex">
                  <i class="bi bi-envelope-fill text-muted me-2"></i>
                  <span>${data.email}</span>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="summary-card bg-light p-3 rounded">
                <h3 class="fs-5 fw-bold text-primary mb-3">Rental Details</h3>
                <div class="d-flex mb-2">
                  <i class="bi bi-geo-alt-fill text-muted me-2"></i>
                  <span><strong>Pickup:</strong> ${data.pickupLocation}</span>
                </div>
                <div class="d-flex mb-2">
                  <i class="bi bi-geo-fill text-muted me-2"></i>
                  <span><strong>Dropoff:</strong> ${data.dropoffLocation}</span>
                </div>
                <div class="d-flex">
                  <i class="bi bi-car-front-fill text-muted me-2"></i>
                  <span>${data.brand} ${data.model}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="total-price bg-primary bg-opacity-10 p-3 rounded text-center">
            <p class="mb-1 text-muted">Total Rental Cost</p>
            <h3 class="text-primary fw-bold fs-2">$${data.totalCost}</h3>
            <p class="small text-muted mb-0">Inclusive of all taxes and fees</p>
          </div>
        </div>
      </div>
      
      <div class="modal-footer border-0 justify-content-center">
        <button type="button" class="btn btn-primary px-4 py-2 rounded-pill" data-bs-dismiss="modal" id="modalCloseBtn">
          <i class="bi bi-check-circle me-2"></i>Got it, thanks!
        </button>
      </div>
    </div>
  </div>
</div>`;

  // Show the modal
  const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show();
  document.getElementById('modalCloseBtn').addEventListener('click', () => {
    window.location.href = "../../CarListings/carlist.html";
  });
}

// BOOKING FUNCTIONALITY .
export function navigateToBooking(car_id) {
  if (car_id) {
    sessionStorage.setItem("bookedCarId", JSON.stringify(car_id));
    window.location.href = "../Booking/booking.html";
  } else {
    console.error("Car not found!");
  }
}
// END OF BOOKING FUNCTIONALITY.
export function changeCar() {
  window.location.href = "../../CarListings/carlist.html";
}
