# 🎨 Nagisa Interior - Landing Page

Selamat datang di repositori proyek Nagisa Interior! Ini adalah sebuah landing page modern yang dibangun untuk sebuah perusahaan desain interior, diadaptasi dari desain HTML statis menjadi aplikasi React yang dinamis dan modular dengan Vite.

## 📖 Tentang Proyek Ini

Proyek ini bertujuan untuk mendemonstrasikan layanan Nagisa Interior Design kepada publik dan memberikan askes langsung untuk memesan jasa kami. Fokus utama adalah pada pembuatan komponen yang dapat digunakan kembali (_reusable_), manajemen state yang efisien, dan styling dengan CSS murni.

## ✨ Fitur Utama

- **📱 Desain Responsif:** Tampilan yang optimal di berbagai perangkat, mulai dari mobile hingga desktop.
- **🧩 Arsitektur Berbasis Komponen:** Setiap bagian dari halaman (Navbar, Hero, Services, dll.) dipecah menjadi komponen React yang terisolasi.
- **💨 Pengembangan Super Cepat:** Dibuat dengan [Vite](https://vitejs.dev/) untuk pengalaman development yang instan dan _Hot Module Replacement_ (HMR) yang kilat.
- **📜 Efek & Interaktivitas:** Termasuk efek navbar saat scroll, menu mobile, dan efek hover yang halus.
- **💅 Styling Murni:** Seluruh styling dibuat dari awal menggunakan CSS murni untuk kontrol penuh dan performa yang ringan.

## 💻 Teknologi yang Digunakan

- [**Vite**](https://vitejs.dev/) - _Build tool_ generasi baru.
- [**React.js**](https://reactjs.org/) - _Library_ JavaScript untuk membangun antarmuka pengguna.
- [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling kustom dari nol.
- [**Font Awesome**](https://fontawesome.com/) - Untuk ikonografi yang kaya.

## 🚀 Getting Started

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di mesin lokal Anda.

### Requirements

Pastikan Anda sudah menginstal Node.js dan npm (atau yarn) di komputer Anda.

- **Node.js** (versi 16 atau lebih tinggi direkomendasikan)
- **npm** / **yarn**

### Instalasi

1.  **Clone repositori ini**

    ```bash
    git clone [https://github.com/](https://github.com/)[NAMA_PENGGUNA_ANDA]/[NAMA_REPOSITORI_ANDA].git
    ```

2.  **Masuk ke direktori proyek**

    ```bash
    cd [NAMA_REPOSITORI_ANDA]
    ```

3.  **Instal semua dependensi**

    ```bash
    npm install
    ```

    atau jika Anda menggunakan yarn:

    ```bash
    yarn install
    ```

4.  **Jalankan server pengembangan**
    ```bash
    npm run dev
    ```
    Buka `http://localhost:5173` (atau port yang tertera di terminal) di browser Anda.

## 📁 Struktur Folder

Proyek ini menggunakan struktur folder yang terorganisir untuk memudahkan navigasi dan pengembangan.

├── public/
│ └── vite.svg
├── src/
│ ├── assets/ # 🖼️ Untuk semua aset statis (gambar, dll)
│ ├── components/ # 🧩 Semua komponen React ada di sini
│ │ ├── About/
│ │ ├── Contact/
│ │ ├── CTA/
│ │ ├── Footer/
│ │ ├── Hero/
│ │ ├── Navbar/
│ │ ├── Portfolio/
│ │ ├── Services/
│ │ └── WhatsAppButton/
│ ├── App.jsx # 📦 Komponen utama yang merakit semua halaman
│ ├── index.css # 🎨 Stylesheet global
│ └── main.jsx # 🚀 Titik masuk utama aplikasi React
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md # 📄 You are here!

## 🤝 Berkontribusi

Kontribusi, isu, dan permintaan fitur sangat kami terima. Jangan lupa untuk membuat _pull request_ atau membuka _issue_ baru.

---

Terima kasih telah menggunakan Nagisa Interior Design! Semoga dapat memberikan keperluan yang tepat! 🚀
