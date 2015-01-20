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

function rwd_index(){
	$('.my_info').click(function(){
		$('.my_info').toggleClass('rwd_height');
	});
}

function mail_check(){
	$('#submit').click(function(){
		var $form=$(this).parent('.form'),
			$subject=$form.find('#subject'),
			$name=$form.find('#name'),
			$email=$form.find('#email'),
			$message=$form.find('#message'),
			submit=true;
		if($.trim($subject.val())==''){
			submit=false;
			$subject.addClass('err');
		}else{
			$subject.removeClass('err');
		}

		if($.trim($name.val())==''){
			submit=false;
			$name.addClass('err');
		}else{
			$name.removeClass('err');
		}
		
		if($.trim($email.val())==''){
			submit=false;
			$email.addClass('err');
		}else{
			$email.removeClass('err');
		}
		
		if($.trim($message.val())==''){
			submit=false;
			$message.addClass('err');
		}else{
			$message.removeClass('err');
		}

		if(submit){
			var message="寄件者："+$name.val()+"。<br\/>"+
						"信箱："+$email.val()+"。<br\/>"+
						"內容："+$message.val()+"。<br\/>";
			var subject=$subject.val();

			$(this).val('傳送中');
			$(this)[0].disabled=true;
			$(this).removeClass('submit');
			var request = $.ajax({
			    url: "//formspree.io/qazwsx9006@gmail.com", 
			    method: "POST",
			    data: {message:message ,_subject:subject },
			    dataType: "json"
			});
			request.done(function( msg ) {
			  console.log( msg );
			  $('#submit').val('送出');
			  $('#submit')[0].disabled=false;
			  $('#submit').addClass('submit');

			  var $form=$('#submit').parent('.form');
				$form.find('#subject').val('');
				$form.find('#name').val('');
				$form.find('#email').val('');
				$form.find('#message').val('');
			});
			 
			request.fail(function( jqXHR, textStatus ) {
			  console.log(jqXHR,textStatus);
			  alert('不好意思，出了點問題');
			});
		}
	});
}



function initialize() {
  var myLatlng = new google.maps.LatLng(25.0172264,121.506378);
  var mapOptions = {
    zoom: 10,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello!'
  });
  
}
google.maps.event.addDomListener(window, 'load', initialize);