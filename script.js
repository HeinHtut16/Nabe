const images = document.querySelectorAll(".gallery img");

function changeImageSize(start, increment, ...shape) {
    for(let i = start; i < images.length; i += increment) {
        images[i].classList.add(...shape);
    }
}

changeImageSize(2, 4, "tall");
changeImageSize(4, 4, "wide");
changeImageSize(10, 10, "wide", "tall");