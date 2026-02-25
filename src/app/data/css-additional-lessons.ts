// Additional CSS Lessons
export const CSS_ADDITIONAL_LESSONS = {
  "css-3": {
    id: "css-3",
    track: "CSS",
    level: "Dasar",
    title: "Typography & Colors",
    duration: "15 menit",
    xp: 20,
    description: "Styling teks dan menggunakan warna dengan CSS.",
    objective: "Menguasai font properties, color values, dan text styling.",
    content: [
      {
        type: "text",
        title: "Typography di CSS",
        body: "Font dan tipografi adalah bagian penting dari design. CSS menyediakan banyak properties untuk styling text seperti font-family, font-size, font-weight, dan line-height."
      },
      {
        type: "code",
        title: "Font & Text Properties",
        language: "css",
        code: `.heading {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-transform: uppercase;
}

.paragraph {
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  text-align: justify;
}`
      },
      {
        type: "list",
        title: "Color Values di CSS",
        items: [
          "Hex: #4F46E5",
          "RGB: rgb(79, 70, 229)",
          "RGBA: rgba(79, 70, 229, 0.5) - dengan transparency",
          "HSL: hsl(243, 75%, 59%)",
          "Named colors: red, blue, green"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Property CSS untuk mengubah ketebalan font adalah?",
        options: ["font-weight", "font-style", "text-weight", "font-bold"],
        correct: 0,
        explanation: "font-weight mengatur ketebalan font, nilai dari 100 (thin) sampai 900 (black)."
      },
      {
        id: 2,
        question: "Format warna CSS yang support transparency adalah?",
        options: ["rgba()", "rgb()", "hex", "hsl()"],
        correct: 0,
        explanation: "rgba() dan hsla() support alpha channel untuk transparency (0.0 - 1.0)."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Typography & Colors</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header class="hero">
      <h1 class="hero-title">Desain Tipografi Modern</h1>
      <p class="hero-subtitle">Belajar styling text dan warna dengan CSS</p>
    </header>

    <section class="content">
      <article class="card">
        <h2 class="card-title">Heading Level 2</h2>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <a href="#" class="card-link">Baca Selengkapnya →</a>
      </article>

      <article class="card accent">
        <h2 class="card-title">Warna & Kontras</h2>
        <p class="card-text">
          Gunakan warna dengan bijak untuk menciptakan hierarki visual 
          dan memastikan readability yang baik. Kontras yang cukup 
          antara text dan background sangat penting.
        </p>
        <a href="#" class="card-link">Pelajari Lebih Lanjut →</a>
      </article>
    </section>

    <aside class="palette">
      <h3>Color Palette</h3>
      <div class="color-grid">
        <div class="color-box primary">Primary</div>
        <div class="color-box secondary">Secondary</div>
        <div class="color-box accent">Accent</div>
        <div class="color-box neutral">Neutral</div>
      </div>
    </aside>
  </div>
</body>
</html>`,
      css: `/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #1f2937;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

/* Hero Section */
.hero {
  text-align: center;
  color: white;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -1px;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  opacity: 0.9;
  letter-spacing: 0.5px;
}

/* Content Cards */
.content {
  display: grid;
  gap: 2rem;
  margin-bottom: 2rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.card.accent {
  background: linear-gradient(135deg, #4F46E5 0%, #7c3aed 100%);
  color: white;
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.card.accent .card-title {
  color: white;
}

.card-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.card.accent .card-text {
  color: rgba(255,255,255,0.9);
}

.card-link {
  color: #4F46E5;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  transition: all 0.3s;
}

.card.accent .card-link {
  color: white;
  text-decoration: underline;
}

.card-link:hover {
  color: #4338ca;
  transform: translateX(4px);
}

/* Color Palette */
.palette {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.palette h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.color-box {
  padding: 2rem 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.color-box.primary {
  background: #4F46E5;
}

.color-box.secondary {
  background: #0EA5E9;
}

.color-box.accent {
  background: #22C55E;
}

.color-box.neutral {
  background: #6B7280;
}`,
      js: `console.log('Typography & Colors page loaded!');

// Log all font families used
const computedStyles = window.getComputedStyle(document.body);
console.log('Body font-family:', computedStyles.fontFamily);

// Show color values
const colorBoxes = document.querySelectorAll('.color-box');
colorBoxes.forEach(box => {
  const bgColor = window.getComputedStyle(box).backgroundColor;
  console.log(\`\${box.textContent} color:\`, bgColor);
});`
    },
    tests: [
      { id: 1, description: "Font-family custom digunakan", passed: true },
      { id: 2, description: "Font-weight berbeda untuk heading & text", passed: true },
      { id: 3, description: "Line-height >= 1.5 untuk readability", passed: true },
      { id: 4, description: "Minimal 3 warna berbeda digunakan", passed: true }
    ]
  },

  "css-4": {
    id: "css-4",
    track: "CSS",
    level: "Dasar",
    title: "Layout Dasar (Display & Position)",
    duration: "18 menit",
    xp: 25,
    description: "Memahami display properties dan positioning untuk layout.",
    objective: "Menguasai display (block, inline, inline-block) dan position (static, relative, absolute, fixed).",
    content: [
      {
        type: "text",
        title: "Display Property",
        body: "Display property mengontrol bagaimana elemen ditampilkan. Block elements mengambil full width, inline elements mengikuti flow text, dan inline-block kombinasi keduanya."
      },
      {
        type: "code",
        title: "Display Values",
        language: "css",
        code: `.block {
  display: block;      /* Full width, new line */
}

.inline {
  display: inline;     /* Flow with text */
}

.inline-block {
  display: inline-block; /* Inline but bisa set width/height */
}

.none {
  display: none;       /* Hidden completely */
}`
      },
      {
        type: "list",
        title: "Position Values",
        items: [
          "static: Default, mengikuti normal flow",
          "relative: Offset dari posisi normal",
          "absolute: Relative to nearest positioned parent",
          "fixed: Relative to viewport, tidak scroll",
          "sticky: Kombinasi relative dan fixed"
        ]
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Display property untuk elemen yang mengambil full width adalah?",
        options: ["block", "inline", "inline-block", "flex"],
        correct: 0,
        explanation: "display: block membuat elemen mengambil full width dan mulai di new line."
      },
      {
        id: 2,
        question: "Position value untuk membuat elemen fixed di viewport adalah?",
        options: ["fixed", "absolute", "sticky", "relative"],
        correct: 0,
        explanation: "position: fixed membuat elemen stay di posisi yang sama saat scroll."
      }
    ],
    initialCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Layout Dasar</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Fixed Header -->
  <header class="header-fixed">
    <div class="logo">StepByWeb</div>
    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main class="main-content">
    <section class="hero-section">
      <h1>Display & Position Properties</h1>
      <p>Belajar fundamental CSS layout</p>
    </section>

    <section class="demo-section">
      <h2>Display Examples</h2>
      
      <div class="demo-container">
        <div class="box block-box">Block Element</div>
        <div class="box block-box">Block Element 2</div>
      </div>

      <div class="demo-container">
        <span class="box inline-box">Inline 1</span>
        <span class="box inline-box">Inline 2</span>
        <span class="box inline-box">Inline 3</span>
      </div>

      <div class="demo-container">
        <div class="box inline-block-box">Inline-Block 1</div>
        <div class="box inline-block-box">Inline-Block 2</div>
        <div class="box inline-block-box">Inline-Block 3</div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Position Examples</h2>
      
      <div class="position-demo">
        <div class="box relative-box">
          Relative
          <div class="badge absolute-badge">Absolute</div>
        </div>
      </div>

      <div class="scroll-section">
        <p>Scroll down untuk melihat fixed header...</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </section>
  </main>

  <!-- Fixed Bottom Button -->
  <button class="btn-fixed">
    ↑ Back to Top
  </button>

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
  padding-top: 70px; /* Space for fixed header */
}

/* Fixed Header */
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #4F46E5;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.nav a:hover {
  opacity: 0.8;
}

/* Main Content */
.main-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 3rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.demo-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.demo-section h2 {
  color: #4F46E5;
  margin-bottom: 1.5rem;
}

.demo-container {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 2px dashed #d1d5db;
}

.box {
  background: #4F46E5;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 600;
  margin: 0.5rem 0;
}

/* Display: Block */
.block-box {
  display: block;
}

/* Display: Inline */
.inline-box {
  display: inline;
  background: #0EA5E9;
}

/* Display: Inline-Block */
.inline-block-box {
  display: inline-block;
  width: 150px;
  background: #22C55E;
  margin-right: 0.5rem;
  text-align: center;
}

/* Position: Relative & Absolute */
.position-demo {
  padding: 2rem;
  background: #f9fafb;
  border-radius: 8px;
}

.relative-box {
  position: relative;
  background: #7c3aed;
  padding: 2rem;
  margin-bottom: 1rem;
}

.absolute-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ef4444;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
}

.scroll-section {
  margin-top: 2rem;
  line-height: 2;
}

.scroll-section p {
  padding: 1rem;
  background: #f3f4f6;
  margin-bottom: 0.5rem;
  border-radius: 6px;
}

/* Fixed Bottom Button */
.btn-fixed {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #4F46E5;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  transition: all 0.3s;
  z-index: 50;
}

.btn-fixed:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.5);
}`,
      js: `console.log('Layout page loaded!');

const btnFixed = document.querySelector('.btn-fixed');

btnFixed.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  console.log('Scrolled to top');
});

// Show/hide button based on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnFixed.style.opacity = '1';
    btnFixed.style.pointerEvents = 'auto';
  } else {
    btnFixed.style.opacity = '0';
    btnFixed.style.pointerEvents = 'none';
  }
});

// Initial hide
btnFixed.style.opacity = '0';
btnFixed.style.transition = 'opacity 0.3s';`
    },
    tests: [
      { id: 1, description: "Ada elemen dengan position: fixed", passed: true },
      { id: 2, description: "Ada elemen dengan display: block", passed: true },
      { id: 3, description: "Ada elemen dengan display: inline", passed: true },
      { id: 4, description: "Ada elemen dengan position: absolute", passed: true },
      { id: 5, description: "Fixed header tidak scroll bersama konten", passed: true }
    ]
  }
};
