// Video 28 Fetch Data

document.querySelector('#klik').addEventListener('click', tampil);

document.querySelector("#klik").addEventListener("click", tampil);

    function tampil() {
      let url = "latihan.json";

      fetch(url)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          let keluar = "<h1>Data Menu</h1><table border='1px' cellpadding='10px'><th>Menu</th><th>Harga</th><th>Macam</th>";

          data.forEach(element => {
            keluar += `<tr>
              <td>${element.menu}</td>
              <td>${element.harga}</td>
              <td>${element.macam[0]}</td>
            </tr>`;
          });

          keluar += "</table>";
          document.querySelector("#isi").innerHTML += keluar;
        })
    }

// let tblmenu = [
//     {
//         "idmenu" : 1,
//         "idkategori" : 1,
//         "menu" : "Honda",
//         "harga" : 1000000,
//         "macam" : ["Brio","Br-V"],
//         "stok" : true,
//         "keterangan" : null
//     },
//     {
//         "idmenu" : 2,
//         "idkategori" : 1,
//         "menu" : "Toyota",
//         "harga" : 2000000,
//         "macam" : ["Avanza","Fortuner"],
//         "stok" : false,
//         "keterangan" : null
//     }
// ];

// console.log(tblmenu);