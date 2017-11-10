$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.slide').css({
		'transform' : 'translate(0px, '+ wScroll /20 +'%)'
	});
	$('.asia').css({
		'transform' : 'translate(0px, '+ wScroll /15 +'%)'
	});
	$('.hero-text').css({
		'transform' : 'translateY(0px, -'+ wScroll /20 +'%)'
	});
	var header, yPos, logo, link;
	function yScroll() {
		header = document.getElementById('header'); 
		logo1 = document.getElementById('logo1');
		logo2 = document.getElementById('logo2');
		link1 = document.getElementById('link1');
		link2 = document.getElementById('link2');
		link3 = document.getElementById('link3');
		link4 = document.getElementById('link4');
		link5 = document.getElementById('link5');
		link6 = document.getElementById('link6');
		yPos = window.pageYOffset;
		if (yPos > 165) {
			header.style.backgroundColor = "#fff";
			header.style.padding = "20px 6.25%";
			logo1.style.display = "none";
			logo2.style.display = "block";
			link1.style.color = "#F86600";
			link2.style.color = "#F86600";
			link3.style.color = "#F86600";
			link4.style.color = "#F86600";
			link5.style.color = "#F86600";
			link6.style.color = "#F86600";
		} else {
			header.style.backgroundColor = "transparent";
			header.style.padding = "0px 6.25%";
			logo1.style.display = "block";
			logo2.style.display = "none";
			link1.style.color = "#fff";
			link2.style.color = "#fff";
			link3.style.color = "#fff";
			link4.style.color = "#fff";
			link5.style.color = "#fff";
			link6.style.color = "#fff";
		}
	}
	window.addEventListener("scroll", yScroll);
});

