//Percabangan 
//percabangan if adalah dimana suatu kondisi bernilai true suatu blok kode akan dikerjakan

if(true){
    console.log("Kode ini dijalankan karna nilai benar"); //kode ini dijalankan saat kondisinya true
}
else{
    console.log("Kode ini tidak akan dijalankan");
}

//contoh kode penggunaan if else
let nilai;
const kkm = 85; //variabel batas nilai
nilai = 95; //nilai diinisiasi
if(nilai =>0 && nilai <=100){
    if (nilai >=kkm) {
        console.log("anda lulus");
    }
    else{
        console.log("tidak lulus");
    }
}
else{
    console.log("nilai anda tidak valid");
}

//contoh menggunakan percabangan if dengan menghitung bilangan genap
let bil = 18;
if(bil % 2 == 0){
    console.log("Bilangan genap");
} else{
    console.log("Bilangan ganjil");
}

