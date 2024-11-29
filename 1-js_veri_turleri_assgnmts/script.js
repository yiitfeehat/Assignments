//! ASSIGNMENTS

//! 1- Sayı işlemleri

//*Bir dairenin yarıçapını kullanıcıdan alarak dairenin alanını ve çevresini hesaplayan bir program yazın. (Dairenin alanı: πr², çevresi: 2πr)

// let r=prompt("Yarıçapı giriniz.")

// console.log("Dairenin alanı:"+ Math.trunc(Math.PI*Math.pow(r,2)));

// console.log("Dairenin çevresi:"+ Math.trunc(2*Math.PI*r));

//! 2- Decimal Yuvarlama

//* Kullanıcıdan bir ondalıklı sayı alın. Bu sayıyı önce yukarı, sonra aşağı yuvarlayarak sonucu gösterin.

// let ondalikliSayi = prompt("Ondalıklı bir sayı gir.");

// console.log("Sayının bir yukarı yuvarlanmış hali:" + Math.ceil(ondalikliSayi));

// console.log("Sayının bir aşağı yuvarlanmış hali:" + Math.floor(ondalikliSayi));

//! 3- Rastgele sayı üretme

//* 1 ile 100 arasında rastgele bir sayı üreten bir program yazın ve bu sayıyı ekrana yazdırın.

// let safRandom=Math.random() * 100

// console.log("Rastgele sayı:" + safRandom);

//! 4- Max ve Min bulma

//*Kullanıcıdan 5 sayı alarak bu sayılar arasındaki en büyük ve en küçük sayıyı bulan bir program yazın.

// let sayigirisi1=prompt("Sayı 1")
// let sayigirisi2=prompt("Sayı 2")
// let sayigirisi3=prompt("Sayı 3")
// let sayigirisi4=prompt("Sayı 4")
// let sayigirisi5=prompt("Sayı 5")

// console.log(Math.max(sayigirisi1, sayigirisi2,sayigirisi3, sayigirisi4, sayigirisi5));

// console.log(Math.min(sayigirisi1, sayigirisi2,sayigirisi3, sayigirisi4, sayigirisi5));

//! 5- Sayı Dönüştürme

//*Kullanıcıdan bir metin olarak tam sayı alın ve bunu bir tam sayıya çevirip ekrana yazdırın.

// let sayigirisi6=Number(prompt("Tam sayı giriniz."))

// console.log(sayigirisi6);
// console.log(typeof sayigirisi6);

//! 6- Üs Hesaplama

//*Kullanıcıdan iki sayı alarak birinci sayının ikinci sayıya üssünü alan bir program yazın.

// let usluSayi1=+prompt("Sayıyı giriniz.")
// let usluSayi2=+prompt("Üssünü giriniz.")

// console.log("Sonuç ="+ " " + Math.pow(usluSayi1,usluSayi2));

//! 7- Karekök Hesaplama

//*Bir sayının karekökünü bulan bir program yazın. Sayıyı kullanıcıdan alın.

// let sayigirisi7 = +prompt("Sayıyı giriniz.");
// console.log("Bu sayının karekökü bu = " + Math.pow(sayigirisi7, 1 / 2));

//! 8- String Birleştirme

//* Kullanıcıdan iki cümle alarak bu cümleleri birleştiren ve ekrana yazdıran bir program yazın.

// let cumle1=prompt("Birinci cümleyi gir.")
// let cumle2=prompt("İkinci cümleyi gir.")
// console.log(cumle1+ " " + cumle2);

//! 9- String Uzunluğu

//* Kullanıcıdan bir kelime alarak bu kelimenin uzunluğunu bulan bir program yazın.

// let kelime1=prompt("Bir adet kelime giriniz.")
// console.log(kelime1.length);

//! 10- String Karakteri Değiştirme

//* Kullanıcıdan bir kelime alın ve kelimenin 3. karakterini 'Z' ile değiştirin, ardından sonucu ekrana yazdırın.

// 1. YÖNTEM
// let kelime2=Array.from(prompt("Bir kelime giriniz."));

// kelime2[2] = "Z";

// console.log(kelime2.join(""));

// 2. YÖNTEM
// let kelime3=prompt("Bir kelime giriniz.")

// yeniKelime= kelime3.replace(kelime3[2], "Z")

// console.log(yeniKelime);

//! 11- Boolean Karşılaştırılması

//* Kullanıcıdan iki sayı alın ve bu sayıların eşit olup olmadığını kontrol eden bir program yazın.

// let sayigirisi8=Number(prompt("Birinci sayı."))
// let sayigirisi9=Number(prompt("İkinci sayı."))

// if (sayigirisi8===sayigirisi9){
//     console.log("Girilen sayılar eşittir.");
// } else {
//     console.log("Girilen sayılar eşit değildir.");

//! 12- Sayı mı, String mi?

//* Kullanıcıdan bir giriş alarak bu değerin bir sayı mı yoksa string mi olduğunu kontrol eden bir program yazın.

// let sayigirisi10=prompt("Sayı veya kelime girin.")

// if (isNaN(sayigirisi10)) {
//     console.log("Girdiğiniz değer stringdir.");
// } else {
//     console.log("Girdiğiniz değer sayıdır.");
// }

//! 13- Doğum Yılı Hesaplama

//* Kullanıcının doğduğu yılı alarak kaç yaşında olduğunu hesaplayan bir program yazın.

// let dogumTarihi=+prompt("Doğum tarihiniz.")

// const now = new Date();

// console.log("Yaşınız = " + (now.getFullYear()-dogumTarihi));

//! 14- Null ve Undefined Farkı

//* Bir değişkeni önce null , sonra undefined  olarak tanımlayın ve her iki durumda da değişkenin türünü ekrana yazdırın.

// let degisken1=null //? object olarak çıkar tipi.
// let degisken2=undefined
// console.log(typeof degisken1);
// console.log(typeof degisken2);

//! 15- Matematiksel İşlem

//* Kullanıcıdan bir sayı alarak bu sayının karesini ve küpünü hesaplayan bir program yazın.

// let sayigirisi11=prompt("Karesi ve küpü alınacak sayıyı giriniz.")
// console.log("Karesi = " + Math.pow(sayigirisi11, 2));
// console.log("Küpü = " + Math.pow(sayigirisi11, 3));
// console.log("Karesi = "+ sayigirisi11**2 );
// console.log("Küpü = "+ sayigirisi11**3 );

//! 16- String Karakterleri Tek Tek Yazdırma

//* Kullanıcıdan bir kelime alın ve bu kelimenin her karakterini ayrı satırlarda ekrana yazdıran bir program yazın.

// let kelime4=prompt("Bir kelime giriniz.")

// for (let i = 0; i < kelime4.length; i++) {
//     console.log(kelime4[i]);
// }

//! 17- Tarih Formatlama

//* Bugünün tarihini alarak "Gün/Ay/Yıl Saat:Dakika" formatında ekrana yazdıran bir program yazın.

// let bugun = new Date();

// let gun = bugun.getDate();
// let ay = bugun.getMonth() + 1;  // Aylar 0'dan başlar, bu yüzden 1 ekliyoruz
// let yil = bugun.getFullYear();
// let saat = bugun.getHours();
// let dakika = bugun.getMinutes();

//? "Gün/Ay/Yıl Saat:Dakika" formatında yazdırıyoruz
// let tarihSaat = gun + "/" + ay + "/" + yil + " " + saat + ":" + dakika;

// console.log(tarihSaat);

//! 18- Tarih Formatlama

//* Kullanıcıdan bir ondalıklı sayı alarak bu sayının tam kısmını ekrana yazdırın.

// let ondalikliSayi1=+prompt("Ondalıklı sayı giriniz.")
// console.log("Tam kısmı = " + Math.trunc(ondalikliSayi1));

//! 19- Ortalama Hesaplama

//* Kullanıcıdan üç farklı sayı alarak bu sayıların ortalamasını hesaplayıp ekrana yazdıran bir program yazın.

// let sayigirisi12=+prompt("Sayı giriniz.")
// let sayigirisi13=+prompt("Sayı giriniz.")
// let sayigirisi14=+prompt("Sayı giriniz.")

// console.log((sayigirisi12+sayigirisi13+sayigirisi14)/3);

//! 20- Dizi Elemanlarına Erişim

//* Bir dizi tanımlayın ve bu dizinin ilk ve son elemanını ekrana yazdırın. Diziyi kullanıcıdan da alabilirsiniz.Bu uygulamalarla hem veri tipleri hem de temel matematiksel ve string işlemlerini pratiğe dökebilirsiniz.

// let dizi= [];

// dizi.push(prompt("Eleman giriniz."))
// dizi.push(prompt("Eleman giriniz."))
// dizi.push(prompt("Eleman giriniz."))
// dizi.push(prompt("Eleman giriniz."))

// console.log("İlk eleman: " + dizi[0] + "\nSon Eleman: " + dizi[dizi.length - 1] );
