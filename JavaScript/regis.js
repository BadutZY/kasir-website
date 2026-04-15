document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validasi konfirmasi kata sandi
    if (password !== confirmPassword) {
        Swal.fire({
        title: "Password tidak cocok!",
        icon: "info"
        });
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser  = users.find(u => u.username === username);

    if (existingUser ) {
        Swal.fire({
        title: "Username sudah digunakan!",
        icon: "info"
        });
    } else {
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        Swal.fire({
        title: "Registrasi berhasil!",
        icon: "success"
        });
        window.location.href = 'login.html';
    }
});