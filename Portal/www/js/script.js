$("#searchForm").submit(function() {
	var start = $("#start").val();
	var end = $("#end").val();
	var foodCheck = $("#food:checkbox:checked").val();
	var rainCheck = $("#rain:checkbox:checked").val();
	var toiletCheck = $("#toilet:checkbox:checked").val();
	if (start == "Buchanan" || end == "Woodward") {
		if(foodCheck) {
			location.href="#routeMap1";
		}
		else if(!foodCheck && rainCheck) {
			location.href="#routeMap2";
		}
		else if(!foodCheck && !rainCheck && toiletCheck) {
			location.href="#routeMap2";
		}
		else {
			location.href="#routeMap3";
		}
	}
	else if (start == "CIRS" || start == "Cirs" || end == "Nest") {
		if(foodCheck) {
			location.href="#routeMap4";
		}
		else if(!foodCheck && rainCheck) {
			location.href="#routeMap5";
		}
		else if(!foodCheck && !rainCheck && toiletCheck) {
			location.href="#routeMap5";
		}
		else {
			location.href="#routeMap6";
		}
	}
	if (start == "Swing" || end == "Forestry") {
		if(foodCheck) {
			location.href="#routeMap7";
		}
		else if(!foodCheck && rainCheck) {
			location.href="#routeMap8";
		}
		else if(!foodCheck && !rainCheck && toiletCheck) {
			location.href="#routeMap8";
		}
		else {
			location.href="#routeMap9";
		}
	}
	else {
		alert("no results");
		location.href="#index";
	}
	return false;
});
