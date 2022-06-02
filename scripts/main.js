//Sends the table data to the functions
function calculateScores() {
    //for players 1 to 7, it will calculate and display the score
    for(var i = 1; i < 8; i++) {
        document.querySelector(`#p${i}score`).value = 
        parseInt(document.querySelector(`#p${i}military`).value) +
        coinDivide(i) +
        parseInt(document.querySelector(`#p${i}wonder`).value) +
        parseInt(document.querySelector(`#p${i}struct`).value) +
        parseInt(document.querySelector(`#p${i}com`).value) +
        parseInt(document.querySelector(`#p${i}guild`).value) +
        sciencePoints(i);
    }
}
//Divide the number of coins by 3, return an integer value as the number of points
const coinDivide = (i) => parseInt(parseInt(document.querySelector(`#p${i}coins`).value)/ 3);
//calculate the points from science
function sciencePoints(i) {
    let gear = parseInt(document.querySelector(`#p${i}gear`).value) 
    let compass = parseInt(document.querySelector(`#p${i}sc`).value) 
    let tablet = parseInt(document.querySelector(`#p${i}tab`).value) 
    let triple = (Math.min(gear, compass, tablet) * 7)
    return gear ** 2 + compass ** 2 + tablet ** 2 + triple
}    
//When button go click, run the calculateScores function
document.querySelector('#calculate').addEventListener('click', calculateScores);