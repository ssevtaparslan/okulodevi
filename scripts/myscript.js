function sepeteEkle(ad, fiyat) {
    let sepet = JSON.parse(localStorage.getItem("sepet")) || [];
    sepet.push({ ad, fiyat });
    localStorage.setItem("sepet", JSON.stringify(sepet));
    window.location.href = "sepet.html";
}

