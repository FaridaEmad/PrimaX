const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

const propreties = document.querySelectorAll('.property');
propreties.forEach((proprety ,i) => {
    proprety.addEventListener("click", () => {
        //unselect all the items
        propreties.forEach(proprety => proprety.classList.remove('prop-active'));

        propreties[i].classList.add("prop-active");
    });
    // select the first item on page load
    propreties[0].classList.add("prop-active");
});
