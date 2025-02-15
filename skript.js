//Die Skills Button auf der Home Seite
let skill = document.querySelectorAll('button');
 // let button = document.getElementsByClassName('skillsButton');

skill.forEach((button, index) => {
    button.addEventListener('click', function() {
        if (index === 2) {
            document.querySelector('.skillsPlaceholder').innerHTML = 'Programmming Languages: HTML, CSS and JavaScript Frameworks: React';
        } else if (index === 3) {
            document.querySelector('.skillsPlaceholder').innerHTML = 'it works for soft skills';
        }
    });
});


//Für das Bilder karussel auf der Home Seite
const carousel = document.querySelector('.carousel');
        let scrollAmount = 0;
        const step = 300;
        
        document.querySelector('.next').addEventListener('click', () => {
            carousel.scrollBy({ left: step, behavior: 'smooth' });
        });
        
        document.querySelector('.prev').addEventListener('click', () => {
            carousel.scrollBy({ left: -step, behavior: 'smooth' });
        });