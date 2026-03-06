// Lesson data for HTML learning path
export const HTML_LESSONS = {
  // ===== HTML DASAR =====
  "html-1": {
    id: "html-1",
    track: "HTML",
    level: "Dasar",
    title: "Struktur Dokumen HTML & Tag Dasar",
    duration: "10 menit",
    xp: 20,
    description: "Pelajari struktur dasar dokumen HTML dan tag-tag fundamental.",
    objective: "Memahami struktur HTML5 dan penggunaan tag dasar seperti html, head, body, h1-h6, dan p.",
    content: [
      {
        type: "text",
        title: "Struktur HTML5",
        body: "Setiap dokumen HTML5 dimulai dengan <!DOCTYPE html> yang memberitahu browser bahwa ini adalah dokumen HTML5. Struktur dasar terdiri dari <html>, <head>, dan <body>."
      },
      {
        type: "code",
        title: "Template Dasar HTML5",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Judul Halaman</title>
</head>
<body>
  <h1>Heading Utama</h1>
  <p>Ini adalah paragraf.</p>
</body>
</html>`
      },
      {
        type: "list",
        title: "Tag-tag Dasar",
        items: [
          "<h1> sampai <h6>: Heading dari yang terbesar ke terkecil",
          "<p>: Paragraf teks",
          "<div>: Container generik untuk block content",
          "<span>: Container generik untuk inline content"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Tag HTML yang mendefinisikan judul halaman di browser tab adalah?",
        options: ["<title>", "<head>", "<h1>", "<header>"],
        correct: 0,
        explanation: "<title> diletakkan di dalam <head> dan menampilkan judul di tab browser."
      },
      {
        id: 2,
        question: "Urutan heading yang benar dari besar ke kecil adalah?",
        options: ["<h6> ke <h1>", "<h1> ke <h6>", "<heading1> ke <heading6>", "<H1> ke <H6>"],
        correct: 1,
        explanation: "<h1> adalah heading terbesar dan <h6> adalah heading terkecil."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada <!DOCTYPE html> di awal dokumen", passed: true },
      { id: 2, description: "Ada tag <title> di dalam <head>", passed: true },
      { id: 3, description: "Ada minimal 1 <h1> di halaman", passed: true },
      { id: 4, description: "Ada minimal 2 paragraf <p>", passed: true }
    ]
  },
  
  "html-2": {
    id: "html-2",
    track: "HTML",
    level: "Dasar",
    title: "Teks, Link, dan Gambar",
    duration: "12 menit",
    xp: 20,
    description: "Pelajari cara menampilkan teks, membuat link, dan menambahkan gambar.",
    objective: "Menguasai penggunaan tag untuk formatting teks, hyperlink, dan multimedia dasar.",
    content: [
      {
        type: "text",
        title: "Formatting Teks",
        body: "HTML menyediakan tag untuk membuat teks tebal (<strong>), miring (<em>), atau kombinasi. Tag <a> digunakan untuk membuat hyperlink ke halaman lain."
      },
      {
        type: "code",
        title: "Contoh Teks dan Link",
        language: "html",
        code: `<p>Ini adalah <strong>teks tebal</strong> dan <em>teks miring</em>.</p>
<a href="https://example.com" target="_blank">Kunjungi Website</a>
<img src="gambar.jpg" alt="Deskripsi gambar">`
      },
      {
        type: "list",
        title: "Tag Penting",
        items: [
          "<strong>: Teks penting (tebal)",
          "<em>: Teks ditekankan (miring)",
          "<a href='url'>: Link ke halaman lain",
          "<img src='url' alt='deskripsi'>: Menampilkan gambar"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Atribut yang WAJIB untuk aksesibilitas pada <img> adalah?",
        options: ["alt", "href", "target", "srcset"],
        correct: 0,
        explanation: "Atribut 'alt' memberikan deskripsi gambar untuk screen reader dan jika gambar gagal dimuat."
      },
      {
        id: 2,
        question: "Tag yang benar untuk membuat tautan/link adalah?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1,
        explanation: "Tag <a> (anchor) digunakan dengan atribut href untuk membuat hyperlink."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada <h1> berisi 'Profil Saya'", passed: true },
      { id: 2, description: "Ada <a> dengan href https://example.com", passed: true },
      { id: 3, description: "Ada <img> dengan alt='Foto profil'", passed: true },
      { id: 4, description: "Link menggunakan target='_blank'", passed: true }
    ]
  },

  "html-5": {
    id: "html-5",
    track: "HTML",
    level: "Menengah",
    title: "Semantic HTML: Header, Nav, Main, Footer",
    duration: "15 menit",
    xp: 25,
    description: "Membuat struktur halaman dengan semantic HTML5 tags.",
    objective: "Menguasai penggunaan semantic tags untuk struktur yang lebih baik dan SEO-friendly.",
    content: [
      {
        type: "text",
        title: "Semantic HTML5",
        body: "Semantic HTML menggunakan tag yang memiliki makna jelas tentang kontennya. Ini membantu browser, search engine, dan screen reader memahami struktur halaman dengan lebih baik."
      },
      {
        type: "code",
        title: "Struktur Semantic",
        language: "html",
        code: `<header>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>Judul Artikel</h2>
    <p>Konten artikel...</p>
  </article>
</main>
<footer>
  <p>&copy; 2024 Website</p>
</footer>`
      },
      {
        type: "list",
        title: "Semantic Tags Penting",
        items: [
          "<header>: Bagian kepala halaman atau section",
          "<nav>: Navigasi utama",
          "<main>: Konten utama halaman (hanya 1 per page)",
          "<article>: Konten yang berdiri sendiri",
          "<section>: Bagian tematik dari konten",
          "<footer>: Bagian kaki halaman atau section"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Tag yang paling tepat untuk area navigasi utama adalah?",
        options: ["<nav>", "<menu>", "<header>", "<section>"],
        correct: 0,
        explanation: "<nav> adalah semantic tag khusus untuk navigation links."
      },
      {
        id: 2,
        question: "Tag yang paling tepat untuk konten utama halaman adalah?",
        options: ["<main>", "<body>", "<content>", "<article>"],
        correct: 0,
        explanation: "<main> mendefinisikan konten utama yang unik pada halaman. Hanya boleh ada 1 per page."
      },
      {
        id: 3,
        question: "Manakah struktur semantik yang paling benar?",
        options: [
          "<div><div><div></div></div></div>",
          "<header><nav></nav></header><main></main><footer></footer>",
          "<body><header></header><main></main></body>",
          "<main><header><nav></nav></header><footer></footer></main>"
        ],
        correct: 1,
        explanation: "Header dengan nav di dalamnya, diikuti main untuk konten utama, lalu footer adalah struktur yang benar."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada tag <header>, <nav>, <main>, <footer>", passed: true },
      { id: 2, description: "Ada minimal 2 <article> dalam <main>", passed: true },
      { id: 3, description: "Link dalam <nav> berjumlah 3", passed: true },
      { id: 4, description: "Setiap <article> memiliki <h2>", passed: true }
    ]
  },

  "html-10": {
    id: "html-10",
    track: "HTML",
    level: "Mahir",
    title: "Form Validasi UX: required, pattern, input types",
    duration: "18 menit",
    xp: 35,
    description: "Buat form dengan validasi HTML5 modern dan user experience yang baik.",
    objective: "Menguasai atribut validasi HTML5 untuk membuat form yang user-friendly.",
    content: [
      {
        type: "text",
        title: "HTML5 Form Validation",
        body: "HTML5 menyediakan atribut built-in untuk validasi form tanpa JavaScript. Gunakan required, pattern, min, max, minlength untuk validasi yang baik."
      },
      {
        type: "code",
        title: "Contoh Validasi",
        language: "html",
        code: `<input type="email" required>
<input type="password" minlength="8" required>
<input type="tel" pattern="[0-9]{10,12}">`
      },
      {
        type: "list",
        title: "Input Types Modern",
        items: [
          "email: Validasi format email otomatis",
          "tel: Untuk nomor telepon",
          "url: Validasi format URL",
          "number: Input angka dengan min/max",
          "date: Date picker built-in"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Atribut yang membuat field wajib diisi adalah?",
        options: ["required", "validate", "mustfill", "needed"],
        correct: 0,
        explanation: "Atribut 'required' membuat field wajib diisi sebelum form bisa disubmit."
      },
      {
        id: 2,
        question: "Input type terbaik untuk email adalah?",
        options: ["email", "text", "mail", "user-email"],
        correct: 0,
        explanation: "type='email' memberikan validasi otomatis untuk format email dan keyboard khusus di mobile."
      },
      {
        id: 3,
        question: "Untuk membatasi format tertentu, atribut yang digunakan adalah?",
        options: ["pattern", "mask", "regex", "format"],
        correct: 0,
        explanation: "Atribut 'pattern' menerima regex untuk validasi format kustom."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Check validation
  if (password.length < 8) {
    message.className = 'error';
    message.textContent = 'Password harus minimal 8 karakter!';
    console.log('SUBMIT: invalid - password too short');
    return;
  }
  
  // Success
  message.className = 'success';
  message.textContent = \`Selamat datang, \${name}! Akun berhasil dibuat.\`;
  console.log('SUBMIT: valid');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password length:', password.length);
  
  // Reset form after 2 seconds
  setTimeout(() => {
    form.reset();
    message.style.display = 'none';
  }, 3000);
});

console.log('Registration form loaded!');`
    },
    tests: [
      { id: 1, description: "Ada input type='email'", passed: true },
      { id: 2, description: "Ada attribute required minimal pada nama & email", passed: true },
      { id: 3, description: "Password memiliki minlength='8'", passed: true },
      { id: 4, description: "Message area updates on submit", passed: true },
      { id: 5, description: "Console log menampilkan status validasi", passed: true }
    ]
  }
};

// ===== CSS LESSONS =====
export const CSS_LESSONS = {
  // CSS DASAR
  "css-1": {
    id: "css-1",
    track: "CSS",
    level: "Dasar",
    title: "Selectors & Specificity",
    duration: "12 menit",
    xp: 20,
    description: "Pelajari cara memilih elemen HTML menggunakan CSS selector dan memahami specificity.",
    objective: "Menguasai berbagai jenis selector CSS dan memahami prioritas selector.",
    content: [
      {
        type: "text",
        title: "CSS Selectors",
        body: "Selector adalah pola yang digunakan untuk memilih elemen HTML yang ingin diberi style. Ada berbagai jenis selector: element, class, ID, attribute, dan pseudo-class."
      },
      {
        type: "code",
        title: "Contoh Selector",
        language: "css",
        code: `/* Element selector */
p { color: blue; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#header { font-size: 24px; }

/* Descendant selector */
.card p { margin: 10px; }`
      },
      {
        type: "list",
        title: "Specificity (Prioritas)",
        items: [
          "Inline styles (paling tinggi)",
          "ID selector (#id) - specificity: 100",
          "Class, attribute, pseudo-class (.class) - specificity: 10",
          "Element selector (p, div) - specificity: 1"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Selector mana yang memiliki specificity PALING TINGGI?",
        options: ["#header", ".header", "header", "div > header"],
        correct: 0,
        explanation: "ID selector (#header) memiliki specificity tertinggi dengan nilai 100."
      },
      {
        id: 2,
        question: "Untuk memilih semua elemen dengan class 'btn', gunakan selector?",
        options: ["#btn", ".btn", "btn", "*btn"],
        correct: 1,
        explanation: "Class selector menggunakan titik (.) diikuti nama class."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada ID selector untuk #title", passed: true },
      { id: 2, description: "Ada class selector untuk .intro", passed: true },
      { id: 3, description: "Ada descendant selector untuk .card p", passed: true },
      { id: 4, description: "Pseudo-class :hover digunakan", passed: true }
    ]
  },

  "css-2": {
    id: "css-2",
    track: "CSS",
    level: "Dasar",
    title: "Box Model: margin, padding, border",
    duration: "12 menit",
    xp: 25,
    description: "Memahami konsep Box Model CSS untuk mengatur spacing dan layout.",
    objective: "Menguasai penggunaan margin, padding, border untuk membuat layout yang rapi.",
    content: [
      {
        type: "text",
        title: "CSS Box Model",
        body: "Box Model menggambarkan cara browser menghitung ukuran elemen. Dari dalam ke luar: Content → Padding → Border → Margin."
      },
      {
        type: "code",
        title: "Box Model Properties",
        language: "css",
        code: `.box {
  /* Content area */
  width: 300px;
  
  /* Padding (di dalam border) */
  padding: 20px;
  
  /* Border */
  border: 2px solid #333;
  
  /* Margin (di luar border) */
  margin: 10px;
}`
      },
      {
        type: "list",
        title: "Perbedaan Padding vs Margin",
        items: [
          "Padding: Ruang DI DALAM border, ikut background color",
          "Margin: Ruang DI LUAR border, transparan",
          "Padding tidak bisa negative, margin bisa",
          "Margin collapse vertikal, padding tidak"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Properti yang menambah ruang DI DALAM border adalah?",
        options: ["padding", "margin", "gap", "outline"],
        correct: 0,
        explanation: "Padding menambah ruang di dalam border antara content dan border."
      },
      {
        id: 2,
        question: "Urutan Box Model dari dalam ke luar adalah?",
        options: [
          "content → padding → border → margin",
          "content → border → padding → margin",
          "margin → border → padding → content",
          "padding → content → border → margin"
        ],
        correct: 0,
        explanation: "Urutan Box Model: Content (isi) → Padding → Border → Margin."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: ".product-card memiliki padding", passed: true },
      { id: 2, description: ".product-card memiliki border + border-radius", passed: true },
      { id: 3, description: ".btn-buy memiliki padding yang nyaman", passed: true },
      { id: 4, description: ".btn-buy:hover ada transform dan shadow", passed: true }
    ]
  },

  // CSS MENENGAH
  "css-5": {
    id: "css-5",
    track: "CSS",
    level: "Menengah",
    title: "Flexbox: Layout Kartu Responsif",
    duration: "15 menit",
    xp: 30,
    description: "Membuat layout responsif menggunakan Flexbox dengan gap dan wrap.",
    objective: "Menguasai Flexbox untuk membuat layout kartu yang adapt di berbagai ukuran layar.",
    content: [
      {
        type: "text",
        title: "Flexbox Layout",
        body: "Flexbox adalah sistem layout satu dimensi yang memudahkan pengaturan elemen dalam baris atau kolom. Sangat powerful untuk responsive design."
      },
      {
        type: "code",
        title: "Flexbox Properties",
        language: "css",
        code: `.container {
  display: flex;
  flex-wrap: wrap; /* Item pindah baris */
  gap: 1rem; /* Jarak antar item */
  justify-content: space-between;
}

.item {
  flex: 1 1 300px; /* grow shrink basis */
}`
      },
      {
        type: "list",
        title: "Flexbox Key Properties",
        items: [
          "display: flex - Membuat container flex",
          "flex-wrap: wrap - Item pindah baris otomatis",
          "gap - Jarak antar item (modern)",
          "justify-content - Align horizontal",
          "align-items - Align vertical"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Properti untuk membuat container flex adalah?",
        options: ["display: flex", "flex: on", "position: flex", "layout: flex"],
        correct: 0,
        explanation: "display: flex mengubah elemen menjadi flex container."
      },
      {
        id: 2,
        question: "Properti untuk mengatur jarak antar item flex modern adalah?",
        options: ["gap", "spacing", "margin-between", "flex-gap"],
        correct: 0,
        explanation: "Property 'gap' adalah cara modern untuk mengatur jarak antar flex items."
      },
      {
        id: 3,
        question: "Agar item pindah baris saat ruang sempit gunakan?",
        options: ["flex-wrap: wrap", "wrap: flex", "row-wrap", "overflow-wrap"],
        correct: 0,
        explanation: "flex-wrap: wrap membuat item pindah ke baris baru jika tidak cukup ruang."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `console.log('Flexbox cards loaded!');

const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    console.log(\`Card \${index + 1} button clicked\`);
  });
});`
    },
    tests: [
      { id: 1, description: ".cards menggunakan display: flex", passed: true },
      { id: 2, description: ".cards menggunakan flex-wrap: wrap", passed: true },
      { id: 3, description: "Ada breakpoint <= 768px untuk 2 kolom", passed: true },
      { id: 4, description: "Ada breakpoint <= 480px untuk 1 kolom", passed: true },
      { id: 5, description: "Button full-width di mobile", passed: true }
    ]
  },

  // CSS MAHIR
  "css-9": {
    id: "css-9",
    track: "CSS",
    level: "Mahir",
    title: "Animations: keyframes + micro-interactions",
    duration: "18 menit",
    xp: 35,
    description: "Membuat animasi halus menggunakan @keyframes dan micro-interactions untuk UX yang lebih baik.",
    objective: "Menguasai CSS animations untuk membuat interface yang hidup dan engaging.",
    content: [
      {
        type: "text",
        title: "CSS Animations",
        body: "CSS Animations menggunakan @keyframes untuk mendefinisikan animasi. Berbeda dengan transitions yang hanya animasi dari A ke B, keyframes bisa punya multiple steps."
      },
      {
        type: "code",
        title: "Keyframes Example",
        language: "css",
        code: `@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: fadeIn 0.5s ease-out;
}`
      },
      {
        type: "list",
        title: "Animation Best Practices",
        items: [
          "Gunakan transform dan opacity untuk performa terbaik",
          "Duration 200-500ms untuk micro-interactions",
          "Ease-out untuk entrance, ease-in untuk exit",
          "Hindari animasi layout properties (width, height, margin)"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Untuk mendefinisikan animasi CSS gunakan?",
        options: ["@keyframes", "@animate", "@motion", "@frames"],
        correct: 0,
        explanation: "@keyframes digunakan untuk mendefinisikan step-by-step animation."
      },
      {
        id: 2,
        question: "Properti untuk menjalankan keyframes adalah?",
        options: ["animation", "transition", "transform", "motion"],
        correct: 0,
        explanation: "Property 'animation' digunakan untuk menjalankan @keyframes yang sudah didefinisikan."
      },
      {
        id: 3,
        question: "Micro-interaction hover yang umum untuk button adalah?",
        options: ["transform + shadow", "font-size jump", "blur text", "invert all"],
        correct: 0,
        explanation: "Transform (biasanya translateY) dan shadow adalah kombinasi umum untuk button hover."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada minimal 1 @keyframes (fadeUp/pulse)", passed: true },
      { id: 2, description: ".card menggunakan animation fadeUp", passed: true },
      { id: 3, description: ".btn-primary:hover ada transform", passed: true },
      { id: 4, description: ".badge menggunakan pulse animation", passed: true },
      { id: 5, description: "Animation duration >= 300ms", passed: true }
    ]
  }
};

// ===== JAVASCRIPT LESSONS =====
export const JS_LESSONS = {
  "js-1": {
    id: "js-1",
    track: "JavaScript",
    level: "Dasar",
    title: "JavaScript Intro & Setup",
    duration: "15 menit",
    xp: 20,
    description: "Pengenalan JavaScript dan menjalankan kode pertama.",
    objective: "Memahami apa itu JavaScript dan cara menjalankan kode JS di browser.",
    content: [
      {
        type: "text",
        title: "Apa itu JavaScript?",
        body: "JavaScript adalah bahasa pemrograman yang membuat website interaktif. JS berjalan di browser dan bisa memanipulasi HTML/CSS secara dinamis."
      },
      {
        type: "code",
        title: "Hello World",
        language: "js",
        code: `// Tampilkan di console
console.log('Hello, World!');

// Alert popup
alert('Selamat datang di JavaScript!');

// Ubah konten HTML
document.getElementById('demo').textContent = 'JavaScript Aktif!';`
      },
      {
        type: "list",
        title: "Cara Menjalankan JavaScript",
        items: [
          "Di Browser Console (F12)",
          "Di tag <script> pada HTML",
          "File eksternal .js",
          "Online playground (CodePen, JSBin)"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Perintah untuk menampilkan teks di console browser adalah?",
        options: ["console.log()", "print()", "alert()", "display()"],
        correct: 0,
        explanation: "console.log() digunakan untuk debugging dan menampilkan output di browser console."
      },
      {
        id: 2,
        question: "Tag HTML untuk menambahkan JavaScript adalah?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        correct: 0,
        explanation: "<script> adalah tag yang tepat untuk menambahkan JavaScript di HTML."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada fungsi changeText()", passed: true },
      { id: 2, description: "console.log() digunakan", passed: true },
      { id: 3, description: "textContent diubah saat button diklik", passed: true }
    ]
  },

  "js-2": {
    id: "js-2",
    track: "JavaScript",
    level: "Dasar",
    title: "Variables & Data Types",
    duration: "18 menit",
    xp: 20,
    description: "Belajar variabel (let, const, var) dan tipe data JavaScript.",
    objective: "Menguasai deklarasi variabel dan memahami tipe data primitif.",
    content: [
      {
        type: "text",
        title: "Variabel di JavaScript",
        body: "Variabel adalah container untuk menyimpan data. Gunakan let untuk variabel yang bisa diubah, const untuk konstanta."
      },
      {
        type: "code",
        title: "Deklarasi Variabel",
        language: "js",
        code: `// let - bisa diubah
let name = 'Budi';
name = 'Andi'; // OK

// const - tidak bisa diubah
const PI = 3.14159;
// PI = 3.14; // ERROR!

// Tipe data
let number = 42;
let text = 'Hello';
let isActive = true;
let empty = null;`
      },
      {
        type: "list",
        title: "Tipe Data Primitif",
        items: [
          "String: 'teks' atau \"teks\"",
          "Number: 42, 3.14",
          "Boolean: true atau false",
          "null: nilai kosong sengaja",
          "undefined: belum diberi nilai"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Keyword yang tepat untuk variabel yang tidak berubah adalah?",
        options: ["const", "let", "var", "fixed"],
        correct: 0,
        explanation: "const digunakan untuk konstanta yang nilainya tidak akan berubah."
      },
      {
        id: 2,
        question: "Tipe data untuk teks adalah?",
        options: ["String", "Text", "Char", "Word"],
        correct: 0,
        explanation: "String adalah tipe data untuk menyimpan teks."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// TODO: Deklarasikan variabel dengan let dan const

// const untuk data yang tidak berubah
const appName = 'StepByWeb';
const version = '1.0';

// let untuk data yang bisa berubah
let userName = 'Budi Santoso';
let userAge = 25;
let isActive = true;
let points = 1250;

// Fungsi untuk menampilkan profile
function displayProfile() {
  const card = document.getElementById('profileCard');
  
  card.innerHTML = \`
    <div class="info">
      <span class="label">Nama:</span> \${userName}
    </div>
    <div class="info">
      <span class="label">Umur:</span> \${userAge} tahun
    </div>
    <div class="info">
      <span class="label">Status:</span> \${isActive ? 'Aktif 🟢' : 'Nonaktif'}
    </div>
    <div class="info">
      <span class="label">Points:</span> \${points} XP
    </div>
  \`;
  
  console.log('Profile displayed:', { userName, userAge, isActive, points });
}

// Fungsi untuk update data
function updateProfile() {
  // Ubah variabel
  userAge += 1;
  points += 100;
  
  // Update tampilan
  displayProfile();
  
  console.log('Profile updated!');
  console.log('New age:', userAge);
  console.log('New points:', points);
}

// Tampilkan profile saat load
displayProfile();`
    },
    tests: [
      { id: 1, description: "Ada const untuk appName dan version", passed: true },
      { id: 2, description: "Ada let untuk userName, userAge, points", passed: true },
      { id: 3, description: "displayProfile() render data ke HTML", passed: true },
      { id: 4, description: "updateProfile() mengubah nilai variabel", passed: true }
    ]
  }
};

// Navigation data for lessons
export const LESSON_NAV_DATA = {
  html: [
    // Dasar
    { id: "html-1", title: "Struktur Dokumen & Tag Dasar", level: "Dasar", completed: false, locked: false },
    { id: "html-2", title: "Teks, Link, dan Gambar", level: "Dasar", completed: false, locked: false },
    { id: "html-3", title: "List & Tabel", level: "Dasar", completed: false, locked: false },
    { id: "html-4", title: "Form Dasar", level: "Dasar", completed: false, locked: false },
    // Menengah
    { id: "html-5", title: "Semantic HTML", level: "Menengah", completed: false, locked: false },
    { id: "html-6", title: "Aksesibilitas", level: "Menengah", completed: false, locked: false },
    { id: "html-7", title: "Embed Media", level: "Menengah", completed: false, locked: true },
    { id: "html-8", title: "SEO Basics", level: "Menengah", completed: false, locked: true },
    // Mahir
    { id: "html-9", title: "Halaman Produk Lengkap", level: "Mahir", completed: false, locked: true },
    { id: "html-10", title: "Form Validasi UX", level: "Mahir", completed: false, locked: true },
    { id: "html-11", title: "Template Reusable", level: "Mahir", completed: false, locked: true },
    { id: "html-12", title: "HTML + JS Event", level: "Mahir", completed: false, locked: true },
  ],
  css: [
    // Dasar
    { id: "css-1", title: "Selectors & Specificity", level: "Dasar", completed: false, locked: false },
    { id: "css-2", title: "Box Model", level: "Dasar", completed: false, locked: false },
    { id: "css-3", title: "Typography & Colors", level: "Dasar", completed: false, locked: false },
    { id: "css-4", title: "Layout Dasar", level: "Dasar", completed: false, locked: false },
    // Menengah
    { id: "css-5", title: "Flexbox Layout", level: "Menengah", completed: false, locked: false },
    { id: "css-6", title: "Grid Layout", level: "Menengah", completed: false, locked: false },
    { id: "css-7", title: "Responsive Media Queries", level: "Menengah", completed: false, locked: true },
    { id: "css-8", title: "Transitions & Hover", level: "Menengah", completed: false, locked: true },
    // Mahir
    { id: "css-9", title: "Animations: keyframes", level: "Mahir", completed: false, locked: true },
    { id: "css-10", title: "Design System & Variables", level: "Mahir", completed: false, locked: true },
    { id: "css-11", title: "Complex Responsive Grid", level: "Mahir", completed: false, locked: true },
    { id: "css-12", title: "Accessible UI Styling", level: "Mahir", completed: false, locked: true },
  ],
  js: [
    // Dasar
    { id: "js-1", title: "JavaScript Intro & Setup", level: "Dasar", completed: false, locked: false },
    { id: "js-2", title: "Variables & Data Types", level: "Dasar", completed: false, locked: false },
    { id: "js-3", title: "Operators & Expressions", level: "Dasar", completed: false, locked: false },
    { id: "js-4", title: "Control Flow (if/else/switch)", level: "Dasar", completed: false, locked: false },
    // Menengah
    { id: "js-5", title: "Functions & Scope", level: "Menengah", completed: false, locked: false },
    { id: "js-6", title: "Arrays & Objects", level: "Menengah", completed: false, locked: false },
    { id: "js-7", title: "DOM Manipulation", level: "Menengah", completed: false, locked: true },
    { id: "js-8", title: "Events & Event Listeners", level: "Menengah", completed: false, locked: true },
    // Mahir
    { id: "js-9", title: "ES6+ Features", level: "Mahir", completed: false, locked: true },
    { id: "js-10", title: "Async JavaScript & Promises", level: "Mahir", completed: false, locked: true },
    { id: "js-11", title: "Fetch API & AJAX", level: "Mahir", completed: false, locked: true },
    { id: "js-12", title: "Modern JS Project", level: "Mahir", completed: false, locked: true },
  ]
};