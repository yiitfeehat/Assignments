const toplam = (n) => {
    let topla = 0;
    for (let i = 1; i <= n; i++) {
      console.log(topla);
      topla += i;
      console.log(topla);
    }
    console.log("Sayıların toplamı:", topla);
  };
  toplam(6);