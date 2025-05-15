
// function to initialize system with static default data
// export function InitializeStaticCars(handleCar) {
//   if (handleCar.getAllCars().length === 0) {
//     const car1 = handleCar.createCar(
//       1,
//       '1.jpg',
//       'Toyota',
//       'Camry',
//       'Sedan',
//       100,
//       '2022',
//       'A reliable sedan with a comfortable interior and advanced safety features.'
//     );
//     const car2 = handleCar.createCar(
//       2,
//       '2.jpg',
//       'Honda',
//       'Civic',
//       'Sedan',
//       80,
//       '2022',
//       'A compact car known for its reliability and fuel efficiency.'
//     );
//     const car3 = handleCar.createCar(
//       3,
//       '3.jpg',
//       'Ford',
//       'Mustang',
//       'Coupe',
//       150,
//       '2022',
//       'Sports car with a powerful engine and sleek design'
//     );
//     const car4 = handleCar.createCar(
//       4,
//       '4.jpg',
//       'Chevrolet',
//       'Impala',
//       'Sedan',
//       70,
//       '2022',
//       'Spacious sedan with a comfortable interior.'
//     );
//     const car5 = handleCar.createCar(
//       1,
//       '1.jpg',
//       'Toyota',
//       'Camry',
//       'Sedan',
//       100,
//       '2022',
//       'A reliable sedan with a comfortable interior and advanced safety features.'
//     );
//     const car6 = handleCar.createCar(
//       1,
//       '1.jpg',
//       'Toyota',
//       'Camry',
//       'Sedan',
//       100,
//       '2022',
//       'A reliable sedan with a comfortable interior and advanced safety features.'
//     );
//     const car7 = handleCar.createCar(
//       1,
//       '1.jpg',
//       'Toyota',
//       'Camry',
//       'Sedan',
//       100,
//       '2022',
//       'A reliable sedan with a comfortable interior and advanced safety features.'
//     );

//     handleCar.addCar(car1);
//     handleCar.addCar(car2);
//     handleCar.addCar(car3);
//     handleCar.addCar(car4);
//     handleCar.addCar(car5);
//     handleCar.addCar(car6);
//     handleCar.addCar(car7);
//   }
// }
// Function to initialize system with static default data
export function InitializeStaticCars(handleCar) {
  if (handleCar.getAllCars().length === 0) {
    // Sedans
    const car1 = handleCar.createCar(1, '1.webp', 'Toyota', 'Camry', 'Sedan', 89, '2023', 'Reliable midsize sedan with premium comfort');
    const car2 = handleCar.createCar(2, '2.webp', 'Honda', 'Accord', 'Sedan', 85, '2023', 'Spacious interior with hybrid option');
    const car3 = handleCar.createCar(3, '3.webp', 'BMW', '330i', 'Sedan', 129, '2023', 'Luxury sports sedan with premium features');
    const car4 = handleCar.createCar(4, '4.webp', 'Hyundai', 'Sonata', 'Sedan', 75, '2023', 'Tech-packed sedan with great warranty');

    // SUVs
    const car5 = handleCar.createCar(5, '5.webp', 'Ford', 'Explorer', 'SUV', 109, '2023', '7-seater family SUV with ample space');
    const car6 = handleCar.createCar(6, '6.webp', 'Toyota', 'RAV4', 'SUV', 95, '2023', 'Compact SUV with hybrid efficiency');
    const car7 = handleCar.createCar(7, '7.webp', 'Jeep', 'Wrangler', 'SUV', 139, '2023', 'Off-road capable adventure vehicle');
    const car8 = handleCar.createCar(8, '8.webp', 'Tesla', 'Model X', 'SUV', 199, '2023', 'Electric SUV with falcon wing doors');

    // Coupes
    const car9 = handleCar.createCar(9, '9.webp', 'Ford', 'Mustang', 'Coupe', 149, '2023', 'Iconic American muscle car');
    const car10 = handleCar.createCar(10, '10.webp', 'Chevrolet', 'Camaro', 'Coupe', 145, '2023', 'Powerful V8 sports coupe');
    const car11 = handleCar.createCar(11, '11.webp', 'Audi', 'A5', 'Coupe', 135, '2023', 'Luxury coupe with quattro AWD');

    // Hatchbacks
    const car12 = handleCar.createCar(12, '12.webp', 'Volkswagen', 'Golf', 'Hatchback', 65, '2023', 'Practical European hatchback');
    const car13 = handleCar.createCar(13, '13.webp', 'Honda', 'Fit', 'Hatchback', 59, '2023', 'Compact with magic seat configuration');

    // Luxury
    const car14 = handleCar.createCar(14, '14.jpg', 'Mercedes', 'S-Class', 'Luxury', 249, '2023', 'Flagship luxury sedan');
    const car15 = handleCar.createCar(15, '15.jpg', 'Porsche', '911', 'Sports', 299, '2023', 'Legendary German sports car');

    // Electric
    const car16 = handleCar.createCar(16, '16.jpg', 'Tesla', 'Model 3', 'Electric', 129, '2023', 'Best-selling electric sedan');

    // Add all cars
    [car1, car2, car3, car4, car5, car6, car7, car8,
      car9, car10, car11, car12, car13, car14, car15, car16].forEach(car => {
        handleCar.addCar(car);
      });
  }
}
