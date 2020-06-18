console.log("hey good looking")

// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice


const createDoctor = (name, specialty, address) => {
    const doctor = {
        name: name,
        specialty: specialty,
        address: address
    }
    return doctor
}

const newDoctor = createDoctor("Dr. Jim", "Chiropractor", "331 Main St, Nashville, TN, 37206")
console.log(newDoctor)

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

 const createPet = (name, breed) => {
     const pet = {
         name: name,
         breed: breed
     }
     return pet
 }

 let doug = createPet("Doug", "Pug")
 let hunny = createPet("Hunny", "Pointer")
 let princeGeorge = createPet("Prince George", "Corgi")

 let BowWowKennels = [doug, hunny, princeGeorge];

 console.log(BowWowKennels)

 