let inpNumber = parseInt(document.getElementById("number").textContent); //converting string to number.
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
convLength.textContent = `${inpNumber} meters = ${ftToM} feet | ${inpNumber} feet = ${mToFt} meters `
}

function convToVolume(){
convVolume.textContent = `${inpNumber} liters = ${ltToGal} gallons | ${inpNumber} gallons = ${galToLt} liters`
}

function convToMass(){
convMass.textContent = `${inpNumber} kilos = ${kgToIbs} pounds | ${inpNumber} pounds = ${ibsToKg} kilos`
}

convToLength();
convToVolume();
convToMass();