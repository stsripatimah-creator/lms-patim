// Additional HTML Lessons
export const HTML_ADDITIONAL_LESSONS = {
  "html-3": {
    id: "html-3",
    track: "HTML",
    level: "Dasar",
    title: "List & Tabel",
    duration: "15 menit",
    xp: 20,
    description: "Membuat daftar (ordered/unordered) dan tabel data dengan HTML.",
    objective: "Menguasai penggunaan tag ul, ol, li untuk list dan table, tr, td, th untuk tabel.",
    content: [
      {
        type: "text",
        title: "List di HTML",
        body: "HTML memiliki dua jenis list utama: Unordered List (<ul>) untuk daftar dengan bullet points, dan Ordered List (<ol>) untuk daftar bernomor."
      },
      {
        type: "code",
        title: "Contoh List",
        language: "html",
        code: `<!-- Unordered List -->
<ul>
  <li>Item pertama</li>
  <li>Item kedua</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>Langkah 1</li>
  <li>Langkah 2</li>
</ol>`
      },
      {
        type: "list",
        title: "Tag untuk Tabel",
        items: [
          "<table>: Container utama tabel",
          "<thead>: Header tabel",
          "<tbody>: Body/isi tabel",
          "<tr>: Table Row (baris)",
          "<th>: Table Header cell",
          "<td>: Table Data cell"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Tag untuk membuat list bernomor adalah?",
        options: ["<ol>", "<ul>", "<list>", "<numbered>"],
        correct: 0,
        explanation: "<ol> (Ordered List) digunakan untuk membuat daftar bernomor otomatis."
      },
      {
        id: 2,
        question: "Tag untuk membuat satu baris dalam tabel adalah?",
        options: ["<tr>", "<td>", "<row>", "<line>"],
        correct: 0,
        explanation: "<tr> (Table Row) digunakan untuk mendefinisikan satu baris dalam tabel."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>List & Tabel</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>📋 Daftar Tugas & Jadwal</h1>
    
    <section class="todos">
      <h2>Tugas Hari Ini</h2>
      <ul>
        <li>Belajar HTML List</li>
        <li>Belajar HTML Table</li>
        <li>Latihan membuat tabel</li>
      </ul>
    </section>

    <section class="schedule">
      <h2>Jadwal Belajar Minggu Ini</h2>
      <table>
        <thead>
          <tr>
            <th>Hari</th>
            <th>Materi</th>
            <th>Durasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Senin</td>
            <td>HTML Basics</td>
            <td>2 jam</td>
          </tr>
          <tr>
            <td>Selasa</td>
            <td>CSS Styling</td>
            <td>2 jam</td>
          </tr>
          <tr>
            <td>Rabu</td>
            <td>JavaScript Intro</td>
            <td>3 jam</td>
          </tr>
        </tbody>
      </table>
    </section>
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
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}

h1 {
  color: #4F46E5;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  color: #1f2937;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.todos, .schedule {
  margin-bottom: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #f3f4f6;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 4px solid #4F46E5;
}

li::before {
  content: "✓ ";
  color: #22C55E;
  font-weight: bold;
  margin-right: 0.5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

thead {
  background: #4F46E5;
  color: white;
}

th, td {
  padding: 1rem;
  text-align: left;
}

tbody tr {
  border-bottom: 1px solid #e5e7eb;
}

tbody tr:hover {
  background: #f9fafb;
}

tbody tr:last-child {
  border-bottom: none;
}`,
      js: `console.log('List & Table page loaded!');

// Add dynamic interaction
const tableRows = document.querySelectorAll('tbody tr');
tableRows.forEach((row, index) => {
  row.addEventListener('click', () => {
    console.log('Clicked on day:', row.cells[0].textContent);
  });
});`
    },
    tests: [
      { id: 1, description: "Ada <ul> dengan minimal 3 <li>", passed: true },
      { id: 2, description: "Ada <table> dengan <thead> dan <tbody>", passed: true },
      { id: 3, description: "<thead> memiliki <th> untuk header", passed: true },
      { id: 4, description: "<tbody> memiliki minimal 3 <tr>", passed: true }
    ]
  },

  "html-4": {
    id: "html-4",
    track: "HTML",
    level: "Dasar",
    title: "Form Dasar",
    duration: "18 menit",
    xp: 25,
    description: "Membuat form input dengan berbagai tipe input field.",
    objective: "Menguasai tag form, input, textarea, select, button untuk mengumpulkan data user.",
    content: [
      {
        type: "text",
        title: "Form di HTML",
        body: "Form adalah cara utama untuk mengumpulkan input dari user. Tag <form> membungkus semua input field, dan setiap input menggunakan tag <input> dengan type yang berbeda."
      },
      {
        type: "code",
        title: "Form Dasar",
        language: "html",
        code: `<form action="/submit" method="POST">
  <label for="name">Nama:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Kirim</button>
</form>`
      },
      {
        type: "list",
        title: "Tipe Input Populer",
        items: [
          "text: Input teks biasa",
          "email: Input email (validasi otomatis)",
          "password: Input password (teks tersembunyi)",
          "number: Input angka",
          "checkbox: Multiple pilihan",
          "radio: Single pilihan dari beberapa opsi"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Attribute HTML yang menghubungkan <label> dengan <input> adalah?",
        options: ["for", "id", "name", "link"],
        correct: 0,
        explanation: "Attribute 'for' di <label> harus sama dengan 'id' di <input> untuk menghubungkan keduanya."
      },
      {
        id: 2,
        question: "Input type untuk password adalah?",
        options: ["password", "secret", "hidden", "secure"],
        correct: 0,
        explanation: "type='password' akan menyembunyikan karakter yang diketik dengan bullet points."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Contact Form</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <h1>📬 Hubungi Kami</h1>
    
    <form id="contactForm">
      <div class="form-group">
        <label for="name">Nama Lengkap</label>
        <input type="text" id="name" name="name" placeholder="Masukkan nama Anda">
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="nama@email.com">
      </div>

      <div class="form-group">
        <label for="subject">Subjek</label>
        <select id="subject" name="subject">
          <option value="">Pilih subjek...</option>
          <option value="question">Pertanyaan</option>
          <option value="feedback">Feedback</option>
          <option value="bug">Laporkan Bug</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">Pesan</label>
        <textarea id="message" name="message" rows="5" placeholder="Tulis pesan Anda..."></textarea>
      </div>

      <div class="form-group">
        <label class="checkbox-label">
          <input type="checkbox" name="newsletter">
          Saya ingin menerima newsletter
        </label>
      </div>

      <button type="submit" class="btn-submit">Kirim Pesan</button>
    </form>

    <div id="response" class="response hidden"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.form-container {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  max-width: 500px;
  width: 100%;
}

h1 {
  color: #0ea5e9;
  margin-bottom: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #374151;
  font-weight: 500;
}

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #0ea5e9;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: normal;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  cursor: pointer;
}

.btn-submit {
  width: 100%;
  background: #0ea5e9;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-submit:hover {
  background: #0284c7;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);
}

.response {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
}

.response.success {
  background: #d1fae5;
  color: #065f46;
}

.hidden {
  display: none;
}`,
      js: `const form = document.getElementById('contactForm');
const response = document.getElementById('response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  console.log('Form submitted!');
  console.log('Data:', data);
  
  // Show success message
  response.textContent = '✓ Pesan berhasil dikirim! Terima kasih telah menghubungi kami.';
  response.className = 'response success';
  
  // Reset form after 3 seconds
  setTimeout(() => {
    form.reset();
    response.className = 'response hidden';
  }, 3000);
});

console.log('Contact form ready!');`
    },
    tests: [
      { id: 1, description: "Ada <form> dengan minimal 4 input", passed: true },
      { id: 2, description: "Ada input type='email'", passed: true },
      { id: 3, description: "Ada <textarea> untuk pesan", passed: true },
      { id: 4, description: "Ada <select> dropdown", passed: true },
      { id: 5, description: "Form submit preventDefault berfungsi", passed: true }
    ]
  },

  "html-9": {
    id: "html-9",
    track: "HTML",
    level: "Mahir",
    title: "Halaman Produk E-Commerce",
    duration: "25 menit",
    xp: 40,
    description: "Membuat halaman produk e-commerce lengkap dengan gallery, reviews, dan cart.",
    objective: "Mengintegrasikan semantic HTML, forms, dan media untuk real-world project.",
    content: [
      {
        type: "text",
        title: "E-Commerce Product Page",
        body: "Halaman produk yang baik menggabungkan semantic HTML, structured data, accessibility, dan user experience. Kita akan membuat halaman dengan product gallery, details, reviews, dan add to cart."
      },
      {
        type: "code",
        title: "Product Structure",
        language: "html",
        code: `<article itemscope itemtype="https://schema.org/Product">
  <h1 itemprop="name">Nama Produk</h1>
  <div itemprop="image">...</div>
  <p itemprop="description">Deskripsi produk...</p>
  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    <span itemprop="price">500000</span>
    <meta itemprop="priceCurrency" content="IDR">
  </div>
</article>`
      },
      {
        type: "list",
        title: "Komponen E-Commerce Page",
        items: [
          "Product image gallery dengan thumbnails",
          "Product details: nama, harga, rating, deskripsi",
          "Quantity selector dan add to cart button",
          "Customer reviews dengan rating stars",
          "Related products section",
          "Structured data untuk SEO"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Schema.org markup digunakan untuk?",
        options: ["SEO & structured data", "Styling CSS", "JavaScript events", "Form validation"],
        correct: 0,
        explanation: "Schema.org markup membantu search engines memahami konten dan menampilkan rich snippets."
      },
      {
        id: 2,
        question: "Tag semantic untuk product container adalah?",
        options: ["<article>", "<div>", "<section>", "<product>"],
        correct: 0,
        explanation: "<article> adalah semantic tag yang tepat untuk self-contained content seperti product."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Premium Wireless Headphones - StepByShop</title>
  <meta name="description" content="Premium wireless headphones dengan active noise cancellation dan battery 30 jam.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <nav class="breadcrumb">
      <a href="/">Home</a> › <a href="/electronics">Electronics</a> › <span>Headphones</span>
    </nav>

    <article class="product" itemscope itemtype="https://schema.org/Product">
      <div class="product-grid">
        <!-- Image Gallery -->
        <div class="gallery">
          <div class="main-image">
            <img id="mainImg" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" 
                 alt="Premium Wireless Headphones" itemprop="image">
          </div>
          <div class="thumbnails">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100" 
                 alt="View 1" class="thumb active" onclick="changeImage(this.src)">
            <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100" 
                 alt="View 2" class="thumb" onclick="changeImage(this.src)">
            <img src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=100" 
                 alt="View 3" class="thumb" onclick="changeImage(this.src)">
          </div>
        </div>

        <!-- Product Info -->
        <div class="product-info">
          <h1 itemprop="name">Premium Wireless Headphones</h1>
          
          <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="review-count">(127 reviews)</span>
          </div>

          <div class="price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <span class="current-price" itemprop="price" content="1499000">Rp 1.499.000</span>
            <span class="original-price">Rp 2.199.000</span>
            <span class="discount">-32%</span>
            <meta itemprop="priceCurrency" content="IDR">
          </div>

          <p class="description" itemprop="description">
            Headphones premium dengan active noise cancellation (ANC), driver 40mm, 
            battery life hingga 30 jam, dan audio berkualitas studio. Nyaman dipakai 
            seharian dengan ear cushion memory foam.
          </p>

          <div class="features">
            <div class="feature">✓ Active Noise Cancellation</div>
            <div class="feature">✓ 30 Jam Battery Life</div>
            <div class="feature">✓ Bluetooth 5.0</div>
            <div class="feature">✓ Fast Charging USB-C</div>
          </div>

          <form class="add-to-cart-form" onsubmit="addToCart(event)">
            <div class="quantity-selector">
              <label for="qty">Jumlah:</label>
              <button type="button" onclick="changeQty(-1)">-</button>
              <input type="number" id="qty" value="1" min="1" max="10" readonly>
              <button type="button" onclick="changeQty(1)">+</button>
            </div>

            <button type="submit" class="btn-add-cart">
              🛒 Tambah ke Keranjang
            </button>
            <button type="button" class="btn-buy-now">
              ⚡ Beli Sekarang
            </button>
          </form>

          <div class="shipping-info">
            <p>🚚 Gratis ongkir untuk pembelian di atas Rp 500.000</p>
            <p>📦 Estimasi pengiriman 2-3 hari kerja</p>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <section class="reviews">
        <h2>Customer Reviews</h2>
        <div class="review-list">
          <div class="review-item">
            <div class="review-header">
              <span class="reviewer-name">Budi Santoso</span>
              <span class="review-stars">★★★★★</span>
            </div>
            <p class="review-text">
              Kualitas suara luar biasa! ANC-nya efektif banget. Worth the price!
            </p>
            <span class="review-date">2 hari yang lalu</span>
          </div>

          <div class="review-item">
            <div class="review-header">
              <span class="reviewer-name">Sarah Wijaya</span>
              <span class="review-stars">★★★★☆</span>
            </div>
            <p class="review-text">
              Nyaman dipakai, bass-nya mantap. Cuma agak berat kalau dipake lama.
            </p>
            <span class="review-date">1 minggu yang lalu</span>
          </div>
        </div>
      </section>
    </article>
  </div>

  <script src="script.js"></script>
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
  color: #1f2937;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.breadcrumb {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.breadcrumb a {
  color: #4F46E5;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.product {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

/* Gallery */
.gallery {
  position: sticky;
  top: 2rem;
}

.main-image {
  margin-bottom: 1rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.main-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  gap: 1rem;
}

.thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s;
}

.thumb:hover,
.thumb.active {
  border-color: #4F46E5;
  transform: scale(1.05);
}

/* Product Info */
.product-info h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.stars {
  color: #fbbf24;
  font-size: 1.2rem;
}

.review-count {
  color: #6b7280;
  font-size: 0.9rem;
}

.price {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.current-price {
  font-size: 2rem;
  font-weight: 700;
  color: #4F46E5;
}

.original-price {
  font-size: 1.2rem;
  color: #9ca3af;
  text-decoration: line-through;
}

.discount {
  background: #ef4444;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
}

.description {
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.feature {
  color: #059669;
  font-size: 0.95rem;
  font-weight: 500;
}

.add-to-cart-form {
  border-top: 2px solid #e5e7eb;
  padding-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.quantity-selector label {
  font-weight: 500;
}

.quantity-selector button {
  width: 36px;
  height: 36px;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.quantity-selector button:hover {
  background: #e5e7eb;
}

.quantity-selector input {
  width: 60px;
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
}

.btn-add-cart,
.btn-buy-now {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

.btn-add-cart {
  background: #4F46E5;
  color: white;
}

.btn-add-cart:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}

.btn-buy-now {
  background: #22C55E;
  color: white;
}

.btn-buy-now:hover {
  background: #16a34a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
}

.shipping-info {
  background: #f0fdf4;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
}

.shipping-info p {
  margin-bottom: 0.25rem;
  color: #065f46;
}

/* Reviews */
.reviews {
  border-top: 2px solid #e5e7eb;
  padding-top: 2rem;
}

.reviews h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.review-list {
  display: grid;
  gap: 1.5rem;
}

.review-item {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4F46E5;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.reviewer-name {
  font-weight: 600;
  color: #1f2937;
}

.review-stars {
  color: #fbbf24;
}

.review-text {
  color: #4b5563;
  margin-bottom: 0.5rem;
}

.review-date {
  font-size: 0.85rem;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
}`,
      js: `console.log('E-Commerce product page loaded!');

let quantity = 1;

// Change main image
function changeImage(src) {
  const mainImg = document.getElementById('mainImg');
  mainImg.src = src.replace('w=100', 'w=600');
  
  // Update active thumbnail
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.classList.remove('active');
  });
  event.target.classList.add('active');
  
  console.log('Image changed:', src);
}

// Change quantity
function changeQty(delta) {
  const qtyInput = document.getElementById('qty');
  const newQty = Math.max(1, Math.min(10, quantity + delta));
  quantity = newQty;
  qtyInput.value = newQty;
  
  console.log('Quantity changed:', newQty);
}

// Add to cart
function addToCart(event) {
  event.preventDefault();
  
  const productName = document.querySelector('h1[itemprop="name"]').textContent;
  const price = document.querySelector('.current-price').textContent;
  
  console.log('Added to cart:', {
    product: productName,
    quantity: quantity,
    price: price
  });
  
  alert(\`✓ \${quantity}x "\${productName}" ditambahkan ke keranjang!\`);
  
  // Animate button
  const btn = event.target.querySelector('.btn-add-cart') || event.target;
  btn.textContent = '✓ Ditambahkan!';
  btn.style.background = '#22C55E';
  
  setTimeout(() => {
    btn.textContent = '🛒 Tambah ke Keranjang';
    btn.style.background = '';
  }, 2000);
}

// Buy now
document.querySelector('.btn-buy-now').addEventListener('click', () => {
  const productName = document.querySelector('h1[itemprop="name"]').textContent;
  console.log('Buy now clicked:', productName);
  alert('Mengarahkan ke checkout...');
});`
    },
    tests: [
      { id: 1, description: "Ada schema.org markup untuk Product", passed: true },
      { id: 2, description: "Image gallery dengan thumbnails berfungsi", passed: true },
      { id: 3, description: "Quantity selector bisa increment/decrement", passed: true },
      { id: 4, description: "Add to cart form preventDefault", passed: true },
      { id: 5, description: "Rating stars dan reviews ada", passed: true }
    ]
  },

  "html-11": {
    id: "html-11",
    track: "HTML",
    level: "Mahir",
    title: "Template & Component Reusable",
    duration: "20 menit",
    xp: 35,
    description: "Membuat HTML template yang reusable dengan <template> tag dan custom elements.",
    objective: "Menguasai <template>, <slot>, dan Web Components untuk modular HTML.",
    content: [
      {
        type: "text",
        title: "HTML Templates",
        body: "Tag <template> menyimpan HTML markup yang tidak di-render sampai di-activate oleh JavaScript. Ini berguna untuk membuat komponen yang reusable tanpa duplikasi code."
      },
      {
        type: "code",
        title: "Template Basic",
        language: "html",
        code: `<template id="card-template">
  <div class="card">
    <h3 class="title"></h3>
    <p class="description"></p>
  </div>
</template>

<script>
const template = document.getElementById('card-template');
const clone = template.content.cloneNode(true);
clone.querySelector('.title').textContent = 'Title';
document.body.appendChild(clone);
</script>`
      },
      {
        type: "list",
        title: "Keuntungan Templates",
        items: [
          "Reusable: Gunakan template berkali-kali",
          "Performance: Tidak di-render sampai dibutuhkan",
          "Modular: Pisahkan struktur dari data",
          "Maintainable: Update sekali, apply ke semua",
          "Dynamic: Generate elements on-the-fly"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Konten di dalam <template> di-render kapan?",
        options: ["Setelah di-clone dengan JavaScript", "Otomatis saat page load", "Saat hover", "Tidak pernah"],
        correct: 0,
        explanation: "Konten <template> tidak di-render sampai di-clone dan di-append ke DOM dengan JavaScript."
      },
      {
        id: 2,
        question: "Method untuk clone template content adalah?",
        options: ["cloneNode()", "copy()", "duplicate()", "clone()"],
        correct: 0,
        explanation: "template.content.cloneNode(true) digunakan untuk clone deep copy dari template."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reusable Templates</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header class="header">
      <h1>🧩 Team Member Cards</h1>
      <p>Demo HTML Template yang Reusable</p>
    </header>

    <!-- Template Definition -->
    <template id="member-card-template">
      <div class="member-card">
        <div class="member-avatar">
          <img class="avatar-img" alt="Avatar">
        </div>
        <div class="member-info">
          <h3 class="member-name"></h3>
          <p class="member-role"></p>
          <p class="member-bio"></p>
          <div class="member-socials">
            <a class="social-link twitter" href="#" aria-label="Twitter">🐦</a>
            <a class="social-link linkedin" href="#" aria-label="LinkedIn">💼</a>
            <a class="social-link github" href="#" aria-label="GitHub">💻</a>
          </div>
        </div>
      </div>
    </template>

    <!-- Container for dynamically generated cards -->
    <div id="team-container" class="team-grid"></div>

    <div class="controls">
      <button id="add-member-btn" class="btn-add">
        ➕ Tambah Member Random
      </button>
      <button id="clear-btn" class="btn-clear">
        🗑️ Clear All
      </button>
    </div>
  </div>

  <script src="script.js"></script>
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
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  color: white;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.header p {
  opacity: 0.9;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

/* Member Card Styles */
.member-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0,0,0,0.25);
}

.member-avatar {
  text-align: center;
  margin-bottom: 1.5rem;
}

.avatar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #4F46E5;
}

.member-info {
  text-align: center;
}

.member-name {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.member-role {
  color: #4F46E5;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.member-bio {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.member-socials {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.social-link:hover {
  background: #4F46E5;
  transform: scale(1.1);
}

/* Controls */
.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-add,
.btn-clear {
  background: white;
  color: #4F46E5;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.btn-add:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  background: #4F46E5;
  color: white;
}

.btn-clear {
  background: #ef4444;
  color: white;
}

.btn-clear:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
  background: #dc2626;
}`,
      js: `console.log('Template demo loaded!');

// Sample data
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    bio: 'Passionate about creating beautiful user interfaces with React and CSS.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'
  },
  {
    name: 'Michael Chen',
    role: 'Backend Engineer',
    bio: 'Building scalable APIs and databases with Node.js and PostgreSQL.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
  },
  {
    name: 'Jessica Lee',
    role: 'UI/UX Designer',
    bio: 'Designing delightful user experiences with Figma and user research.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'
  },
  {
    name: 'David Martinez',
    role: 'DevOps Engineer',
    bio: 'Automating deployments and managing cloud infrastructure on AWS.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200'
  },
  {
    name: 'Emily Wong',
    role: 'Product Manager',
    bio: 'Bridging tech and business to deliver products users love.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200'
  }
];

let currentIndex = 0;

// Get template and container
const template = document.getElementById('member-card-template');
const container = document.getElementById('team-container');

// Function to create member card from template
function createMemberCard(member) {
  // Clone the template
  const clone = template.content.cloneNode(true);
  
  // Fill in the data
  clone.querySelector('.avatar-img').src = member.avatar;
  clone.querySelector('.avatar-img').alt = member.name;
  clone.querySelector('.member-name').textContent = member.name;
  clone.querySelector('.member-role').textContent = member.role;
  clone.querySelector('.member-bio').textContent = member.bio;
  
  console.log('Created card for:', member.name);
  
  return clone;
}

// Add member button
document.getElementById('add-member-btn').addEventListener('click', () => {
  if (currentIndex < teamMembers.length) {
    const member = teamMembers[currentIndex];
    const card = createMemberCard(member);
    container.appendChild(card);
    currentIndex++;
    
    console.log(\`Added member \${currentIndex}/\${teamMembers.length}\`);
    
    if (currentIndex >= teamMembers.length) {
      document.getElementById('add-member-btn').textContent = '✓ All Members Added';
      document.getElementById('add-member-btn').disabled = true;
    }
  }
});

// Clear button
document.getElementById('clear-btn').addEventListener('click', () => {
  container.innerHTML = '';
  currentIndex = 0;
  document.getElementById('add-member-btn').textContent = '➕ Tambah Member Random';
  document.getElementById('add-member-btn').disabled = false;
  console.log('Cleared all cards');
});

// Initialize with first 2 members
for (let i = 0; i < 2 && i < teamMembers.length; i++) {
  const card = createMemberCard(teamMembers[i]);
  container.appendChild(card);
  currentIndex++;
}

console.log('Initialized with 2 members');`
    },
    tests: [
      { id: 1, description: "Ada <template> element", passed: true },
      { id: 2, description: "JavaScript clone template dengan cloneNode()", passed: true },
      { id: 3, description: "Dynamic content insertion berfungsi", passed: true },
      { id: 4, description: "Multiple instances dari template bisa dibuat", passed: true },
      { id: 5, description: "Add/clear functionality berfungsi", passed: true }
    ]
  },

  "html-12": {
    id: "html-12",
    track: "HTML",
    level: "Mahir",
    title: "Interactive Dashboard dengan HTML + JS Events",
    duration: "30 menit",
    xp: 45,
    description: "Membuat dashboard interaktif dengan data visualization dan real-time updates.",
    objective: "Mengintegrasikan HTML semantic, forms, dan JavaScript events untuk aplikasi kompleks.",
    content: [
      {
        type: "text",
        title: "Interactive Web Applications",
        body: "Dashboard yang baik menggabungkan semantic HTML, event handling, dan dynamic updates. User bisa interact dengan data, filter, dan melihat hasil real-time."
      },
      {
        type: "code",
        title: "Event Handling",
        language: "html",
        code: `<button onclick="updateData()">Update</button>

<script>
function updateData() {
  // Fetch data
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      // Update DOM
      document.getElementById('stats').innerHTML = data;
    });
}
</script>`
      },
      {
        type: "list",
        title: "Dashboard Components",
        items: [
          "Stats cards dengan real-time counters",
          "Data table dengan sorting dan filtering",
          "Form untuk add/edit entries",
          "Activity feed dengan timestamps",
          "Interactive charts (simplified)",
          "Notifications dan alerts"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Event listener yang tepat untuk form submission adalah?",
        options: ["submit", "click", "send", "post"],
        correct: 0,
        explanation: "Event 'submit' di-trigger saat form di-submit, baik via button atau Enter key."
      },
      {
        id: 2,
        question: "Method untuk mencegah default form behavior adalah?",
        options: ["preventDefault()", "stopDefault()", "prevent()", "cancelDefault()"],
        correct: 0,
        explanation: "event.preventDefault() mencegah default action seperti page reload saat submit."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Dashboard</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">📊 Dashboard</div>
      <nav class="nav">
        <a href="#" class="nav-item active">Overview</a>
        <a href="#" class="nav-item">Analytics</a>
        <a href="#" class="nav-item">Users</a>
        <a href="#" class="nav-item">Settings</a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Header -->
      <header class="header">
        <h1>Welcome Back, Admin! 👋</h1>
        <div class="header-actions">
          <button id="refresh-btn" class="btn-icon" title="Refresh Data">
            🔄
          </button>
          <button id="notify-btn" class="btn-icon" title="Notifications">
            🔔 <span class="badge">3</span>
          </button>
        </div>
      </header>

      <!-- Stats Cards -->
      <section class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">👥</div>
          <div class="stat-info">
            <p class="stat-label">Total Users</p>
            <h2 class="stat-value" id="stat-users">1,234</h2>
            <span class="stat-change positive">+12%</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">💰</div>
          <div class="stat-info">
            <p class="stat-label">Revenue</p>
            <h2 class="stat-value" id="stat-revenue">$45.2k</h2>
            <span class="stat-change positive">+8%</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">📦</div>
          <div class="stat-info">
            <p class="stat-label">Orders</p>
            <h2 class="stat-value" id="stat-orders">567</h2>
            <span class="stat-change negative">-3%</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">⭐</div>
          <div class="stat-info">
            <p class="stat-label">Satisfaction</p>
            <h2 class="stat-value" id="stat-rating">4.8</h2>
            <span class="stat-change positive">+0.2</span>
          </div>
        </div>
      </section>

      <!-- Quick Actions Form -->
      <section class="quick-actions">
        <h3>Quick Add User</h3>
        <form id="add-user-form" class="action-form">
          <input type="text" id="user-name" placeholder="User name" required>
          <input type="email" id="user-email" placeholder="Email" required>
          <select id="user-role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
          <button type="submit" class="btn-primary">Add User</button>
        </form>
      </section>

      <!-- Data Table -->
      <section class="data-section">
        <div class="section-header">
          <h3>Recent Activity</h3>
          <div class="filter-controls">
            <input type="search" id="search-input" placeholder="Search..." class="search-input">
            <select id="filter-select" class="filter-select">
              <option value="all">All Activities</option>
              <option value="user">User Actions</option>
              <option value="order">Orders</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>

        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
                <th>User</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="activity-tbody">
              <tr>
                <td>2 min ago</td>
                <td>New order #1234</td>
                <td>John Doe</td>
                <td><span class="status-badge success">Success</span></td>
              </tr>
              <tr>
                <td>5 min ago</td>
                <td>User registered</td>
                <td>Jane Smith</td>
                <td><span class="status-badge success">Success</span></td>
              </tr>
              <tr>
                <td>12 min ago</td>
                <td>Payment failed</td>
                <td>Bob Wilson</td>
                <td><span class="status-badge error">Failed</span></td>
              </tr>
              <tr>
                <td>18 min ago</td>
                <td>Profile updated</td>
                <td>Alice Johnson</td>
                <td><span class="status-badge success">Success</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>

  <!-- Toast Notification -->
  <div id="toast" class="toast hidden"></div>

  <script src="script.js"></script>
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
  color: #1f2937;
}

.dashboard {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: #1f2937;
  color: white;
  padding: 2rem 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.3s;
}

.nav-item:hover,
.nav-item.active {
  background: #4F46E5;
  color: white;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2rem;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.btn-icon {
  position: relative;
  background: white;
  border: 1px solid #e5e7eb;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.btn-icon:hover {
  background: #f9fafb;
  transform: scale(1.05);
}

.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ef4444;
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  font-weight: 600;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  gap: 1rem;
  transition: all 0.3s;
}

.stat-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 2.5rem;
}

.stat-info {
  flex: 1;
}

.stat-label {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-change {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.stat-change.positive {
  color: #059669;
  background: #d1fae5;
}

.stat-change.negative {
  color: #dc2626;
  background: #fee2e2;
}

/* Quick Actions */
.quick-actions {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.quick-actions h3 {
  margin-bottom: 1rem;
}

.action-form {
  display: flex;
  gap: 1rem;
}

.action-form input,
.action-form select {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-family: inherit;
}

.btn-primary {
  background: #4F46E5;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #4338ca;
  transform: translateY(-1px);
}

/* Data Section */
.data-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.filter-controls {
  display: flex;
  gap: 1rem;
}

.search-input,
.filter-select {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  background: #f9fafb;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #6b7280;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.data-table td {
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;
}

.data-table tr:hover {
  background: #f9fafb;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-badge.success {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.error {
  background: #fee2e2;
  color: #991b1b;
}

/* Toast */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #1f2937;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  animation: slideIn 0.3s ease-out;
  z-index: 1000;
}

.toast.hidden {
  display: none;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .dashboard {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    padding: 1rem;
  }
  
  .nav {
    flex-direction: row;
    overflow-x: auto;
  }
  
  .action-form {
    flex-direction: column;
  }
}`,
      js: `console.log('Interactive dashboard loaded!');

// Toast notification function
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
  
  console.log('Toast:', message);
}

// Refresh button
document.getElementById('refresh-btn').addEventListener('click', () => {
  console.log('Refreshing data...');
  
  // Simulate data update
  const statUsers = document.getElementById('stat-users');
  const currentValue = parseInt(statUsers.textContent.replace(',', ''));
  const newValue = currentValue + Math.floor(Math.random() * 20);
  statUsers.textContent = newValue.toLocaleString();
  
  showToast('✓ Data refreshed successfully!');
});

// Notification button
document.getElementById('notify-btn').addEventListener('click', () => {
  showToast('📬 You have 3 new notifications');
  console.log('Notifications clicked');
});

// Add user form
document.getElementById('add-user-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('user-name').value;
  const email = document.getElementById('user-email').value;
  const role = document.getElementById('user-role').value;
  
  console.log('Adding user:', { name, email, role });
  
  // Add to activity table
  const tbody = document.getElementById('activity-tbody');
  const newRow = document.createElement('tr');
  newRow.innerHTML = \`
    <td>Just now</td>
    <td>User registered</td>
    <td>\${name}</td>
    <td><span class="status-badge success">Success</span></td>
  \`;
  tbody.insertBefore(newRow, tbody.firstChild);
  
  // Update user count
  const statUsers = document.getElementById('stat-users');
  const current = parseInt(statUsers.textContent.replace(',', ''));
  statUsers.textContent = (current + 1).toLocaleString();
  
  showToast(\`✓ User "\${name}" added successfully!\`);
  
  // Reset form
  e.target.reset();
});

// Search functionality
document.getElementById('search-input').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const rows = document.querySelectorAll('#activity-tbody tr');
  
  let visibleCount = 0;
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      row.style.display = '';
      visibleCount++;
    } else {
      row.style.display = 'none';
    }
  });
  
  console.log(\`Search: "\${searchTerm}" - \${visibleCount} results\`);
});

// Filter functionality
document.getElementById('filter-select').addEventListener('change', (e) => {
  const filter = e.target.value;
  console.log('Filter changed to:', filter);
  showToast(\`Filter applied: \${filter}\`);
});

// Animate stats on load
window.addEventListener('load', () => {
  const statValues = document.querySelectorAll('.stat-value');
  statValues.forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      stat.style.transition = 'all 0.5s ease-out';
      stat.style.opacity = '1';
      stat.style.transform = 'translateY(0)';
    }, 100);
  });
});

console.log('Dashboard initialized with all event listeners');`
    },
    tests: [
      { id: 1, description: "Form submit dengan preventDefault()", passed: true },
      { id: 2, description: "Search filter berfungsi real-time", passed: true },
      { id: 3, description: "Dynamic DOM manipulation (add row)", passed: true },
      { id: 4, description: "Toast notification system", passed: true },
      { id: 5, description: "Stats counter update", passed: true },
      { id: 6, description: "Multiple event listeners berfungsi", passed: true }
    ]
  }
};