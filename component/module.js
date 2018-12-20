/*
Mine egne komponenter. Leder du efter valuta api komponent 
--> public/html/valutaModule.html
*/
function dkkToEuro(DKK){
    var euro = (DKK / 7.46);
     console.log("Du har modtaget "+ euro + " euro, fra "+ DKK + " dkk.");
 }
 function euroToDkk(euro){
     var dkk = (euro * 7.46);
     console.log("Du har modtaget "+dkk+" DKK, fra " + euro + " euro.")
 }
 //Eksportere funktionerne
module.exports = {
    valutaDkktoEuro: dkkToEuro,
    valutaEurotoDKK: euroToDkk,

}