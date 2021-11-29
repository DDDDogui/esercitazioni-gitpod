const maiale = { species: "Maiale", race: "Duroc", paws: 4, carMaiale: function() {return this.species +", razza "+ this.race+ ", ha "+ this.paws+ " zampe."}};
function carMaiale() {
    document.getElementById("firstButton").innerHTML = "Caratteristiche: " + maiale.carMaiale();
}