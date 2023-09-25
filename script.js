//array
//array adalah sebuah varabel yang berisi banyak value
let siswa = ["Moreno","Lionel","Tegar"];
//menampilkan indeks array
console.log(siswa[0]);
console.log(siswa[1]);
console.log(siswa[2]);
//Panjang array mennggunakan length
console.log(siswa.length);
//menampilkan array
console.log(siswa);
//menampilkan array dengan loop
for(let i = 0; i < 3; i++){ //inisiasi dengan 0 karna indeks dimulai dari 0
    console.log(siswa[i]);
}
//bisa juga seperti ini 
for(let i in siswa){
    console.log(i);
    console.log(siswa[i]);
}
//array dengan banyak tipe data
fungsi = () => "Fungsi arrow";
function Lionel(){
    return "Halo Lionel";
}
let arr = ["String",fungsi(),234,'Lol',12.5,Lionel()];
console.log(arr);
console.log(arr[1]);

//Contoh operasi array
let v1 = [1,2,3];
let v2 = [4,5,6];
for(let i =0; i<v2.length; i++){
    console.log(v1[i]+v2[i]);
}