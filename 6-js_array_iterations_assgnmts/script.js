//! Array Iterations
//? Isınıyorum soruları  🐪 

//* 1- Bir dizideki pozitif sayıların karesini alıp, sonucu 50'den büyük olanları döndüren bir fonksiyon yazın.
//Burada pozitif sayıları filtre işleminden geçireceğiz ve yine filtre yapacağız.


// function pozitifleriVeBuyukDondur(dizi) {
//     return dizi
//         .filter((sayi) => sayi > 0).map((sayi) => sayi * sayi).filter((karesi) => karesi > 50)
// }

// let dizi1 = [2, 3, 5, 17, 10, 12, 8, -2, -3, 0]
// console.log(pozitifleriVeBuyukDondur(dizi1));


//* 2- Bir dizideki tüm sayıların çarpımını hesaplayan bir fonksiyon yazın.
//forEach ile yazacağım


// let sayilarinCarpimi = 1;
// function fonksiyon1(dizi) {
//     dizi.forEach((sayi) => {
//         sayilarinCarpimi *= sayi

//     })
//     return console.log(sayilarinCarpimi);
// }
// let dizi2 = [2, 3, 5, 17, 10, 12, 8, -2, -3]
// fonksiyon1(dizi2);


//* 3- Bir dizideki ilk negatif sayının indeksini döndüren bir fonksiyon yazın.
// find 


// let dizi3 = [2, 3, 5, -2, 17, 10, 12, 8, -3]
// function ilkNegatif(dizi) {
//     let sayi = dizi.find((sayi) => sayi < 0)
//     if (sayi !== undefined) {
//         let sirasi = dizi.indexOf(sayi) + 1;
//         console.log(`${dizi} dizisindeki ilk negatif sayının değeri ${sayi}, ve dizideki sıralaması ${sirasi}`);
//     }
// }
// ilkNegatif(dizi3);


//* 4- Bir dizideki kelimelerin hepsini büyük harfe çeviren bir fonksiyon yazın.
// map metoduyla çevirebiliriz.


// let dizi4 = [ "Selam", "naber", "nasılsın", "şampiyon", "fenerbahçe"]

// function buyukYap(dizi){
//     let yeniDizi = dizi.map((x) => x.toUpperCase())
//     console.log(yeniDizi);
// }

// buyukYap(dizi4)


//* 5- Bir dizide ilk 50'den büyük sayıyı bulan bir fonksiyon yazın.


let dizi3 = [2, 3, 5, -2, 17, 10, 12, 8, -3]

function ilkElliyiBul(dizi){ 
    let ilkEllidenBuyuk = dizi.find((x)=> x>50)
    return clg ilkEllidenBuyuk
}

ilkElliyiBul(dizi3)






//* 6- Bir dizideki sayıların karesini alıp, sonucu 100'den küçük olanları döndüren bir fonksiyon yazın.



//* 7- Bir dizide tüm elemanların çift sayı olup olmadığını kontrol eden bir fonksiyon yazın.



//* 8- Bir diziyi tersten oluşturmak için bir fonksiyon yazın.




//* 9- Bir dizide en az bir elemanın 10'un katı olup olmadığını kontrol eden bir fonksiyon yazın.




//* 10- Bir dizideki tüm kelimeleri ters çeviren bir fonksiyon yazın.