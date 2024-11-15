function updateTitle(event) {
    event.preventDefault(); // Mencegah tindakan default
    const element = event.target; // Elemen yang diklik
    const button = element.closest('.btn-group').querySelector('.dropdown-toggle'); // Tombol dropdown terdekat
    button.textContent = element.textContent; // Perbarui teks tombol
}
