function displayUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const usernamesList = document.getElementById('usernames');
    usernamesList.innerHTML = '';

    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="user-info"><strong>Username:</strong> ${user.username}</div>
            <div class="user-info"><strong>Email:</strong> ${user.email}</div>
            <div class="user-info"><strong>Password:</strong> ${user.password}</div>
        `;
        usernamesList.appendChild(li);
    });
}

displayUsers();

document.getElementById('deleteUser  Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameToDelete = document.getElementById('usernameToDelete').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(user => user.username !== usernameToDelete);

    if (users.length === updatedUsers.length) {
        Swal.fire({
        title: "Username tidak ditemukan!",
        icon: "question"
        });
    } else {
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        Swal.fire({
        title: "Akun berhasil di hapus!",
        icon: "success",
        });
        document.getElementById('usernameToDelete').value = '';
        displayUsers();
    }
});