(function(){

    "use strict";
    let currentImage = 0;
    const myImages = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    const container = document.getElementById('content');
    const next = document.getElementById('next');
    const previous = document.getElementById('previous');

    next.addEventListener('click',function(event){
        event.preventDefault();

        currentImage++;
        if(currentImage > myImages.length-1)
        {
            currentImage = 0;
        }
        swap();
        });

        previous.addEventListener('click',function(event){
        event.preventDefault();

        currentImage--;
        if(currentImage < 0)
        {
            currentImage = myImages.length-1;
        }
        swap();
    });

        function swap(){
        const newSlide = document.createElement('img');
        newSlide.src = myImages[currentImage];
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);
        if(container.children.length > 2)
        {
            container.removeChild(container.children[0]);
        }
    }
})();