$(document).ready(function() {
	$('#summernote').summernote({
		height:300,
		toolbar: [
		['style', ['bold', 'italic', 'underline', 'clear']],
		['fontname', ['fontname']],
		['para', ['ul', 'ol', 'paragraph']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		['fontsize', ['fontsize']],
		['color', ['color']],
	    ['height', ['height']],
	    ['table', ['table']],
	    ['insert', ['link', 'picture', 'hr']],
	    ['view', ['fullscreen', 'codeview']],
	    ['help', ['help']]
		// ['text-align',['center','left','right','justify']]

		]
	});
	// $('#summernote').summernote('insertImage', url, function ($image) {
	// 	$image.attr('data-filename', 'retriever');
	// });

});