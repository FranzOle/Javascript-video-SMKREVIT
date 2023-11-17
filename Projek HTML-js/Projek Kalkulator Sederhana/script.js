// projek kalkulator sederhana  
let btn = document.querySelectorAll(".angka > button");
let tampil = document.querySelector("#tampil");
let mat = document.querySelectorAll(".mat > button");
let pilihan = null;
let x;
let y;

for(let i = 0; i < btn.length; i++){
    btn[i].onclick = () =>{
       
        if(tampil.value == "0"){
            tampil.value = btn[i].innerHTML;
        }
        else{
            tampil.value += btn[i].innerHTML;
        }
    };
}

mat[0].onclick = () =>{
    tampil.value = "0";
};
mat[1].onclick = function() {
    pilihan = "tambah";
    x = tampil.value;
    tampil.value = "+";
}

mat[2].onclick = function() {
    pilihan = "kurang";
    x = tampil.value;
    tampil.value = "-";
}

mat[3].onclick = function() {
    pilihan = "kali";
    x = tampil.value;
    tampil.value = "x";
}

mat[4].onclick = function() {
    pilihan = "bagi";
    x = tampil.value;
    tampil.value = "/";
}

mat[5].onclick = function() {
    y = tampil.value;
    tampil.value = kalkulator(pilihan);
}
function kalkulator(pilihan) {
    if (pilihan != null) {
        switch(pilihan) {
            case "tambah":
                hasil = parseFloat(x) + parseFloat(y);
                break;
            case "kurang":
                hasil = parseFloat(x) - parseFloat(y);
                break;
            case "kali":
                hasil = parseFloat(x) * parseFloat(y);
                break;
            case "bagi":
                hasil = parseFloat(x) / parseFloat(y);
                break;
        }

        return hasil;
    }
}