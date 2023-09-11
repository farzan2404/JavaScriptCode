(function(){
	"use strict";

	let counter = 1;

	function ContentRotator(){

		$(`#container p:nth-child(${counter})`).fadeIn(2000, function(){

			if($(this).is("#container p:last-child")){
				
				setTimeout( function(){
					$(`#container p:nth-child(${counter})`).fadeOut(2000, function(){
						counter = 1;
						ContentRotator();
					});
				}, 4000);
			}
			else 
			{
				setTimeout( function(){
					$(`#container p:nth-child(${counter})`).fadeOut(2000, function(){
						counter++;
						ContentRotator();
					});
				}, 4000);
			}
		});
	}

	ContentRotator();
}());
