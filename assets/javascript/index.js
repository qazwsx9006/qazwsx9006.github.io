function sayMsg(){
	$('.say').each(function(e){
		var msg = $(this).attr("data-msg"),
			speed=$(this).attr("data-speed");
			if((isNaN(speed)) || $.trim(speed)=="" ){
				speed=900;
			}else if(speed<0){
				speed=900;
			}
		words=msg.split("");
		wright(words,$(this),speed);
	});

	function wright(words,contain,speed){
		var i = 0;
		var wright_to = setInterval(function(){ 
			word=contain.text()+words[i];
			contain.text(word);
			i++;
			if(i==words.length){
				clearInterval(wright_to);
			}
		}, speed);
	}
};


function indexSlide(){
	$('.flag').click(function(){
		var index = $(this).index(),
			$content = $('.profile').find('.content').eq(index);
			$content.find('.close').addClass('open');
			$content.addClass('show');
			$('#flags').fadeOut();
	});
	$('.close').click(function(){
		$(this).removeClass('open');
		$('.profile').find('.content.show').removeClass('show');
		$('#flags').fadeIn();
	});
}


function portfolio(){
	$('.portfolio').find('.filter').find('li').click(function(){
		$('.portfolio').find('.filter').find('li').removeClass('active');
		$(this).addClass('active');
		var target = $(this).attr('data-filter');
		if(target=='all'){
			$('.portfolio').find('.works').find('li').removeClass('hide');	
		}else{
			$('.portfolio').find('.works').find('li').addClass('hide').delay(300).queue(function(){
			    $(this).addClass("none").dequeue();
			});;
			$('.portfolio').find('.works').find('.'+target).removeClass('hide');	
		}
	});
}
