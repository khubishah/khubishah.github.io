window.onscroll = function() { myFunction()};
			
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
			
function myFunction() {
	if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

document.getElementById('about_nav').addEventListener('click', function() {
    document.getElementById('about_nav').style.color= "#FAD4F3";
    document.getElementById('skills_nav').style.color= "white";
    document.getElementById('experience_nav').style.color= "white";
    document.getElementById('projects_nav').style.color= "white";
});

document.getElementById("skills_nav").addEventListener('click', function() {
    document.getElementById("about_nav").style.color= "white";
    document.getElementById("skills_nav").style.color= "#FAD4F3";
    document.getElementById("experience_nav").style.color= "white";
    document.getElementById("projects_nav").style.color= "white";

});

document.getElementById("projects_nav").addEventListener('click', function() {
    document.getElementById("about_nav").style.color= "white";
    document.getElementById("skills_nav").style.color= "white";
    document.getElementById("experience_nav").style.color= "white";
    document.getElementById("projects_nav").style.color= "#FAD4F3";
});

document.getElementById("experience_nav").addEventListener('click', function() {
    document.getElementById("about_nav").style.color = "white";
    document.getElementById("skills_nav").style.color= "white";
    document.getElementById("experience_nav").style.color= "#FAD4F3";
    document.getElementById("projects_nav").style.color= "white";
});


