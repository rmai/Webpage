$.noConflict();

(function($) {
document.getElementById('iitad').style.display = 'hidden';
document.getElementById('matherad').style.display = 'hidden';
	$('#iit').on('click',function() {
		document.getElementById('iitad').style.display = 'inline';
	});
	$('#mather').on('click',function() {
		document.getElementById('matherad').style.display = 'inline';
	});
})(jQuery);
