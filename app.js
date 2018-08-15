var clickHandler = function (evt){
	console.log("clicked");
	console.log(evt);
	var src = evt.srcElement || evt.target;
	console.log("src === target");
	console.log(src === this);  // true
	console.log(this); // représente le bouton cliqué
};


var applyCSS = function (evt) {
    var cible = document.getElementById("cible");
    cible.classList.toggle("rounded");
    console.log("this ->");
    console.log(this);

};


var survolIn = function(){
	var ciblehover = document.getElementById("ciblehover");
	ciblehover.addEventListener("mouseenter", function(e){
	this.style.background = "pink";})
};

var survolOut = function(){
	var ciblehover = document.getElementById("ciblehover");
	ciblehover.addEventListener("mouseout", function(e){
	this.style.background = "purple";});

};



/* 
//another method
var survolByAlex = function(){
	var ciblehover = document.getElementById("ciblehover");
	ciblehover.addEventListener("mouseenter", function(){
		this.classList.toggle("hovered");
	});

	ciblehover.addEventListener("mouseleave", function(){
		this.classList.toggle("hovered");
	})
};*/



/*
//another method
var activeHover = function(){
	var ciblehover = document.getElementById("ciblehover");

	var survolByGui = function(evt){
		if (evt.type === "mouseenter") ciblehover.classList.add("hovered");
		else ciblehover.classList.remove("hovered");
	};

ciblehover.onmouseenter = survolByGui;
ciblehover.onmouseleave = survolByGui;
};*/


var start = function() {
    var btn = document.getElementById("mon_btn");

	survolIn();
	survolOut();
	//survolByAlex();
	//activeHover();

	btn.addEventListener("click", function(e) { // evt = e
		clickHandler(e);
		applyCSS(e);});
};

window.addEventListener("DOMContentLoaded", start); 
// si start() = (avec parenthèse) la fonction est exécutée de suite


// tout EventListener est lié à une fonction : evt en paramètre ou e
// this peut représenter soit scope global soit la source



