(function(){

    'use strict';

const mytab = document.querySelectorAll('#tabs > ul > li > a');

                                    // for(let i=0; i<mytab.length; i++)
                                    // {
                                    //     mytab[i].addEventListener('click', SelectTab);
                                    // }

mytab.forEach(forEachTab =>{
    forEachTab.addEventListener('click', SelectTab);
});

function SelectTab(event)
{
    event.preventDefault();

                                // for(let i=0; i<mytab.length; i++)
                                // {
                                //     mytab[i].removeAttribute("class");
                                // }

    mytab.forEach(forEachTab =>{
        forEachTab.removeAttribute('class');
    });

    event.target.className = 'active';

    const thisTab = event.target.getAttribute('href');
    const thisContent = document.querySelector(thisTab);

    const oldContent = document.querySelector('.visible');
    oldContent.className = 'visuallyhidden';
    oldContent.addEventListener('transitionend', function(){
        oldContent.className = 'hidden';
        thisContent.className = 'visible visuallyhidden';

        setTimeout(function(){
            thisContent.classList.remove('visuallyhidden');
        },20);
    }, {capture:false, once:true, passive:false});
}

})();