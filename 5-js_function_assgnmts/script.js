//! 😇  Isınma soruları 

//* 1- Sayının Tek mi Çift mi Olduğunu Bulma: Kullanıcıdan alınan sayının tek mi çift mi olduğunu kontrol eden bir fonksiyon yazın.


function evenOrOdd(a) {
    if (a % 2 === 0) {
        console.log("Çifttir.");
    } else { console.log("Tektir."); }

}

evenOrOdd(332)


//* 2- Sayı 5'in Katı mı? Kullanıcının girdiği bir sayının 5' in katı olup olmadığını kontrol eden bir fonksiyon yazın.


let besKatiMi = (a) => a % 5 ? console.log("Beşin katı değil.") : console.log("Beşin katı")
besKatiMi(15)


//* 3- Pozitif mi Negatif mi ? Kullanıcının girdiği sayının pozitif, negatif veya sıfır olup olmadığını belirleyen bir fonksiyon yazın.


function pozNegSif(a) {
    if (a === 0) {
        console.log("Sıfır");

    } else if (a > 0) {
        console.log("Pozitiftir");

    } else { console.log("Negatiftir."); }
}
pozNegSif(-2)


//* 4- Sayıyı Mutlak Değere Çevirme: Kullanıcının girdiği negatif bir sayıyı pozitif hale getiren bir fonksiyon yazın(örn. 8  8.)


function mutlakYap(a) {
    mutlakHali = Math.abs(a)
    console.log(mutlakHali);
}
mutlakYap(-122)


//* 5- Bir Sayının Karesini Bulma: Kullanıcının girdiği sayının karesini hesaplayan bir fonksiyon yazın.


let karesi = (a) => console.log(a ** 2);
karesi(-2)


//* 6- Girilen Sayının Kaç Basamaklı Olduğunu Bulma: Kullanıcıdan alınan sayının kaç basamaklı olduğunu bulan bir fonksiyon yazın(örn. 234  3 basamak).


let basamakSayisi = (a) => {
    a = Math.abs(a).toString();
    console.log(a.length);

}
basamakSayisi(-223)


//* 7- Girilen İki Sayının Toplamını Bulma: Kullanıcıdan iki sayı alarak bu sayıların toplamını hesaplayan bir fonksiyon yazın.


function topla(a, b) {
    sonuc = a + b;
    return sonuc;
}
console.log(topla(44, 5));


//* 8- 10 ve 20 Arasında mı ? Kullanıcının girdiği bir sayının 10 ile 20 arasında olup olmadığını kontrol eden bir fonksiyon yazın.


function kontrolEt(a) {
    (a > 10 && a < 20) ? console.log("Girdiğiniz sayı 10 ve 20 arasında") : console.log("Girdiğiniz sayı istenilen aralıkta değil.");
}
kontrolEt(12)


//* 9- Dikdörtgen Alanı Hesaplama: Kullanıcıdan dikdörtgenin uzun ve kısa  kenarlarını alarak alanını hesaplayan bir fonksiyon yazın.


function alanHesapla(uzunluk = 2, genişlik = 4) {
    if (arguments.length > 2) {
        console.log("Yalnızca 2 değer giriniz.");
        return;
    }

    let alan = uzunluk * genişlik
    console.log(alan);

}

alanHesapla(-3, 4)
alanHesapla(5)


//* 10- Sayı Pozitifse 1 Ekle, Negatifse 1 Çıkar: Kullanıcının girdiği sayının pozitifse1 ekleyen, negatifse 1 çıkaran bir fonksiyon yazın


let ekleCikar = (a) => a >= 0 ? console.log(++a) : console.log(--a);
ekleCikar(4)