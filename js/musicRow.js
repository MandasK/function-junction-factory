// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

let JumpStopRecords = [];
let ChattenRecords = [];
let PolarRecords = [];


const createArtist = {

createCountryArtist (name, age) {
    let countryArtist = {
        name: name,
        genre: "Country",
        age: age,
        label: "Chatten Rocords"
        }
    ChattenRecords.push(countryArtist)
},

createPopArtist(name, age) {
    let popArtist = {
        name: name,
        genre: "Pop",
        age: age,
        label: "Polar Records"
        }
    PolarRecords.push(popArtist)
},

createFunkArtist(name, age) {
    let funkArtist = {
        name: name,
        genre: "Funk",
        age: age,
        label: "JumpStop Records"
        }
    JumpStopRecords.push(funkArtist)
},

createRapArtist(name, age) {
    let rapArtist = {
        name: name,
        genre: "Rap",
        age: age,
        label: "JumpStop Records"
        }
    JumpStopRecords.push(rapArtist)
},

createBluegrassArtist(name, age) {
    let bluegrassArtist = {
        name: name,
        genre: "Bluegrass",
        age: age,
        label: "Chatten Records"
        }
    ChattenRecords.push(bluegrassArtist)
}
}

createArtist.createCountryArtist("Bruce Atkins", 23)
createArtist.createPopArtist("Jensen Brown", 20)
createArtist.createFunkArtist("Dre Funkz", 25)
createArtist.createRapArtist("Dusta Grimes", 21)
createArtist.createBluegrassArtist("Bartholomew Danielson", 23)
createArtist.createCountryArtist("Avilee Dallas", 19)
createArtist.createPopArtist("Austin KinKaid", 22)
createArtist.createRapArtist("Loyoncé Branis", 27)


console.log(ChattenRecords)
console.log(PolarRecords)
console.log(JumpStopRecords)