//! Ternary assignment

//* 1 - Sayıyı Sınıflandırma: Bir sayının pozitif, negatif veya sıfır olup olmadığını belirleyin ve "Pozitif", "Negatif" veya "Sıfır" olarak döndürün.

let sayi1 = +prompt("Bir sayı giriniz.")
let cevap1 = (sayi1 > 0) ? "Pozitif bir sayı girdiniz." : (sayi1 === 0) ?
    "Girdiğiniz sayı sıfırdır." : "Negatif bir sayı girdiniz."
console.log(cevap1);

//* 2 - Kredi Başvuru Durumu: Bir kişinin kredi puanı 700 veya daha yüksekse "Kredi onaylandı", 500 ile 699 arasındaysa "Ek belgeler gerekli", 500'ün altındaysa "Kredi reddedildi" döndürün.

const krediPuani=700;
let basvuruDurumu= (krediPuani<500) ? "Kredi talebi reddedildi." : (krediPuani>=700) ? "Kredi talebiniz onaylanmıştır." : "Ek belgeler gereklidir."
console.log(basvuruDurumu);

//* 3 - Sıcaklık Durumu: Bir sıcaklık değerine göre "Donma noktası altında", "Oda sıcaklığında" veya "Kaynama noktasında" olup olmadığını belirleyin.

const sicaklikDegeri = 333;
let durum1 = sicaklikDegeri < 0 ? "Donma noktası altında" : sicaklikDegeri > 60 ? "Kaynama noktasında" : "Oda sıcaklığında"
console.log(durum1);

//* 4 - Öğrenci Başarı Durumu: Bir öğrencinin notuna göre "Harika", "İyi", "Orta","Kötü" gibi başarı düzeylerini belirleyin 90-100 Harika, 80-89 Orta, 0-69 Kötü).

const ogrenciNotu = 79;
let basariDurumu;

if (ogrenciNotu >= 90) {
    basariDurumu = "Harika"
} else if (ogrenciNotu >= 80) {
    basariDurumu = "İyi"
} else {
    basariDurumu = "Kötü"
}

console.log(basariDurumu);

//* 5 - Yaş Grubu: Bir kişinin yaşına göre "Çocuk", "Genç", "Yetişkin", "Yaşlı" olarak kategorize edin 0-12 Çocuk, 13-24 Genç, 25-64 Yetişkin, 65 ve üstü: Yaşlı).

const yas= -1;
let yasGrubu = (yas>=65) ? "Yaşlı" : (yas>=25) ? "Yetişkin" : (yas>=13) ? "Genç" : "Çocuk"
console.log(yasGrubu);

//* 6 - Bir Ürünün İndirim Durumu: Bir ürün fiyatı 100 TL veya üzerindeyse %20 indirim, 50-99 TL arasında ise %10 indirim, altındaysa indirim yok olarak yeni fiyatı hesaplayın

let urunFiyati = 49;
let yeniFiyati =
    urunFiyati >= 100
        ? urunFiyati * 0.8
        : urunFiyati >= 50
            ? urunFiyati * 0.9
            : urunFiyati + " " + "İndirim yok.";
console.log(yeniFiyati);

//* 7 - Bir Kullanıcının Üyelik Durumu: Bir kullanıcı üye ise "Üye girişi yapıldı", değilse "Misafir girişi" mesajı verin. Ek olarak, kullanıcı üye ise aktif veya pasif durumunu kontrol edin.

const isMember = true;
isMember == true
    ? console.log("Üye girişi yapıldı.")
    : console.log("Misafir kullanıcı");

//* 8 - İki Değer Karşılaştırması: İki sayıyı karşılaştırarak "İkisi de eşit", "Birinci daha büyük", "İkinci daha büyük" olarak sonuç döndürün

const sayi2 = 55;
const sayi3 = 22;
let kiyaslama =
    sayi2 === sayi3
        ? "Sayılar birbirine eşit"
        : sayi2 > sayi3
            ? "Birinci sayi daha büyük."
            : "İkinci sayi daha büyük.";
console.log(kiyaslama);

//* 9 - Ders Seçimi: Bir öğrencinin ders seçimine göre "Temel", "Orta", "İleri" seviyesinde olduğunu belirleyin Başlangıç: 13, Orta: 46, İleri: 710.

const dersSecimi = 4;
let seviye= dersSecimi >= 1 && dersSecimi <= 3 ? "temel" : dersSecimi >= 4 && dersSecimi <= 6 ? "orta" : "ileri"
console.log(seviye);

//* 10 - Bölüm Seçimi: Bir öğrencinin notuna göre hangi bölümde okuyabileceğini belirleyin: "Mühendislik" 80 ve üstü), "İktisat" 6079, "Sosyal Bilimler" 059.

const puani = 27;
let bolum;
bolum =
    puani >= 80
        ? "Muhendislik, iktisat, sosyal bilimlerde okuyabilirsin."
        : puani >= 60
            ? "İktisat ve sosyal bilimlerde okuyabilirsin."
            : "Sosyal bilimlerde okuyabilirsin.";
console.log(bolum);