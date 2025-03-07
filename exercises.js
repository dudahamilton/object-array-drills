////////////////////////////////////////////////
// Part 1: Working With Data Structures
////////////////////////////////////////////////
console.log("PART 1")
const album1 = {
  title: "Talking Heads",
  albumDetails: {
    released: new Date("September 16, 1977"),
    label: "Sire",
    formats: ["LP"],
  },
}

// 1. Retrieve the string "Sire" from album1, and save it in a sensibly named
//    variable.
const labelName = album1.albumDetails.label
console.log("1. ", album1.albumDetails.label)
// 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"
album1.title = album1.title + ": 77" // concatenation onto the current value
// album1.title = "Talking Heads: 77" // overwriting the string completely
console.log("2. ", album1.title)

const album2 = {
  title: "More Songs About Buildings and Food",
  albumDetails: {
    released: new Date("July 14, 1978"),
    label: "Sire",
    formats: ["LP", "8-track"],
  },
}

const album3 = {
  title: "Fear of Music",
  albumDetails: {
    released: "August 3, 1979",
    label: "Sire",
    formats: ["Cassette"],
  },
}

// 3. Access album2's formats array and use an array method to add "LP" to
//    album3's formats
// Check out the Array.push method!
album3.albumDetails.formats.push(album2.albumDetails.formats[0])
console.log("3. ", album3.albumDetails.formats)

// 4. Change the release date of album3 from a string into a Date object
// Look ahead to album4 for a clue!
// album3.albumDetails.released = new Date("August 3, 1979") // hardcoded
album3.albumDetails.released = new Date(album3.albumDetails.released) // dynamic
console.log("4. ", album3.albumDetails.released)

const album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"],
  },
}

// 5. Add the label "Sire" to album4's details
album4.albumDetails.label = "Sire"
console.log("5. ", album4.albumDetails)

const album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label: "Sire",
  },
}

// 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"
album5.albumDetails.formats = [ "CD", "Cassette", "LP"]
console.log("6. ", album5.albumDetails)

const album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    labels: ["Sire", "emi"],
    formats: ["CD", "cassette", "LP"],
  },
}

// 7. Make the label "emi" in album6 all uppercase
// google how to make a string uppercase in js!
album6.albumDetails.labels[1] = album6.albumDetails.labels[1].toUpperCase()
console.log("7. ", album6.albumDetails.labels[1])

const album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    labels: "Sire, EMI",
    formats: ["CD", "cassette", "LP"],
  },
}

// 8. Convert album7's 'labels' property from the string value
//    "Sire, EMI" into the array: ["Sire", "EMI"]
// google js array split!
album7.albumDetails.labels = album7.albumDetails.labels.split(", ")
console.log("8. ", album7.albumDetails.labels)


/////////////////////////////////////////////////////
// Part 2: More Tasks About Datatypes and Structures
/////////////////////////////////////////////////////

const album8 = {
  title: "Naked",
  albumDetails: {
    released: new Date("March 15, 1988"),
    labels:    ["Sire", "EMI"],
    formats:  ["CD", "cassette", "LP"]
  }
}  

const talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8
]  

// 1. Create an object literal called `band`.
const band = {
  
}

// 2. Give it the property `name` and set it to "Talking Heads"
band.name = "Taliking Heads"
console.log(band)
// 3. Give it the property `members` and set it to an array with a single
//    string, "David Byrne", in it.
band.members =["David Byrne"]
console.log(band)

// 4. Give it the property `albums` and set it to the array stored in the
//    variable talkingHeadsAlbums
band.albums = talkingHeadsAlbums
console.log(band)

// 5. Add "Tiny Weymouth", "Chris Franz" and "Jerry Harrison" to the members
//    array.
band.members.push("Tiny Weymouth ", "Chris Franz ", " Jerry Harrison")
console.log(band)
////////////////////////////////////////////////
// Part 3: Conditional Logic
////////////////////////////////////////////////

// 1. Write a conditional to console.log "Talking Heads were a prolific band"
//    if the Talking Heads have 6 albums or more. Otherwise, console.log
//    "Talking heads didn't have much output." Use the array of albums
//    talkingHeadsAlbums above.

if (talkingHeadsAlbums.length > 5) {
  console.log("Talking Heads were a prolific band")
} else {
console.log("Talking heads didn't have much output.")
}

// 2. Write a conditional to check if the number of albums in
//    talkingHeadsAlbums is odd or even, and then console.log
//    "The number X is odd" or "The number X is even" with X being
//    the number of albums.
if (talkingHeadsAlbums.length % 2 === 0) {
  console.log("2. The number ${talkingHeadsAlbums.length} is even")
} else {
  console.log("2. The number ${talkingHeadsAlbums.length} is odd")
}

// 3. Write conditionals to check if the number of albums in
//    talkingHeadsAlbums is divisible by either 2 or 3, and then
//    console.log one of:
//    - "The number Y is divisible by 2",
//    - "The number Y is divisible by 3",
//    - "The number Y is divisible by 2 and 3", or
//    - "The number Y is not divisible by 2 or 3",
//
//    with Y being the number of albums.

let numAlbums = talkingHeadsAlbums.length
numAlbums = 9
if (numAlbums === 0) {
  console.log(`3. The number ${numAlbums} is NOT divisible by 2 and 3`)
} else if (numAlbums % 2 === 0 && numAlbums % 3 === 0) {
  console.log(`3. The number ${numAlbums} is divisible by 2 and 3`)
} else if (numAlbums % 2 === 0) {
  console.log(`3. The number ${numAlbums} is divisible by 2`)
} else if (numAlbums % 3 === 0) {
  console.log(`3. The number ${numAlbums} is divisible by 3`)
} else { 
  console.log(`3. The number ${numAlbums} is NOT divisible by 2 and 3`)
}

// 4. Check your logic above against the numbers: 0, 1, 2, 6, 7, and 9.
//    Make sure it always works!

/////////////////////////////////////////////////////
// Part 4: For Loops
/////////////////////////////////////////////////////

// 1. Use a for loop to print out the name of each Talking Heads album
console.log("1. Albums:")
for (let i = 0; i < talkingHeadsAlbums.length; i++) {
  console.log(talkingHeadsAlbums[i].title)
}

// 2. Create a variable called `sireTally`, and set it to the integer value 0.
//    Then use a for-loop to go through all the Talking Heads albums,
//    incrementing sireTally if the album was released under the "Sire" label.
//
//    Warning: some albums have a property `.label`, which is a string, and some
//    have `.labels`, which is an Array!

let sireTally = 0
for (let i = 0; i < talkingHeadsAlbums.length; i++) {
  // console.log("alubum", talkingHeadsAlbums[i].albumDetails)
  if (talkingHeadsAlbums[i].albumDetails.label === "Sire" || talkingHeadsAlbums[i].albumDetails.labels.includes("Sire")) {
    sireTally++
  }
}
console.log("2. ", sireTally)
