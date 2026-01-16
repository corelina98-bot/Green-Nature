const imageContainers = document.querySelectorAll('.image-container');

        imageContainers.forEach(container => {

            const image = container.querySelector('.image');
            const details = container.querySelector('.image-details');

            image.addEventListener('mouseover', () => {
                details.style.display = 'block';
            });

            image.addEventListener('mouseout', () => {
                details.style.display = 'none';
            });
        });


function returnToHomepage() {
    window.location.href = 'mini project 1 (EEI3346).html';
}        