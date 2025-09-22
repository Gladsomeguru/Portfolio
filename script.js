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

function toggleProCert(section) {
  const container = document.getElementById(section);
  if (container) {
    const container1 = document.getElementById('project-container');
    const container2 = document.getElementById('certificate-container');
    const projectButton = document.getElementById('project-btn');
    const certificateButton = document.getElementById('certificate-btn');

    if (section === 'project-container') {
      projectButton.classList.add('active');
      certificateButton.classList.remove('active');
      container2.classList.remove('d-block');
      container2.classList.add('d-none');
      container1.classList.add('d-block');
      container1.classList.remove('d-none');
    } else {
      projectButton.classList.remove('active');
      certificateButton.classList.add('active');
      container2.classList.add('d-block');
      container2.classList.remove('d-none');
      container1.classList.remove('d-block');
      container1.classList.add('d-none');
    }
  }
}


function createCarousel(containerSelector, prevBtnSelector, nextBtnSelector) {
  const carousel = document.querySelector(containerSelector);
  const cards = carousel.querySelectorAll(".card-item");
  const prevBtn = document.querySelector(prevBtnSelector);
  const nextBtn = document.querySelector(nextBtnSelector);
  const cardWidth = window.innerWidth;
  let currentIndex = 0;

  function setCardSizes() {
    const windowWidth = window.innerWidth;

    cards.forEach(card => {
      if (windowWidth < 992 && windowWidth > 576) {
        card.style.minWidth = `${cardWidth - 180}px`;
        card.style.marginLeft = `10px`;
      } else if (windowWidth <= 576 && windowWidth > 320) {
        card.style.minWidth = `${cardWidth - 40}px`;
        card.style.marginLeft = `30px`;
      } else {
        card.style.minWidth = "";
        card.style.marginLeft = "";
      }
    });
  }

  function checkIndex() {
  if (cards.length <= 1) {
    // Disable both if only one card exists
    prevBtn?.classList.add("disabled", "opacity-25");
    nextBtn?.classList.add("disabled", "opacity-25");
    return;
  }

  if (prevBtn) {
    if (currentIndex === 0) {
      prevBtn.classList.add("disabled", "opacity-25");
    } else {
      prevBtn.classList.remove("disabled", "opacity-25");
    }
  }

  if (nextBtn) {
    if (currentIndex === cards.length - 1) {
      nextBtn.classList.add("disabled", "opacity-25");
    } else {
      nextBtn.classList.remove("disabled", "opacity-25");
    }
  }
}


  function showCard(index) {
    cards.forEach((card, i) => card.classList.remove("active"));
    cards[index].classList.add("active");

    const windowWidth = window.innerWidth;
    if (windowWidth < 769 && windowWidth > 576) {
      carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    } else if (windowWidth <= 576 && windowWidth > 320) {
      carousel.style.transform = `translateX(-${index * (cardWidth - 10)}px)`;
    } else if (windowWidth <= 320) {
      carousel.style.transform = `translateX(-${index * 270}px)`;
    } else {
      carousel.style.transform = `translateX(-${index * 85.5}%)`;
    }

    checkIndex();
  }

  function goBack() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  // Event listeners
  prevBtn?.addEventListener("click", goBack);
  nextBtn?.addEventListener("click", goNext);

  // Intersection Observer for active card
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach(card => card.classList.remove("active"));
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.8 });

  cards.forEach(card => cardObserver.observe(card));

  // Initialize
  setCardSizes();
  showCard(currentIndex);

  // Update sizes on resize
  window.addEventListener("resize", () => {
    setCardSizes();
    showCard(currentIndex);
  });

  return {
    goNext,
    goBack,
    showCard
  };
}


// Carousel 1
createCarousel("#carousel-container-1", "#prevBtn1", "#nextBtn1");

// Carousel 2
createCarousel("#carousel-container-2", "#prevBtn2", "#nextBtn2");
