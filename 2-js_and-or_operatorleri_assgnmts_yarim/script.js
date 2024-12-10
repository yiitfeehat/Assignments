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

// let evAdresi= prompt("ev adresiniz.")
// let isAdresi= prompt("is adersiniz ")
// let postaKutusu= prompt("posta kutunuz.")

// let gonderimAdresi= Boolean(evAdresi || isAdresi || postaKutusu)

// if (!gonderimAdresi){
//     console.log("Gonderim adresi yok.");
// } else {
//     console.log(`Gonderim adresiniz: ${evAdresi || isAdresi || postaKutusu} `);
// }

//* 5. Varsayılan Dil Belirleme
//? Bir uygulamada `kullaniciDili`, `tarayiciDili`, ve `varsayilanDil` gibi dil seçenekleri bulunmaktadır. Eğer tüm seçenekler yoksa, "Dil seçilmedi" döndürün.

// let kullaniciDili = null;
// let tarayiciDili = "EN";
// const varsayilanDil = "TR";

// if (!(kullaniciDili || tarayiciDili || varsayilanDil)) {
//   console.log("Dil Seçilmedi.");
// } else {
//   console.log(
//     `Dil zaten seçilmiştir. (Dil = ${
//       kullaniciDili || tarayiciDili || varsayilanDil
//     }) `
//   );
// }

//* 6. Profil Resmi Gösterme
//? Bir kullanıcının `profilFotografi`, `varsayilanAvatar`, ve `defaultImage` gibi profil resmi seçenekleri var. Eğer hepsi eksikse "Resim yok" mesajı döndürün.

// let profilFotografi;
// const varsayilanAvatar= undefined;
// let resultImage = profilFotografi || varsayilanAvatar || "No Image."
// console.log(resultImage);

//* 7. Kullanıcı Bilgileri
//?Bir kullanıcının adı, soyadı ve takma adı olabilir. Eğer hiçbir bilgi yoksa "Anonim" döndürün.

// let isimSoyisim = prompt("Adınız ve soyadınız?");
// let nickName = prompt("nickname?");
// const anonim = "Anonim";
// let gorunenIsim = isimSoyisim || nickName || anonim;
// console.log(gorunenIsim);

//* 8. Yaş Bilgisi Gösterme
//? Bir kullanıcı ya `yas`, `dogumYili`, veya `tahminiYas` bilgisine sahip. Eğer hiçbir yaş bilgisi yoksa "Yaş bilinmiyor" döndürün.

// let kullaniciYas=prompt("Yaşınız?")
// let kullaniciDogumYili=prompt("Dogum Yılı?")
// const tahminiYas= null;
// let yazanYas = kullaniciYas || kullaniciDogumYili ||tahminiYas || "Yaş bilinmiyor.";
// console.log(yazanYas);

//* 9. Oyun Skoru Belirleme
//? Bir oyunda `anaSkor`, `yedekSkor`, ve `varsayilanSkor` bilgisi bulunmaktadır. Hepsi `falsy` ise "Skor yok" döndürün.

// let anaSkor = null;
// let yedekSkor = 0;
// let varsayilanSkor = "";

// const score = anaSkor || yedekSkor || varsayilanSkor;
// if (!score) {
//   console.log("Skor yok.");
// } else {
//   console.log(score);
// }

//* 10. Çevrimiçi Durum Kontrolü
//? Bir kullanıcının `aktifDurum`, `sonGiris`, veya `beklemeDurumu` gibi çevrimiçi durumu olabilir. Hepsi `falsy` ise "Çevrimdışı" mesajı döndürün.

// let aktifDurum = false;
// let sonGiris = 0;
// let beklemeDurumu = null;

// let sonDurum = (aktifDurum || sonGiris || beklemeDurumu) ? "Çevrimiçi" : "Çevrimdışı";
// console.log(sonDurum);

//* ahmet hocanın çözümünden esinlenerek.
// let sonucOlarak =
//   aktifDurum || sonGiris || beklemeDurumu || `${console.log(sonucFonksiyon())}`;

// function sonucFonksiyon() {
//   console.log("Tüm değerler falsy.");
//   return "Durum çevrimdışı";
// }

// console.log(`Güncel durum ${sonucOlarak === true ? "Çevrimiçi" : "Çevrimdışı"}`);

/* -------------------------------------------------------------------------- */
