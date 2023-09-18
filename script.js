// arrow function javascript
let fungsi = function(parameter){
    console.log("Halo " + parameter);
};
fungsi("Johnny");

//sintaks lebih pendek : 
let tambah = (angka1, angka2) => angka1 + angka2;
console.log(tambah(1, 2));

let fungsiNama = (nama) => {
    console.log("Hai Selamat datang " + nama);
 };
 nama1 = "Lionel";
 nama2 = "Nando";
 fungsiNama(nama1);
 fungsiNama(nama2);

 //Sintaks tanpa parameter 
 let HelloScript = () => console.log("Hello World :)");
HelloScript();

//Multiline
let PyScript = () =>{
    console.log("Halo ini adalah Java \n");
    console.log("Halo Ini adalah Python");
};
PyScript();

//arrow function untuk menghitung luas
let luasSegitiga = (alas, tinggi) =>{
    return 1/2 * alas * tinggi;
};
console.log(luasSegitiga(10, 5));

//percabangan dengan arrow function
let nilai = 80;
let percabangan = nilai >= 80 ? () => ("LULUS") : () => ("gagal");
console.log(percabangan());

let percabangan2 = (nilai == 80) ?
    () => (console.log("Nilai sama")) :
    () => (console.log("Nilai tidak sama"));

percabangan2();