var kataRahasia;

var jumlahTebakan = 0;

var tebakan;

function mulaiPermainan() {

  var kataAcak = ["apel", "jeruk", "mangga", "pisang", "durian"];

  kataRahasia = kataAcak[Math.floor(Math.random() * kataAcak.length)];

  jumlahTebakan = 0;

  tebakan = "";

  

  alert("Halo! Mari bermain Tebak Kata Acak!");

  alert("Saya telah memilih sebuah kata dari daftar kata buah. Coba tebak kata tersebut!");

  while (tebakan !== kataRahasia) {

    tebakan = prompt("Masukkan tebakan Anda:").toLowerCase();

    jumlahTebakan++;

    if (tebakan !== kataRahasia) {

      alert("Tebakan Anda salah! Coba lagi!");

    }

  }

  alert("Selamat! Anda menebak kata dengan benar dalam " + jumlahTebakan + " tebakan!");

}

mulaiPermainan();

