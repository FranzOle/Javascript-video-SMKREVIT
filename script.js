//Operator Matematika

//operator unary
let x = 12;
x = -x; //menghasilkan angka -12
console.log(x);

//operator binary
let y = 2;
let z = 1;
console.log(y-z); //Operator binary Membutuhkan 2 atau lebih operand

//Operator aritmatika
console.log(2+2); //Pertambahan
console.log(3-2); //Pengurangan
console.log(3*2); //Perkalian
console.log(4/2); //Pembagian
console.log(5%2); //Modulo. Modulo adalah hasil sisa dari pembagian integer
console.log(2**3); //Eksponen atau kuadrat disitu 2 dikuadratkan 3

//Mencoba rumus
let p = 2,
l = 3,
t = 7,volB; //variabel untuk menghitung volume balok
volB = p * l * t;
console.log(volB);

let a = 2,
 tS = 6,
 luasSegitiga;
luasSegitiga = (1/2) * a * tS;
console.log(luasSegitiga); //Luas Segitiga

//Operator string 
let pace = "OPM";
let indo = "Indonesia";
console.log(pace + " Love " + indo);

//angka string dsb
console.log('1' + 2); //akan menghasilkan 12 bukan 3 karna 1 adalah string
console.log(3 + 3 + '2'); //akan menghasilkan 62;
console.log('1' + 2 + 3); //akan menghasilkan 123 karna operand pertama adalah string
console.log(5 - "2"); //akan menghasilkan 3 karna 2 akan dikonversi otomatis
console.log(10 / "2"); //sama operand 2 akan dikonversi sehingga hasil = 5

//operator precendance 
console.log(2 + 2 * 3); //8 karna pekalian diutamakam
console.log((2 + 2) * 3); //12 karna tanda kurung lebih diutamakan

//assigment
let var1 =5;
let var2 = 7;
var2 = var1; //menghasilkan 5
var1 = var2; //tetap 5 karna b sudah di asign

//increment dan decrement
let inc = 1;
console.log(inc++); //HVsil =2
let inc2 = 1;
inc2 = inc2 +1; //Logikanya

let dec = 2;
console.log(dec--); //Hasil = 1

