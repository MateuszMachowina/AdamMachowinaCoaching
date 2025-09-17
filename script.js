  // Animacja menu hamburger i autozamykanie
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Zamknij menu po kliknięciu na link (tylko na mobile)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if(window.innerWidth <= 768){
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  // Pojawianie sekcji na scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.1});

  sections.forEach(section => observer.observe(section));

  // Przycisk "Do góry"
  const toTopBtn = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
      toTopBtn.style.display = 'block';
    } else {
      toTopBtn.style.display = 'none';
    }
  });
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

// Lista dokumentów
const documents = [
  { pdf: "/assets/podziekowanie_master_lean_management.pdf", title: "Podziękowanie Masterclass Lean Management" },
  { pdf: "/assets/przyklad.pdf", title: "Przykład" }
  // tutaj dodaje kolejne
];

const container = document.getElementById("docs-carousel");
documents.forEach(doc => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <div class="document-thumb">
      <a href="${doc.pdf}" target="_blank">
        <svg viewBox="0 0 24 24">
          <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V7h-5V2H6zm1 4h10v2H7V6zm0 4h10v2H7v-2z"/>
        </svg>
      </a>
      <p>${doc.title}</p>
    </div>
  `;
  container.appendChild(slide);
});

new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
