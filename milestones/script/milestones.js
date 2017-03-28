var lastOpen

function clickHandler(id) {
	var element = $(id)

	if (element.is(":hidden")) {
		if (lastOpen != null) {
			lastOpen.slideToggle("fast")
		}

		element.slideToggle("slow")
		lastOpen = element
	}
}

$(function() {
	$("#vMAHead").click(function(){
		clickHandler("#vMABody")
	})
})