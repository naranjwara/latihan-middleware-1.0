// Mendefinisikan middleware authenticateUser dengan tiga parameter: req (request), res (response), dan next (fungsi untuk melanjutkan ke middleware berikutnya).
const authenticateUser = (req, res, next) => {
    // Membuat variabel userAuthenticated dan menginisialisasi nilainya dengan true (secara sederhana, ini mengindikasikan bahwa pengguna telah terotentikasi).
    const userAuthenticated = true; 

    // Memeriksa apakah pengguna terotentikasi.
    if (userAuthenticated) {
        // Jika pengguna terotentikasi, mencetak pesan ke konsol bahwa pengguna terotentikasi.
        console.log('Pengguna terotentikasi');
        
        // Memanggil fungsi next() untuk melanjutkan ke middleware berikutnya dalam rantai.
        next();
    } else {
        // Jika pengguna tidak terotentikasi, mencetak pesan ke konsol bahwa pengguna tidak terotentikasi.
        console.log('Pengguna tidak terotentikasi');
        
        // Mengirim respons dengan status kode 401 (Unauthorized) dan pesan 'Anda tidak memiliki akses.'.
        res.status(401).send('Anda tidak memiliki akses.');
    }
};

// mengekspor fungsi authenticateUser agar bisa diakses oleh modul lain
module.exports = {
    authenticateUser
};
