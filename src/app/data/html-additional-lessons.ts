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
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
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
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
      js: `// Tulis JavaScript kamu di sini`
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
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
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
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
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
      html: `<!-- Tulis kode HTML kamu di sini -->`,
      css: `/* Tulis CSS kamu di sini */`,
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