export class BookingForm {
  constructor(pickupLocation, dropoffLocation, firstName, lastName, phoneNumber, email, carId, brand,
    model, bookingId, totalCost, status = "Active") {

    this.pickupLocation = pickupLocation;
    this.dropoffLocation = dropoffLocation;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.carId = carId;
    this.brand = brand;
    this.model = model;
    this.bookingId = bookingId;
    this.totalCost = totalCost;
    this.status = status;
  }
}
