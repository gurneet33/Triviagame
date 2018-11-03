
var correct = 0;
var animating;
var userAnswer1 = $('input[name=question1]:checked').attr('value'); 
var userAnswer2 = $('input[name=question2]:checked').attr('value'); 
var userAnswer3 = $('input[name=question3]:checked').attr('value'); 

function initialize(){
	
	userAnswer =  $("input:checked").val();
	console.log($("input:checked").val() + " is checked");
}

$(".btn").on("click", function(event){
	initialize();
	if($("input:checked").hasClass("tag")){
		console.log("right");
		correct++;
		console.log(correct);
		$("#after_submit").html('<b>' + "Correct answer" + '</b>');
		}
	
		else
		{
			$('#after_submit').html(userAnswer + " Is Wrong answer " +"<br/>Correct answer is:<br> <b>Ottawa</b>");
		}
		event.stopImmediatePropagation;
		initialize();
});

$(".next").on("click", function(){
    if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
	// 	easing: 'easeInOutBack'
	// });
});
});
// $('#button').click(function() {
     
//     if(('input[type=radio]:checked').hasClass("tag")){
// 		console.log("getting there")
//         correct++;
//     $('div').html('<b>' + "Correct answer" + '</b>');
//     }

//     else
//     {
//         $('div').html(userAnswer1 + " Is Wrong answer " +"<br/>Correct answer is:<br> <b>Ottawa</b>");
//     }
//     init();
// })

