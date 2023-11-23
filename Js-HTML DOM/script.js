//Video 26 Session Storage
let p = document.querySelectorAll("p");

console.log(localStorage.getItem("belajar"));

sessionStorage.setItem("coba",100);
sessionStorage.setItem("panjang",500);
p[0].innerHTML = sessionStorage.getItem("coba");
p[1].innerHTML = sessionStorage.getItem("panjang");

// sessionStorage.removeItem("coba");
// sessionStorage.clear();

console.log(sessionStorage.key(1));
console.log(sessionStorage.length);
