//Percabangan 
//Switch Case adalah  struktur kontrol dalam pemrograman yang digunakan untuk memilih dan menjalankan blok kode tertentu berdasarkan nilai ekspresi atau variabel.
//Switch case memainkan logika OR
let hari;
let namaHari = "";
hari = 5; //akan dijalankan jumat
switch (hari) {
    case 1: //case adalah bagian untuk mendefinisikan suatu nilai atau kondisi
        namaHari = "Senin";
        break; //break digunakan untuk menghentikan suatu blok kode di suatu case
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    case 7:
        namaHari = "Minggu";
        break;
    default: //default digunakan untuk kode default jika suatu nilai tidak memenuhi semua kondisi diatas
        namaHari = "Tidak Valid";
        break;
}

