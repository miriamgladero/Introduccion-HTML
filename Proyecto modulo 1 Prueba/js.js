let infoRecibida

function RecetaDelDia(){
    let EleccionReceta = document.getElementById("EleccionReceta").value
let MostrarReceta= ""
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=30683b277d624bf8be1e5cebbc9c237b&query=${EleccionReceta}`
fetch(url)
.then (function cogerRespuesta (respuesta) {
    return respuesta.json ();
})
.then (function cogerDatos (datos) {
    infoRecibida=datos.results

for (let i=0; i<datos.results.length; i++){
MostrarReceta += `
<div> 

<h1>${datos.results[i].title}</h1>
<img src="${datos.results[i].image}" alt= "imagen"/>
<button onclick="MostrarIngredientes(${datos.results[i].id})"> Ingredientes</button>

<div id="Ingredientes${i}"></div>


</div>
`}

document.getElementById("MostrarIMGRecetas").innerHTML=MostrarReceta
    console.log(datos)
});
}

function MostrarIngredientes(id){
    let url= `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=30683b277d624bf8be1e5cebbc9c237b`
    console.log(id)
    fetch(url)
    .then (function cogerRespuesta (respuesta) {
        return respuesta.json ();
    })
    .then (function cogerDatos (datos) {
        for (let i=0; i<infoRecibida.length; i++){
            for (let j=0;j<datos.ingredients.length;j++){
                document.getElementById(`Ingredientes${i}`).innerHTML+=`<p>${datos.ingredients[j].name}</p>`
            }}
           
console.log(datos)
    })
    }
