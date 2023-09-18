// fungsi / function
//sintaks fungsi javascript
function Fungsi(){
    return "Halo Javasript";
}
console.log(Fungsi());

//Fungsi dengan parameter
function Perkalian(a, b){
    return a*b;
}
console.log(Perkalian(2,3)); 

//Fungsi tanpa nilai kembalian atau return value
function Output(nama){
    console.log("Halo " + nama);
}
Output("Lionel");

//fungsi menghitung luas
function LuasLingkaran(jari_jari){
    let phi;
    if(jari_jari%7 == 0){
        phi = 22/7;
    } else{
        phi = 3.14;
    }
    return phi*jari_jari*jari_jari
} 
console.log(LuasLingkaran(7));
const tTabung = 10;
let volumeTabung = LuasLingkaran(7) * tTabung;
console.log("Volume Tabung = " + volumeTabung);
function VolumeBalok(panjang,lebar,tinggi){
    const luas = panjang * lebar * tinggi;
    return luas;
}
let p = 12, l = 10, t = 20;
console.log("Volume balok adalah : " + VolumeBalok(p,l,t));
