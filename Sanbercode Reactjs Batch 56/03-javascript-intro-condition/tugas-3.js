console.log('soal #1')
let namaLengkap = 'Syahrul Dwi Juniyanto';
console.log(namaLengkap)
console.log('-----------------\nsoal #2')
let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 

let outputGabunganVariable = word +' '+second +' '+third;
console.log(outputGabunganVariable)

console.log('-----------------\nsoal #3')
let hello = 'Hello '; 
let world = 'World!!'; 

let output = `${hello}${world}`
console.log(output)

console.log('-----------------\nsoal #4')
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let kelilingPersegiPanjang = 2 * ( parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang) );

console.log(kelilingPersegiPanjang)

console.log('-----------------\nsoal #5')
let sentences= 'wah javascript itu keren sekali'; 

let firstWords = sentences.substring(0, 3); 
let secondWords = sentences.substring(4, 14);; // do your own! 
let thirdWords = sentences.substring(15, 18); // do your own! 
let fourthWords = sentences.substring(19, 24); // do your own! 
let fifthWords = sentences.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);

console.log('-----------------\nsoal #6')
var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15]; 
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24];
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);
console.log('-----------------\nsoal #7')
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil)

console.log('-----------------\nsoal #8')
var nilaiDoe = 50;
var indeks_Nilai = '';
if(nilaiDoe >= 80) indeks_Nilai = 'A';
else if (nilaiDoe >= 70 && nilaiDoe < 80) indeks_Nilai = 'B';
else if (nilaiDoe >= 60 && nilaiDoe < 70) indeks_Nilai = 'c';
else if (nilaiDoe >= 50 && nilaiDoe < 60) indeks_Nilai = 'D';
else indeks_Nilai = 'E';

console.log(indeks_Nilai);

console.log('-----------------\nsoal #9')
let angka = 2

console.log(angka === 2 ? "angka nya 2" : "bukan angka 2");

console.log('-----------------\nsoal #10')
let traffic_lights = 'red';
let traffic_cond = '';
switch (traffic_lights) {
  case 'red':
    traffic_cond = 'berhenti';
    break;
  case 'yellow':
    traffic_cond = 'hati-hati';
    break;
  case 'green':
    traffic_cond = 'berjalan';
}
console.log(traffic_cond);