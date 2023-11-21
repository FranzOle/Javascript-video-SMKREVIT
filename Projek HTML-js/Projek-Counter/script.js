let i = 0;
const tampilan = document.querySelector("#tampil");
naik.onclick = function(){
    i++;
    tampilan.innerHTML = i;
    tampilan.style.color = "#9fb4f2";
    if(i == 0){
        tampilan.style.color = "black";
    }
};

turun.onclick = function(){
    i--;
    if(i >= 0){
    tampilan.innerHTML = i;
    tampilan.style.color = "#d31b1b";
    if(i == 0){
        tampilan.style.color = "black";
    }}
}

