let i = 0;
const tampilan = document.querySelector("#tampil");
naik.onclick = function(){
    i++;
    tampilan.innerHTML = i;
    tampilan.style.color = "blue";
    if(i == 0){
        tampilan.style.color = "black";
    }
};

turun.onclick = function(){
    i--;
    if(i >= 0){
    tampilan.innerHTML = i;
    tampilan.style.color = "red";
    if(i == 0){
        tampilan.style.color = "black";
    }}
}

