//! && ve || operatoru pekiştirme soruları

//* 1. Kullanıcı Adı Belirleme

//? Kullanıcının profilinde bir kullanıcı adı girilmemişse, "Misafir" adını kullanın.

// let kullaniciAdi=prompt("Kullanıcı adı giriniz.")
// console.log(`Kullanıcı: ${kullaniciAdi || "Misafir"}`);

//* 2. Ürün Fiyatı Gösterme

//? Bir ürünün üç farklı fiyatı olabilir: `indirimliFiyat`, `kampanyaFiyati`, veya `normalFiyat`. Eğer tüm bu fiyatlar yoksa "Fiyat yok" döndürün.

// let indirimliFiyat;
// let kampanyaFiyat = "";
// let normalFiyat;

// let guncelFiyat =
//   indirimliFiyat || kampanyaFiyat || normalFiyat || "Fiyat Yok.";

// console.log(guncelFiyat);

//* 3. İletişim Tercihi Belirleme

//? Bir kullanıcının telefon numarası veya e-posta adresi yoksa, varsayılan olarak "İletişim bilgisi eksik" mesajı döndürün.

// let email = prompt("mail giriniz.");
// let phonenumber = prompt("tel no giriniz.");
// let infoCheck = Boolean(email && phonenumber) || "İletişim bilgisi eksik."
// console.log(infoCheck);

// let iletisimBilgileri = (email && phonenumber) ? "Sorun yok" : "İletişim bilgisi eksikmiş.";
// console.log(iletisimBilgileri);


//* 4. Adres Bilgisi Sağlama

//? Bir kullanıcının üç farklı adres bilgisi olabilir: `evAdresi`, `isAdresi`, veya `postaKutusu`. Tüm bilgiler eksikse "Adres yok" döndürün.

let evAdresi= prompt("ev adresiniz.")
let isAdresi= prompt("is adersiniz ")
let postaKutusu= prompt("posta kutunuz.")

let gonderimAdresi= Boolean(evAdresi || isAdresi || postaKutusu)

if (!gonderimAdresi){
    console.log("Gonderim adresi yok.");
} else {
    console.log(`Gonderim adresiniz: ${evAdresi || isAdresi || postaKutusu} `);
}
