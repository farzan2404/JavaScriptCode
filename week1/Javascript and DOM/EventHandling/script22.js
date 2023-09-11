(function(){

    "use strict";
    
    var myBtn = document.querySelector('button');
    var myPara = document.querySelector('p');
    myBtn.addEventListener('click',function(event){

        myPara.style.color = 'green';
    })
})();