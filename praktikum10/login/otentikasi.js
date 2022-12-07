function login() {
    event.preventDefault();
    
    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "1" && pass == "1") {
        location.replace("sukses.html");
        alert("Login berhasil!");
    } else {
        alert("Login gagal");
    }
}