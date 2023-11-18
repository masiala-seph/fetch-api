const url = "https://jsonplaceholder.typicode.com/users";


fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json()
})
.then(function(data){

    // const personne = data
    Users(data)

    // for(let j = 0; j<personne.length; j++){
    //     console.log("personnne Obket : ", personne[j].username + " " +  personne[j].name + " " +  personne[j].address.city + + " " +  personne[j].address.geo.lat)
    // }
})




function Users(data){
    console.log(data)
}










/*
var personne = ["jean", "andre", "blaise", "hans", "natah"];
var personneObjet = [
    {nom: "jeannot", age: 20},
    {nom: "beni", age: 10},
    {nom: "alliance", age: 30},
];


console.log("personne : ", personne[0])
console.log("personne : ", personne[1])
console.log("personne : ", personne[2])

for(let i = 0; i<personne.length ; i++) {
    console.log("liste : ", personne[i])
}

console.log("object Personne : " , personneObjet[0].nom)
console.log("object Personne : " , personneObjet[0].age)

for(let j = 0; j<personneObjet.length; j++){
    console.log("personnne Obket : ", personneObjet[j].nom)
    console.log("personnne Obket : ", personneObjet[j].age)
}
*/