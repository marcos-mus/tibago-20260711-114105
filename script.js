// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
  menuToggle.setAttribute('aria-expanded', 'false');
  menuOpen = false;
}

function openMobileMenu() {
  mobileMenu.style.display = 'block';
  menuToggle.setAttribute('aria-expanded', 'true');
  menuOpen = true;
}

menuToggle.addEventListener('click', function () {
  if (menuOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 900) {
    closeMobileMenu();
  }
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    closeMobileMenu();
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Current year in footer
document.addEventListener('DOMContentLoaded', function () {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Optional: Prevent default mailto form submission for demo UX
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    // For real deployment, remove this block to allow mailto submission
    // e.preventDefault();
    // alert('Merci pour votre message ! Nous vous répondrons rapidement.');
    // contactForm.reset();
  });
}