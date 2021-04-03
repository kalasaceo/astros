$.fn.giffy = function() {
	return this.each(function() {
		var cover = $(this).data('cover');
		var gif = $(this).prop('src');

		if (cover == null){
			var cover = gif.replace('gif', 'png');
		}

		$(this).wrap("<div class='giffy-container'></div>");

		$(this).prop('src', cover).hover(function(){
			$(this).prop('src', gif);
		}, function(){
			$(this).prop('src', cover);
		});
	});
};
