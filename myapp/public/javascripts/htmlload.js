/**Loads different html pages into the menu page*/
	$("#book").on("click", function(){
		$("#extraPage").load("booking");
	});

	$("#lunch").on("click", function(){
		$("#extraPage").load("lunch");
	});

	$("#alacarte").on("click", function(){
		$("#extraPage").load("alacarte");
	});

	$("#contact").on("click",function(){
			$("#extraPage").load("information");
		});

	$("#home").on("click",function(){
			$("#extraPage").load("comments");
		});
