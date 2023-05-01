// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
// Création éléments
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "pas cher" : "cher"})`;//template string et conditions ternaires
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";//Fournir une valeur par défaut grâce à l’opérateur nullish expression à tester ?? valeur de substitution. L’opérateur nullish utilisera la valeur de substitution uniquement dans le cas où l’expression à tester fournit la valeur null ou undefined. Dans tous les autres cas, l’opérateur nullish gardera la valeur d’origine.
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ??"(Pas de description pour le moment)";
const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponibilite == true ? "disponible" : "non disponible";
//Affichage
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);