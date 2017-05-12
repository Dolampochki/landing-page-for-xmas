// JavaScript Document

$(document).ready(function() {
	var moveUp;
	moveUp = 50;
	
	/*if ( $.browser.mozilla ) {
		moveUp = 100;
	} else {
		moveUp = 50;	
	}*/
	
	var FF = !(window.mozInnerScreenX == null);
	if(FF) {
		moveUp = 80; 
	} else { 
		moveUp = 50; 
	}
	
	var giftNum = ['1','2','3','4','5'];
	
	jQuery.each( giftNum, function( i, val ) {
		  $('.gift-hover .gift-' + val).click(function() {
			$( '.premove .gift-' + val + ' .cover' ).animate({			
				top: '-='+moveUp
			 }, 400, function() {
				 	
				 });
			
			$('.gifts-content .cover').removeClass('animated').removeClass('swing-2');
			$( '.premove .gift-' + val + ' .cover' ).addClass('animated').addClass('pulse');
			$('.premove .gift-' + val + ' .number').removeClass('hide').addClass('animated').addClass('zoomInUp');		
			$('.premove .gift-' + val + ' .shine').removeClass('hide').addClass('animated').addClass('zoomIn');
			$('.gifts-content').removeClass('premove'); 
			
			timer = setTimeout(function(){				
				$('.gifts-container').fadeOut();
				$('.tag').fadeOut();
				$('.popup').removeClass('hide').addClass('animated').addClass('fadeInDown');
			}, 3000);
		});
	});
	
	timer2 = setTimeout(function(){				
		$('.gifts-container').fadeOut();
		$('.tag').fadeOut();
		$('.popup').removeClass('hide').addClass('animated').addClass('fadeInDown');
	}, 11000);
	
	
});