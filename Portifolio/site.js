var hamburguer = document.querySelector('hamburguer')

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".conteiner").classList.toggle("show-menu")
);

let time= 2000,
        currentImageIndex=0,
        images = document
                    .querySelectorAll("#rr")
        max= images.lengeth;

function nextImage() {

    images[currentimageIndex]
        .classList.remove("rr")

    
    currentImageIndex++


    if ( currentImageIndex >= max ) 
           currentimageIndex= 0 

    images[currentimageIndex]
       .classList.add("rr")
}

function start() {
       
}   

window.addEventListener("load",start)