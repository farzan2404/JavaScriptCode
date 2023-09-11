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

    var timer = setInterval( sliding, 2500);
    
    function sliding(){
        counter++;
        if(counter === slideCount)
        {
            counter = 0;
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    }

    document.getElementById('slider-wrapper').addEventListener('mouseover', function(){
        clearInterval(timer);
    document.getElementById('slider-wrapper').addEventListener('mouseout', function(){
        timer = setInterval( sliding, 2500);
    });
    });
});