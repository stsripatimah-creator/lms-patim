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
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dokumen HTML Pertama</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- TODO: Buat struktur dokumen dengan heading dan paragraf -->
  <h1>Selamat Datang di HTML</h1>
  <h2>Belajar Struktur Dasar</h2>
  <p>Ini adalah paragraf pertama saya. HTML adalah bahasa markup untuk membuat halaman web.</p>
  <p>Setiap halaman web dimulai dengan struktur HTML yang baik.</p>
  
  <h2>Kenapa HTML Penting?</h2>
  <p>HTML adalah fondasi dari semua website di internet.</p>
</body>
</html>`,
      css: `body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #f5f5f5;
}

h1 {
  color: #4F46E5;
  border-bottom: 3px solid #4F46E5;
  padding-bottom: 0.5rem;
}

h2 {
  color: #0EA5E9;
  margin-top: 1.5rem;
}

p {
  color: #333;
  margin-bottom: 1rem;
}`,
      js: `// No JavaScript needed for this lesson
console.log('HTML Basic Structure lesson loaded!');`
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
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kartu Profil</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- TODO: Buat kartu profil sederhana -->
  <div class="card">
    <h1>Profil Saya</h1>
    <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" alt="Foto profil" class="avatar">
    <p>Halo! Saya seorang <strong>web developer</strong> yang sedang belajar HTML.</p>
    <p>Saya suka membuat <em>website yang cantik dan fungsional</em>.</p>
    <a href="https://example.com" target="_blank" class="btn">Kunjungi Website</a>
  </div>
</body>
</html>`,
      css: `body {
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  text-align: center;
  max-width: 400px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 1rem 0;
  border: 4px solid #4F46E5;
}

h1 {
  color: #4F46E5;
  margin-bottom: 1rem;
}

p {
  color: #666;
  line-height: 1.6;
  margin: 0.5rem 0;
}

.btn {
  display: inline-block;
  background: #4F46E5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s;
}

.btn:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}`,
      js: `console.log('Profile card loaded!');`
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
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog StepByWeb</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- TODO: Buat layout semantik halaman blog -->
  <header>
    <h1>Blog StepByWeb</h1>
    <nav>
      <a href="#home">Beranda</a>
      <a href="#articles">Artikel</a>
      <a href="#about">Tentang</a>
    </nav>
  </header>

  <main>
    <article class="post">
      <h2>Belajar HTML5 Semantic Tags</h2>
      <p class="meta">Ditulis pada 22 Januari 2025</p>
      <p>Semantic HTML membuat kode lebih bermakna dan mudah dipahami oleh browser dan search engine. Gunakan tag yang sesuai dengan konten!</p>
    </article>

    <article class="post">
      <h2>Tips Membuat Website Responsif</h2>
      <p class="meta">Ditulis pada 20 Januari 2025</p>
      <p>Responsif design memastikan website tampil baik di semua perangkat. Gunakan media queries dan flexible layouts untuk hasil terbaik.</p>
    </article>
  </main>

  <footer>
    <p>&copy; 2025 StepByWeb. All rights reserved.</p>
  </footer>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
}

header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
}

header h1 {
  margin-bottom: 1rem;
}

nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 8px;
  transition: all 0.3s;
}

nav a:hover {
  background: white;
  color: #667eea;
}

main {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 2rem;
}

.post {
  background: white;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.post h2 {
  color: #4F46E5;
  margin-bottom: 0.5rem;
}

.meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

footer {
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
}`,
      js: `console.log('Semantic HTML blog loaded!');`
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
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Pendaftaran</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Daftar Akun</h1>
    <form id="registrationForm">
      <div class="form-group">
        <label for="name">Nama Lengkap</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
          placeholder="Masukkan nama lengkap"
        >
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          placeholder="nama@email.com"
        >
      </div>

      <div class="form-group">
        <label for="password">Password (min. 8 karakter)</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          required
          minlength="8"
          placeholder="Minimal 8 karakter"
        >
      </div>

      <button type="submit" class="btn">Daftar</button>
    </form>

    <div id="message"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.container {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  max-width: 450px;
  width: 100%;
}

h1 {
  color: #4F46E5;
  text-align: center;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
  font-size: 0.9rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s;
}

input:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
}

input:valid:not(:placeholder-shown) {
  border-color: #22c55e;
}

.btn {
  width: 100%;
  background: #4F46E5;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}

#message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  display: none;
}

#message.success {
  background: #d1fae5;
  color: #065f46;
  display: block;
}

#message.error {
  background: #fee2e2;
  color: #991b1b;
  display: block;
}`,
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
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Selectors</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1 id="title">Belajar CSS Selectors</h1>
    <p class="intro">Ini adalah paragraf pengantar.</p>
    <p>Ini paragraf biasa tanpa class.</p>
    
    <div class="card">
      <h2>Card Title</h2>
      <p>Konten di dalam card.</p>
      <button class="btn btn-primary">Click Me</button>
    </div>
  </div>
</body>
</html>`,
      css: `/* TODO: Tambahkan styles dengan berbagai selector */

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 20px;
  background: #f5f5f5;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 12px;
}

/* ID selector - specificity tinggi */
#title {
  color: #4F46E5;
  border-bottom: 3px solid #4F46E5;
  padding-bottom: 0.5rem;
}

/* Class selector */
.intro {
  font-size: 1.1rem;
  color: #666;
  font-style: italic;
}

/* Element selector */
p {
  line-height: 1.6;
  margin: 1rem 0;
}

/* Multiple classes */
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.btn-primary {
  background: #4F46E5;
  color: white;
}

.btn-primary:hover {
  background: #4338ca;
}

/* Descendant selector */
.card p {
  color: #333;
}

.card {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}`,
      js: `console.log('CSS Selectors lesson loaded!');`
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
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box Model Product Card</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="product-card">
    <img src="https://api.dicebear.com/9.x/shapes/svg?seed=product" alt="Product" class="product-img">
    <h2>Product Premium</h2>
    <p class="price">Rp 299.000</p>
    <p class="description">Produk berkualitas tinggi dengan fitur lengkap dan desain modern.</p>
    <button class="btn-buy">Beli Sekarang</button>
  </div>
</body>
</html>`,
      css: `body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

/* TODO: Lengkapi Box Model untuk .product-card */
.product-card {
  background: white;
  max-width: 420px;
  margin: 0 auto;
  /* TODO: Tambahkan padding */
  padding: 2rem;
  /* TODO: Tambahkan border dan border-radius */
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  text-align: center;
}

.product-img {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  margin-bottom: 1rem;
}

h2 {
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4F46E5;
  margin: 0.5rem 0;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* TODO: Lengkapi .btn-buy dengan padding dan hover effect */
.btn-buy {
  background: #4F46E5;
  color: white;
  border: none;
  /* TODO: Tambahkan padding yang nyaman */
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

/* TODO: Tambahkan hover effect */
.btn-buy:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}`,
      js: `console.log('Box Model lesson loaded!');

const btnBuy = document.querySelector('.btn-buy');
btnBuy.addEventListener('click', () => {
  alert('Produk ditambahkan ke keranjang! 🛒');
  console.log('Button clicked - Product added to cart');
});`
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
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Cards</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Fitur Unggulan</h1>
    
    <div class="cards">
      <div class="card">
        <div class="icon">🚀</div>
        <h3>Cepat</h3>
        <p>Performa tinggi dan loading super cepat untuk pengalaman terbaik.</p>
        <button class="btn">Pelajari</button>
      </div>
      
      <div class="card">
        <div class="icon">🎨</div>
        <h3>Modern</h3>
        <p>Desain modern dan elegan yang eye-catching dan user-friendly.</p>
        <button class="btn">Pelajari</button>
      </div>
      
      <div class="card">
        <div class="icon">🔒</div>
        <h3>Aman</h3>
        <p>Keamanan data terjamin dengan enkripsi tingkat enterprise.</p>
        <button class="btn">Pelajari</button>
      </div>
    </div>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #f5f5f5;
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #1f2937;
  margin-bottom: 3rem;
}

/* TODO: Gunakan Flexbox untuk responsive layout */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.card {
  /* Desktop: 3 kolom, Tablet: 2 kolom, Mobile: 1 kolom */
  flex: 1 1 320px;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  transition: all 0.3s;
  
  /* Untuk align button di bottom */
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h3 {
  color: #1f2937;
  margin-bottom: 0.75rem;
}

p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1; /* Push button to bottom */
}

.btn {
  background: #4F46E5;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  background: #4338ca;
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  .cards {
    gap: 1.5rem;
  }
  
  .card {
    flex: 1 1 calc(50% - 0.75rem); /* 2 kolom */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }
  
  .cards {
    gap: 1rem;
  }
  
  .card {
    flex: 1 1 100%; /* 1 kolom */
  }
  
  .btn {
    width: 100%; /* Full width di mobile */
  }
}`,
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
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animations</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="badge">New</div>
    <h1>Animated Card</h1>
    
    <div class="card">
      <div class="card-icon">✨</div>
      <h2>Premium Feature</h2>
      <p>Fitur eksklusif dengan animasi smooth dan micro-interactions yang membuat UX lebih menarik.</p>
      <button class="btn-primary">Get Started</button>
    </div>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.container {
  text-align: center;
  position: relative;
}

/* TODO: Tambahkan @keyframes untuk animasi */

/* Badge pulse animation */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

.badge {
  display: inline-block;
  background: #22c55e;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  /* Apply pulse animation */
  animation: pulse 2s ease-in-out infinite;
}

h1 {
  color: white;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

/* Card fade up animation */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  max-width: 450px;
  /* Apply fadeUp animation */
  animation: fadeUp 0.6s ease-out;
}

.card-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

h2 {
  color: #1f2937;
  margin-bottom: 1rem;
}

p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
}

/* Button micro-interaction */
.btn-primary {
  background: #4F46E5;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* TODO: Tambahkan hover effect dengan transform dan shadow */
.btn-primary:hover {
  background: #4338ca;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
}

.btn-primary:active {
  transform: translateY(-1px);
}

/* Shimmer effect on button */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

.btn-primary:hover::before {
  animation: shimmer 1.5s;
}`,
      js: `console.log('Animations lesson loaded!');

const btn = document.querySelector('.btn-primary');
btn.addEventListener('click', () => {
  console.log('Button clicked with animation!');
  btn.textContent = 'Loading...';
  
  setTimeout(() => {
    btn.textContent = 'Success! ✓';
    btn.style.background = '#22c55e';
  }, 1000);
  
  setTimeout(() => {
    btn.textContent = 'Get Started';
    btn.style.background = '#4F46E5';
  }, 2500);
});`
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
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Intro</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Selamat Datang di JavaScript!</h1>
    <p id="demo">Klik button untuk mengubah teks ini.</p>
    <button onclick="changeText()">Klik Saya!</button>
  </div>
  
  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.container {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  text-align: center;
  max-width: 500px;
}

h1 {
  color: #4F46E5;
  margin-bottom: 1.5rem;
}

#demo {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

button {
  background: #4F46E5;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}`,
      js: `// TODO: Buat fungsi untuk mengubah teks

function changeText() {
  // Ambil elemen dengan ID 'demo'
  const demoElement = document.getElementById('demo');
  
  // Ubah teks
  demoElement.textContent = '🎉 JavaScript Berhasil! Selamat belajar!';
  demoElement.style.color = '#22c55e';
  
  // Log di console
  console.log('Button clicked! Text changed successfully.');
}

// Log saat halaman dimuat
console.log('JavaScript loaded! Ready to run.');`
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
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Variables & Data Types</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Profile Card</h1>
    <div class="card" id="profileCard">
      <!-- Content will be filled by JavaScript -->
    </div>
    <button onclick="updateProfile()">Update Info</button>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: 'Inter', sans-serif;
  background: #f5f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.container {
  text-align: center;
}

h1 {
  color: #1f2937;
  margin-bottom: 2rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  max-width: 400px;
}

.info {
  text-align: left;
  margin: 1rem 0;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
}

.label {
  font-weight: 600;
  color: #4F46E5;
}

button {
  background: #4F46E5;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #4338ca;
  transform: translateY(-2px);
}`,
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