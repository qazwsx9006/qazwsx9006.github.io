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