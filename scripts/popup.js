$(function() {
	$('#encode-button').click(function() {
		var beforeText = $('#encode-target-text').val();
		var afterText = encodeURIComponent(beforeText);
		$('#decode-target-text').val(afterText);
	});
	$('#decode-button').click(function() {
		var beforeText = $('#decode-target-text').val();
		var afterText = decodeURIComponent(beforeText);
		$('#encode-target-text').val(afterText);
	});
});