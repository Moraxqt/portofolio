// 1. import library yang dibutuhkan
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
// 2. load file  konfigurasi .env
dotenv.config();

// 3. inisialisasi aplikasi express
const app = express();
const PORT = process.env.PORT || 5000;

// 4. middleware  dasar
app.use(cors()); // mengizinkan  request dari domain lain (frontend)
app.use(express.json()); // membaca body request bertipe JSON
app.use(express.urlencoded({ extended: true })); // membaca body request bertipe form-data/url-encoded

// 5. endpoint dasar (testing server)
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Selamat datang di API Portofolio Dinamis!',
        version: '1.0.0'
    });
});

// endpoint untuk cek status API
app.get ('/api/status', (req,res) => {
    res.status(200).json({
        success: true,
        message: 'Server dalam keadaan sehat dan aktif.',
        timestamp: new Date().toISOString()
    });
});

// 6. middleware untuk menangani route yang tidak ditemukan (404 not found)
app.use((req,res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint tidak ditemukan!'
    });
});

// 7. menjalankan server
app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`🚀 Server berjalan di: http://localhost:${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`)
    console.log(`========================================`)
});