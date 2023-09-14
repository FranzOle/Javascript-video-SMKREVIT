//Perulangan / Looping
//Perulangan digunakan ketika kita ingin mengulang suatu blok kode

//loop ada 3 yaitu while-do, for, dan do-while

//looping while-do
let i =1;
while(i <= 10){
    console.log(i);
    i++;
}

//do-while. do-while yang dieksekusi adalah blok kode yg kita buat sebelum loop
let start = 0;
let finish = 10;
do{
    console.log("*" + "\n");
    start++;
}while(start < finish);

//for. for digunakan jika kita sudah mendefinisikan batas loop yg kita buat.
for(let mulai = 1; mulai < 10; mulai++){
    console.log("Halo Javascript");
}

//contoh penggunaan
let segitiga = '';
    for (let a = 0; a < 5; a++) {
        for (let b = a; b < 5; b++) {
            segitiga += '* ';
        }
        segitiga += '<br>';
    }
document.getElementById('loop').innerHTML = segitiga;