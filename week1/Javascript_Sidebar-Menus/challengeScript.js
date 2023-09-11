(function(){

    'use strict';
     const mysubmenu = document.querySelectorAll('ul li ul');

    function hideSubMenu(){
    for(let i=0; i<mysubmenu.length; i++)
    {
        
        mysubmenu[i].className = 'hide-menu';
    }
}

    hideSubMenu();

    const myMain = document.querySelectorAll('.menulink');
    for(let i=0; i<myMain.length; i++)
    {
        myMain[i].addEventListener('click', function(event){
            event.preventDefault();

            const mythis = this.parentNode.querySelector('ul');

            if(mythis.classList.contains('hide-menu'))
            {
                hideSubMenu();
                
                mythis.className = 'show-menu';
            }
            else 
            {
                mythis.className = 'hide-menu';
            }
        });
    }
})();