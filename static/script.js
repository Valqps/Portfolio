var linksMenu = document.querySelectorAll('.js-link');
var sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute('id');

        if(top >= offset-1 && top <= offset + heightSection){
            linksMenu.forEach(link => {
                link.classList.remove('actived');
                document.querySelector(`nav a[href*='${idSection}']`).classList.add('actived');
            })
        }
    })
})
