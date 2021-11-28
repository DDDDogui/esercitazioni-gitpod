const animale1 = {species: "mucca", race: "chianina", paws: "4"};
const animale2 = {species: "cane", race: "bassotto", paws: "4"};
const animale3 = {species: "gallina", race: "andalusa", paws: "2"};
console.log("prova");
function animal1() {
    document.getElementById("firstButton").innerHTML = "Ecco le caratteristiche del primo animale: " + animale1.species +", " + animale1.race +", con " + animale1.paws+ " zampe.";
    console.log("prova2");
}
function animal2() {
    document.getElementById("firstButton").innerHTML = "Ecco le caratteristiche del secondo animale: " + animale2.species +", " + animale2.race +", con " + animale2.paws+ " zampe.";
}
function animal3() {
    document.getElementById("firstButton").innerHTML = "Ecco le caratteristiche del terzo animale: " + animale3.species +", " + animale3.race +", con " + animale3.paws+ " zampe.";
}