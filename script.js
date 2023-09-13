//Operator Logika

//inisialisasi
let a = true;
let b = false;
let c = true;
let d = false;

//operator OR '||' jika salah satu bernilai true maka hasilnya adalah true
console.log(a || b); //menghasilkan true karna salah satu bernilai true
console.log(a || c); //menghasilkan false

//operat VND '&&' jika semua operand true maka hasilnya true
console.log(a && c); //menghasilkan true
console.log(a && b); //menghasilkan false karna salah satu operand bernilai false

//Operator Pembanding 
let x = 1;
let y = 2;
console.log(x>y); //operator lebih besar tapi ini false
console.log(x<y); //operator lebih kecil
console.log(x<=y); //operator lebih kecil sama dengan
console.log(x>=y); //operator lebih besar sama dengan

 let i = "5";
 let j = 5;
 console.log(i == j); //operator sama dengan hasilnya true
 console.log(i === j); //false meskipun nilai sama tapi pengecekan ini juga sampai tipe data