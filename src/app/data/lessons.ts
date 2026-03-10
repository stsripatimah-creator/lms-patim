// ============================================================
// lessons.ts — StepByWeb LMS
// ============================================================

// ===== HTML LESSONS =====

export const HTML_LESSONS: Record<string, any> = {

  "html-1": {
    id: "html-1",
    track: "HTML",
    level: "Dasar",
    title: "Pengenalan HTML",
    duration: "10 menit",
    xp: 20,
    description: "Pelajari dasar-dasar HTML dan struktur dokumen web.",
    objective: "Memahami apa itu HTML, cara kerja tag, dan membuat halaman HTML pertamamu.",
    content: [
      {
        type: "text",
        title: "Apa itu HTML?",
        body: "HTML (HyperText Markup Language) adalah bahasa markup yang digunakan untuk membuat halaman web. HTML mendeskripsikan struktur halaman web menggunakan elemen-elemen yang direpresentasikan oleh tag."
      },
      {
        type: "code",
        title: "Struktur Dasar HTML",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Halaman Pertamaku</title>
  </head>
  <body>
    <h1>Halo Dunia!</h1>
    <p>Ini adalah paragraf pertamaku.</p>
  </body>
</html>`
      },
      {
        type: "text",
        title: "Tag HTML",
        body: "Tag HTML adalah blok bangunan halaman HTML. Tag ditulis dengan kurung sudut seperti <tagname>. Sebagian besar tag memiliki tag pembuka dan penutup: <p> dan </p>."
      }
    ],
    quiz: [
      {
        question: "Apa kepanjangan dari HTML?",
        options: ["HyperText Markup Language", "High Text Markup Language", "HyperTransfer Markup Language", "HyperText Making Language"],
        answer: 0,
        explanation: "HTML adalah singkatan dari HyperText Markup Language, bahasa standar untuk membuat halaman web."
      },
      {
        question: "Tag apa yang digunakan untuk judul terbesar di HTML?",
        options: ["<h6>", "<title>", "<h1>", "<header>"],
        answer: 2,
        explanation: "<h1> adalah tag heading terbesar. HTML memiliki heading dari <h1> (terbesar) sampai <h6> (terkecil)."
      }
    ],
    initialCode: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Latihan HTML</title>
  </head>
  <body>
    <!-- Tulis kode HTML kamu di sini -->
    
  </body>
</html>`,
    tests: [
      { description: "Memiliki tag <h1>", test: (code: string) => code.includes("<h1>") },
      { description: "Memiliki tag <p>", test: (code: string) => code.includes("<p>") }
    ]
  },

  "html-2": {
    id: "html-2",
    track: "HTML",
    level: "Dasar",
    title: "Heading & Paragraf",
    duration: "10 menit",
    xp: 20,
    description: "Memahami penggunaan heading dan paragraf dalam HTML.",
    objective: "Menguasai semua level heading (h1-h6) dan tag paragraf dengan atribut dasar.",
    content: [
      {
        type: "text",
        title: "Heading HTML",
        body: "HTML menyediakan 6 level heading, dari <h1> (paling penting) hingga <h6> (paling kecil). Heading membantu struktur konten dan penting untuk SEO."
      },
      {
        type: "code",
        title: "Contoh Heading",
        language: "html",
        code: `<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>`
      },
      {
        type: "text",
        title: "Paragraf",
        body: "Tag <p> digunakan untuk membuat paragraf. Browser secara otomatis menambahkan spasi sebelum dan sesudah setiap paragraf."
      }
    ],
    quiz: [
      {
        question: "Berapa banyak level heading yang ada di HTML?",
        options: ["4", "5", "6", "8"],
        answer: 2,
        explanation: "HTML memiliki 6 level heading: h1, h2, h3, h4, h5, dan h6."
      },
      {
        question: "Tag apa yang digunakan untuk membuat paragraf?",
        options: ["<para>", "<p>", "<paragraph>", "<text>"],
        answer: 1,
        explanation: "Tag <p> adalah tag standar untuk membuat paragraf di HTML."
      }
    ],
    initialCode: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Heading & Paragraf</title>
  </head>
  <body>
    <!-- Buat minimal 2 heading dan 1 paragraf -->
    
  </body>
</html>`,
    tests: [
      { description: "Memiliki heading h1 atau h2", test: (code: string) => code.includes("<h1>") || code.includes("<h2>") },
      { description: "Memiliki tag paragraf <p>", test: (code: string) => code.includes("<p>") }
    ]
  },

  "html-5": {
    id: "html-5",
    track: "HTML",
    level: "Menengah",
    title: "Semantic HTML",
    duration: "15 menit",
    xp: 25,
    description: "Menggunakan elemen semantic HTML5 untuk struktur halaman yang lebih baik.",
    objective: "Memahami dan menggunakan elemen semantic seperti header, nav, main, section, article, aside, dan footer.",
    content: [
      {
        type: "text",
        title: "Apa itu Semantic HTML?",
        body: "Semantic HTML menggunakan elemen yang memiliki makna jelas tentang kontennya. Ini membantu browser, mesin pencari, dan screen reader memahami struktur halaman web."
      },
      {
        type: "code",
        title: "Struktur Semantic",
        language: "html",
        code: `<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <section>
    <article>
      <h2>Judul Artikel</h2>
      <p>Isi artikel...</p>
    </article>
  </section>
  <aside>
    <p>Konten sampingan</p>
  </aside>
</main>

<footer>
  <p>Copyright 2024</p>
</footer>`
      }
    ],
    quiz: [
      {
        question: "Apa keuntungan menggunakan Semantic HTML?",
        options: ["Membuat halaman lebih cepat", "Membantu SEO dan aksesibilitas", "Mengurangi ukuran file", "Membuat desain lebih bagus"],
        answer: 1,
        explanation: "Semantic HTML membantu mesin pencari (SEO) dan screen reader memahami struktur konten halaman."
      },
      {
        question: "Tag mana yang digunakan untuk konten utama halaman?",
        options: ["<section>", "<div>", "<main>", "<content>"],
        answer: 2,
        explanation: "<main> menandai konten utama halaman. Setiap halaman hanya boleh memiliki satu elemen <main>."
      }
    ],
    initialCode: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Semantic HTML</title>
  </head>
  <body>
    <!-- Buat struktur halaman dengan semantic HTML -->
    
  </body>
</html>`,
    tests: [
      { description: "Menggunakan tag <header>", test: (code: string) => code.includes("<header>") },
      { description: "Menggunakan tag <main>", test: (code: string) => code.includes("<main>") },
      { description: "Menggunakan tag <footer>", test: (code: string) => code.includes("<footer>") }
    ]
  },

  "html-10": {
    id: "html-10",
    track: "HTML",
    level: "Menengah",
    title: "Link & Navigasi",
    duration: "12 menit",
    xp: 20,
    description: "Membuat link dan sistem navigasi yang efektif.",
    objective: "Menguasai pembuatan hyperlink, anchor link, dan navigasi multi-level.",
    content: [
      {
        type: "text",
        title: "Hyperlink",
        body: "Tag <a> (anchor) digunakan untuk membuat hyperlink. Atribut href menentukan URL tujuan. Link bisa menuju halaman lain, bagian dalam halaman, atau file."
      },
      {
        type: "code",
        title: "Contoh Link",
        language: "html",
        code: `<!-- Link ke halaman lain -->
<a href="https://google.com">Google</a>

<!-- Link ke halaman dalam website -->
<a href="/about">Tentang Kami</a>

<!-- Link ke bagian dalam halaman -->
<a href="#contact">Hubungi Kami</a>

<!-- Link membuka tab baru -->
<a href="https://google.com" target="_blank">Google (tab baru)</a>`
      }
    ],
    quiz: [
      {
        question: "Atribut apa yang digunakan untuk menentukan URL tujuan sebuah link?",
        options: ["src", "href", "url", "link"],
        answer: 1,
        explanation: "Atribut href (hypertext reference) pada tag <a> digunakan untuk menentukan URL tujuan link."
      },
      {
        question: "Nilai atribut target apa yang membuka link di tab baru?",
        options: ["_new", "_tab", "_blank", "_top"],
        answer: 2,
        explanation: "target=\"_blank\" membuat link terbuka di tab atau jendela browser baru."
      }
    ],
    initialCode: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Link & Navigasi</title>
  </head>
  <body>
    <!-- Buat navigasi dengan minimal 3 link -->
    
  </body>
</html>`,
    tests: [
      { description: "Memiliki minimal satu tag <a>", test: (code: string) => code.includes("<a ") || code.includes("<a\n") },
      { description: "Link memiliki atribut href", test: (code: string) => code.includes("href=") }
    ]
  },


  "html-3": {
    id: "html-3",
    track: "HTML",
    level: "Dasar",
    title: "List & Tabel",
    duration: "12 menit",
    xp: 20,
    description: "Menampilkan data terstruktur menggunakan list dan tabel HTML.",
    objective: "Menguasai pembuatan ordered list, unordered list, dan tabel HTML yang semantic.",
    content: [
      {
        type: "text",
        title: "HTML List",
        body: "HTML menyediakan dua jenis list utama: Ordered List (<ol>) untuk urutan bernomor, dan Unordered List (<ul>) untuk daftar dengan bullet. Setiap item menggunakan tag <li>."
      },
      {
        type: "code",
        title: "Contoh List",
        language: "html",
        code: `<!-- Unordered List -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>Buka browser</li>
  <li>Ketik URL</li>
  <li>Tekan Enter</li>
</ol>`
      },
      {
        type: "text",
        title: "HTML Tabel",
        body: "Tabel digunakan untuk menampilkan data dalam format baris dan kolom. Gunakan <table>, <thead>, <tbody>, <tr> (baris), <th> (header), dan <td> (data)."
      },
      {
        type: "code",
        title: "Contoh Tabel",
        language: "html",
        code: `<table>
  <thead>
    <tr>
      <th>Nama</th>
      <th>Nilai</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Budi</td>
      <td>90</td>
      <td>A</td>
    </tr>
    <tr>
      <td>Ani</td>
      <td>75</td>
      <td>B</td>
    </tr>
  </tbody>
</table>`
      },
      {
        type: "list",
        title: "Tag Tabel Penting",
        items: [
          "<table>: Container utama tabel",
          "<thead>: Bagian header tabel (semantic)",
          "<tbody>: Bagian isi data tabel (semantic)",
          "<tr>: Table Row (baris)",
          "<th>: Table Header (judul kolom, bold & center otomatis)",
          "<td>: Table Data (isi cell biasa)"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Tag yang digunakan untuk setiap item dalam list adalah?",
        options: ["<li>", "<item>", "<list-item>", "<dt>"],
        correct: 0,
        explanation: "<li> (list item) digunakan di dalam <ul> maupun <ol>."
      },
      {
        id: 2,
        question: "Untuk menampilkan daftar langkah-langkah (berurutan), gunakan?",
        options: ["<ol>", "<ul>", "<dl>", "<list>"],
        correct: 0,
        explanation: "<ol> (ordered list) menghasilkan nomor otomatis untuk setiap item."
      },
      {
        id: 3,
        question: "Tag HTML untuk baris header tabel adalah?",
        options: ["<th>", "<td>", "<tr>", "<thead>"],
        correct: 0,
        explanation: "<th> (table header) secara default ditampilkan tebal dan rata tengah."
      }
    ],
    initialCode: {
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada <ul> dengan minimal 3 <li>", passed: true },
      { id: 2, description: "Ada <ol> dengan minimal 3 <li>", passed: true },
      { id: 3, description: "Ada <table> dengan <thead> dan <tbody>", passed: true },
      { id: 4, description: "Tabel memiliki minimal 3 kolom", passed: true }
    ]
  },

  "html-4": {
    id: "html-4",
    track: "HTML",
    level: "Dasar",
    title: "Form Dasar",
    duration: "15 menit",
    xp: 20,
    description: "Membuat form HTML untuk input data pengguna.",
    objective: "Menguasai pembuatan form dengan berbagai jenis input, label, dan button submit.",
    content: [
      {
        type: "text",
        title: "HTML Form",
        body: "Form digunakan untuk mengumpulkan input dari pengguna. Tag <form> membungkus semua elemen input. Atribut action menentukan ke mana data dikirim, method menentukan cara pengiriman (GET/POST)."
      },
      {
        type: "code",
        title: "Contoh Form Dasar",
        language: "html",
        code: `<form action="/submit" method="POST">
  <label for="nama">Nama:</label>
  <input type="text" id="nama" name="nama" placeholder="Masukkan nama">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <label for="pesan">Pesan:</label>
  <textarea id="pesan" name="pesan" rows="4"></textarea>
  
  <label>
    <input type="checkbox" name="setuju"> Saya setuju
  </label>
  
  <button type="submit">Kirim</button>
</form>`
      },
      {
        type: "list",
        title: "Input Types Umum",
        items: [
          "text: Input teks satu baris",
          "email: Input email (auto-validasi format)",
          "password: Input tersembunyi (bintang)",
          "number: Input angka",
          "checkbox: Pilihan centang",
          "radio: Pilihan satu dari beberapa",
          "textarea: Input teks multi-baris",
          "select: Dropdown pilihan"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Tag yang menghubungkan label dengan input adalah atribut?",
        options: ["for + id", "name + class", "label + input", "link + ref"],
        correct: 0,
        explanation: "Atribut 'for' pada <label> harus sama dengan 'id' pada <input> agar terhubung."
      },
      {
        id: 2,
        question: "Input type untuk kata sandi yang tersembunyi adalah?",
        options: ["password", "secret", "hidden", "secure"],
        correct: 0,
        explanation: "type='password' menampilkan karakter sebagai titik/bintang."
      },
      {
        id: 3,
        question: "Tag untuk area teks multi-baris adalah?",
        options: ["<textarea>", "<input type='multiline'>", "<text>", "<input type='area'>"],
        correct: 0,
        explanation: "<textarea> memungkinkan input teks panjang multi-baris."
      }
    ],
    initialCode: {
      html: `<!-- Buat form registrasi dengan: nama, email, password, dan tombol daftar -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada <form> dengan method POST", passed: true },
      { id: 2, description: "Ada input nama dengan label", passed: true },
      { id: 3, description: "Ada input email dengan label", passed: true },
      { id: 4, description: "Ada input password", passed: true },
      { id: 5, description: "Ada button submit", passed: true }
    ]
  },

  "html-6": {
    id: "html-6",
    track: "HTML",
    level: "Menengah",
    title: "Aksesibilitas Web (a11y)",
    duration: "15 menit",
    xp: 25,
    description: "Membuat halaman web yang accessible untuk semua pengguna termasuk difabel.",
    objective: "Memahami prinsip aksesibilitas dan menerapkan ARIA attributes serta semantic HTML.",
    content: [
      {
        type: "text",
        title: "Apa itu Aksesibilitas Web?",
        body: "Aksesibilitas (a11y) memastikan website dapat digunakan oleh semua orang, termasuk pengguna dengan keterbatasan visual, pendengaran, atau motorik. Screen reader seperti NVDA membaca HTML untuk pengguna tunanetra."
      },
      {
        type: "code",
        title: "ARIA Attributes",
        language: "html",
        code: `<!-- Label untuk screen reader -->
<button aria-label="Tutup dialog">×</button>

<!-- Mendeskripsikan elemen -->
<img src="chart.png" alt="Grafik penjualan Q4 2024 naik 20%">

<!-- Landmark roles -->
<nav role="navigation" aria-label="Menu utama">
  <a href="#main" class="skip-link">Skip to main content</a>
</nav>

<!-- Form accessibility -->
<label for="search">Cari produk:</label>
<input id="search" type="search" aria-describedby="search-hint">
<span id="search-hint">Masukkan nama atau kategori produk</span>`
      },
      {
        type: "list",
        title: "Prinsip Aksesibilitas (WCAG)",
        items: [
          "Perceivable: Konten bisa dilihat/didengar semua user",
          "Operable: Semua fungsi bisa diakses keyboard",
          "Understandable: Konten mudah dipahami",
          "Robust: Compatible dengan berbagai assistive technology",
          "Kontras warna minimal 4.5:1 untuk teks normal",
          "Semua gambar punya alt text yang deskriptif"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Atribut yang memberikan label tersembunyi untuk screen reader adalah?",
        options: ["aria-label", "alt", "title", "placeholder"],
        correct: 0,
        explanation: "aria-label memberikan label yang dibacakan screen reader tapi tidak terlihat di layar."
      },
      {
        id: 2,
        question: "Agar halaman bisa dinavigasi dengan keyboard, elemen interaktif harus bisa?",
        options: ["Difokus (focusable)", "Diklik mouse", "Di-hover", "Disentuh"],
        correct: 0,
        explanation: "Elemen interaktif harus bisa difokus dengan Tab key untuk aksesibilitas keyboard."
      }
    ],
    initialCode: {
      html: `<!-- Tambahkan aria-label, alt text, dan skip navigation -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Semua <img> punya alt text deskriptif", passed: true },
      { id: 2, description: "Ada skip navigation link", passed: true },
      { id: 3, description: "Form inputs memiliki label yang terhubung", passed: true },
      { id: 4, description: "Ada aria-label pada button icon", passed: true }
    ]
  },

  "html-7": {
    id: "html-7",
    track: "HTML",
    level: "Menengah",
    title: "Embed Media: Video, Audio, Iframe",
    duration: "12 menit",
    xp: 25,
    description: "Menambahkan video, audio, dan konten embed ke halaman web.",
    objective: "Menguasai cara embed media HTML5 native dan konten pihak ketiga seperti YouTube.",
    content: [
      {
        type: "text",
        title: "HTML5 Media",
        body: "HTML5 memperkenalkan tag <video> dan <audio> native tanpa plugin. Ini lebih baik untuk SEO, aksesibilitas, dan performa dibanding Flash atau plugin lama."
      },
      {
        type: "code",
        title: "Video & Audio",
        language: "html",
        code: `<!-- Video HTML5 -->
<video controls width="640" poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Browser kamu tidak mendukung video.
</video>

<!-- Audio HTML5 -->
<audio controls>
  <source src="lagu.mp3" type="audio/mpeg">
  Browser kamu tidak mendukung audio.
</audio>

<!-- Embed YouTube -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  allowfullscreen
  title="Judul video">
</iframe>`
      },
      {
        type: "list",
        title: "Atribut Media Penting",
        items: [
          "controls: Menampilkan tombol play/pause/volume",
          "autoplay: Auto-play (perlu muted di Chrome)",
          "muted: Bisukan audio otomatis",
          "loop: Putar ulang terus",
          "poster: Gambar thumbnail sebelum video diputar",
          "preload: auto/metadata/none"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Atribut yang menampilkan kontrol media player adalah?",
        options: ["controls", "play", "player", "ui"],
        correct: 0,
        explanation: "Atribut 'controls' menampilkan built-in media controls browser."
      },
      {
        id: 2,
        question: "Tag untuk embed konten eksternal seperti YouTube adalah?",
        options: ["<iframe>", "<embed>", "<object>", "<video>"],
        correct: 0,
        explanation: "<iframe> digunakan untuk embed halaman/konten dari sumber lain."
      }
    ],
    initialCode: {
      html: `<!-- Embed video YouTube dan tambahkan audio player -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada <video> atau <iframe> YouTube", passed: true },
      { id: 2, description: "Video/iframe memiliki title untuk aksesibilitas", passed: true },
      { id: 3, description: "Ada <audio> dengan controls", passed: true },
      { id: 4, description: "Video responsif dengan max-width: 100%", passed: true }
    ]
  },

  "html-8": {
    id: "html-8",
    track: "HTML",
    level: "Menengah",
    title: "SEO Basics dengan Meta Tags",
    duration: "12 menit",
    xp: 25,
    description: "Mengoptimalkan halaman web untuk mesin pencari menggunakan meta tags.",
    objective: "Menerapkan meta tags SEO, Open Graph, dan struktur heading yang benar.",
    content: [
      {
        type: "text",
        title: "SEO dengan HTML",
        body: "SEO (Search Engine Optimization) dimulai dari HTML yang baik. Meta tags di dalam <head> memberikan informasi tentang halaman kepada mesin pencari seperti Google."
      },
      {
        type: "code",
        title: "Meta Tags SEO",
        language: "html",
        code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Basics -->
  <title>Belajar HTML - StepByWeb | Kursus Web Terbaik</title>
  <meta name="description" content="Pelajari HTML dari dasar hingga mahir. 
    Kurikulum terstruktur dengan latihan langsung.">
  <meta name="keywords" content="belajar html, tutorial html, kursus web">
  
  <!-- Open Graph (untuk social media) -->
  <meta property="og:title" content="Belajar HTML - StepByWeb">
  <meta property="og:description" content="Kursus HTML terlengkap">
  <meta property="og:image" content="https://example.com/og-image.jpg">
  <meta property="og:url" content="https://stepbyweb.com">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://stepbyweb.com/html">
</head>`
      },
      {
        type: "list",
        title: "Faktor SEO di HTML",
        items: [
          "Title tag: Maks 60 karakter, kata kunci di awal",
          "Meta description: 150-160 karakter, menarik untuk diklik",
          "Heading hierarchy: Satu <h1>, diikuti <h2>, <h3>",
          "Alt text gambar: Deskriptif dan mengandung keyword relevan",
          "URL slug yang bersih dan deskriptif",
          "Schema markup untuk rich snippets"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Panjang ideal title tag untuk SEO adalah?",
        options: ["50-60 karakter", "100-150 karakter", "10-20 karakter", "200+ karakter"],
        correct: 0,
        explanation: "Google menampilkan ~60 karakter pertama dari title tag di hasil pencarian."
      },
      {
        id: 2,
        question: "Meta tag yang mengontrol tampilan di social media adalah?",
        options: ["Open Graph (og:)", "meta keywords", "meta robots", "meta author"],
        correct: 0,
        explanation: "Open Graph meta tags (og:title, og:image, dll) mengontrol tampilan saat link dibagikan di social media."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <!-- Lengkapi meta tags SEO di sini -->
</head>
<body>
  <!-- Buat struktur heading yang benar -->
</body>
</html>`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada <title> dengan panjang 40-60 karakter", passed: true },
      { id: 2, description: "Ada meta description", passed: true },
      { id: 3, description: "Ada Open Graph tags (og:title, og:description)", passed: true },
      { id: 4, description: "Hanya ada satu <h1> di halaman", passed: true }
    ]
  },

  "html-9": {
    id: "html-9",
    track: "HTML",
    level: "Mahir",
    title: "Halaman Produk Lengkap",
    duration: "25 menit",
    xp: 35,
    description: "Membangun halaman produk e-commerce lengkap dengan HTML semantic.",
    objective: "Menggabungkan semua skill HTML untuk membuat halaman produk yang realistis dan accessible.",
    content: [
      {
        type: "text",
        title: "Project: Halaman Produk",
        body: "Di lesson ini kamu akan membangun halaman produk lengkap seperti Tokopedia atau Shopee. Ini menggabungkan semantic HTML, form, tabel spesifikasi, aksesibilitas, dan SEO."
      },
      {
        type: "code",
        title: "Struktur Halaman Produk",
        language: "html",
        code: `<main>
  <nav aria-label="Breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/elektronik">Elektronik</a></li>
      <li aria-current="page">Headphones Pro X</li>
    </ol>
  </nav>

  <article itemscope itemtype="https://schema.org/Product">
    <div class="product-gallery">
      <img src="headphone-main.jpg" 
           alt="Headphones Pro X warna hitam, tampak depan"
           itemprop="image">
    </div>
    
    <div class="product-info">
      <h1 itemprop="name">Headphones Pro X</h1>
      <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <span itemprop="price">599000</span>
      </div>
      
      <form>
        <fieldset>
          <legend>Pilih Warna</legend>
          <label><input type="radio" name="color" value="black"> Hitam</label>
          <label><input type="radio" name="color" value="white"> Putih</label>
        </fieldset>
        <button type="submit">Tambah ke Keranjang</button>
      </form>
    </div>
  </article>

  <section aria-label="Spesifikasi">
    <h2>Spesifikasi Teknis</h2>
    <table>
      <tbody>
        <tr><th scope="row">Driver</th><td>40mm Dynamic</td></tr>
        <tr><th scope="row">Frequency</th><td>20Hz - 20kHz</td></tr>
      </tbody>
    </table>
  </section>
</main>`
      },
      {
        type: "list",
        title: "Checklist Halaman Produk",
        items: [
          "Breadcrumb navigation untuk UX dan SEO",
          "Schema.org markup untuk rich snippets Google",
          "Gallery gambar dengan alt text deskriptif",
          "Form pilihan varian (warna, ukuran) yang accessible",
          "Tabel spesifikasi dengan scope attribute",
          "Section ulasan/review pengguna",
          "Related products section"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Schema.org markup di HTML berguna untuk?",
        options: ["Rich snippets di Google Search", "Styling visual", "Animasi", "Form validation"],
        correct: 0,
        explanation: "Schema.org markup membantu Google menampilkan informasi tambahan (rating, harga) di hasil pencarian."
      },
      {
        id: 2,
        question: "Atribut 'scope' pada <th> berguna untuk?",
        options: [
          "Menghubungkan header dengan data untuk screen reader",
          "Mengatur lebar kolom",
          "Styling CSS",
          "Sorting tabel"
        ],
        correct: 0,
        explanation: "scope='row' atau scope='col' membantu screen reader memahami relasi header-data."
      }
    ],
    initialCode: {
      html: `<!-- Bangun halaman produk lengkap dengan semua elemen yang dipelajari -->`,
      css: `/* Style halaman produk kamu */`,
      js: `// Tambahkan interaktivitas: galeri, tambah ke keranjang, dll`
    },
    tests: [
      { id: 1, description: "Ada breadcrumb navigation dengan <ol>", passed: true },
      { id: 2, description: "Ada <article> dengan Schema.org markup", passed: true },
      { id: 3, description: "Ada form pemilihan varian produk", passed: true },
      { id: 4, description: "Ada tabel spesifikasi dengan scope", passed: true },
      { id: 5, description: "Semua gambar punya alt text deskriptif", passed: true }
    ]
  },

  "html-11": {
    id: "html-11",
    track: "HTML",
    level: "Mahir",
    title: "HTML Template & Web Components",
    duration: "20 menit",
    xp: 35,
    description: "Membuat komponen reusable dengan HTML template dan custom elements.",
    objective: "Memahami konsep template HTML dan dasar-dasar Web Components.",
    content: [
      {
        type: "text",
        title: "HTML Template",
        body: "Tag <template> berisi HTML yang tidak dirender langsung. Kontennya bisa diclone dan dimasukkan ke DOM via JavaScript. Ini adalah fondasi reusable components sebelum framework seperti React."
      },
      {
        type: "code",
        title: "Menggunakan Template",
        language: "html",
        code: `<!-- Template didefinisikan tapi tidak dirender -->
<template id="card-template">
  <div class="card">
    <img class="card-img" src="" alt="">
    <div class="card-body">
      <h3 class="card-title"></h3>
      <p class="card-desc"></p>
    </div>
  </div>
</template>

<div id="card-container"></div>

<script>
const template = document.getElementById('card-template');
const container = document.getElementById('card-container');

const products = [
  { title: 'Laptop', desc: 'Core i7', img: 'laptop.jpg' },
  { title: 'Mouse', desc: 'Wireless', img: 'mouse.jpg' },
];

products.forEach(product => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.card-title').textContent = product.title;
  clone.querySelector('.card-desc').textContent = product.desc;
  clone.querySelector('.card-img').src = product.img;
  clone.querySelector('.card-img').alt = product.title;
  container.appendChild(clone);
});
</script>`
      },
      {
        type: "list",
        title: "Keuntungan HTML Template",
        items: [
          "DRY (Don't Repeat Yourself) - tulis struktur sekali",
          "Tidak dirender sampai dibutuhkan (performa lebih baik)",
          "Bisa diisi data dinamis dari JavaScript atau API",
          "Fondasi untuk memahami framework seperti React/Vue",
          "Didukung semua browser modern tanpa library"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Tag <template> ketika dirender akan?",
        options: [
          "Tidak terlihat, menunggu diclone via JS",
          "Tampil langsung di halaman",
          "Menyembunyikan elemen",
          "Membuat komponen otomatis"
        ],
        correct: 0,
        explanation: "Konten <template> tidak dirender browser sampai di-clone dan ditambahkan ke DOM via JavaScript."
      },
      {
        id: 2,
        question: "Method untuk menduplikasi konten template adalah?",
        options: ["cloneNode(true)", "copy()", "duplicate()", "template.clone()"],
        correct: 0,
        explanation: "cloneNode(true) mengkloning node beserta semua childnya."
      }
    ],
    initialCode: {
      html: `<template id="product-template">
  <!-- Desain card produk di sini -->
</template>
<div id="products"></div>`,
      css: `/* Style card template */`,
      js: `const products = [
  { name: 'HTML Course', price: 'Gratis', level: 'Dasar' },
  { name: 'CSS Course', price: 'Gratis', level: 'Dasar' },
  { name: 'JS Course', price: 'Rp 99.000', level: 'Menengah' },
];
// Render setiap produk menggunakan template`
    },
    tests: [
      { id: 1, description: "Ada <template> dengan id", passed: true },
      { id: 2, description: "JS menggunakan cloneNode(true)", passed: true },
      { id: 3, description: "Data dirender ke dalam clone", passed: true },
      { id: 4, description: "Minimal 3 produk dirender", passed: true }
    ]
  },

  "html-12": {
    id: "html-12",
    track: "HTML",
    level: "Mahir",
    title: "HTML + JS: Event Handling & DOM",
    duration: "20 menit",
    xp: 35,
    description: "Menghubungkan HTML dengan JavaScript untuk membuat halaman interaktif.",
    objective: "Menguasai DOM manipulation dan event handling untuk interaktivitas web.",
    content: [
      {
        type: "text",
        title: "DOM & Event Handling",
        body: "DOM (Document Object Model) adalah representasi HTML sebagai tree object yang bisa dimanipulasi JavaScript. Event handling memungkinkan respons terhadap aksi pengguna seperti klik, input, scroll."
      },
      {
        type: "code",
        title: "Event Delegation Pattern",
        language: "html",
        code: `<ul id="todo-list">
  <li data-id="1">Belajar HTML <button class="delete">×</button></li>
  <li data-id="2">Belajar CSS <button class="delete">×</button></li>
</ul>
<input id="new-todo" placeholder="Tambah tugas...">
<button id="add-btn">Tambah</button>

<script>
const list = document.getElementById('todo-list');
const input = document.getElementById('new-todo');
const addBtn = document.getElementById('add-btn');

// Event delegation - 1 listener untuk semua item
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.closest('li').remove();
  }
});

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.innerHTML = \`\${text} <button class="delete">×</button>\`;
  list.appendChild(li);
  input.value = '';
});

// Enter key support
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addBtn.click();
});
</script>`
      },
      {
        type: "list",
        title: "Event Penting untuk Dipahami",
        items: [
          "click: Saat elemen diklik",
          "input/change: Saat nilai input berubah",
          "submit: Saat form disubmit",
          "keydown/keyup: Saat tombol keyboard ditekan",
          "DOMContentLoaded: Saat HTML selesai dimuat",
          "scroll: Saat halaman discroll"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Event delegation cocok untuk?",
        options: [
          "Elemen yang ditambahkan secara dinamis",
          "Styling elemen",
          "Validasi form",
          "Animasi"
        ],
        correct: 0,
        explanation: "Event delegation memungkinkan satu listener menangani event dari elemen child yang mungkin belum ada saat listener dipasang."
      },
      {
        id: 2,
        question: "Method untuk membuat elemen HTML baru via JS adalah?",
        options: ["document.createElement()", "new Element()", "document.newElement()", "HTML.create()"],
        correct: 0,
        explanation: "document.createElement('tag') membuat elemen HTML baru yang bisa dimodifikasi sebelum ditambah ke DOM."
      }
    ],
    initialCode: {
      html: `<!-- Buat aplikasi todo list sederhana -->`,
      css: `/* Style todo list */`,
      js: `// Implementasikan: tambah, hapus, centang todo item`
    },
    tests: [
      { id: 1, description: "Bisa menambah item baru", passed: true },
      { id: 2, description: "Bisa menghapus item", passed: true },
      { id: 3, description: "Input bersih setelah tambah", passed: true },
      { id: 4, description: "Enter key juga bisa tambah item", passed: true }
    ]
  }
};


// ===== CSS LESSONS =====

export const CSS_LESSONS: Record<string, any> = {

  "css-1": {
    id: "css-1",
    track: "CSS",
    level: "Dasar",
    title: "Pengenalan CSS",
    duration: "10 menit",
    xp: 20,
    description: "Pelajari dasar-dasar CSS untuk styling halaman web.",
    objective: "Memahami cara kerja CSS, selector dasar, dan cara menghubungkan CSS ke HTML.",
    content: [
      {
        type: "text",
        title: "Apa itu CSS?",
        body: "CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendeskripsikan presentasi dokumen HTML. CSS mengontrol warna, font, ukuran, dan tata letak elemen."
      },
      {
        type: "code",
        title: "Sintaks CSS Dasar",
        language: "css",
        code: `/* Selector { property: value; } */
h1 {
  color: blue;
  font-size: 24px;
}

p {
  color: gray;
  line-height: 1.6;
}`
      },
      {
        type: "text",
        title: "Cara Menambahkan CSS",
        body: "Ada 3 cara: Inline (di dalam tag HTML), Internal (di dalam tag <style>), dan External (file .css terpisah). External CSS adalah cara yang paling direkomendasikan."
      }
    ],
    quiz: [
      {
        question: "Apa kepanjangan dari CSS?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: 1,
        explanation: "CSS adalah singkatan dari Cascading Style Sheets, digunakan untuk mengatur tampilan halaman web."
      },
      {
        question: "Cara mana yang paling direkomendasikan untuk menambahkan CSS?",
        options: ["Inline CSS", "Internal CSS", "External CSS", "Semua sama"],
        answer: 2,
        explanation: "External CSS (file .css terpisah) adalah cara terbaik karena memisahkan konten dan style, serta bisa digunakan di banyak halaman."
      }
    ],
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Tulis CSS kamu di sini */
      
    </style>
  </head>
  <body>
    <h1>Judul Halaman</h1>
    <p>Ini adalah paragraf.</p>
  </body>
</html>`,
    tests: [
      { description: "Menggunakan properti color", test: (code: string) => code.includes("color:") },
      { description: "Menggunakan properti font-size", test: (code: string) => code.includes("font-size:") }
    ]
  },

  "css-2": {
    id: "css-2",
    track: "CSS",
    level: "Dasar",
    title: "Selector & Spesifisitas",
    duration: "12 menit",
    xp: 20,
    description: "Menguasai berbagai jenis selector CSS dan cara kerjanya.",
    objective: "Memahami element selector, class selector, ID selector, dan cara menghitung spesifisitas.",
    content: [
      {
        type: "text",
        title: "Jenis-jenis Selector",
        body: "CSS memiliki banyak jenis selector: Element (h1, p), Class (.nama-class), ID (#nama-id), Attribute ([type='text']), dan Pseudo-class (:hover, :focus)."
      },
      {
        type: "code",
        title: "Contoh Selector",
        language: "css",
        code: `/* Element selector */
p { color: black; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#header { font-size: 2rem; }

/* Descendant selector */
nav a { text-decoration: none; }

/* Pseudo-class */
a:hover { color: red; }`
      }
    ],
    quiz: [
      {
        question: "Selector mana yang memiliki spesifisitas tertinggi?",
        options: ["Element selector", "Class selector", "ID selector", "Pseudo-class"],
        answer: 2,
        explanation: "ID selector memiliki spesifisitas tertinggi di antara selector biasa (tanpa !important atau inline style)."
      },
      {
        question: "Bagaimana cara menulis class selector di CSS?",
        options: ["#nama-class", ".nama-class", "*nama-class", "@nama-class"],
        answer: 1,
        explanation: "Class selector ditulis dengan tanda titik (.) diikuti nama class, contoh: .highlight"
      }
    ],
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Gunakan minimal 3 jenis selector berbeda */
      
    </style>
  </head>
  <body>
    <h1 id="judul">Judul Utama</h1>
    <p class="highlight">Paragraf penting</p>
    <p>Paragraf biasa</p>
  </body>
</html>`,
    tests: [
      { description: "Menggunakan class selector (.)", test: (code: string) => /\.[a-zA-Z]/.test(code) },
      { description: "Menggunakan ID selector (#)", test: (code: string) => /#[a-zA-Z]/.test(code) }
    ]
  },

  "css-5": {
    id: "css-5",
    track: "CSS",
    level: "Menengah",
    title: "Flexbox Layout",
    duration: "20 menit",
    xp: 30,
    description: "Menguasai CSS Flexbox untuk layout yang fleksibel dan responsif.",
    objective: "Memahami flex container, flex items, dan properti-properti Flexbox utama.",
    content: [
      {
        type: "text",
        title: "Apa itu Flexbox?",
        body: "Flexbox (Flexible Box Layout) adalah model layout CSS yang memudahkan pengaturan elemen dalam satu dimensi (baris atau kolom). Sangat berguna untuk membuat layout yang responsif."
      },
      {
        type: "code",
        title: "Flexbox Dasar",
        language: "css",
        code: `.container {
  display: flex;
  justify-content: center;  /* sumbu utama */
  align-items: center;      /* sumbu silang */
  gap: 16px;
}

.item {
  flex: 1;  /* tumbuh sama rata */
}`
      }
    ],
    quiz: [
      {
        question: "Properti CSS apa yang mengaktifkan Flexbox pada sebuah container?",
        options: ["flex: true", "display: flex", "layout: flex", "position: flex"],
        answer: 1,
        explanation: "display: flex mengaktifkan Flexbox pada elemen container, membuat child elements menjadi flex items."
      },
      {
        question: "Properti apa yang mengatur perataan item pada sumbu utama (main axis)?",
        options: ["align-items", "align-content", "justify-content", "flex-align"],
        answer: 2,
        explanation: "justify-content mengatur distribusi ruang antar flex items pada sumbu utama (horizontal secara default)."
      }
    ],
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        /* Aktifkan flexbox di sini */
        
      }
      .item {
        width: 100px;
        height: 100px;
        background: coral;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>`,
    tests: [
      { description: "Menggunakan display: flex", test: (code: string) => code.includes("display: flex") || code.includes("display:flex") },
      { description: "Menggunakan justify-content", test: (code: string) => code.includes("justify-content") }
    ]
  },

  "css-9": {
    id: "css-9",
    track: "CSS",
    level: "Menengah",
    title: "CSS Animations",
    duration: "18 menit",
    xp: 30,
    description: "Membuat animasi CSS yang menarik menggunakan keyframes.",
    objective: "Menguasai @keyframes, animation properties, dan timing functions.",
    content: [
      {
        type: "text",
        title: "CSS Animations",
        body: "CSS Animations memungkinkan transisi bertahap dari satu style ke style lain menggunakan @keyframes. Lebih powerful dari transitions karena bisa mengontrol setiap tahap animasi."
      },
      {
        type: "code",
        title: "Contoh Animasi",
        language: "css",
        code: `@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animated {
  animation: fadeIn 0.5s ease-out forwards;
}`
      }
    ],
    quiz: [
      {
        question: "Apa fungsi @keyframes dalam CSS?",
        options: ["Mendefinisikan selector", "Mendefinisikan tahapan animasi", "Mendefinisikan variabel", "Mendefinisikan media query"],
        answer: 1,
        explanation: "@keyframes mendefinisikan tahapan-tahapan dalam sebuah animasi CSS, dari kondisi awal hingga akhir."
      },
      {
        question: "Nilai animation-fill-mode apa yang mempertahankan style akhir animasi?",
        options: ["backwards", "both", "forwards", "none"],
        answer: 2,
        explanation: "forwards membuat elemen mempertahankan style dari keyframe terakhir setelah animasi selesai."
      }
    ],
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Buat animasi dengan @keyframes */
      
      .box {
        width: 100px;
        height: 100px;
        background: purple;
        /* Terapkan animasi di sini */
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>`,
    tests: [
      { description: "Menggunakan @keyframes", test: (code: string) => code.includes("@keyframes") },
      { description: "Menggunakan properti animation", test: (code: string) => code.includes("animation") }
    ]
  },


  "css-3": {
    id: "css-3",
    track: "CSS",
    level: "Dasar",
    title: "Typography & Colors",
    duration: "12 menit",
    xp: 20,
    description: "Mengatur tipografi dan warna untuk tampilan yang menarik.",
    objective: "Menguasai properti font, ukuran teks, dan sistem warna CSS.",
    content: [
      {
        type: "text",
        title: "CSS Typography",
        body: "Tipografi yang baik adalah kunci readability. CSS menyediakan banyak properti untuk mengontrol font, ukuran, berat, jarak, dan alignment teks."
      },
      {
        type: "code",
        title: "Typography Properties",
        language: "css",
        code: `/* Font Properties */
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #1a1a1a;
}

h1 {
  font-size: clamp(1.5rem, 4vw, 3rem); /* Responsive font */
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Colors */
.primary { color: #4F46E5; }
.success { color: #22C55E; }

/* CSS Variables untuk design system */
:root {
  --color-primary: #4F46E5;
  --font-size-base: 1rem;
}`
      },
      {
        type: "list",
        title: "Sistem Warna CSS",
        items: [
          "HEX: #4F46E5 (paling umum)",
          "RGB: rgb(79, 70, 229)",
          "HSL: hsl(243, 75%, 59%) - paling intuitif",
          "RGBA/HSLA: Tambah channel opacity",
          "CSS Variables: --color-primary untuk reusability"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Properti untuk mengatur jarak antar baris teks adalah?",
        options: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
        correct: 0,
        explanation: "line-height mengatur tinggi baris, yang menentukan jarak antar baris teks."
      },
      {
        id: 2,
        question: "Cara mendeklarasikan CSS variable adalah?",
        options: ["--nama-variable: nilai", "$nama-variable: nilai", "@nama-variable: nilai", "var(nama): nilai"],
        correct: 0,
        explanation: "CSS variables dideklarasikan dengan prefix -- dalam selector (biasanya :root)."
      }
    ],
    initialCode: {
      html: `<!-- Buat halaman artikel dengan tipografi yang baik -->`,
      css: `/* Definisikan CSS variables dan styling tipografi */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada :root dengan CSS variables warna", passed: true },
      { id: 2, description: "font-family menggunakan Google Fonts", passed: true },
      { id: 3, description: "line-height antara 1.4-1.8 untuk body text", passed: true },
      { id: 4, description: "Heading dan body berbeda ukuran jelas", passed: true }
    ]
  },

  "css-4": {
    id: "css-4",
    track: "CSS",
    level: "Dasar",
    title: "Layout Dasar: Display & Position",
    duration: "15 menit",
    xp: 20,
    description: "Memahami properti display dan position untuk mengatur tata letak elemen.",
    objective: "Menguasai display (block, inline, inline-block) dan position (static, relative, absolute, fixed, sticky).",
    content: [
      {
        type: "text",
        title: "CSS Display",
        body: "Properti display menentukan bagaimana elemen ditampilkan. Block elements mengambil lebar penuh, inline hanya selebar konten, inline-block gabungan keduanya."
      },
      {
        type: "code",
        title: "Display Values",
        language: "css",
        code: `/* Block: Baris baru, bisa set width/height */
div, p, h1 { display: block; }

/* Inline: Mengalir dalam teks, tidak bisa set width/height */
span, a, strong { display: inline; }

/* Inline-block: Mengalir tapi bisa set width/height */
.badge { display: inline-block; padding: 4px 8px; }

/* None: Sembunyikan elemen */
.hidden { display: none; }`
      },
      {
        type: "code",
        title: "CSS Position",
        language: "css",
        code: `/* Static (default): ikut flow normal */
.default { position: static; }

/* Relative: Geser dari posisi normalnya */
.shifted { position: relative; top: 10px; left: 20px; }

/* Absolute: Posisi relatif ke parent yang punya position */
.tooltip {
  position: absolute;
  top: 0; right: 0;
}

/* Fixed: Relatif ke viewport (tidak scroll) */
.navbar { position: fixed; top: 0; width: 100%; }

/* Sticky: Normal sampai scroll ke titik tertentu */
.header { position: sticky; top: 0; }`
      },
      {
        type: "list",
        title: "Kapan Pakai Position",
        items: [
          "relative: Saat ingin jadi acuan untuk child absolute",
          "absolute: Dropdown menu, tooltip, badge notifikasi",
          "fixed: Navbar, chat button, cookie banner",
          "sticky: Table header, sidebar yang mengikuti scroll"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Elemen dengan position: absolute ditempatkan relatif ke?",
        options: [
          "Parent terdekat yang punya position selain static",
          "Body halaman",
          "Viewport browser",
          "Elemen sebelumnya"
        ],
        correct: 0,
        explanation: "absolute mencari ancestor terdekat yang punya position: relative/absolute/fixed/sticky."
      },
      {
        id: 2,
        question: "Untuk membuat navbar yang tidak ikut scroll, gunakan?",
        options: ["position: fixed", "position: sticky", "position: absolute", "position: relative"],
        correct: 0,
        explanation: "fixed selalu berada di posisi yang sama relatif ke viewport."
      }
    ],
    initialCode: {
      html: `<!-- Buat layout dengan navbar fixed dan card dengan badge absolut -->`,
      css: `/* Implementasikan display dan position */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Navbar menggunakan position: fixed", passed: true },
      { id: 2, description: "Ada elemen dengan position: relative sebagai container", passed: true },
      { id: 3, description: "Badge/notifikasi menggunakan position: absolute", passed: true },
      { id: 4, description: "Tidak ada content tertutup navbar", passed: true }
    ]
  },

  "css-6": {
    id: "css-6",
    track: "CSS",
    level: "Menengah",
    title: "CSS Grid Layout",
    duration: "18 menit",
    xp: 30,
    description: "Membangun layout kompleks dua dimensi menggunakan CSS Grid.",
    objective: "Menguasai CSS Grid untuk membuat layout majalah, dashboard, dan galeri foto.",
    content: [
      {
        type: "text",
        title: "CSS Grid",
        body: "CSS Grid adalah sistem layout dua dimensi (baris DAN kolom sekaligus). Berbeda dengan Flexbox yang satu dimensi, Grid ideal untuk layout halaman kompleks seperti majalah atau dashboard."
      },
      {
        type: "code",
        title: "CSS Grid Basics",
        language: "css",
        code: `.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr; /* Sidebar + Main */
  grid-template-rows: 60px 1fr;     /* Navbar + Content */
  grid-template-areas:
    "sidebar navbar"
    "sidebar main";
  min-height: 100vh;
}

.sidebar { grid-area: sidebar; }
.navbar  { grid-area: navbar; }
.main    { grid-area: main; }

/* Galeri responsif */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}`
      },
      {
        type: "list",
        title: "Grid vs Flexbox",
        items: [
          "Grid: 2 dimensi (baris + kolom) — untuk layout halaman",
          "Flexbox: 1 dimensi (baris ATAU kolom) — untuk komponen",
          "Grid areas: Nama area untuk layout yang readable",
          "auto-fill + minmax: Galeri responsif tanpa media query",
          "fr unit: Fraction (bagian dari ruang tersisa)"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Perbedaan utama Grid vs Flexbox adalah?",
        options: [
          "Grid 2 dimensi, Flexbox 1 dimensi",
          "Grid lebih cepat dari Flexbox",
          "Flexbox tidak responsive",
          "Grid hanya untuk tabel"
        ],
        correct: 0,
        explanation: "CSS Grid mengatur layout 2 dimensi (baris dan kolom), Flexbox hanya 1 dimensi."
      },
      {
        id: 2,
        question: "Unit 'fr' dalam CSS Grid berarti?",
        options: [
          "Fraction (bagian dari ruang tersisa)",
          "Frame rate",
          "Font-relative unit",
          "Fixed ratio"
        ],
        correct: 0,
        explanation: "1fr = 1 bagian dari ruang tersisa. 1fr 2fr = kolom pertama 1/3, kedua 2/3."
      }
    ],
    initialCode: {
      html: `<!-- Buat layout dashboard dengan sidebar dan main content -->`,
      css: `/* Implementasikan CSS Grid layout */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Layout menggunakan display: grid", passed: true },
      { id: 2, description: "Ada grid-template-areas", passed: true },
      { id: 3, description: "Sidebar dan main content tersusun benar", passed: true },
      { id: 4, description: "Responsif di mobile (1 kolom)", passed: true }
    ]
  },

  "css-7": {
    id: "css-7",
    track: "CSS",
    level: "Menengah",
    title: "Responsive Design & Media Queries",
    duration: "18 menit",
    xp: 30,
    description: "Membuat website yang tampil baik di semua ukuran layar.",
    objective: "Menguasai media queries dan pendekatan mobile-first untuk responsive design.",
    content: [
      {
        type: "text",
        title: "Responsive Web Design",
        body: "Responsive design membuat website beradaptasi di semua ukuran layar. Pendekatan mobile-first menulis CSS untuk mobile dulu, kemudian menambah style untuk layar lebih besar."
      },
      {
        type: "code",
        title: "Media Queries Mobile-First",
        language: "css",
        code: `/* Base: Mobile (default) */
.container { padding: 1rem; }
.grid { grid-template-columns: 1fr; }
.nav-links { display: none; }

/* Tablet (>= 768px) */
@media (min-width: 768px) {
  .container { padding: 2rem; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (>= 1024px) */
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; }
  .grid { grid-template-columns: repeat(3, 1fr); }
  .nav-links { display: flex; }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body { background: #0f172a; color: #f8fafc; }
}`
      },
      {
        type: "list",
        title: "Breakpoint Umum",
        items: [
          "< 480px: Mobile kecil (iPhone SE)",
          "480px - 767px: Mobile besar",
          "768px - 1023px: Tablet",
          "1024px - 1279px: Laptop kecil",
          ">= 1280px: Desktop",
          "Tip: Gunakan clamp() untuk typography fluid"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Mobile-first berarti?",
        options: [
          "CSS default untuk mobile, gunakan min-width untuk lebih besar",
          "Buat versi mobile setelah desktop",
          "Hapus fitur di mobile",
          "Gunakan max-width untuk semua breakpoint"
        ],
        correct: 0,
        explanation: "Mobile-first: tulis CSS default untuk mobile, lalu override dengan min-width untuk layar lebih besar."
      },
      {
        id: 2,
        question: "Media query untuk dark mode adalah?",
        options: [
          "@media (prefers-color-scheme: dark)",
          "@media (dark-mode: on)",
          "@media (theme: dark)",
          "@media (color: dark)"
        ],
        correct: 0,
        explanation: "prefers-color-scheme mendeteksi preferensi tema sistem operasi pengguna."
      }
    ],
    initialCode: {
      html: `<!-- Buat landing page yang responsive -->`,
      css: `/* Mobile-first CSS */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada minimal 2 breakpoint media query", passed: true },
      { id: 2, description: "Layout 1 kolom di mobile, 2+ kolom di desktop", passed: true },
      { id: 3, description: "Gambar responsive dengan max-width: 100%", passed: true },
      { id: 4, description: "Font size readable di semua ukuran", passed: true }
    ]
  },

  "css-8": {
    id: "css-8",
    track: "CSS",
    level: "Menengah",
    title: "Transitions & Hover Effects",
    duration: "15 menit",
    xp: 30,
    description: "Membuat efek hover yang smooth menggunakan CSS transitions.",
    objective: "Menguasai CSS transitions untuk micro-interactions yang meningkatkan UX.",
    content: [
      {
        type: "text",
        title: "CSS Transitions",
        body: "Transitions membuat perubahan CSS berjalan secara halus dari satu state ke state lain. Gunakan untuk hover effects, focus states, dan perubahan class via JavaScript."
      },
      {
        type: "code",
        title: "Transition Examples",
        language: "css",
        code: `/* Syntax: property duration timing-function delay */
.btn {
  background: #4F46E5;
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}

.btn:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(79,70,229,0.4);
}

/* Card hover */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

/* Image zoom */
.gallery-item img {
  transition: transform 0.4s ease;
}
.gallery-item:hover img {
  transform: scale(1.05);
}`
      },
      {
        type: "list",
        title: "Timing Functions",
        items: [
          "ease: Lambat - cepat - lambat (default, natural)",
          "linear: Kecepatan konstan",
          "ease-in: Lambat di awal, percepat di akhir",
          "ease-out: Cepat di awal, perlambat di akhir (best for hover)",
          "cubic-bezier(): Custom timing function",
          "Gunakan transform & opacity untuk performa GPU"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Properti CSS yang paling smooth untuk transisi pergerakan adalah?",
        options: ["transform: translate()", "margin", "left/top", "padding"],
        correct: 0,
        explanation: "transform menggunakan GPU compositing, jauh lebih performat daripada mengubah layout properties."
      },
      {
        id: 2,
        question: "Timing function terbaik untuk hover effect natural adalah?",
        options: ["ease-out", "linear", "ease-in", "step-start"],
        correct: 0,
        explanation: "ease-out terasa natural untuk hover karena cepat merespons lalu perlahan berhenti."
      }
    ],
    initialCode: {
      html: `<!-- Buat card dengan hover effects yang menarik -->`,
      css: `/* Implementasikan transitions yang smooth */`,
      js: `// Tambahkan class via JS untuk trigger transition`
    },
    tests: [
      { id: 1, description: "Ada transition pada .card atau .btn", passed: true },
      { id: 2, description: "Hover menggunakan transform bukan margin/position", passed: true },
      { id: 3, description: "Duration antara 150-400ms", passed: true },
      { id: 4, description: "Ada focus state untuk aksesibilitas keyboard", passed: true }
    ]
  },

  "css-10": {
    id: "css-10",
    track: "CSS",
    level: "Mahir",
    title: "Design System & CSS Variables",
    duration: "20 menit",
    xp: 35,
    description: "Membangun design system yang konsisten menggunakan CSS Custom Properties.",
    objective: "Membuat token design (warna, spacing, typography) yang reusable dan maintainable.",
    content: [
      {
        type: "text",
        title: "Design System dengan CSS",
        body: "Design system adalah koleksi komponen dan aturan design yang reusable. CSS Custom Properties (variables) adalah fondasi design system yang memudahkan konsistensi dan perubahan tema."
      },
      {
        type: "code",
        title: "Design Tokens",
        language: "css",
        code: `:root {
  /* Color Palette */
  --color-primary-50: #eef2ff;
  --color-primary-500: #4F46E5;
  --color-primary-700: #4338ca;
  --color-success: #22C55E;
  --color-danger: #EF4444;
  --color-warning: #F59E0B;
  
  /* Neutral */
  --color-gray-50: #f8fafc;
  --color-gray-900: #0f172a;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-xl: 1.25rem;
  --text-3xl: 1.875rem;
  
  /* Spacing (8px base) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-4: 1rem;      /* 16px */
  --space-8: 2rem;      /* 32px */
  
  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  
  /* Shadow */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.15);
}

/* Dark theme */
[data-theme="dark"] {
  --color-gray-50: #0f172a;
  --color-gray-900: #f8fafc;
}

/* Komponen menggunakan tokens */
.btn-primary {
  background: var(--color-primary-500);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
}`
      },
      {
        type: "list",
        title: "Prinsip Design System",
        items: [
          "Single source of truth: Warna/spacing di satu tempat",
          "Naming convention yang konsisten (color-primary-500)",
          "Scale matematika: 4px/8px base untuk spacing",
          "Semantic names: --color-danger bukan --color-red",
          "Dark mode: Cukup override CSS variables",
          "Dokumentasi: Buat visual reference semua token"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Cara menggunakan CSS variable dalam properti adalah?",
        options: ["var(--nama-variable)", "--nama-variable", "$nama-variable", "@nama-variable"],
        correct: 0,
        explanation: "CSS variables digunakan dengan fungsi var() yang menerima nama variable."
      },
      {
        id: 2,
        question: "Keuntungan utama design tokens adalah?",
        options: [
          "Perubahan satu tempat berdampak ke seluruh UI",
          "Website lebih cepat",
          "Kode lebih pendek",
          "Tidak perlu CSS lagi"
        ],
        correct: 0,
        explanation: "Design tokens memungkinkan perubahan gaya global cukup dengan mengubah satu nilai."
      }
    ],
    initialCode: {
      html: `<!-- Buat komponen UI menggunakan design system -->`,
      css: `/* Definisikan design tokens di :root */`,
      js: `// Toggle dark mode dengan mengubah data-theme`
    },
    tests: [
      { id: 1, description: "Ada minimal 5 CSS variables di :root", passed: true },
      { id: 2, description: "Komponen menggunakan var() bukan hardcoded", passed: true },
      { id: 3, description: "Ada dark theme dengan override variables", passed: true },
      { id: 4, description: "JS toggle dark/light mode berfungsi", passed: true }
    ]
  },

  "css-11": {
    id: "css-11",
    track: "CSS",
    level: "Mahir",
    title: "Complex Responsive Grid Layout",
    duration: "22 menit",
    xp: 35,
    description: "Membangun layout majalah/berita yang kompleks dan fully responsive.",
    objective: "Menguasai advanced CSS Grid techniques untuk layout editorial profesional.",
    content: [
      {
        type: "text",
        title: "Advanced Grid Layout",
        body: "Layout editorial seperti CNN atau Kompas menggunakan Grid yang kompleks dengan featured articles, multiple columns, dan spanning. Teknik ini juga dipakai untuk dashboard analytics."
      },
      {
        type: "code",
        title: "Magazine Layout",
        language: "css",
        code: `.news-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 1.5rem;
}

/* Featured article: spans 8 kolom */
.article-featured {
  grid-column: span 8;
  grid-row: span 2;
}

/* Side articles: 4 kolom */
.article-side {
  grid-column: span 4;
}

/* Full width breaking news */
.breaking-news {
  grid-column: 1 / -1;
}

/* Responsive: 1 kolom di mobile */
@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  .article-featured,
  .article-side,
  .breaking-news {
    grid-column: 1 / -1;
    grid-row: auto;
  }
}`
      },
      {
        type: "list",
        title: "Advanced Grid Techniques",
        items: [
          "grid-column: span N — Elemen merentang N kolom",
          "grid-column: 1 / -1 — Full width",
          "repeat(12, 1fr) — 12-column grid system",
          "minmax(200px, 1fr) — Minimum dan maximum size",
          "auto-fill vs auto-fit — Perbedaan di empty space",
          "subgrid — Align ke grid induk (modern)"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "grid-column: 1 / -1 artinya?",
        options: ["Full width dari kolom pertama ke terakhir", "Hanya kolom pertama", "Kolom terakhir", "Kolom bernomor -1"],
        correct: 0,
        explanation: "-1 merujuk ke garis grid terakhir, sehingga 1 / -1 = full width."
      },
      {
        id: 2,
        question: "Perbedaan auto-fill dan auto-fit adalah?",
        options: [
          "auto-fit collapse kolom kosong, auto-fill mempertahankan",
          "auto-fill lebih cepat",
          "auto-fit hanya untuk mobile",
          "Tidak ada perbedaan"
        ],
        correct: 0,
        explanation: "auto-fit menyusutkan kolom kosong sehingga item mengisi ruang. auto-fill mempertahankan kolom kosong."
      }
    ],
    initialCode: {
      html: `<!-- Buat layout berita dengan featured article dan side articles -->`,
      css: `/* Implementasikan 12-column grid system */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Menggunakan 12-column grid", passed: true },
      { id: 2, description: "Ada featured article yang span lebih dari 1 kolom", passed: true },
      { id: 3, description: "Full responsive di mobile (1 kolom)", passed: true },
      { id: 4, description: "Gap konsisten menggunakan CSS variable", passed: true }
    ]
  },

  "css-12": {
    id: "css-12",
    track: "CSS",
    level: "Mahir",
    title: "Accessible UI Styling",
    duration: "20 menit",
    xp: 35,
    description: "Membuat UI yang visually appealing sekaligus accessible untuk semua pengguna.",
    objective: "Menerapkan focus styles, color contrast, dan motion preferences dalam CSS.",
    content: [
      {
        type: "text",
        title: "CSS untuk Aksesibilitas",
        body: "Aksesibilitas bukan hanya HTML — CSS juga berperan penting. Focus styles yang terlihat, kontras warna yang cukup, dan reduced motion untuk pengguna sensitif terhadap animasi."
      },
      {
        type: "code",
        title: "Accessible CSS",
        language: "css",
        code: `/* 1. Focus styles yang jelas (jangan hilangkan outline!) */
:focus-visible {
  outline: 3px solid #4F46E5;
  outline-offset: 2px;
  border-radius: 4px;
}

/* 2. Skip navigation */
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  background: #4F46E5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0 0 8px 8px;
  transition: top 0.2s;
}
.skip-link:focus { top: 0; }

/* 3. Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* 4. Konten visible hanya untuk screen reader */
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`
      },
      {
        type: "list",
        title: "Checklist Accessible CSS",
        items: [
          "Jangan outline: none tanpa pengganti focus style",
          "Kontras teks minimal 4.5:1 (tool: webaim.org/contrast)",
          "Touch target minimal 44x44px untuk mobile",
          "prefers-reduced-motion untuk pengguna sensitif animasi",
          ".sr-only untuk teks khusus screen reader",
          "Jangan gunakan warna sebagai satu-satunya indikator"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Mengapa outline: none berbahaya untuk aksesibilitas?",
        options: [
          "Pengguna keyboard tidak bisa melihat fokus aktif",
          "Membuat animasi lambat",
          "Mengubah warna elemen",
          "Merusak layout"
        ],
        correct: 0,
        explanation: "Focus indicator sangat penting untuk pengguna yang navigasi dengan keyboard."
      },
      {
        id: 2,
        question: "Media query untuk pengguna yang sensitif animasi adalah?",
        options: [
          "@media (prefers-reduced-motion: reduce)",
          "@media (no-animation: true)",
          "@media (motion: off)",
          "@media (accessibility: motion)"
        ],
        correct: 0,
        explanation: "prefers-reduced-motion mendeteksi pengaturan sistem untuk mengurangi animasi."
      }
    ],
    initialCode: {
      html: `<!-- Buat form yang fully accessible -->`,
      css: `/* Implementasikan semua accessible CSS patterns */`,
      js: `// Tulis JavaScript kamu di sini`
    },
    tests: [
      { id: 1, description: "Ada :focus-visible styles yang jelas", passed: true },
      { id: 2, description: "Ada .sr-only class", passed: true },
      { id: 3, description: "Ada @media prefers-reduced-motion", passed: true },
      { id: 4, description: "Semua interactive elements punya focus style", passed: true }
    ]
  }
};


// ===== JAVASCRIPT LESSONS =====

export const JS_LESSONS: Record<string, any> = {

  "js-1": {
    id: "js-1",
    track: "JavaScript",
    level: "Dasar",
    title: "Pengenalan JavaScript",
    duration: "10 menit",
    xp: 20,
    description: "Pelajari dasar-dasar JavaScript dan cara kerjanya di browser.",
    objective: "Memahami apa itu JavaScript, cara menambahkannya ke HTML, dan konsep variabel dasar.",
    content: [
      {
        type: "text",
        title: "Apa itu JavaScript?",
        body: "JavaScript adalah bahasa pemrograman yang membuat halaman web menjadi interaktif. JavaScript berjalan di browser dan bisa memanipulasi HTML, CSS, dan merespons aksi pengguna."
      },
      {
        type: "code",
        title: "JavaScript Pertamamu",
        language: "javascript",
        code: `// Menampilkan pesan
console.log("Halo Dunia!");

// Variabel
let nama = "Budi";
const umur = 25;

// Menampilkan variabel
console.log("Nama:", nama);
console.log("Umur:", umur);`
      },
      {
        type: "text",
        title: "let, const, dan var",
        body: "Gunakan const untuk nilai yang tidak berubah, let untuk nilai yang bisa berubah. Hindari var karena memiliki perilaku yang membingungkan terkait scope."
      }
    ],
    quiz: [
      {
        question: "Keyword apa yang digunakan untuk mendeklarasikan variabel yang nilainya tidak bisa diubah?",
        options: ["var", "let", "const", "fixed"],
        answer: 2,
        explanation: "const digunakan untuk nilai konstan yang tidak bisa di-reassign setelah dideklarasikan."
      },
      {
        question: "Fungsi apa yang digunakan untuk menampilkan output di console browser?",
        options: ["print()", "console.log()", "log()", "output()"],
        answer: 1,
        explanation: "console.log() adalah fungsi bawaan JavaScript untuk menampilkan output di developer console browser."
      }
    ],
    initialCode: `// Deklarasikan variabel nama dan kota
// Tampilkan dengan console.log

`,
    tests: [
      { description: "Menggunakan console.log", test: (code: string) => code.includes("console.log") },
      { description: "Mendeklarasikan variabel", test: (code: string) => code.includes("let ") || code.includes("const ") }
    ]
  },

  "js-2": {
    id: "js-2",
    track: "JavaScript",
    level: "Dasar",
    title: "Tipe Data & Variabel",
    duration: "12 menit",
    xp: 20,
    description: "Mengenal tipe data primitif JavaScript dan cara penggunaannya.",
    objective: "Memahami string, number, boolean, null, undefined, dan cara mengecek tipe data.",
    content: [
      {
        type: "text",
        title: "Tipe Data Primitif",
        body: "JavaScript memiliki 7 tipe data primitif: String, Number, Boolean, Null, Undefined, Symbol, dan BigInt. Yang paling sering digunakan adalah 5 pertama."
      },
      {
        type: "code",
        title: "Contoh Tipe Data",
        language: "javascript",
        code: `// String
const nama = "Alice";
const kota = 'Jakarta';

// Number
const umur = 25;
const tinggi = 165.5;

// Boolean
const aktif = true;
const selesai = false;

// Null & Undefined
const data = null;
let hasil;  // undefined

// Cek tipe data
console.log(typeof nama);    // "string"
console.log(typeof umur);    // "number"
console.log(typeof aktif);   // "boolean"`
      }
    ],
    quiz: [
      {
        question: "Apa hasil dari typeof null di JavaScript?",
        options: ["null", "undefined", "object", "string"],
        answer: 2,
        explanation: "typeof null mengembalikan 'object' - ini adalah bug lama di JavaScript yang dipertahankan untuk kompatibilitas."
      },
      {
        question: "Apa perbedaan null dan undefined?",
        options: ["Tidak ada perbedaan", "null disengaja kosong, undefined belum diberi nilai", "undefined lebih baru dari null", "null hanya untuk angka"],
        answer: 1,
        explanation: "null adalah nilai kosong yang disengaja oleh programmer, sedangkan undefined berarti variabel belum diberi nilai."
      }
    ],
    initialCode: `// Buat variabel dengan berbagai tipe data
// dan tampilkan tipe datanya dengan typeof

`,
    tests: [
      { description: "Menggunakan typeof", test: (code: string) => code.includes("typeof") },
      { description: "Ada minimal 3 tipe data berbeda", test: (code: string) => {
        const hasString = /["']/.test(code);
        const hasNumber = /\d+/.test(code);
        const hasBoolean = /true|false/.test(code);
        return hasString && hasNumber && hasBoolean;
      }}
    ]
  },


  "js-3": {
    id: "js-3",
    track: "JavaScript",
    level: "Dasar",
    title: "Operators & Expressions",
    duration: "15 menit",
    xp: 20,
    description: "Memahami operator aritmatika, perbandingan, dan logika di JavaScript.",
    objective: "Menguasai berbagai jenis operator dan memahami type coercion JS.",
    content: [
      {
        type: "text",
        title: "Operators di JavaScript",
        body: "Operator adalah simbol yang melakukan operasi pada nilai. JavaScript punya operator aritmatika, perbandingan, logika, assignment, dan ternary."
      },
      {
        type: "code",
        title: "Jenis-jenis Operator",
        language: "js",
        code: `// Aritmatika
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a % b);  // 1 (modulo/sisa bagi)
console.log(a ** b); // 1000 (pangkat)

// Perbandingan
console.log(5 == "5");  // true (loose, type coercion)
console.log(5 === "5"); // false (strict, cek tipe juga)
console.log(5 !== "5"); // true

// Logika
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true);         // false (NOT)

// Ternary
const umur = 17;
const status = umur >= 18 ? "Dewasa" : "Remaja";
console.log(status); // "Remaja"

// Nullish coalescing (??)
const nama = null ?? "Anonymous";
console.log(nama); // "Anonymous"`
      },
      {
        type: "list",
        title: "Tips Penting",
        items: [
          "Selalu gunakan === bukan == untuk perbandingan",
          "% (modulo) berguna untuk cek bilangan genap/ganjil",
          "Ternary: kondisi ? jika true : jika false",
          "?? (nullish): gunakan nilai default jika null/undefined",
          "|| vs ??: || juga trigger untuk 0, '', false"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Hasil dari 5 === '5' adalah?",
        options: ["false", "true", "undefined", "Error"],
        correct: 0,
        explanation: "=== strict equality juga mengecek tipe data. Number 5 !== String '5'."
      },
      {
        id: 2,
        question: "Operator untuk sisa hasil bagi adalah?",
        options: ["%", "/", "//", "mod"],
        correct: 0,
        explanation: "% (modulo) mengembalikan sisa bagi. 10 % 3 = 1."
      },
      {
        id: 3,
        question: "Versi singkat dari if-else satu baris adalah?",
        options: ["Ternary operator ?:", "Arrow function", "Short circuit &&", "Nullish ??"],
        correct: 0,
        explanation: "Ternary: kondisi ? nilai_true : nilai_false"
      }
    ],
    initialCode: {
      html: `<!-- Kalkulator sederhana -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Buat kalkulator yang bisa +, -, *, /
// Tampilkan hasil dan gunakan ternary untuk pesan

function calculate(a, b, operator) {
  // TODO: implementasikan operasi berdasarkan operator
}

console.log(calculate(10, 3, '+'));
console.log(calculate(10, 3, '%'));`
    },
    tests: [
      { id: 1, description: "Fungsi calculate() menangani +, -, *, /", passed: true },
      { id: 2, description: "Ada penanganan division by zero", passed: true },
      { id: 3, description: "Menggunakan === untuk perbandingan", passed: true },
      { id: 4, description: "Ada ternary operator dalam kode", passed: true }
    ]
  },

  "js-4": {
    id: "js-4",
    track: "JavaScript",
    level: "Dasar",
    title: "Control Flow: if, else, switch, loop",
    duration: "18 menit",
    xp: 20,
    description: "Mengontrol alur eksekusi program dengan kondisi dan perulangan.",
    objective: "Menguasai if/else, switch, for, while, dan for...of untuk logika program.",
    content: [
      {
        type: "text",
        title: "Control Flow",
        body: "Control flow mengatur urutan eksekusi kode. Dengan kondisi (if/switch) kita memilih jalur berbeda, dengan loop kita mengulang kode berkali-kali."
      },
      {
        type: "code",
        title: "Kondisi & Loop",
        language: "js",
        code: `// if / else if / else
const nilai = 75;
if (nilai >= 90) {
  console.log('A');
} else if (nilai >= 80) {
  console.log('B');
} else if (nilai >= 70) {
  console.log('C');
} else {
  console.log('D');
}

// switch
const hari = 'Senin';
switch (hari) {
  case 'Senin': console.log('Semangat!'); break;
  case 'Jumat': console.log('TGIF!'); break;
  default: console.log('Hari biasa');
}

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// for...of (array)
const buah = ['Apel', 'Mangga', 'Jeruk'];
for (const item of buah) {
  console.log(item);
}

// while
let count = 0;
while (count < 3) {
  console.log('Count:', count++);
}`
      },
      {
        type: "list",
        title: "Kapan Pakai Loop Mana",
        items: [
          "for: Saat tahu berapa kali iterasi",
          "for...of: Iterasi isi array (modern, recommended)",
          "for...in: Iterasi key object",
          "while: Saat kondisi berhenti tidak pasti",
          "forEach: Method array, lebih declarative",
          "break: Keluar dari loop, continue: Skip iterasi"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Loop mana yang paling tepat untuk iterasi array?",
        options: ["for...of", "while", "do...while", "for...in"],
        correct: 0,
        explanation: "for...of adalah cara modern dan readable untuk iterasi nilai array."
      },
      {
        id: 2,
        question: "Keyword untuk keluar dari loop sebelum selesai adalah?",
        options: ["break", "exit", "stop", "return"],
        correct: 0,
        explanation: "break menghentikan eksekusi loop dan melanjutkan ke kode setelah loop."
      }
    ],
    initialCode: {
      html: `<!-- Tampilkan hasil program di halaman -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// 1. Buat grade calculator dengan if/else
// 2. Buat FizzBuzz (1-20): Fizz jika kelipatan 3, Buzz jika 5
// 3. Iterasi array produk dan tampilkan ke HTML`
    },
    tests: [
      { id: 1, description: "Grade calculator berjalan benar", passed: true },
      { id: 2, description: "FizzBuzz output benar untuk 1-20", passed: true },
      { id: 3, description: "for...of digunakan untuk array", passed: true },
      { id: 4, description: "Output ditampilkan di DOM", passed: true }
    ]
  },

  "js-5": {
    id: "js-5",
    track: "JavaScript",
    level: "Menengah",
    title: "Functions & Scope",
    duration: "20 menit",
    xp: 25,
    description: "Memahami cara membuat fungsi reusable dan konsep scope variabel.",
    objective: "Menguasai function declaration, expression, arrow function, dan scope.",
    content: [
      {
        type: "text",
        title: "Functions di JavaScript",
        body: "Function adalah blok kode reusable yang melakukan tugas tertentu. Ada beberapa cara menulis function di JS, masing-masing dengan karakteristik berbeda."
      },
      {
        type: "code",
        title: "Jenis Function",
        language: "js",
        code: `// 1. Function Declaration (hoisted)
function greet(name) {
  return \`Halo, \${name}!\`;
}

// 2. Function Expression
const greet2 = function(name) {
  return \`Hai, \${name}!\`;
};

// 3. Arrow Function (modern, concise)
const greet3 = (name) => \`Hey, \${name}!\`;

// 4. Default parameters
const greet4 = (name = 'User') => \`Halo, \${name}!\`;
console.log(greet4()); // "Halo, User!"

// 5. Rest parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4)); // 10

// Scope
let global = 'global';
function testScope() {
  let local = 'local'; // hanya ada di sini
  console.log(global); // bisa akses
}
// console.log(local); // ERROR: not defined

// Closure
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`
      },
      {
        type: "list",
        title: "Arrow Function vs Regular",
        items: [
          "Arrow function tidak punya 'this' sendiri",
          "Arrow function tidak bisa jadi constructor",
          "Arrow satu parameter: x => x * 2 (tanpa kurung)",
          "Arrow satu baris: langsung return tanpa {}",
          "Regular function lebih baik untuk method object",
          "Arrow lebih baik untuk callback dan functional code"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Apa itu closure di JavaScript?",
        options: [
          "Fungsi yang mengakses variabel dari scope luarnya",
          "Cara menutup browser",
          "Metode untuk menyembunyikan kode",
          "Fungsi tanpa return"
        ],
        correct: 0,
        explanation: "Closure adalah fungsi yang 'mengingat' environment tempatnya dibuat, termasuk variabel dari scope luar."
      },
      {
        id: 2,
        question: "Cara menulis arrow function dengan satu parameter dan langsung return adalah?",
        options: ["x => x * 2", "(x) => { return x * 2 }", "function(x) { x * 2 }", "=> x * 2"],
        correct: 0,
        explanation: "Arrow function satu parameter bisa tanpa kurung, dan implicit return tanpa kurung kurawal."
      }
    ],
    initialCode: {
      html: `<!-- Buat kalkulator menggunakan functions -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Buat utility functions dengan arrow function
const add = (a, b) => a + b;
// TODO: subtract, multiply, divide, power

// Buat fungsi higher-order
const applyDiscount = (price, discountFn) => discountFn(price);
// TODO: buat discountFn untuk 10%, 20%, 50%`
    },
    tests: [
      { id: 1, description: "Ada minimal 5 arrow functions", passed: true },
      { id: 2, description: "Ada default parameter", passed: true },
      { id: 3, description: "Ada higher-order function", passed: true },
      { id: 4, description: "Ada contoh closure", passed: true }
    ]
  },

  "js-6": {
    id: "js-6",
    track: "JavaScript",
    level: "Menengah",
    title: "Arrays & Objects",
    duration: "22 menit",
    xp: 25,
    description: "Memanipulasi data kompleks menggunakan array methods dan object.",
    objective: "Menguasai array methods (map, filter, reduce) dan object manipulation.",
    content: [
      {
        type: "text",
        title: "Array Methods Modern",
        body: "JavaScript array memiliki banyak method built-in yang powerful. Pendekatan functional dengan map, filter, reduce lebih clean dan predictable daripada loop manual."
      },
      {
        type: "code",
        title: "Array & Object Methods",
        language: "js",
        code: `const products = [
  { id: 1, name: 'Laptop', price: 8000000, category: 'Elektronik' },
  { id: 2, name: 'Buku JS', price: 150000, category: 'Buku' },
  { id: 3, name: 'Mouse', price: 350000, category: 'Elektronik' },
];

// map: Transformasi setiap elemen
const names = products.map(p => p.name);
// ['Laptop', 'Buku JS', 'Mouse']

// filter: Saring berdasarkan kondisi
const elektronik = products.filter(p => p.category === 'Elektronik');

// reduce: Akumulasi nilai
const totalHarga = products.reduce((sum, p) => sum + p.price, 0);
// 8500000

// find: Cari satu elemen pertama
const laptop = products.find(p => p.name === 'Laptop');

// some/every
const adaMahal = products.some(p => p.price > 5000000); // true
const semuaMahal = products.every(p => p.price > 100000); // true

// Object methods
const user = { name: 'Budi', age: 25, city: 'Jakarta' };
console.log(Object.keys(user));   // ['name', 'age', 'city']
console.log(Object.values(user)); // ['Budi', 25, 'Jakarta']
console.log(Object.entries(user)); // [['name','Budi'], ...]

// Spread operator
const updated = { ...user, age: 26, email: 'budi@mail.com' };`
      },
      {
        type: "list",
        title: "Kapan Pakai Method Mana",
        items: [
          "map(): Transformasi semua item → array baru sama panjang",
          "filter(): Saring item → array baru lebih pendek",
          "reduce(): Akumulasi → satu nilai (total, grouping)",
          "find(): Cari satu item → item atau undefined",
          "some(): Cek apakah ada yang memenuhi → boolean",
          "every(): Cek apakah semua memenuhi → boolean"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Array method untuk mendapatkan total harga semua produk adalah?",
        options: ["reduce()", "map()", "filter()", "sum()"],
        correct: 0,
        explanation: "reduce() mengakumulasi nilai array menjadi satu hasil akhir."
      },
      {
        id: 2,
        question: "Cara copy object sekaligus tambah property baru adalah?",
        options: ["Spread operator: { ...obj, newProp: val }", "Object.copy()", "obj.clone()", "JSON.parse(JSON.stringify(obj))"],
        correct: 0,
        explanation: "Spread operator membuat shallow copy object dan bisa ditambahkan/override property."
      }
    ],
    initialCode: {
      html: `<!-- Tampilkan daftar produk yang difilter -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `const products = [
  { id: 1, name: 'Laptop', price: 8000000, category: 'Elektronik', rating: 4.5 },
  { id: 2, name: 'Buku JS', price: 150000, category: 'Buku', rating: 4.8 },
  { id: 3, name: 'Mouse', price: 350000, category: 'Elektronik', rating: 4.2 },
  { id: 4, name: 'Headphone', price: 800000, category: 'Elektronik', rating: 4.6 },
  { id: 5, name: 'Buku CSS', price: 130000, category: 'Buku', rating: 4.7 },
];

// TODO:
// 1. Filter produk elektronik
// 2. Hitung total harga semua produk
// 3. Buat array nama produk rating >= 4.5
// 4. Render ke HTML`
    },
    tests: [
      { id: 1, description: "filter() digunakan untuk kategori", passed: true },
      { id: 2, description: "reduce() menghitung total harga", passed: true },
      { id: 3, description: "map() membuat array nama produk", passed: true },
      { id: 4, description: "Hasil dirender ke DOM", passed: true }
    ]
  },

  "js-7": {
    id: "js-7",
    track: "JavaScript",
    level: "Menengah",
    title: "DOM Manipulation",
    duration: "22 menit",
    xp: 25,
    description: "Memanipulasi elemen HTML secara dinamis menggunakan JavaScript DOM API.",
    objective: "Menguasai querySelector, createElement, classList, dan innerHTML untuk DOM manipulation.",
    content: [
      {
        type: "text",
        title: "Document Object Model",
        body: "DOM adalah interface yang memungkinkan JavaScript membaca dan mengubah konten, struktur, dan style HTML. Setiap elemen HTML adalah node dalam tree DOM."
      },
      {
        type: "code",
        title: "DOM Methods",
        language: "js",
        code: `// Selecting elements
const title = document.querySelector('#title');
const cards = document.querySelectorAll('.card');
const btn = document.getElementById('submit-btn');

// Reading & Writing content
console.log(title.textContent);    // Baca teks
title.textContent = 'Judul Baru';  // Tulis teks
title.innerHTML = '<span>Baru</span>'; // Tulis HTML

// Manipulate attributes
btn.setAttribute('disabled', true);
btn.removeAttribute('disabled');
console.log(btn.getAttribute('data-id'));

// classList API
const card = document.querySelector('.card');
card.classList.add('active', 'highlighted');
card.classList.remove('hidden');
card.classList.toggle('dark');
console.log(card.classList.contains('active')); // true

// Create & Insert elements
const newCard = document.createElement('div');
newCard.className = 'card';
newCard.innerHTML = \`
  <h3>Card Baru</h3>
  <p>Konten dinamis</p>
\`;

const container = document.querySelector('#container');
container.appendChild(newCard);        // Tambah di akhir
container.prepend(newCard);            // Tambah di awal
container.insertAdjacentHTML('beforeend', '<p>Cepat!</p>');

// Remove element
newCard.remove();`
      },
      {
        type: "list",
        title: "Best Practices DOM",
        items: [
          "querySelector vs getElementById: querySelector lebih fleksibel",
          "textContent vs innerHTML: textContent lebih aman (prevent XSS)",
          "classList API lebih baik daripada manipulasi string className",
          "DocumentFragment untuk batch insert (performa)",
          "Minimasi DOM access — simpan referensi dalam variabel",
          "Gunakan template literals untuk HTML dinamis"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Perbedaan textContent dan innerHTML adalah?",
        options: [
          "textContent set teks biasa (aman), innerHTML parsing HTML",
          "innerHTML lebih cepat",
          "textContent tidak bisa dibaca",
          "Tidak ada perbedaan"
        ],
        correct: 0,
        explanation: "textContent lebih aman karena tidak mengeksekusi HTML/script. innerHTML bisa rentan XSS jika dari input user."
      },
      {
        id: 2,
        question: "Method untuk toggle class CSS adalah?",
        options: ["classList.toggle()", "classList.switch()", "className.toggle()", "element.toggleClass()"],
        correct: 0,
        explanation: "classList.toggle() menambah class jika belum ada, menghapus jika sudah ada."
      }
    ],
    initialCode: {
      html: `<div id="app">
  <h1 id="title">Todo App</h1>
  <div id="todo-list"></div>
</div>`,
      css: `/* Style todo app */`,
      js: `// Buat todo app dinamis menggunakan DOM manipulation`
    },
    tests: [
      { id: 1, description: "querySelector digunakan", passed: true },
      { id: 2, description: "createElement digunakan", passed: true },
      { id: 3, description: "classList digunakan", passed: true },
      { id: 4, description: "Elemen bisa ditambah dan dihapus", passed: true }
    ]
  },

  "js-8": {
    id: "js-8",
    track: "JavaScript",
    level: "Menengah",
    title: "Events & Event Listeners",
    duration: "20 menit",
    xp: 25,
    description: "Membuat website interaktif dengan event handling yang proper.",
    objective: "Menguasai addEventListener, event object, dan pola event delegation.",
    content: [
      {
        type: "text",
        title: "Event Handling",
        body: "Events adalah sinyal bahwa sesuatu terjadi: klik, ketikan, scroll, load. addEventListener adalah cara modern untuk merespons events, memungkinkan multiple handlers per event."
      },
      {
        type: "code",
        title: "Event Patterns",
        language: "js",
        code: `// Basic event listener
const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
  console.log('Diklik!', event.target);
  event.preventDefault(); // Cegah default browser action
});

// Event object
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
  if (e.ctrlKey && e.key === 's') saveDraft();
});

// Event delegation (efisien untuk list dinamis)
document.querySelector('#list').addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    e.target.closest('.item').remove();
  }
  if (e.target.matches('.edit-btn')) {
    const item = e.target.closest('.item');
    item.contentEditable = true;
    item.focus();
  }
});

// Custom events
const customEvent = new CustomEvent('produktambah', {
  detail: { id: 1, nama: 'Laptop' }
});
document.dispatchEvent(customEvent);

document.addEventListener('produktambah', (e) => {
  console.log('Produk baru:', e.detail.nama);
});`
      },
      {
        type: "list",
        title: "Event Penting",
        items: [
          "click, dblclick: Klik mouse",
          "input, change: Nilai input berubah",
          "submit: Form disubmit",
          "keydown, keyup: Keyboard",
          "mouseover, mouseout: Hover mouse",
          "scroll: Halaman discroll",
          "DOMContentLoaded: HTML selesai diparsing",
          "resize: Ukuran window berubah"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Kenapa event delegation lebih efisien untuk list panjang?",
        options: [
          "Satu listener di parent vs satu listener per item",
          "Lebih cepat dieksekusi",
          "Tidak perlu querySelectorAll",
          "Otomatis menghapus listener"
        ],
        correct: 0,
        explanation: "Event delegation memasang satu listener di parent yang menangani events dari semua children."
      },
      {
        id: 2,
        question: "Method untuk mencegah aksi default browser (misal submit form) adalah?",
        options: ["event.preventDefault()", "event.stop()", "event.cancel()", "event.block()"],
        correct: 0,
        explanation: "preventDefault() mencegah browser menjalankan aksi default seperti reload saat form submit."
      }
    ],
    initialCode: {
      html: `<!-- Buat form pencarian dengan event handling -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Implementasikan: search on input, submit on Enter, clear on Escape`
    },
    tests: [
      { id: 1, description: "addEventListener digunakan (bukan onclick)", passed: true },
      { id: 2, description: "event.preventDefault() pada form submit", passed: true },
      { id: 3, description: "Ada keyboard event handler", passed: true },
      { id: 4, description: "Event delegation untuk list dinamis", passed: true }
    ]
  },

  "js-9": {
    id: "js-9",
    track: "JavaScript",
    level: "Mahir",
    title: "ES6+ Modern JavaScript",
    duration: "22 menit",
    xp: 30,
    description: "Menguasai fitur-fitur modern JavaScript ES6 dan seterusnya.",
    objective: "Menggunakan destructuring, spread, modules, dan fitur ES6+ untuk kode yang lebih clean.",
    content: [
      {
        type: "text",
        title: "Modern JavaScript (ES6+)",
        body: "ES6 (2015) dan versi setelahnya membawa banyak fitur yang membuat kode JavaScript lebih ekspresif dan clean. Fitur-fitur ini sekarang menjadi standar industri."
      },
      {
        type: "code",
        title: "ES6+ Features",
        language: "js",
        code: `// 1. Destructuring
const { name, age, city = 'Jakarta' } = user;
const [first, second, ...rest] = array;
const { address: { street } } = user; // Nested

// 2. Spread & Rest
const merged = [...arr1, ...arr2, 'extra'];
const { a, ...remaining } = obj; // Object rest

// 3. Template Literals
const html = \`
  <div class="card">
    <h2>\${title}</h2>
    <p>\${desc || 'No description'}</p>
  </div>
\`;

// 4. Optional Chaining
const city = user?.address?.city; // Tidak error jika undefined
const firstItem = arr?.[0];

// 5. Nullish Coalescing
const name = user.name ?? 'Anonymous';
user.count ??= 0; // Assign hanya jika null/undefined

// 6. Logical Assignment
user.name ||= 'Default';  // Assign jika falsy
user.count &&= user.count + 1; // Assign jika truthy

// 7. Object shorthand
const x = 10, y = 20;
const point = { x, y }; // { x: 10, y: 20 }

// 8. Computed property names
const key = 'name';
const obj = { [key]: 'Budi' }; // { name: 'Budi' }`
      },
      {
        type: "list",
        title: "Fitur ES6+ Wajib Dikuasai",
        items: [
          "Destructuring: Extract nilai dari object/array",
          "Spread (...): Copy atau merge array/object",
          "Optional chaining (?.) : Akses property aman",
          "Nullish coalescing (??): Default value yang tepat",
          "Template literals: String interpolation dan multiline",
          "ES Modules: import/export untuk modular code"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Optional chaining (?.) berguna untuk?",
        options: [
          "Akses property tanpa error jika undefined/null",
          "Membuat property optional",
          "Menghapus property",
          "Cek tipe data"
        ],
        correct: 0,
        explanation: "user?.address?.city mengembalikan undefined (bukan error) jika user atau address tidak ada."
      },
      {
        id: 2,
        question: "Perbedaan ?? dan || untuk default value adalah?",
        options: [
          "?? hanya trigger untuk null/undefined, || juga untuk 0, '', false",
          "|| lebih modern",
          "?? lebih lambat",
          "Tidak ada perbedaan"
        ],
        correct: 0,
        explanation: "?? (nullish) hanya menggunakan default jika nilai adalah null atau undefined, bukan falsy lainnya."
      }
    ],
    initialCode: {
      html: `<!-- Refactor kode lama dengan ES6+ features -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Refactor code ini menggunakan ES6+ features:
const user = { name: 'Budi', address: { city: 'Jakarta' } };

// Tanpa ES6:
const name = user.name;
const city = user.address ? user.address.city : 'Unknown';

// TODO: Refactor menggunakan destructuring, optional chaining, ??`
    },
    tests: [
      { id: 1, description: "Destructuring digunakan", passed: true },
      { id: 2, description: "Optional chaining digunakan", passed: true },
      { id: 3, description: "Nullish coalescing digunakan", passed: true },
      { id: 4, description: "Template literals digunakan", passed: true }
    ]
  },

  "js-10": {
    id: "js-10",
    track: "JavaScript",
    level: "Mahir",
    title: "Async JavaScript & Promises",
    duration: "25 menit",
    xp: 30,
    description: "Menangani operasi asynchronous dengan Promises dan async/await.",
    objective: "Menguasai asynchronous programming untuk fetch data, timer, dan operasi non-blocking.",
    content: [
      {
        type: "text",
        title: "Asynchronous JavaScript",
        body: "JavaScript berjalan single-threaded, tapi bisa menangani operasi lambat (network, file) secara non-blocking. Promises dan async/await adalah cara modern untuk menulis kode async yang readable."
      },
      {
        type: "code",
        title: "Promises & Async/Await",
        language: "js",
        code: `// Promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'Budi' });
      } else {
        reject(new Error('ID tidak valid'));
      }
    }, 1000);
  });
}

// .then() / .catch()
fetchUser(1)
  .then(user => console.log(user))
  .catch(err => console.error(err))
  .finally(() => console.log('Selesai'));

// async/await (lebih clean)
async function getUser(id) {
  try {
    const user = await fetchUser(id);
    console.log(user);
    return user;
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Promise.all: Jalankan paralel
async function loadDashboard() {
  const [user, posts, notifications] = await Promise.all([
    fetchUser(1),
    fetchPosts(),
    fetchNotifications()
  ]);
  renderDashboard(user, posts, notifications);
}

// Promise.allSettled: Semua selesai, terlepas berhasil/gagal
const results = await Promise.allSettled([p1, p2, p3]);
results.forEach(result => {
  if (result.status === 'fulfilled') console.log(result.value);
  else console.error(result.reason);
});`
      },
      {
        type: "list",
        title: "Async Patterns",
        items: [
          "async/await lebih readable dari .then() chains",
          "Selalu gunakan try/catch dengan await",
          "Promise.all() untuk parallel requests (lebih cepat)",
          "Promise.allSettled() jika boleh ada yang gagal",
          "Promise.race() untuk timeout pattern",
          "Avoid callback hell dengan async/await"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Keyword untuk menunggu Promise selesai adalah?",
        options: ["await", "wait", "pause", "hold"],
        correct: 0,
        explanation: "await digunakan di dalam fungsi async untuk menunggu Promise resolve."
      },
      {
        id: 2,
        question: "Promise.all() vs Promise.allSettled() — perbedaannya?",
        options: [
          "all() batal jika ada yang reject, allSettled() tunggu semua",
          "allSettled() lebih cepat",
          "all() untuk lebih dari 3 promises",
          "Tidak ada perbedaan"
        ],
        correct: 0,
        explanation: "Promise.all() reject jika salah satu gagal. allSettled() selalu resolve dengan status tiap promise."
      }
    ],
    initialCode: {
      html: `<!-- Loading state saat fetch data -->`,
      css: `/* Style loading dan error state */`,
      js: `// Simulasi fetch data dengan delay
const fakeAPI = {
  getUser: (id) => new Promise(resolve => 
    setTimeout(() => resolve({ id, name: 'Budi', email: 'budi@mail.com' }), 800)
  ),
  getPosts: () => new Promise(resolve => 
    setTimeout(() => resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]), 600)
  )
};

// TODO: Load user dan posts secara paralel, tampilkan di DOM
// Tambahkan loading state dan error handling`
    },
    tests: [
      { id: 1, description: "Menggunakan async/await", passed: true },
      { id: 2, description: "Ada try/catch error handling", passed: true },
      { id: 3, description: "Promise.all() untuk parallel fetch", passed: true },
      { id: 4, description: "Loading state ditampilkan", passed: true }
    ]
  },

  "js-11": {
    id: "js-11",
    track: "JavaScript",
    level: "Mahir",
    title: "Fetch API & AJAX",
    duration: "22 menit",
    xp: 30,
    description: "Mengambil data dari API menggunakan Fetch API dan menampilkannya ke halaman.",
    objective: "Menguasai Fetch API untuk GET/POST requests dan menangani response JSON.",
    content: [
      {
        type: "text",
        title: "Fetch API",
        body: "Fetch API adalah cara modern untuk membuat HTTP requests dari browser. Menggantikan XMLHttpRequest yang lebih verbose. Bersama async/await, kode fetching data jadi sangat clean."
      },
      {
        type: "code",
        title: "Fetch GET & POST",
        language: "js",
        code: `// GET Request
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  
  const users = await response.json();
  return users;
}

// POST Request
async function createPost(data) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

// Fetch dengan error handling lengkap
async function fetchWithUI(url) {
  const container = document.querySelector('#container');
  container.innerHTML = '<p class="loading">Memuat data...</p>';
  
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network response tidak OK');
    
    const data = await res.json();
    renderData(container, data);
  } catch (err) {
    container.innerHTML = \`
      <p class="error">Gagal memuat: \${err.message}</p>
      <button onclick="fetchWithUI('\${url}')">Coba Lagi</button>
    \`;
  }
}`
      },
      {
        type: "list",
        title: "HTTP Methods",
        items: [
          "GET: Ambil data (default fetch)",
          "POST: Kirim/buat data baru",
          "PUT: Update seluruh resource",
          "PATCH: Update sebagian resource",
          "DELETE: Hapus resource",
          "Response.ok: true jika status 200-299"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Cara mengecek apakah fetch berhasil adalah?",
        options: [
          "response.ok (true jika status 200-299)",
          "response.success",
          "response.status === 'ok'",
          "fetch tidak pernah error"
        ],
        correct: 0,
        explanation: "response.ok adalah boolean true jika HTTP status dalam range 200-299."
      },
      {
        id: 2,
        question: "Untuk mengirim JSON dalam POST request, header yang diperlukan adalah?",
        options: [
          "Content-Type: application/json",
          "Accept: application/json",
          "Data-Type: json",
          "Send-Format: json"
        ],
        correct: 0,
        explanation: "Content-Type header memberitahu server format data yang dikirim."
      }
    ],
    initialCode: {
      html: `<div id="users-container">
  <p>Klik tombol untuk memuat data</p>
</div>
<button id="load-btn">Muat Users</button>`,
      css: `/* Style loading, error, dan card user */`,
      js: `// Fetch dari https://jsonplaceholder.typicode.com/users
// dan render sebagai cards ke DOM
// Tambahkan loading state dan error handling`
    },
    tests: [
      { id: 1, description: "Menggunakan fetch() dengan async/await", passed: true },
      { id: 2, description: "response.ok dicek sebelum parsing", passed: true },
      { id: 3, description: "Loading state ditampilkan saat fetch", passed: true },
      { id: 4, description: "Data dirender sebagai cards ke DOM", passed: true }
    ]
  },

  "js-12": {
    id: "js-12",
    track: "JavaScript",
    level: "Mahir",
    title: "Modern JS Project: Weather App",
    duration: "30 menit",
    xp: 40,
    description: "Membangun aplikasi cuaca lengkap yang menggabungkan semua skill JavaScript.",
    objective: "Mengintegrasikan Fetch API, DOM, Events, ES6+, dan async/await dalam satu project nyata.",
    content: [
      {
        type: "text",
        title: "Final Project: Weather App",
        body: "Di lesson terakhir ini kamu akan membangun Weather App yang menggabungkan semua yang sudah dipelajari: Fetch API, DOM manipulation, event handling, async/await, error handling, dan ES6+ features."
      },
      {
        type: "code",
        title: "Weather App Architecture",
        language: "js",
        code: `// config.js
const CONFIG = {
  API_URL: 'https://api.open-meteo.com/v1/forecast',
  DEFAULT_CITY: 'Jakarta',
  COORDS: { Jakarta: [-6.2, 106.8], Bandung: [-6.9, 107.6] }
};

// api.js
async function getWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: 'temperature_2m,wind_speed_10m,weather_code',
    timezone: 'Asia/Jakarta'
  });
  
  const response = await fetch(\`\${CONFIG.API_URL}?\${params}\`);
  if (!response.ok) throw new Error('Gagal ambil data cuaca');
  return response.json();
}

// ui.js
function renderWeather(data, cityName) {
  const { temperature_2m, wind_speed_10m, weather_code } = data.current;
  
  document.querySelector('#weather-card').innerHTML = \`
    <h2>\${cityName}</h2>
    <div class="temp">\${temperature_2m}°C</div>
    <div class="wind">Angin: \${wind_speed_10m} km/h</div>
    <div class="condition">\${getWeatherLabel(weather_code)}</div>
  \`;
}

function getWeatherLabel(code) {
  const labels = { 0: '☀️ Cerah', 1: '🌤 Mostly Clear', 2: '⛅ Berawan', 45: '🌫 Kabut', 61: '🌧 Hujan' };
  return labels[code] ?? '🌈 Kondisi Tidak Dikenal';
}

// app.js (main)
async function loadWeather(city) {
  const [lat, lon] = CONFIG.COORDS[city];
  showLoading();
  try {
    const data = await getWeather(lat, lon);
    renderWeather(data, city);
  } catch (err) {
    showError(err.message);
  }
}

// Event listeners
document.querySelectorAll('.city-btn').forEach(btn => {
  btn.addEventListener('click', () => loadWeather(btn.dataset.city));
});

loadWeather(CONFIG.DEFAULT_CITY);`
      },
      {
        type: "list",
        title: "Skills yang Digunakan",
        items: [
          "Fetch API + async/await untuk data cuaca real",
          "URLSearchParams untuk query string yang clean",
          "DOM manipulation untuk render UI dinamis",
          "Event handling untuk city selector",
          "Destructuring untuk extract data API",
          "Error handling dengan loading/error states",
          "ES6 modules pattern untuk code organization"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "URLSearchParams berguna untuk?",
        options: [
          "Membuat query string URL dengan aman",
          "Validasi URL",
          "Parse HTML",
          "Encode password"
        ],
        correct: 0,
        explanation: "URLSearchParams otomatis encode karakter spesial dan memudahkan pembuatan query string."
      },
      {
        id: 2,
        question: "Pattern yang baik untuk memisahkan concerns dalam JS project adalah?",
        options: [
          "Pisahkan: config, API calls, UI rendering, dan app logic",
          "Tulis semua dalam satu fungsi besar",
          "Gunakan variabel global untuk semua",
          "Tidak perlu struktur khusus"
        ],
        correct: 0,
        explanation: "Separation of concerns membuat kode lebih maintainable, testable, dan mudah dipahami."
      }
    ],
    initialCode: {
      html: `<div id="app">
  <h1>🌤 Weather App</h1>
  <div class="city-buttons">
    <button class="city-btn" data-city="Jakarta">Jakarta</button>
    <button class="city-btn" data-city="Bandung">Bandung</button>
  </div>
  <div id="weather-card">Pilih kota untuk melihat cuaca</div>
</div>`,
      css: `/* Style weather app - buat semenarik mungkin! */`,
      js: `// Bangun Weather App lengkap menggunakan Open-Meteo API (gratis, tanpa key)
// API: https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&current=temperature_2m`
    },
    tests: [
      { id: 1, description: "Fetch data dari API cuaca berhasil", passed: true },
      { id: 2, description: "Loading state ditampilkan saat fetch", passed: true },
      { id: 3, description: "Error state ditampilkan jika gagal", passed: true },
      { id: 4, description: "City selector berfungsi", passed: true },
      { id: 5, description: "Data cuaca dirender ke DOM", passed: true }
    ]
  }
};

// ===== HELPER FUNCTIONS =====

export const ALL_LESSONS = {
  ...HTML_LESSONS,
  ...CSS_LESSONS,
  ...JS_LESSONS,
};

export function getLessonById(id: string) {
  return ALL_LESSONS[id] || null;
}

export function getLessonsByTrack(track: "HTML" | "CSS" | "JavaScript") {
  return Object.values(ALL_LESSONS).filter((l: any) => l.track === track);
}
