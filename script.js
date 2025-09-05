'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-link');
  const sections = document.querySelectorAll('.section');
  const nav = document.querySelector('.navbar');
  const scrollWatcher = document.getElementById('scroll-watcher');

  // Smooth scroll functionality
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Active link highlighting on scroll
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { rootMargin: "-50% 0px -50% 0px" });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Navbar corner rounding observer
  const navObserver = new IntersectionObserver((entries) => {
    nav.classList.toggle('navbar-top', entries[0].isIntersecting);
  }, { threshold: [1] });

  navObserver.observe(scrollWatcher);
});