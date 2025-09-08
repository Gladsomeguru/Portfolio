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
const cardWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 992 && window.innerWidth > 576) {
    cards.forEach(card => {
      card.style.minWidth = `${cardWidth - 180}px`;
      card.style.marginLeft = `10px`;
    });
  } else if (window.innerWidth <= 576 && window.innerWidth > 320) {
    cards.forEach(card => {
      card.style.minWidth = `${cardWidth - 40}px`;
      card.style.marginLeft = `30px`;
    });
  }
});
const carousel = document.getElementById("carousel-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
checkIndex();

function checkIndex(){
if (prevBtn) {
  if (currentIndex === 0) {
    prevBtn.classList.add('disabled');
    prevBtn.classList.add('opacity-25');
  } else {
    prevBtn.classList.remove('disabled');
    prevBtn.classList.remove('opacity-25');
  }
}
}


function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) {
      card.classList.add("active");
    }
  });
  const getwindowWidth = window.innerWidth;
  if (getwindowWidth < 769 && getwindowWidth > 576) {
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
  } else if (getwindowWidth <= 576 && window.innerWidth > 320) {
    carousel.style.transform = `translateX(-${index * (cardWidth - 10)}px)`;
  } else if (getwindowWidth <= 320) {
    carousel.style.transform = `translateX(-${index * 270}px)`;
  } else {
    carousel.style.transform = `translateX(-${index * 85.5}%)`;
  }
  checkIndex();
}
showCard(currentIndex);

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  console.log('currentIndex', currentIndex);
  showCard(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
});

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cards.forEach(card => card.classList.remove("active"));
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.8 });

cards.forEach(card => cardObserver.observe(card));

