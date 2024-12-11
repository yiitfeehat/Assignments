//! ---------LOOP SORULAR----------
//* 1- Kullanıcının girdiği bir sayının asal olup olmadığını kontrol eden bir program yazın.


let sayi = 4441
let asalMi = true;

if (sayi <= 1) {
    asalMi = false;
} else {
    for (let i = 2; i <= Math.sqrt(sayi); i++) {
        if (sayi % i === 0) {
            asalMi = false;
            break;
        }
    }
}

if (asalMi) {
    console.log(sayi + " Asal bir sayıdır");
} else {
    console.log(sayi + " Asal değildir.");
}


//* 2- Bir dizideki en büyük ve en küçük sayıları bulan bir fonksiyon yazın (dizi yok, sadece sayılar).


const dizi1 = [3, 5, 7, 2, 8, 1];

function enKucukBuyuk(...dizi) {
    let enKucuk = dizi[0];
    let enBuyuk = dizi[0];
    for (let i = 1; i < dizi.length; i++) {
        if (dizi[i] > enBuyuk) {
            enBuyuk = dizi[i];
        } if (dizi[i] < enKucuk) {
            enKucuk = dizi[i]
        }
    }
    return { enBuyuk, enKucuk };
}

let result = enKucukBuyuk(1, 2, 3, 4)
console.log(result);


//* 3- Kullanıcının girdiği bir kelimenin palindrom olup olmadığını kontrol eden bir fonksiyon yazın.


let kelime = prompt("Bir kelime giriniz.")
let tersKelime = kelime.split("").reverse().join("")

    kelime.toLowerCase() === tersKelime.toLowerCase() ? console.log("Bu kelime bir polindromdur.") : console.log("Bu kelime polindrom değildir.");


//* 4- 1 ile 50 arasında rastgele bir sayı tahmin etme oyunu yazın ve kullanıcı doğru tahmin edene kadar devam etsin.


const randomSayi = Math.floor(Math.random() * 50) + 1
console.log(randomSayi);

let tahmin;
while (true) {
    tahmin = +prompt("1-50 arasında bir sayı giriniz.")
    if (tahmin > randomSayi) { console.log("Daha küçük bir sayı girin."); }
    else if (tahmin < randomSayi) { console.log("Daha büyük bir sayı girin"); } else {
        console.log(`Tebrikler doğru tahmin ettiniz, sayı ${randomSayi}'idi.`);
        break;
    }
}


//* 5- Kullanıcıdan alınan sayının faktöriyelini hesaplayan bir onksiyon yazın


function faktoriyelHesapla(sayigirisi) {
    sonuc = 1;

    if (sayigirisi < 0) {
        console.log("Negatif sayıların faktoriyeli hesaplanamaz.");
    }
    for (let i = 1; i <= sayigirisi; i++) {
        sonuc *= i
    }
    return sonuc;
}


let sayi5 = +prompt("Faktöriyeli hesaplanacak sayı giriniz.")
console.log(faktoriyelHesapla(sayi5));


//* 1- 1'den N'e kadar olan sayıların toplamını ve ortalamasını hesaplayan bir program yazın.

function toplamVeOrt(n){
    let toplam=0;
    let ortalama;
    for (let i=0; i<=n; i++){
        toplam += i;
    }
    ortalama = toplam/(n)
    return {toplam,ortalama}
}
console.log(toplamVeOrt(3));


//* 2- Bir dizideki tüm elemanların toplamını ve ortalamasını hesaplayan bir fonksiyon yazın (dizi yok, sadece sayılar).


function arrayGir(){
    let toplam1 = 0;
    let ortalama1 =0;
    for (let i=0; i <= arguments.length-1; i++){
        toplam1 += arguments[i]
    }
    ortalama1 = toplam1 / arguments.length
    return {ortalama1,toplam1}
}

console.log(arrayGir(2));


//* 3- Kullanıcının girdiği bir metindeki sesli harflerin sayısını hesaplayan bir program yazın.


function sesliHarfHesapla(metin) {
    const sesliHarfler = ['a', 'e', 'i', 'o', 'ö', 'u', 'ü'];
    sayac = 0;
    metin = metin.toLowerCase();

    for (let i = 0; i < metin.length; i++) {
        if (sesliHarfler.includes(metin[i])){
            sayac++;
        }
    }
    return sayac;

}

console.log(sesliHarfHesapla("Merhaba dostum, ben fe."));


//* 4- Fibonacci dizisini belirli bir sayıya kadar yazdıran bir program yazın.


function fibonacci(n) {
    let fibo = [0, 1];

    for (let i = 2; fibo[i - 1] + fibo[i - 2] <= n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2])
    }
    return fibo
}
console.log(fibonacci(44));


//* 5- Kullanıcının girdiği bir kelimenin içindeki sesli harfleri bulup, her birinin sayısını gösteren bir program yazın.

function sesliHarfSayisiKelime(metin) {
    const sesliHarfler = ['a', 'e', 'i', 'o', 'ö', 'u', 'ü'];
    let sesliHarflereGoreSayac = {};

    metin = metin.toLowerCase();

    for (let i = 0; i < metin.length; i++) {
        let karakter = metin[i];

        if (sesliHarfler.includes(karakter)) {
            //Eğer harf daha önce eklenmediyse, yeni bir sayaç başlatıyoruz.
            if (!sesliHarflereGoreSayac[karakter]) {
                sesliHarflereGoreSayac[karakter] = 1;
            } else { 
                sesliHarflereGoreSayac[karakter]++; //zaten varsa sayıyı arttırıyoruz.
            }
        }
    }

    return sesliHarflereGoreSayac;
}

console.log(sesliHarfSayisiKelime("Gec olsun ama guc olmasin."));