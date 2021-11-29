const mucca = { species: "mucca", race: "Chianina", paws: 4, carMucca: function() {return this.species +", razza "+ this.race+ ", ha "+ this.paws+ " zampe."}};
function carMucca() {
    document.getElementById("firstButton").innerHTML = "Caratteristiche: " + mucca.carMucca();
}