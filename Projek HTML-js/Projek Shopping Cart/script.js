let tblmenu = [
    {
        idmenu: 1, 
        idkategori: 1, 
        menu: "Ayam Bakar", 
        gambar: "img/nasiayam.jpg", 
        harga: "20.000"
    },
    {
        idmenu: 2, 
        idkategori: 1, 
        menu: "Nasi Padang", 
        gambar: "img/nasipadang.png", 
        harga: "10.000"
    }, 
    {
        idmenu: 3, 
        idkategori: 1, 
        menu: "Pisang Raja", 
        gambar: "img/pisangraja.png", 
        harga: "14.000"
    },
    {
        idmenu: 4, 
        idkategori: 2, 
        menu: "Jus Jeruk", 
        gambar: "img/esjeruk.jpg", 
        harga: "8.000"
    },
    {
        idmenu: 5, 
        idkategori: 2, 
        menu: "Es Teh", 
        gambar: "img/esteh.png", 
        harga: "4.000"
    },
    {
        idmenu: 6, 
        idkategori: 2, 
        menu: "Apel", 
        gambar: "img/apelmanalagi.jpg", 
        harga: "5.000"
    }
    
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="content">
             <div class="image">
                 <img src="${kolom.gambar}">
             </div>
             <div class="judul">
                 <h1>${kolom.menu}</h1>
             </div>
             <div class="deskripsi">
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </div>
             <div class="harga">
                 <h2>Rp. ${kolom.harga}</h2>
             </div>
             <div class="btn-beli">
                <button data-idmenu="${kolom.idmenu}">Beli</button>
            </div>
         </div>`;
    
});


let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick =function () {
        // console.log(btnbeli[index].dataset["idmenu"])
        // cart.push(btnbeli[index].dataset["idmenu"]);
        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            };
        });
    };
};

