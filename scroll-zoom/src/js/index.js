const banner = document.querySelector(".banner");

document.addEventListener("scroll", ()=> {
    // Scroll position with the top of the page
    let scrollPosition = document.documentElement.scrollTop;

    // Zoom on the background
    banner.style.backgroundSize = `${100 + scrollPosition / 10}%`;
})