function toggleSkillsLevelVisibility() {
  const skillsLevel = document.getElementById('skills-level');
  const toggleButton = document.getElementById('skill-toggle-button');
  if (skillsLevel) {
    skillsLevel.classList.toggle('d-none');
  }

  if (toggleButton) {
    if (toggleButton.classList.contains('bi-chevron-down')) {
      toggleButton.classList.remove('bi-chevron-down');
      toggleButton.classList.add('bi-chevron-up');
    } else {
      toggleButton.classList.remove('bi-chevron-up');
      toggleButton.classList.add('bi-chevron-down');
    }
  }
}

const exp_items = document.querySelectorAll(".exp-item");
const edu_items = document.querySelectorAll(".edu-item");

function observeItems(items) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const item = entry.target;
      if (entry.isIntersecting) {
        const index = Array.from(items).indexOf(item);
        setTimeout(() => item.classList.add("show"), index * 200);
      }
      // else {
      //    setTimeout(() => item.classList.remove("show"),index * 200);
      // }
    });
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));
}

observeItems(exp_items);
observeItems(edu_items);



function toggleExpEdu(section) {
  const container = document.getElementById(section);
  if (container) {
    const expContainer = document.getElementById('exp-container');
    const eduContainer = document.getElementById('edu-container');
    const expButton = document.getElementById('exp-btn');
    const eduButton = document.getElementById('edu-btn');

    if (section === 'exp-container') {
      expButton.classList.add('active');
      eduButton.classList.remove('active');
      eduContainer.classList.remove('d-block');
      eduContainer.classList.add('d-none');
      expContainer.classList.add('d-block');
      expContainer.classList.remove('d-none');
    } else {
      expButton.classList.remove('active');
      eduButton.classList.add('active');
      eduContainer.classList.add('d-block');
      eduContainer.classList.remove('d-none');
      expContainer.classList.remove('d-block');
      expContainer.classList.add('d-none');
    }
  }
}

const cards = document.querySelectorAll("#carousel-container .card-item");
const carousel = document.getElementById("carousel-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) {
      card.classList.add("active");
    }
  });
    carousel.style.transform = `translateX(-${index * 80}%)`;
}
showCard(currentIndex);

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  console.log('currentIndex',currentIndex);
  showCard(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
});

