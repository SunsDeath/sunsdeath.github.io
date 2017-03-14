var lastOpen;

$(function() {
	$("#dkHeader").click(function(){
		if (lastOpen != null)
			lastOpen.slideToggle("fast");

		lastOpen = $("#dkBody")
		lastOpen.slideToggle("slow");
	});

	$("#nbHeader").click(function(){
		if (lastOpen != null)
			lastOpen.slideToggle("fast");

		lastOpen = $("#nbBody")
		lastOpen.slideToggle("slow");
	});

	$("#sorcHeader").click(function(){
		if (lastOpen != null)
			lastOpen.slideToggle("fast");

		lastOpen = $("#sorcBody")
		lastOpen.slideToggle("slow");
	});

	$("#templarHeader").click(function(){
		if (lastOpen != null)
			lastOpen.slideToggle("fast");

		lastOpen = $("#templarBody")
		lastOpen.slideToggle("slow");
	});
});