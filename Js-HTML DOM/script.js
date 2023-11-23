//Video 25 Local Storage
let p = document.querySelectorAll("p");
localStorage.setItem("coba",100);
localStorage.setItem("tes","saya belajar javascript");
// localStorage.removeItem("coba");
//  localStorage.clear();

p[0].innerHTML = localStorage.getItem("coba");
p[1].innerHTML = localStorage.getItem("tes");
p[2].innerHTML = "Panjang Storage = " + localStorage.length;

console.log(localStorage.getItem("coba"));
console.log(localStorage.getItem("tes"));