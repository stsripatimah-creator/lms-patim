// Complete Additional Lessons for CSS and JavaScript
export const CSS_MORE_LESSONS = {
  "css-6": {
    id: "css-6",
    track: "CSS",
    level: "Menengah",
    title: "CSS Grid Layout",
    duration: "22 menit",
    xp: 30,
    description: "Membuat layout 2D dengan CSS Grid untuk complex designs.",
    objective: "Menguasai grid-template-columns, grid-template-rows, grid-gap, dan grid areas.",
    content: [
      {
        type: "text",
        title: "CSS Grid",
        body: "CSS Grid adalah layout system 2D yang powerful untuk membuat complex layouts. Berbeda dengan Flexbox yang 1D, Grid bisa handle rows dan columns secara bersamaan."
      },
      {
        type: "code",
        title: "Grid Basic",
        language: "css",
        code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
}

.item {
  grid-column: span 2; /* Span 2 columns */
  grid-row: span 1;
}`
      },
      {
        type: "list",
        title: "Grid Properties",
        items: [
          "grid-template-columns: Definisi kolom",
          "grid-template-rows: Definisi baris",
          "gap: Spacing antar cells",
          "grid-column / grid-row: Posisi item",
          "grid-template-areas: Named grid areas"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Property untuk membuat 3 kolom sama lebar di Grid adalah?",
        options: ["grid-template-columns: repeat(3, 1fr)", "columns: 3", "grid-columns: 3", "column-count: 3"],
        correct: 0,
        explanation: "repeat(3, 1fr) membuat 3 kolom dengan lebar flexible yang sama (1 fraction unit)."
      },
      {
        id: 2,
        question: "Property untuk spacing antar grid items adalah?",
        options: ["gap", "margin", "spacing", "gutter"],
        correct: 0,
        explanation: "gap (atau grid-gap) mengatur spacing antar grid items baik horizontal maupun vertical."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CSS Grid Gallery</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header class="header">
      <h1>📐 CSS Grid Photo Gallery</h1>
      <p>Responsive image gallery dengan CSS Grid</p>
    </header>

    <div class="gallery">
      <div class="gallery-item featured">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" alt="Mountain">
        <div class="overlay">
          <h3>Mountain View</h3>
          <p>Featured</p>
        </div>
      </div>

      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400" alt="Nature">
        <div class="overlay">
          <h3>Forest</h3>
        </div>
      </div>

      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400" alt="Beach">
        <div class="overlay">
          <h3>Beach</h3>
        </div>
      </div>

      <div class="gallery-item tall">
        <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400" alt="Fog">
        <div class="overlay">
          <h3>Foggy Morning</h3>
        </div>
      </div>

      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400" alt="River">
        <div class="overlay">
          <h3>River</h3>
        </div>
      </div>

      <div class="gallery-item wide">
        <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800" alt="Lake">
        <div class="overlay">
          <h3>Lake Sunset</h3>
        </div>
      </div>
    </div>

    <footer class="footer">
      <p>&copy; 2025 CSS Grid Gallery</p>
    </footer>
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

/* CSS Grid Gallery */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0,0,0,0.3);
}

/* Grid item variations */
.gallery-item.featured {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item.wide {
  grid-column: span 2;
}

.gallery-item.tall {
  grid-row: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.gallery-item:hover .overlay {
  transform: translateY(0);
}

.overlay h3 {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.footer {
  text-align: center;
  color: white;
  padding: 2rem;
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
}

/* Responsive */
@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 150px;
    gap: 1rem;
  }
  
  .gallery-item.featured,
  .gallery-item.wide,
  .gallery-item.tall {
    grid-column: span 1;
    grid-row: span 1;
  }
}`,
      js: `console.log('CSS Grid gallery loaded!');

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    const title = item.querySelector('h3').textContent;
    console.log(\`Clicked on: \${title}\`);
    alert(\`📷 \${title}\`);
  });
  
  // Add animation delay
  item.style.animation = \`fadeIn 0.5s ease-out \${index * 0.1}s both\`;
});

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = \`
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
\`;
document.head.appendChild(style);

console.log(\`Gallery loaded with \${galleryItems.length} items\`);`
    },
    tests: [
      { id: 1, description: "Display grid digunakan", passed: true },
      { id: 2, description: "Grid-template-columns dengan repeat()", passed: true },
      { id: 3, description: "Gap property untuk spacing", passed: true },
      { id: 4, description: "Grid-column span untuk featured item", passed: true },
      { id: 5, description: "Responsive grid dengan auto-fit", passed: true }
    ]
  },

  "css-7": {
    id: "css-7",
    track: "CSS",
    level: "Menengah",
    title: "Responsive Design dengan Media Queries",
    duration: "25 menit",
    xp: 30,
    description: "Membuat website yang responsive di berbagai ukuran layar.",
    objective: "Menguasai media queries, breakpoints, dan mobile-first design.",
    content: [
      {
        type: "text",
        title: "Responsive Web Design",
        body: "Media queries memungkinkan kita apply CSS rules berdasarkan device characteristics seperti screen width, height, atau orientation. Ini essential untuk membuat website yang work di semua devices."
      },
      {
        type: "code",
        title: "Media Query Syntax",
        language: "css",
        code: `/* Mobile first approach */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}`
      },
      {
        type: "list",
        title: "Common Breakpoints",
        items: [
          "Mobile: < 768px",
          "Tablet: 768px - 1024px",
          "Desktop: > 1024px",
          "Large Desktop: > 1440px"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Media query untuk tablet portrait adalah?",
        options: ["@media (min-width: 768px)", "@media screen and (width: 768px)", "@media tablet", "@media (device: tablet)"],
        correct: 0,
        explanation: "@media (min-width: 768px) applies styles untuk screen width 768px ke atas."
      },
      {
        id: 2,
        question: "Mobile-first approach artinya?",
        options: ["Style mobile dulu, kemudian tambahkan media queries untuk larger screens", "Style desktop dulu", "Style tablet dulu", "Tidak ada perbedaan"],
        correct: 0,
        explanation: "Mobile-first berarti base styles untuk mobile, kemudian enhance dengan media queries untuk larger screens."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="navbar">
    <div class="nav-brand">📱 ResponsiveSite</div>
    <button class="nav-toggle" id="navToggle">☰</button>
    <ul class="nav-menu" id="navMenu">
      <li><a href="#home">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <header class="hero">
    <h1>Responsive Web Design</h1>
    <p>Looks great on all devices - mobile, tablet, and desktop</p>
    <button class="btn-cta">Get Started</button>
  </header>

  <section class="features">
    <h2>Features</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">📱</div>
        <h3>Mobile First</h3>
        <p>Optimized for mobile devices with progressive enhancement.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💻</div>
        <h3>Desktop Ready</h3>
        <p>Scales beautifully to larger screens with adaptive layout.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Fast Loading</h3>
        <p>Lightweight and performant across all connections.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎨</div>
        <h3>Modern Design</h3>
        <p>Clean interface with smooth transitions and animations.</p>
      </div>
    </div>
  </section>

  <footer class="footer">
    <p>&copy; 2025 ResponsiveSite. All rights reserved.</p>
  </footer>

  <div class="screen-indicator">
    <span id="screenSize">Screen: Mobile</span>
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
  color: #1f2937;
  line-height: 1.6;
}

/* Navbar - Mobile First */
.navbar {
  background: #4F46E5;
  color: white;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-toggle {
  display: block;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.nav-menu {
  display: none;
  list-style: none;
  margin-top: 1rem;
}

.nav-menu.active {
  display: block;
}

.nav-menu li {
  margin-bottom: 0.75rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: opacity 0.3s;
}

.nav-menu a:hover {
  opacity: 0.8;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 1.5rem;
  text-align: center;
}

.hero h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn-cta {
  background: white;
  color: #4F46E5;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Features Section */
.features {
  padding: 3rem 1.5rem;
  background: #f9fafb;
}

.features h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1f2937;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #4F46E5;
}

.feature-card p {
  color: #6b7280;
}

/* Footer */
.footer {
  background: #1f2937;
  color: white;
  padding: 2rem;
  text-align: center;
}

/* Screen Indicator */
.screen-indicator {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  z-index: 1000;
}

/* ===== TABLET BREAKPOINT ===== */
@media (min-width: 768px) {
  .nav-toggle {
    display: none;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
  
  .nav-menu {
    display: flex !important;
    flex-direction: row;
    gap: 2rem;
    margin-top: 0;
  }
  
  .nav-menu li {
    margin-bottom: 0;
  }
  
  .hero {
    padding: 5rem 2rem;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero p {
    font-size: 1.25rem;
  }
  
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* ===== DESKTOP BREAKPOINT ===== */
@media (min-width: 1024px) {
  .navbar {
    padding: 1rem 3rem;
  }
  
  .hero {
    padding: 8rem 3rem;
  }
  
  .hero h1 {
    font-size: 4rem;
  }
  
  .features {
    padding: 5rem 3rem;
  }
  
  .feature-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ===== LARGE DESKTOP ===== */
@media (min-width: 1440px) {
  .hero {
    padding: 10rem 3rem;
  }
  
  .hero h1 {
    font-size: 5rem;
  }
}`,
      js: `console.log('Responsive website loaded!');

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  console.log('Nav menu toggled');
});

// Update screen size indicator
function updateScreenIndicator() {
  const screenSize = document.getElementById('screenSize');
  const width = window.innerWidth;
  
  let size = 'Mobile';
  if (width >= 1440) {
    size = 'Large Desktop';
  } else if (width >= 1024) {
    size = 'Desktop';
  } else if (width >= 768) {
    size = 'Tablet';
  }
  
  screenSize.textContent = \`Screen: \${size} (\${width}px)\`;
}

// Update on load and resize
updateScreenIndicator();
window.addEventListener('resize', updateScreenIndicator);

// CTA button
document.querySelector('.btn-cta').addEventListener('click', () => {
  alert('🎉 Welcome! This is a responsive demo.');
  console.log('CTA clicked');
});

console.log('Window width:', window.innerWidth);`
    },
    tests: [
      { id: 1, description: "Ada media query untuk tablet (768px)", passed: true },
      { id: 2, description: "Ada media query untuk desktop (1024px)", passed: true },
      { id: 3, description: "Mobile navigation toggle berfungsi", passed: true },
      { id: 4, description: "Layout berubah di different breakpoints", passed: true },
      { id: 5, description: "Meta viewport tag ada di HTML", passed: true }
    ]
  },

  "css-8": {
    id: "css-8",
    track: "CSS",
    level: "Menengah",
    title: "Transitions & Hover Effects",
    duration: "18 menit",
    xp: 25,
    description: "Membuat smooth transitions dan interactive hover effects.",
    objective: "Menguasai transition properties, timing functions, dan pseudo-classes.",
    content: [
      {
        type: "text",
        title: "CSS Transitions",
        body: "Transitions membuat perubahan CSS properties menjadi smooth over time. Ini improves user experience dengan memberikan visual feedback yang natural."
      },
      {
        type: "code",
        title: "Transition Syntax",
        language: "css",
        code: `.button {
  background: blue;
  transition: all 0.3s ease-out;
}

.button:hover {
  background: darkblue;
  transform: translateY(-2px);
}

/* Specific properties */
.box {
  transition: 
    background-color 0.3s ease,
    transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`
      },
      {
        type: "list",
        title: "Timing Functions",
        items: [
          "ease: Slow start, fast middle, slow end",
          "linear: Constant speed",
          "ease-in: Slow start",
          "ease-out: Slow end",
          "ease-in-out: Slow start and end",
          "cubic-bezier(): Custom timing"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Property untuk membuat smooth transition adalah?",
        options: ["transition", "animation", "transform", "smooth"],
        correct: 0,
        explanation: "transition property mengatur smooth changes antara state (misalnya normal ke hover)."
      },
      {
        id: 2,
        question: "Timing function untuk slow start dan end adalah?",
        options: ["ease-in-out", "ease", "linear", "ease-out"],
        correct: 0,
        explanation: "ease-in-out memberikan acceleration di awal dan deceleration di akhir."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Transitions & Hover Effects</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>✨ Interactive Components</h1>
    <p class="subtitle">Hover untuk melihat effects!</p>

    <section class="demo-section">
      <h2>Button Effects</h2>
      <div class="button-grid">
        <button class="btn btn-slide">Slide Effect</button>
        <button class="btn btn-grow">Grow Effect</button>
        <button class="btn btn-shadow">Shadow Effect</button>
        <button class="btn btn-rotate">Rotate Effect</button>
      </div>
    </section>

    <section class="demo-section">
      <h2>Card Hover Effects</h2>
      <div class="card-grid">
        <div class="card card-lift">
          <div class="card-icon">🚀</div>
          <h3>Lift Up</h3>
          <p>Card moves up on hover with shadow</p>
        </div>

        <div class="card card-tilt">
          <div class="card-icon">🎨</div>
          <h3>Tilt Effect</h3>
          <p>Card tilts with 3D transform</p>
        </div>

        <div class="card card-glow">
          <div class="card-icon">💎</div>
          <h3>Glow Border</h3>
          <p>Glowing border animation</p>
        </div>

        <div class="card card-flip">
          <div class="card-icon">🔄</div>
          <h3>Flip Card</h3>
          <p>Flips to show back content</p>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Image Effects</h2>
      <div class="image-grid">
        <div class="image-box zoom">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" alt="Mountain">
          <div class="image-overlay">
            <span>Zoom In</span>
          </div>
        </div>

        <div class="image-box grayscale">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400" alt="Nature">
          <div class="image-overlay">
            <span>Color on Hover</span>
          </div>
        </div>

        <div class="image-box blur">
          <img src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400" alt="Beach">
          <div class="image-overlay">
            <span>Blur Effect</span>
          </div>
        </div>
      </div>
    </section>
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
  color: #1f2937;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: rgba(255,255,255,0.9);
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.demo-section {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}

.demo-section h2 {
  color: #4F46E5;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
}

/* Button Effects */
.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-slide {
  background: #4F46E5;
  color: white;
}

.btn-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.2);
  transition: left 0.3s ease;
}

.btn-slide:hover::before {
  left: 100%;
}

.btn-grow {
  background: #22C55E;
  color: white;
}

.btn-grow:hover {
  transform: scale(1.1);
}

.btn-shadow {
  background: #0EA5E9;
  color: white;
}

.btn-shadow:hover {
  box-shadow: 0 10px 30px rgba(14, 165, 233, 0.5);
  transform: translateY(-3px);
}

.btn-rotate {
  background: #F59E0B;
  color: white;
}

.btn-rotate:hover {
  transform: rotate(5deg);
}

/* Card Effects */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.card {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card h3 {
  color: #1f2937;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.card p {
  color: #6b7280;
  font-size: 0.95rem;
}

.card-lift:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card-tilt:hover {
  transform: perspective(1000px) rotateY(10deg);
}

.card-glow {
  border: 2px solid transparent;
}

.card-glow:hover {
  border-color: #4F46E5;
  box-shadow: 0 0 20px rgba(79, 70, 229, 0.5);
}

.card-flip {
  transform-style: preserve-3d;
}

.card-flip:hover {
  transform: rotateY(180deg);
}

/* Image Effects */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.image-box {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.image-box img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: all 0.5s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(79, 70, 229, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-box:hover .image-overlay {
  opacity: 1;
}

/* Zoom effect */
.zoom:hover img {
  transform: scale(1.2);
}

/* Grayscale effect */
.grayscale img {
  filter: grayscale(100%);
}

.grayscale:hover img {
  filter: grayscale(0%);
}

/* Blur effect */
.blur:hover img {
  filter: blur(5px);
}`,
      js: `console.log('Transitions demo loaded!');

// Add click feedback to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    console.log('Button clicked:', this.textContent);
    
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.style.cssText = \`
      position: absolute;
      background: rgba(255,255,255,0.6);
      border-radius: 50%;
      width: 100px;
      height: 100px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      animation: ripple 0.6s ease-out;
    \`;
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = \`
  @keyframes ripple {
    to {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }
\`;
document.head.appendChild(style);

// Card click events
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', function() {
    const title = this.querySelector('h3').textContent;
    console.log('Card clicked:', title);
  });
});

// Image hover events
const images = document.querySelectorAll('.image-box');
images.forEach(img => {
  img.addEventListener('mouseenter', function() {
    console.log('Image hovered');
  });
});

console.log('All hover effects initialized');`
    },
    tests: [
      { id: 1, description: "Transition property digunakan", passed: true },
      { id: 2, description: "Hover effects pada buttons berfungsi", passed: true },
      { id: 3, description: "Transform digunakan untuk animations", passed: true },
      { id: 4, description: "Multiple timing functions diterapkan", passed: true },
      { id: 5, description: "Image filters dengan transitions", passed: true }
    ]
  }
};

export const JS_ADDITIONAL_LESSONS = {
  "js-3": {
    id: "js-3",
    track: "JavaScript",
    level: "Dasar",
    title: "Operators & Expressions",
    duration: "15 menit",
    xp: 20,
    description: "Belajar arithmetic, comparison, dan logical operators dalam JavaScript.",
    objective: "Menguasai operators untuk calculations, comparisons, dan logical operations.",
    content: [
      {
        type: "text",
        title: "JavaScript Operators",
        body: "Operators adalah symbols yang perform operations pada values. Ada beberapa jenis: arithmetic (+, -, *, /), comparison (==, ===, >, <), dan logical (&&, ||, !)."
      },
      {
        type: "code",
        title: "Operator Examples",
        language: "javascript",
        code: `// Arithmetic
let sum = 10 + 5;      // 15
let product = 10 * 5;  // 50

// Comparison
let isEqual = (10 === 10);  // true
let isGreater = (10 > 5);   // true

// Logical
let and = (true && false);  // false
let or = (true || false);   // true`
      },
      {
        type: "list",
        title: "Operator Types",
        items: [
          "Arithmetic: +, -, *, /, % (modulus)",
          "Assignment: =, +=, -=, *=, /=",
          "Comparison: ==, ===, !=, !==, >, <, >=, <=",
          "Logical: && (AND), || (OR), ! (NOT)",
          "Ternary: condition ? true : false"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Operator untuk modulus (sisa pembagian) adalah?",
        options: ["%", "mod", "//", "rem"],
        correct: 0,
        explanation: "Operator % returns sisa pembagian. Contoh: 10 % 3 = 1"
      },
      {
        id: 2,
        question: "Perbedaan == dan === adalah?",
        options: ["=== checks type dan value, == hanya value", "=== lebih cepat", "Tidak ada perbedaan", "== checks type dan value"],
        correct: 0,
        explanation: "=== (strict equality) checks both type and value, sedangkan == hanya checks value dengan type coercion."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Calculator App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="calculator">
    <h1>🔢 Simple Calculator</h1>
    
    <div class="display">
      <div class="operation" id="operation"></div>
      <div class="result" id="result">0</div>
    </div>

    <div class="inputs">
      <input type="number" id="num1" placeholder="Number 1" value="10">
      <select id="operator">
        <option value="+">+ Add</option>
        <option value="-">- Subtract</option>
        <option value="*">× Multiply</option>
        <option value="/">÷ Divide</option>
        <option value="%">% Modulus</option>
      </select>
      <input type="number" id="num2" placeholder="Number 2" value="5">
    </div>

    <button id="calculate" class="btn-calculate">Calculate</button>

    <div class="comparison">
      <h3>Comparison Results:</h3>
      <div id="comparisons"></div>
    </div>

    <div class="info">
      <h3>💡 Tips:</h3>
      <ul>
        <li><strong>+</strong> Addition: num1 + num2</li>
        <li><strong>-</strong> Subtraction: num1 - num2</li>
        <li><strong>*</strong> Multiplication: num1 × num2</li>
        <li><strong>/</strong> Division: num1 ÷ num2</li>
        <li><strong>%</strong> Modulus: Sisa pembagian</li>
      </ul>
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.calculator {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  max-width: 500px;
  width: 100%;
}

h1 {
  text-align: center;
  color: #4F46E5;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.display {
  background: #f3f4f6;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: right;
}

.operation {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  min-height: 20px;
}

.result {
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
}

.inputs {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

input[type="number"],
select {
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

input[type="number"]:focus,
select:focus {
  outline: none;
  border-color: #4F46E5;
}

select {
  background: white;
  cursor: pointer;
  font-weight: 600;
  color: #4F46E5;
}

.btn-calculate {
  width: 100%;
  background: #4F46E5;
  color: white;
  border: none;
  padding: 1.25rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 2rem;
}

.btn-calculate:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}

.comparison,
.info {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

h3 {
  color: #1f2937;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

#comparisons {
  display: grid;
  gap: 0.5rem;
}

.comp-item {
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
}

.comp-label {
  color: #6b7280;
}

.comp-value {
  font-weight: 600;
  color: #4F46E5;
}

.info ul {
  list-style: none;
  padding: 0;
}

.info li {
  padding: 0.5rem 0;
  color: #4b5563;
  border-bottom: 1px solid #e5e7eb;
}

.info li:last-child {
  border-bottom: none;
}`,
      js: `console.log('Calculator app loaded!');

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calculateBtn = document.getElementById('calculate');
const operationDiv = document.getElementById('operation');
const resultDiv = document.getElementById('result');
const comparisonsDiv = document.getElementById('comparisons');

function calculate() {
  // Get values
  const num1 = parseFloat(num1Input.value) || 0;
  const num2 = parseFloat(num2Input.value) || 0;
  const operator = operatorSelect.value;
  
  let result;
  
  // Arithmetic operations
  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      result = 0;
  }
  
  // Display operation and result
  operationDiv.textContent = \`\${num1} \${operator} \${num2}\`;
  resultDiv.textContent = typeof result === 'number' ? result.toFixed(2) : result;
  
  console.log(\`Calculation: \${num1} \${operator} \${num2} = \${result}\`);
  
  // Show comparisons
  showComparisons(num1, num2);
}

function showComparisons(num1, num2) {
  const comparisons = [
    { label: 'num1 == num2', value: num1 == num2 },
    { label: 'num1 === num2', value: num1 === num2 },
    { label: 'num1 > num2', value: num1 > num2 },
    { label: 'num1 < num2', value: num1 < num2 },
    { label: 'num1 >= num2', value: num1 >= num2 },
    { label: 'num1 <= num2', value: num1 <= num2 },
    { label: 'num1 != num2', value: num1 != num2 }
  ];
  
  comparisonsDiv.innerHTML = comparisons.map(comp => \`
    <div class="comp-item">
      <span class="comp-label">\${comp.label}</span>
      <span class="comp-value">\${comp.value}</span>
    </div>
  \`).join('');
  
  console.log('Comparisons:', comparisons);
}

// Event listeners
calculateBtn.addEventListener('click', calculate);

// Calculate on input change
num1Input.addEventListener('input', calculate);
num2Input.addEventListener('input', calculate);
operatorSelect.addEventListener('change', calculate);

// Initial calculation
calculate();

console.log('Calculator ready!');`
    },
    tests: [
      { id: 1, description: "Arithmetic operators (+, -, *, /, %) berfungsi", passed: true },
      { id: 2, description: "Comparison operators menghasilkan boolean", passed: true },
      { id: 3, description: "parseFloat() untuk konversi string ke number", passed: true },
      { id: 4, description: "Switch statement untuk multiple conditions", passed: true }
    ]
  }
};
