const animale1 = {species: "mucca", race: "chianina", paws: 4, caratteristicheComplete: function() {return this.species + ", "+ this.race +", con "+ this.paws+ " zampe.";} };
const animale2 = {species: "cane", race: "bassotto", paws: 4, caratteristicheComplete: function() {return this.species +", "+ this.race +", con "+ this.paws+ " zampe.";} };
const animale3 = {species: "gallina", race: "andalusa", paws: 2, caratteristicheComplete: function() {return this.species +", "+ this.race +", con "+ this.paws+" zampe.";} };
console.log("prova");
function animal1() {
    document.getElementById("firstButton").innerHTML = "Ecco le caratteristiche del primo animale: " + animale1.caratteristicheComplete();
    console.log("prova2");
}
function animal2() {
    document.getElementById("firstButton").innerHTML = "Ecco le caratteristiche del secondo animale: " + animale2.caratteristicheComplete();
}
function animal3() {
    document.getElementById("firstButton").innerHTML = "Ecco le caratteristiche del terzo animale: " + animale3.caratteristicheComplete();
}