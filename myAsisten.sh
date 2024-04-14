#!/bin/bash

# Fungsi untuk mencari root directory proyek dari lokasi skrip
function find_project_root() {
  # Mendapatkan direktori dari skrip yang sedang dijalankan
  current_dir="$(cd "$(dirname "$0")" && pwd)"

  # Navigasi ke atas dari lokasi skrip untuk menemukan root directory proyek
  while [[ "$current_dir" != "/" ]]; do
    if [ -f "$current_dir/package.json" ]; then
      echo "$current_dir"
      return
    fi
    current_dir="$(dirname "$current_dir")"
  done
  echo ""  # Return empty string if not found
}

# Mendapatkan jalur absolut dari root directory proyek
PROJECT_DIR=$(find_project_root)

if [ -z "$PROJECT_DIR" ]; then
  echo "Error: Tidak dapat menemukan root directory proyek dengan file package.json."
  exit 1
fi

# Direktori komponen-komponen dalam proyek (berdasarkan root directory proyek)
COMPONENTS_DIR="$PROJECT_DIR/src/components"

# Fungsi untuk menampilkan pesan kepada pengguna
function display_message() {
  echo "============================================================================="
  echo "$1"
  echo "============================================================================="
}

# Mengeksekusi ESLint untuk analisis kode
display_message "Mengeksekusi ESLint untuk analisis kode..."
eslint_output=$(eslint "$COMPONENTS_DIR" --ext .ts,.tsx)

# Cek apakah ada kesalahan yang terdeteksi oleh ESLint
if [ -n "$eslint_output" ]; then
  display_message "Kesalahan terdeteksi oleh ESLint:"
  echo "$eslint_output"
else
  display_message "Tidak ada kesalahan yang terdeteksi oleh ESLint."
fi

# Mencari modul npm yang terinstal dan terpakai di setiap berkas komponen
display_message "Menganalisis penggunaan modul npm di setiap komponen..."
files=$(find "$COMPONENTS_DIR" -type f \( -name "*.ts" -o -name "*.tsx" \))

# Loop melalui setiap berkas untuk menganalisis penggunaan modul npm
for file in $files; do
  display_message "Analisis modul npm untuk berkas: $file"
  
  # Gunakan grep untuk mencari modul npm yang diimpor dalam berkas
  imported_modules=$(grep -oP "import\s+{\s*\w+\s*}\s+from\s+'[^']+'" "$file" | cut -d"'" -f2)

  if [ -n "$imported_modules" ]; then
    echo "Modul npm yang diimpor: $imported_modules"
  else
    echo "Tidak ada modul npm yang diimpor dalam berkas ini."
  fi

done

# Melakukan staging perubahan pada berkas untuk tracking dengan git
display_message "Staging perubahan untuk tracking dengan git..."
git add "$COMPONENTS_DIR"

# Menampilkan perubahan yang akan dilakukan
display_message "Perubahan yang akan dilakukan:"
git diff --cached

# Menanyakan pengguna apakah ingin melanjutkan commit
read -p "Apakah Anda ingin melanjutkan commit perubahan? (y/n): " choice
if [[ "$choice" =~ ^[Yy]$ ]]; then
  # Melakukan commit perubahan
  git commit -m "Melakukan refaktorisasi otomatis pada komponen"
  display_message "Perubahan berhasil di-commit!"
else
  display_message "Commit dibatalkan. Perubahan tidak di-commit."
fi

# Menampilkan pesan penutup
display_message "Program selesai."

