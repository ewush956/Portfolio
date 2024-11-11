document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#me').addEventListener('click', function () {
        const shrinkDiv = document.querySelector('#shrink');
        const verticalImage = document.querySelector('#vertical-image');

        shrinkDiv.classList.toggle('shrunk');
        verticalImage.classList.toggle('visible');
    });
});