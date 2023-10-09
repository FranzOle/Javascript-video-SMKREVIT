alert("Test Javascript"); 
//Fungsi document.getElementById mengambil id di elemen html
document.getElementById("target1").innerHTML = "Tulisan ini berubah";
document.getElementById("target2").innerText ="lorem ipsum dolor mit";
//query digunakan untuk mengambil elemen
document.querySelector("h1").innerText = "Query";
document.querySelector("#isikonten").innerText = "Isi konten dari container";

//Event Dom js 
//metode 1 menggunakan onclick di elemen HTML 
function TesMetode(){
    document.querySelector("#berubah").innerText = "Berubah";
}

//metode 2 menggunakan function anonymous
klik.onclick = function (){
   let objFont = document.getElementById("berubahid");
   objFont.innerHTML = "Berubah-berubah id";
   objFont.style.color = "red";
}

//metode 3 menggunakan event listener
let fungsi = document.querySelector("#klikk");
fungsi.addEventListener("click",def);

function def (){
    let objFun = document.getElementById("berubahlistener");
    objFun.innerText = "ini menggunakan Listener";
}

function tampil (){
    let objfun = document.querySelector("#rubah");
    objfun.innerText = "Lol"
}

function tampil2(){
    let objfunn = document.querySelector("#rubah2");
    objfunn.innerText = "Berubah";
    objfunn.style.color = "blue";
}

function Fungsievent (p){
    let a = document.querySelector("#rubah3").innerText = "Belajar JS " + p;
    console.log("Tes");
}
