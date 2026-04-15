
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const adminUsername = 'BadutZY';
    const adminPassword = 'Amanda123';

    if (username === adminUsername && password === adminPassword) {
        Swal.fire({
        title: "Login Berhasil!",
        icon: "success",
        });
        window.location.href = 'admin.html';
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        Swal.fire({
        title: "Login Berhasil!",
        icon: "success",
        });
        window.location.href = 'Kasir.html';
    } else {
        Swal.fire({
        icon: "error",
        title: "Password Salah!",
        });
    }
});