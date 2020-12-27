// Filtering Item Cards
$(document).ready(function(){
	$(".button").click(function(){
		var currentClass = $(this).attr("data-key");

		$(".button").removeClass("active");
		$(this).addClass("active");

		$(".card").hide();

		if(currentClass == "men"){
			$("." + currentClass).show();
		}
		else if(currentClass == "woman"){
			$("." + currentClass).show();
		}
		else if(currentClass == "kids"){
			$("." + currentClass).show();
		}
        //Show all
		else{
			$(".card").show();
		}
	});
});

// Form Validation
function validate() {
      
	if(document.myForm.fname.value == "") {
	   alert("Please provide your first name!" );
	   document.myForm.fname.focus() ;
	   return false;
	}
	else if(document.myForm.lname.value == "") {
		alert("Please provide your last name!" );
		document.myForm.lname.focus() ;
		return false;
	 }
	 else if(document.myForm._replyto.value == "") {
		alert("Please provide your email!" );
		document.myForm._replyto.focus() ;
		return false;
	 }
	 else if(document.myForm.address.value == "") {
		alert("Please provide your address!" );
		document.myForm.fname.focus() ;
		return false;
	 }
	 else if(document.myForm.phone.value == "") {
		alert("Please provide your phone number!" );
		document.myForm.phone.focus() ;
		return false;
	 }
	 else if(document.myForm.scroll.value == -1) {
		alert("Please provide your city!" );
		document.myForm.scroll.focus() ;
		return false;
	 }
	 var postal = new RegExp(/^\s*[a-ceghj-npr-tvxy]\d[a-ceghj-npr-tv-z](\s)?\d[a-ceghj-npr-tv-z]\d\s*$/i);
	 if(postal.test(document.myForm.postal.value) == false){
		alert("Invalid postal code!" );
		document.myForm.scroll.focus() ;
		return false;
	 }

	return( true );
}