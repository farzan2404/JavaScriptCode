(function(){

    'use strict';

    $('ul li ul').hide();
    $('.menulink').click(function(){
        const myMenu = $(this).next('ul');
                                            // 2nd method of doing.
        $('ul li ul').not(myMenu).hide();
        myMenu.toggle(); 
        
    });
})();
 // if(myMenu.is(':visible'))
        // {
        // 	myMenu.hide();
        // }
        // else 
        // {
        // 	myMenu.show();          1st method of doing.
        // }