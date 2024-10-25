document.getElementById('signin').addEventListener('submit', function(event) {
    event.preventDefault();

    // Giriş verilerini al
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Kullanıcı adı ve şifre doğrulama (örnek değerler)
    const correctmail = "1";
    const correctPassword = "1";

    // Doğrulama
    if (email === correctmail && password === correctPassword) {
        alert("Giriş başarılı!");
        // Giriş başarılıysa, sayfayı yönlendir
        window.location.href = "homepage.html";
        
    } else {
        alert("Hatalı kullanıcı adı veya şifre.");
    }
});
