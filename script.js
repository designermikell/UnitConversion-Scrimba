// let inpNumber = parseInt(prompt("Enter a number for conversion."));
 //converting string to number.
let covNumber = document.getElementById("number");
let convLength = document.getElementById("convLength");
let convVolume = document.getElementById("convVolume");
let convMass = document.getElementById("convMass");



 //Conversion for Length
let ftToM = inpNumber / 3.281;
let mToFt = inpNumber * 3.281;

// Conversion for Volume
let ltToGal = inpNumber * 1.201; 
let galToLt = inpNumber / 1.201;

// Conversion for Mass
let kgToIbs = inpNumber * 2.2;
let ibsToKg = inpNumber / 2.2;

// Output Functions
function convToLength(){
covNumber.textContent = inpNumber;
convLength.textContent = `${inpNumber} meters = ${ftToM.toFixed(3)} feet | ${inpNumber} feet = ${mToFt.toFixed(3)} meters `
}

function convToVolume(){
covNumber.textContent = inpNumber;
convVolume.textContent = `${inpNumber} liters = ${ltToGal.toFixed(3)} gallons | ${inpNumber} gallons = ${galToLt.toFixed(3)} liters`
}

function convToMass(){
covNumber.textContent = inpNumber;
convMass.textContent = `${inpNumber} kilos = ${kgToIbs.toFixed(3)} pounds | ${inpNumber} pounds = ${ibsToKg.toFixed(3)} kilos`
}

convToLength();
convToVolume();
convToMass();