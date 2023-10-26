//video 17 document.queryselectorall
//selectorall digunakan untuk menganbil semua tag atau selector yg terpanggil

let btn = document.querySelectorAll(".containerangka > button");
let btn2 = document.querySelectorAll(".containermat > button");
console.log(btn2);
console.log(btn);

//Variabel btn dan btn2 akan menjadi array(Nodelist) karna btn mengambbil semua atribut btutton
//cara lain menampilkan nodelist
for(let i=0; i<btn.length; i++){
    console.log(btn[i]);
}

//menampilkan angka inputan
let tampil = document.querySelector("#tampil");
console.log(btn[7].innerHTML);

for(let index = 0; index < btn.length; index++){
    btn[index].onclick = function(){
        tampil.value = btn[index].innerHTML;
    };
}