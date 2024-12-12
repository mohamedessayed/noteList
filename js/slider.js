var images = document.querySelectorAll('.slider img')
var modal = document.querySelector('.modal-slider');
var currentIndex = -1;
var modalImage = document.querySelector('.modal-slider img');

images.forEach(function(image){
    image.addEventListener('click',function(){
        modal.classList.add('d-block');
        modalImage.src = image.src;
        currentIndex = Number(image.dataset.slide)
    })
})

document.getElementById('modalClose').addEventListener('click',function(){
    if (modal.classList.contains('d-block')) {
        modal.classList.remove('d-block')
    }
})

document.getElementById('prevSlide').addEventListener('click',function(){
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    var pervImage = images.item(currentIndex);
    modalImage.src = pervImage.src;
    
});

document.getElementById('nextSlide').addEventListener('click',function(){
    currentIndex += 1;
    if (currentIndex > images.length-1) {
        currentIndex = 0;
    }
    var nextImage = images.item(currentIndex);
    modalImage.src = nextImage.src;
});
