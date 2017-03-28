var lastOpen

//click event handler for class header divs
//slides the associated class body div into view
function clickHandler(id) {
	var element = $(id)

	//don't want to do anything if this body is already showing
	if (element.is(":hidden")) {
		if (lastOpen != null) {
			lastOpen.slideToggle("fast")
		}

		element.slideToggle("slow")
		lastOpen = element
	}
}

//document ready event handler
$(function() {
	//set click handlers for class headers
	$("#dkHeader").click(function(){
		clickHandler("#dkBody")
	})
	$("#nbHeader").click(function(){
		clickHandler("#nbBody")
	})
	$("#sorcHeader").click(function(){
		clickHandler("#sorcBody")
	})
	$("#templarHeader").click(function(){
		clickHandler("#templarBody")
	})
})