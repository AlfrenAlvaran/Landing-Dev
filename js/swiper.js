document.addEventListener('DOMContentLoaded', () => {
    const headerBtn = document.querySelector('.header-search');
    const iconSearch = document.querySelector('#iconSearch');
    let isActive = false;

    iconSearch.addEventListener('click', () => {
        if (isActive) {
            headerBtn.classList.remove('active');
        } else {
            headerBtn.classList.add('active');
        }
        isActive = !isActive;
    });

    setInterval(changeHero, 5000)

});




function changeHero () {
    const images = [
        'url(../img/banner2.png)',
        'url(../img/t1.jpg)',
        'url(../img/t2.jpg)',
        'url(../img/t3.png)',
    ]

    const home = document.querySelector('#home')
    const bgImg = images[Math.floor(Math.random() * images.length)]

    home.style.backgroundImage = bgImg
}
