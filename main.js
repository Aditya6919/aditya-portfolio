/* =============================================
   ADITYA SINGH PORTFOLIO — MAIN JS
   ============================================= */

// ---- Custom Cursor ----
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Grow cursor on hover
document.querySelectorAll('a, button, .cert-card, .skill-block').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '14px';
    cursor.style.height = '14px';
    follower.style.width = '48px';
    follower.style.height = '48px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '8px';
    cursor.style.height = '8px';
    follower.style.width = '32px';
    follower.style.height = '32px';
  });
});

// ---- Nav scroll effect ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ---- Reveal on scroll ----
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 60 * (entry.target.dataset.delay || 0));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Stagger children in grids/timelines
document.querySelectorAll('.skills-grid, .certs-grid, .timeline, .value-pillars').forEach(parent => {
  const children = parent.querySelectorAll('.reveal');
  children.forEach((child, i) => {
    child.dataset.delay = i;
  });
});

revealEls.forEach(el => observer.observe(el));

// ---- Hero reveal on load ----
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 120);
  });
});

// ---- Mobile Menu ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  const spans = hamburger.querySelectorAll('span');
  if (menuOpen) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  }
});

function closeMobileMenu() {
  menuOpen = false;
  mobileMenu.classList.remove('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = '';
  spans[1].style.transform = '';
}

// ---- Certificate Modal ----
const certModal = document.getElementById('certModal');
const modalBody = document.getElementById('modalBody');

function openCert(src, title) {
  const isPdf = src.endsWith('.pdf');
  if (isPdf) {
    modalBody.innerHTML = `<iframe src="${src}" title="${title}"></iframe>`;
  } else {
    modalBody.innerHTML = `<img src="${src}" alt="${title}" />`;
  }
  certModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCert() {
  certModal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { modalBody.innerHTML = ''; }, 350);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCert();
});

// ---- Contact Form ----
function sendMessage() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const msg = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in all fields before sending.');
    return;
  }

  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body = encodeURIComponent(`Hi Aditya,\n\nMy name is ${name} (${email}).\n\n${msg}\n\nBest regards,\n${name}`);
  window.location.href = `mailto:adityasinghnnic@gmail.com?subject=${subject}&body=${body}`;
}

// ---- Smooth active link highlighting ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
