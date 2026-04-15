document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('resetUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username);

    if (user) {
        user.password = newPassword; // Update password
        localStorage.setItem('users', JSON.stringify(users));
        Swal.fire({
        title: "Password berhasil di reset",
        icon: "success",
        });
        window.location.href = 'login.html';
    } else {
        Swal.fire({
        title: "Username tidak ditemukan!",
        icon: "question"
        });
    }
});