$(function() {

// input range
  $('#input-range').change(function(){
  $('.range-show').html(this.value);
  });
 
// form validation 
var form = $('.form-test');
fastFeedback(form);

$('.form-test').submit(function(event) {
	/* Act on the event */
	var name = $('#name').val();
	var password = $('#password').val();
	var textarea = $('#textarea').val();
	var checkbox = $('#cb').is(':checked');

	validName(name, event);
	validPassword(password, event);
	validTextarea(textarea, event);
	validCheck(checkbox, event);
});



function fastFeedback(element) {
  var nameInput = element.find('#name');
  var passwordInput = element.find('#password');
  var textareaInput = element.find('#textarea');
  var checkInput = element.find('#cb');


  nameInput.blur(function(event) {
  	var name = $(this).val();
  	validName(name, event);

  	if(!isValidName(name)){
  		$(this).css({'box-shadow':'0 0 4px red','border':'1px solid red'});
  	} else {
  		$(this).css({'box-shadow':'0 0 4px green','border':'1px solid green'});
  	}
  });

  passwordInput.blur(function(event) {
  	var password = $(this).val();
  	validPassword(password, event);

  	if(!isValidPassword(password)){
  		$(this).css({'box-shadow':'0 0 4px red','border':'1px solid red'});
  	} else {
  		$(this).css({'box-shadow':'0 0 4px green','border':'1px solid green'});
  	}
  });

  textareaInput.blur(function(event) {
  	var textarea = $(this).val();
  	validTextarea(textarea, event);

  	if(!isValidTextarea(textarea)){
  		$(this).css({'box-shadow':'0 0 4px red','border':'1px solid red'});
  	} else {
  		$(this).css({'box-shadow':'0 0 4px green','border':'1px solid green'});
  	}
  });

  checkInput.change(function(event) {
  	var checkbox = $(this).is(':checked');
  	validCheck(checkbox, event);
  /*	
  	if(!isValidTextarea(textarea)){
  		$(this).css({'box-shadow':'0 0 4px red','border':'1px solid red'});
  	} else {
  		$(this).css({'box-shadow':'0 0 4px green','border':'1px solid green'});
  	}*/
  });


}


// validation of input name
	function validName(name, event) {
		if(!isValidName(name)) {
			$('#name-feedback').text('please sent at least 3 words');
			event.preventDefault();
		} else {
			$('#name-feedback').text('');
		}
	}

	function isValidName(name) {
		return name.length >= 3;
	}


// validation of input password
	function validPassword(password, event) {
		if(!isValidPassword(password)) {
			$('#pass-feedback').text('please enter at least 6 words');
			event.preventDefault();
		} else {
			$('#pass-feedback').text('');
		}
	}

	function isValidPassword(password) {
		return password.length >= 6;
	}

// validation of textarea

	function validTextarea(textarea, event) {
		if(!isValidTextarea(textarea)) {
			$('#text-feedback').text('please leave a messege');
			event.preventDefault();
		} else {
			$('#text-feedback').text('')
		}
	}

	function isValidTextarea(textarea) {
		return textarea.trim() != '';
	}

// validation of checkbox

	function validCheck(checkbox, event) {
		if(!checkbox) {
			$('#cb-feedback').text('please agree about this');
			event.preventDefault();
		} else {
			$('#cb-feedback').text('');
		}
	}
});