document.addEventListener('DOMContentLoaded', function () {
    const shrinkDiv = document.querySelector('#shrink');
    const verticalImage = document.querySelector('#vertical-image');
    const skillsHeading = document.getElementById('skills-heading');

    function toggleSkillsHeading() {
        if (shrinkDiv.classList.contains('shrunk')) {
            skillsHeading.classList.add('hidden');
        } else {
            skillsHeading.classList.remove('hidden');
        }
    }

    document.querySelector('#me').addEventListener('click', function () {
        shrinkDiv.classList.toggle('shrunk');
        verticalImage.classList.toggle('visible');
        toggleSkillsHeading(); // Check the state after toggling
    });

    // Initial check
    toggleSkillsHeading();
});