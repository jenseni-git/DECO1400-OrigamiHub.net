function caret(id){
	if(document.getElementById(id).style.display == "none" || document.getElementById(id).style.display == ""){
		document.getElementById(id).style.display = "block";
	}
	else{
		document.getElementById(id).style.display = "none";
	}
	switch(id){
		case "productRangeLower":
			document.getElementById("caret-1").classList.toggle("flip");
			break;
		case "origamiBasesLower":
			document.getElementById("caret-2").classList.toggle("flip");
			break;
	}
}

window.addEventListener("scroll", function (event) {
	var oHeaderHeight = document.getElementById("open-header").offsetHeight;
	var sHeaderHeight = document.getElementById("sticky-header").offsetHeight;
	if(window.pageYOffset > oHeaderHeight-sHeaderHeight){
		document.getElementById("open-header").style.opacity = 0;
		document.getElementById("navbar").setAttribute("style","top: "+sHeaderHeight+"px;");
	}
	else{
		document.getElementById("open-header").style.opacity = 100;
		console.log(oHeaderHeight);
		let t = oHeaderHeight-window.pageYOffset;
		document.getElementById("navbar").setAttribute("style","top: "+t+"px;");
	}
});


