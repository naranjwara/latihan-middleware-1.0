// index.js
// //memanggil modul express dari node.js
// const express = require('express');
// // memanggil modul authenticateUser
// const { authenticateUser } = require('./middleware');
// //membuat instance aplikasi express
// const app = express();

// // menambahkan authenticateUser ke dalam alur request aplikasi
// app.use(authenticateUser);

// //mendapatkan route '/pos'
// app.get('/pos', (req, res) => {
//     // yang nanti akan memberikan respon dibawah
//     res.send('Selamat datang di Point of Sale');
// });

// //memulai server dengan mendengarkan port 3000
// app.listen(3000, () => {
//     //ketika berhasil konsol akan memberika pesan ini
//     console.log('Server berjalan di port http://localhost:3000/pos');
// });

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//mengambil modul express dari node.js
const express = require('express');
//membuat aplikasi express
const app = express();

// mendaftarkan middleware ke permintaan aplikasi
app.use((req, res, next) => {
    // request method GET, POST, DLL dengan memberikan pesan konsol waktu
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    //mengeksekusikan ke middleware selanjutnya
    next();
});

// middleware isAuthenticated
app.use((req, res, next) => {
    // membuat variabel isAuthenticated yang bernilai true
    const isAuthenticated = true; 
    // jika isAuthenticated berhasil . . 
    if (isAuthenticated) {
        // akan lanjut ke middleware selanjutnya 
        next();
    } else {
        // jika tidak berhasi akan memberikan respon status 401 dengan pesan 'Unauthorized' 
        res.status(401).send('Unauthorized');
    }
});

// Middleware - Order Handling
app.post('/order', (req, res) => {
    //memberikan respon pesan di bawah
    res.send('Order has been processed successfully.');
});

app.get('/ordered', (req, res) => {
    res.send('Terimakasih telah memesan');
});

// Middleware - Default Route, jika memasukan route lain . . 
app.use((req, res) => {
    // . . maka akan mendapat respon 404 dan pesan dibawah 
    res.status(404).send('Route not found');
});

// Server listening
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
