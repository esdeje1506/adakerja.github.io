console.log('soal #1');
function cetakFunction(nama){
	return 'Hallo Nama saya '+nama;
}

console.log(cetakFunction('Syahrul DJ'));

console.log('--------------\nsoal #2');
function myFunction(a1,a2){
	return parseInt(a1) + parseInt(a2);
}

let angka1 = 20;
let angka2 = 7;

let output = myFunction(angka1, angka2)

console.log(output);

console.log('--------------\nsoal #3');
const Hello = ()=> 'Hello'

console.log('--------------\nsoal #4');
let obj = {
	nama : "john",
	umur : 22,
	bahasa : "indonesia"
}

console.log(obj.bahasa);
console.log('--------------\nsoal #5');
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
	nama : arrayDaftarPeserta[0],
	kelamin : arrayDaftarPeserta[1],
	hobi : arrayDaftarPeserta[2],
	tahun_lahir : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)

console.log('--------------\nsoal #6');
let buah = [{
nama: "Nanas",
warna: "Kuning",
adaBijinya: false,
harga:9000 
},
{
nama: "Jeruk",
warna: "Oranye",
adaBijinya: true,
harga: 8000
},
{
nama: "Semangka",
warna: "Hijau & Merah",
adaBijinya: true,
harga: 10000
},
{
nama: "Pisang",
warna: "Kuning",
adaBijinya: false,
harga: 5000
}];
const  buahTidakBerbiji = (buahObj) => !buahObj.adaBijinya
//console.log(buah.filter((biji)=> !biji.adaBijinya));
console.log(buah.filter(buahTidakBerbiji));

console.log('--------------\nsoal #7');
let phone = {
   name: "Galaxy Fold 5",
   brand: "Samsung",
   year: 2023
}

const {name, brand, year} = phone

console.log(name, brand, year)

console.log('--------------\nsoal #8');
let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172
}

let objOutput = {}

objOutput = {...dataBukuTambahan,...buku};

console.log(objOutput) 

console.log('--------------\nsoal #9');
let mobil = {
merk : "bmw",
color: "red",
year : 2002
} 

const functionObject = (param) => {
return param
}

console.log(functionObject(mobil))