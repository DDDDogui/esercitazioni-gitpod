const gallo = { species: "Gallo", race: "Andalusa", paws: 2, carGallo: function() {return this.species +", razza "+ this.race+ ", ha "+ this.paws+ " zampe."}};
function carGallo() {
    document.getElementById("firstButton").innerHTML = "Caratteristiche: " + gallo.carGallo();
    console.log("prova");
}