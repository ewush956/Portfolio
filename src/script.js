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

    // New functionality for skill cards
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const description = card.querySelector('p');
            const image = card.querySelector('.skill-image');
            const isVisible = description.classList.contains('hidden');

            // Hide all descriptions and show all images
            skillCards.forEach(c => {
                
                c.querySelector('p').classList.add('hidden');
                c.querySelector('.skill-image').classList.remove('hidden');
                c.classList.remove('col-span-2');
            });

            // Toggle the clicked card
            if (isVisible) {
                description.classList.remove('hidden');
                image.classList.add('hidden');
                card.classList.add('col-span-2');
            }
        });

        card.addEventListener('click', () => {
            document.querySelector('.skills h2').classList.add('hidden');
        });
        card.addEventListener('mouseout', () => {
            document.querySelector('.skills h2').classList.remove('hidden');
        });
        
    });
});