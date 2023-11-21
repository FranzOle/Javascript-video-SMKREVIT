//Video 19 array methods
let p = document.querySelectorAll("p");
let nilai =[
    {nama:"reno", ipa:90, ips:80, rpl:90},
    {nama:"bondi", ipa:30, ips:70, rpl:60},
    {nama:"budi", ipa:92, ips:84, rpl:95},
    {nama:"doni", ipa:95, ips:80, rpl:100},
]

let nama = ["reno","bondi","budi", "doni" ];

console.log(nilai);
console.log(nama);
console.log(nilai[0].nama);
nama.push("rudi");
nama.push("leni") //berfungsi menambahkan data setelah data terakhir
// delete nama[0]; //berfungsi untuk menghapus data array sesuai index
// nama.splice(1,1);
nama.unshift("tejo", "boni"); //menambahkan elemen diawal
p[0].innerHTML = nama;
// p.innerHTML = nilai[0].nama;
// p.innerHTML += " " + nilai[0].ipa;
// p.innerHTML = nama.pop(); //mengambil data terakhir array
// nama.splice(0, 1);
nama.splice(1,3); //menghapus pilihan array sesuai index dan berapa elemen
p[1].innerHTML = " " + nama;

let abjad = ["a", "b", "c", "d", "e", "f","g"];
p[2].innerHTML = abjad.slice(0,3); //slice abjad digunakan itu mengkeep elemen sesuai index