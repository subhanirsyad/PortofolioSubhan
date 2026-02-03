# Subhan Portfolio (Static)

Portfolio web statis (HTML + Tailwind CDN) — siap di-deploy via GitHub Pages / Vercel / Netlify.

## Struktur
- `index.html` — halaman utama

## Jalankan lokal
Cukup buka `index.html` di browser, atau pakai Live Server (VSCode).

## Deploy via GitHub Pages
1. Buat repo baru di GitHub (misal: `subhan-portfolio`).
2. Upload semua file (atau push via git).
3. Masuk **Settings → Pages**
4. Pada **Build and deployment** pilih:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (atau `master`)
   - **Folder:** `/ (root)`
5. Simpan. Link website akan muncul di bagian Pages.

## Catatan
- Semua asset eksternal memakai CDN (Tailwind, Font Awesome, AOS, Typed.js).
- Link penting bisa kamu edit cepat di komentar **QUICK LINKS** di bagian atas `index.html`.
