$(function() {
	init();
	function init() {
		var encodeType = localStorage.getItem('encodeType');
		if (encodeType) {
			$('#encode-type').val(encodeType);
		}
	}

	$('#encode-type').change(function () {
		var encodeType = $('#encode-type').val();
		localStorage.setItem('encodeType', encodeType);
	});

	$('#encode-button').click(function() {
		var beforeText = $('#encode-target-text').val();
		var afterText = encode(beforeText);
		$('#decode-target-text').val(afterText).select();
	});

	$('#decode-button').click(function() {
		var beforeText = $('#decode-target-text').val();
		var afterText = decode(beforeText);
		$('#encode-target-text').val(afterText).select();
	});

	function encode(beforeText) {
		var encodeType = localStorage.getItem('encodeType');

		if (encodeType === 'encodeURI') {
			return encodeURI(beforeText);
		}

		if (encodeType === 'encodeURIComponent') {
			return encodeURIComponent(beforeText);
		}

		if (encodeType === 'escape') {
			return escape(beforeText);
		}
	}
	function decode(beforeText) {
		var encodeType = localStorage.getItem('encodeType');
		
		if (encodeType === 'encodeURI') {
			return decodeURI(beforeText);
		}

		if (encodeType === 'encodeURIComponent') {
			return decodeURIComponent(beforeText);
		}

		if (encodeType === 'escape') {
			return unescape(beforeText);
		}
	}
});