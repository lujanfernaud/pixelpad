$(document).ready(function() {

	// Set grid and normal function

	$("#container").css({"width": gridSize, "height": gridSize});
	squaresPerSide = 32;
	pixels = squaresPerSide * squaresPerSide;
	pixelsWidth = gridSize / squaresPerSide - (pixelsMargin * 2) + "px";
	createGrid();
	$(".pixel-size").css({"width": pixelsWidth, "height": pixelsWidth});
	turnOnNormal();

	// Clear button

	$("#clear-button").on("click", function() {
		$("#container").html("");
		createGrid();
		$(".pixel-size").css({"width": pixelsWidth, "height": pixelsWidth});
		activeFunction();
	});

	// Coloring buttons

	$("#normal-button").on("click", function() {
		$("#container").html("");
		createGrid();
		$(".pixel-size").css({"width": pixelsWidth, "height": pixelsWidth});
		turnOnNormal();
	});
	$("#random-button").on("click", function() {
		$("#container").html("");
		createGrid();
		$(".pixel-size").css({"width": pixelsWidth, "height": pixelsWidth});
		turnOnRandom();
	});
	$("#shade-button").on("click", function() {
		$("#container").html("");
		createGrid();
		$(".pixel-size").css({"width": pixelsWidth, "height": pixelsWidth});
		turnOnShade();
	});

	// Grid size buttons

	$("#grid-16").on("click", function() {
		squaresPerSide = 16;
		pixels = squaresPerSide * squaresPerSide;
	 	pixelsWidth = gridSize / squaresPerSide - (pixelsMargin * 2) + "px";
		$("#container").html("");
		createGrid();
		$(".pixel-size").css({"width": pixelsWidth, "height": pixelsWidth});
		activeFunction();
	});
	$("#grid-32").on("click", function() {
		squaresPerSide = 32;
		pixels = squaresPerSide * squaresPerSide;
	 	pixelsWidth = gridSize / squaresPerSide - (pixelsMargin * 2) + "px";
		$("#container").html("");
		createGrid();
		$(".pixel-size").css({"width": pixelsWidth, "height": pixelsWidth});
		activeFunction();
	});
	$("#grid-48").on("click", function() {
		squaresPerSide = 48;
		pixels = squaresPerSide * squaresPerSide;
	 	pixelsWidth = gridSize / squaresPerSide - (pixelsMargin * 2) + "px";
		$("#container").html("");
		createGrid();
		$(".pixel-size").css({"width": pixelsWidth, "height": pixelsWidth});
		activeFunction();
	});
	$("#grid-64").on("click", function() {
		squaresPerSide = 64;
		pixels = squaresPerSide * squaresPerSide;
	 	pixelsWidth = gridSize / squaresPerSide - (pixelsMargin * 2) + "px";
		$("#container").html("");
		createGrid();
		$(".pixel-size").css({"width": pixelsWidth, "height": pixelsWidth});
		activeFunction();
	});
	$("#grid-input").on("click", function() {
		$(this).val("");
		$(this).css("color", "");
	});
	$("#grid-set").on("click", function() {
		var gridInputVal = $("#grid-input").val()
		if (gridInputVal < 4 || gridInputVal > 64) {
			inputAlert();
		} else {
			squaresPerSide = $("#grid-input").val();
			pixels = squaresPerSide * squaresPerSide;
		 	pixelsWidth = gridSize / squaresPerSide - (pixelsMargin * 2) + "px";
			$("#container").html("");
			createGrid();	
			$(".pixel-size").css({"width": pixelsWidth, "height": pixelsWidth});
			activeFunction();
		};
	});
});

var gridSize = 651;
var pixelsMargin = 0.505;
var squaresPerSide = 32;
var pixels = squaresPerSide * squaresPerSide;
var pixelsWidth = gridSize / squaresPerSide - (pixelsMargin * 2) + "px";
var activeFunction;

function createGrid() {
	for (i = 0; i < pixels; i++) {
		$("#container").append("<div class=\"pixel pixel-size\"></div>");
	};
};

function turnOnNormal() { 
	$(".pixel").on("mouseenter", function() {
		$(this).animate({
			backgroundColor: "#5CFF59"
		}, 5);
	});
	$(".pixel").on("mouseleave", function() {
		$(this).animate({
			backgroundColor: "#85CF84"
		}, 440);
		$(this).animate({
			backgroundColor: "#5CFF59"
		}, 440);
	});
	activeFunction = turnOnNormal;
};

function turnOnRandom() { 
	$(".pixel").on("mouseenter", function() {
		$(this).animate({
			backgroundColor: getRandomColor()
		}, 5);
	});
	$(".pixel").on("mouseleave", function() {
		$(this).animate({
			backgroundColor: "#85CF84"
		}, 440);
		$(this).animate({
			backgroundColor: getRandomColor()
		}, 440);
	});
	activeFunction = turnOnRandom;
};

// Random Color Generator by Anatoliy
// https://stackoverflow.com/questions/1484506/random-color-generator-in-javascript

function getRandomColor() {
	var characters = "0123456789ABCDEF".split("");
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += characters[Math.floor(Math.random() * 16)];
	}
	return color;
};

function turnOnShade() { 
	$(".pixel").on("mouseenter", function() {
		var opacityValue = $(this).css("opacity");
		opacityValue -= 0.1;
		$(this).animate({
			opacity: opacityValue
		}, 5);
	});
	activeFunction = turnOnShade;
};

function inputAlert() {
	$("#grid-input").animate({
	color: "#404040"
	}, 200);
	$("#grid-input").animate({
	color: "red"
	}, 200);
	$("#grid-input").animate({
	color: "#404040"
	}, 200);
	$("#grid-input").animate({
	color: "red"
	}, 200);
};