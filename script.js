//Objek. objek adalah suatu penamaan untuk membuat variabel lebih fleksibel
//Objek di javascript memiliki kemiripan konsep dengan oop 
//Objek di js mirip seperti class dengan kita dapat menentukan atribut dan fungsi kita sendiri
let objek = {
    nama : "revit",
    umur : 1,
    nilai : ["TM","MT"],
    status : true,
    fungsi : function(){
        return "SMK Revit bisa";
    }
};
//menampilkan objek secara keseluruhan
console.log(objek);
//mengakses atribut objek
console.log(objek.nama);
console.log(objek.umur);
//mengakses fungsi dan array dari objek
console.log(objek.nilai[0]);
console.log(objek.fungsi());

//Praktik objek sama seperti kita mempraktikan di oop 
let manusia = {
    nama: "Lionel",
    umur: 16,
    kondisi: function () {
        return "Sedih";
    },
    hidup: true,
    makanan: ["Bakso", "Mie ayam"],
    "nomor-telepon": "08123456789",
    "alamat rumah": "damarsi",
};

console.log("Makanan hari ini adalah " + manusia.makanan[1]);
console.log("Nomor Telepon: " + manusia["nomor-telepon"]);
console.log("Rumahku ada di " + manusia["alamat rumah"]);

// menggunakan method getter
let identitas = manusia.nama;
let hati = manusia.kondisi();
console.log(identitas);
console.log(hati);
