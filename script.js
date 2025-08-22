function toggleSkillsLevelVisibility() {
    const skillsLevel = document.getElementById('skills-level');
    const toggleButton = document.getElementById('skill-toggle-button');
    if (skillsLevel) {
        skillsLevel.classList.toggle('d-none');
    }
    if (toggleButton) {
        let icon = toggleButton.querySelector('.show-skill-btn');
        if (icon) {
            console.log('Toggling icon class');
            if (icon.classList.contains('bi-chevron-down')) {
                icon.classList.remove('bi-chevron-down');
                icon.classList.add('bi-chevron-up');
            } else {
                icon.classList.remove('bi-chevron-up');
                icon.classList.add('bi-chevron-down');
            }
        }
    }
}