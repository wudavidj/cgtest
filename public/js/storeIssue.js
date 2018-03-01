
function goBack(){
      window.history.back();
    }

  $(document).ready(function(e){

  	// $(".btn-q1").click(function(e) {
    //   e.preventDefault()
    //   console.log('hello')
    //   // $('btn2-q1').toggleClass('btn2-q1 btn-q1');
    //   $(this).toggleClass('btn-q1 btn2-q1');
    // });
    //
    // $(".btn-q2").click(function() {
    //   console.log('hello2')
    //   $(this).toggleClass('btn-q2 btn2-q2');
    // });

    $(".btn-question").click(function(e){
      e.preventDefault();
      var qNo = $(this).attr('question');
      // alert(qNo)
      $('.btn-question[question="'+ qNo +'"]').removeClass('btn-question-selected');
      $(this).addClass('btn-question-selected');
    })

    $('#finish').click(clickFinish);

  });

function clickFinish(e){
      e.preventDefault();
      var titleVal = $("#title").val();
      var categoryVal, durationVal, relationshipVal, stepsVal, frequencyVal;
      var descriptionVal = $("#description").val();

      if($("input[type='radio'].category").is(':checked')) {
        categoryVal = $("input[type='radio'].category:checked").val();
      }
      if($("input[type='radio'].duration").is(':checked')) {
        durationVal = $("input[type='radio'].duration:checked").val();
      }
      if($("input[type='radio'].relationship").is(':checked')) {
        relationshipVal = $("input[type='radio'].relationship:checked").val();
      }
      if($("input[type='radio'].previous-steps").is(':checked')) {
        stepsVal = $("input[type='radio'].previous-steps:checked").val();
      }
      if($("input[type='radio'].frequency").is(':checked')) {
        frequencyVal = $("input[type='radio'].frequency:checked").val();
      }

      var newIssue = {
        "boolean": false,
        "title": titleVal,
        "status": "IN PROGRESS",
        "category": categoryVal,
        "description": descriptionVal,
        "duration": durationVal,
        "relationship": relationshipVal,
        "previous-steps": stepsVal,
        "frequency": frequencyVal,
        "moods": [],
        "latestMood": null
      };
      $.post('/storeIssue', {data: JSON.stringify(newIssue)}, function(data, status){
        if(data.success){
          console.log("success");
          localStorage.setItem('newlyCreatedTitle', titleVal);
          //alert("Your issue has been created and saved to home page!");
          window.location.href="/daily-mood";
        }
      });
    }

/*
  	$('#finish').click(function(){
  	localStorage.setItem('category', $('input[name="category"]:checked').val());

  	});
  	*/
/*
	var moodVal = localStorage.getItem('moods');
	var image = "../images/" + moodVal;
	$(".mood").append("<img class='pic' src='" + image +"'/>");


	$('#finish').click(clickFinish);



	function clickFinish(e){
		e.preventDefault();
		var commentVal = $("#text-multi-line").val();
		var today = new Date();
		var newMood = {
			"emoji": moodVal,
			"month": today.getMonth()+1,
			"day": today.getDate(),
			"comment": commentVal
		};
		console.log(newMood);
		$.post('/storeMood', {data: JSON.stringify(newMood)}, function(data, status){
			if(data.success){
				console.log("success");
				window.location.href="/homePage";
			}
		});
	}
*/
