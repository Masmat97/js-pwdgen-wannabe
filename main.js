// const numero="24#"
// let textname = prompt("name");
// console.log(textname);
// let textsurname = prompt("surname");
// console.log(textsurname);
// let textcolor = prompt("color");
// console.log(textcolor);
// const password = textname + textsurname + textcolor + "24#";
// document.getElementById("password").innerHTML = la tua password è: ${password};


let nome = prompt("Inserisci il tuo nome");
console.log(`Il tuo nome è: ${nome}`);
let cognome = prompt("Inserisci il tuo cognome");
console.log(`Il tuo cognome è: ${cognome}`);
let colore = prompt("Inserisci il tuo colore preferito");
console.log(`Il tuo colore preferito è: ${colore}`);
let Pass = nome + cognome + colore + "#" +24;

let newsPassword = nome + cognome + colore +"#24"
console.log(`La tua password è: ${newsPassword}`)

document.getElementById("password").innerHTML = newsPassword;