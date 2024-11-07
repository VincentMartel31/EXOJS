// Exercice 1 : 
let nom = "Jean Mi";
let age = 30;
let fatigue= false;
console.log(nom, age, fatigue);

// Exercice 2 : 
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
let temperatureCelsius = 10;
let temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
console.log(temperatureFahrenheit);

// Exercice 3 : 
let nombre = 7;
if (nombre % 2 === 0) {
  console.log("Le nombre est pair.");
} else {
  console.log("Le nombre est impair.");
}

// Exercice 4 :
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Exercice 5 : 
function somme(a, b) {
  return a + b;
}
let resultat = somme(5, 3);
console.log(resultat);

// Exercice 6 : 
function contientMot(chaine, mot) {
  return chaine.includes(mot);
}
let phrase = "Bonjour tout le monde";
let motAChercher = "monde";
console.log(contientMot(phrase, motAChercher));

// Exercice 7 : 
let prenoms = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < prenoms.length; i++) {
  console.log(prenoms[i]);
}

// Exercice 8 : 
let personne = {
  nom: "Dupont",
  age: 35,
  ville: "Paris"
};
console.log(personne.nom, personne.age, personne.ville);

// Exercice 9
document.addEventListener('DOMContentLoaded', function() {
    
    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'Nouveau paragraphe';
  
   
    let container = document.getElementById('myContainer');
    container.appendChild(newParagraph);
  });

  