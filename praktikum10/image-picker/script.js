function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src = "T-Rex.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar T-Rex.png";
        alert("Ini adalah gambar T-Rex.png");
    } else if (picker == "water") {
        images.src = "Abelisaurus.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar belisaurus.png";
        alert("Ini adalah gambar belisaurus.png");
    } else if (picker == "electric") {
        images.src = "Albertosaurus.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Albertosaurus.png";
        alert("Ini adalah gambar Albertosaurus.png");
    } else if (picker == "dark") {
        images.src = "Allosaurus.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Allosaurus.png";
        alert("Ini adalah gambar Allosaurus.png");
    } else if (picker == "psyhic") {
        images.src = "Ankylosaurus.jfif";
        images.width = 300;
        images.alt = "Ini adalah gambar Ankylosaurus.jfif";
        alert("Ini adalah gambar Ankylosaurus.jfif");
    } else if (picker == "fairy") {
        images.src = "Archaeopteryx.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Archaeopteryx.jpg";
        alert("Ini adalah gambar Archaeopteryx.jpg");
    } else if (picker == "grass") {
        images.src = "Baryonyx.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Baryonyx.png";
        alert("Ini adalah gambar Baryonyx.png");
    } else if (picker == "ice") {
        images.src = "Brachiosaurus.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Brachiosaurus.png";
        alert("Ini adalah gambar Brachiosaurus.png");
    } else {
        alert("Gagal");
    }
}