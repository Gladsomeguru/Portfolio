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


const items = document.querySelectorAll(".exp-item");

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
