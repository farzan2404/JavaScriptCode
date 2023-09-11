window,addEventListener('load', function(){
    const slideCount = this.document.querySelectorAll('#slider-wrapper ul li').length;

    const slideWidth = this.document.querySelector('#slider-wrapper').offsetWidth;

    const totalWidth = slideCount * slideWidth + 'px';

    const slider = this.document.querySelector('#slider-wrapper ul');
    const next = this.document.getElementById('next');
    const previous = this.document.getElementById('prev');

    let  leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;

    next.addEventListener('click', function(evt){
        evt.preventDefault();
        counter++;
        if(counter === slideCount)
        {
            counter = 0;
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });

    previous.addEventListener('click', function(evt){
        evt.preventDefault();
        counter--;
        if(counter < 0)
        {
            counter = slideCount-1;
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });
});