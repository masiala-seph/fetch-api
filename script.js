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
    const personne = data
     for(let j = 0; j<personne.length; j++){
        const container = document.getElementById("container");
        const user = document.createElement('div')
        const name = document.createElement('div')
        const city = document.createElement('div')
        const email = document.createElement('div')

        name.classList = "name"
        city.classList = "city"
        email.classList = "email"
        user.classList = "user"

        name.innerHTML = personne[j].name
        city.innerHTML = personne[j].address.city
        email.innerHTML = personne[j].email

        user.appendChild(city);
        user.appendChild(name);
        user.appendChild(email);

        container.appendChild(user);
        // console.log("personnne Obket : ", personne[j].username + " " +  personne[j].name + " " +  personne[j].address.city + + " " +  personne[j].address.geo.lat)
    }
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