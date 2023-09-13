//Tipe Data Javascript

let angka = 5; //Tipe data number
let angkaDesimal = 2.5; //Tipe data number float/double
let kalimat = " sedang belajar Javascript"; //tipe data String
let nama = "Johnny";
console.log(nama+kalimat);

console.log(angka);
console.log(typeof angka); //Menampilkan tipe dari variabel 'angka'

//Tipe data special number
let tipeDataInft = 1 / 0; //menghasilkan infinity
console.log(tipeDataInft);
let tipeDataNaN = "membagi dengan"/ 5; //'NaN merepresentasikan error dari operasi Matematika
console.log(tipeDataNaN);

//Tipe-tipe dalam string dan penggunaanya
let kata = "Selamat Datang "; //String biasa
let kataNama = 'Pace'; //String dengan tanda petik satu di bahasa pemrograman lain biasanya ini disebut tipe data char
let EmbedKata =`Halo ${kataNama} ${kata}`; //penggunaan tanda backstick dan dollar membuat metode ini lebih fleksibel
console.log(EmbedKata);

//Tipe data boolean
let benar = true; //menghasilkan kondisi true dan diperlukan dalam pengecekan if atau flow apapun
let salah = 4 > 5; //menghasilkan kondisi false karna 4 tidak lebih besar dari 5
console.log(benar);
console.log(salah);

//Tipe data Null
let tipeDataNull = null; // menghasilkan nilai kosong atau void 
console.log(tipeDataNull);

//variabel undefined
let variabelUndefined;
console.log(variabelUndefined); //tidak akan tampil atau undefined karna belum diisi
